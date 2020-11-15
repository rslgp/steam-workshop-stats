// Scrap Module Dependencies
const scrap = {};
const request = require('request-promise');

// Get Info Function
scrap.getInfo = (req, res) => { //FIXME #21 Change to Function
    let idList = []
    const { steamId, gameId, quantity } = req.body;

    // Get All User Published Addons
    request.get("https://api.steampowered.com/IPublishedFileService/GetUserFiles/v1/?key=0E59F59542C9B1C2E33DFB89210B588F&steamid=" + steamId + "&appid=" + gameId + "&page=1&numperpage=" + quantity + "&sortmethod=date", (error, resp, body) => {
        const data = JSON.parse(body);

        // Get the IDs of all of his addons
        for (let i = 0; i < quantity; i++) {
            idList.push(
                data["response"].publishedfiledetails[i].publishedfileid
            )
        }

    })

    let userName;
    // Get All User Published Addons
    request.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=0E59F59542C9B1C2E33DFB89210B588F&steamids=76561198117127629", (error, resp, body) => {
        const data = JSON.parse(body);

        userName = data["response"].players[0].personaname

    })
    setTimeout(() => {
        // Data for API
        let requestData = {
            "format": 'json',
            "itemcount": idList.length
        }

        // Add the IDs to the requestData
        for (let i = 0; i < idList.length; i++) {
            requestData['publishedfileids[' + i + ']'] = idList[i];
        }

        // Get All Addon Stats
        request.post("https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/", { form: requestData }, (error, resp, body) => {
            const data = JSON.parse(body);

            let results = [];

            // Add the stats to results
            for (let i = 0; i < idList.length; i++) {
                results.push({
                    image: data["response"].publishedfiledetails[i].preview_url,
                    title: data["response"].publishedfiledetails[i].title,
                    subs: data["response"].publishedfiledetails[i].subscriptions,
                    favs: data["response"].publishedfiledetails[i].favorited,
                    lifeSubs: data["response"].publishedfiledetails[i].lifetime_subscriptions,
                    lifeFavs: data["response"].publishedfiledetails[i].lifetime_favorited,
                    views: data["response"].publishedfiledetails[i].views
                })
            }

            let subsArray = []
            let favsArray = []
            let lifeSubsArray = []
            let lifeFavsArray = []
            let viewersArray = []

            // Add the specific stats to each array for sum it
            for (let i = 0; i < idList.length; i++) {
                subsArray.push(
                    results[i].subs
                )
                favsArray.push(
                    results[i].favs
                )
                lifeSubsArray.push(
                    results[i].lifeSubs
                )
                lifeFavsArray.push(
                    results[i].lifeFavs
                )
                viewersArray.push(
                    results[i].views
                )
            }

            // Sum all arrays
            let totalSubs = subsArray.map(Number).reduce((a, b) => a + b, 0);
            let totalFavs = favsArray.map(Number).reduce((a, b) => a + b, 0);
            let totalLifeSubs = lifeSubsArray.map(Number).reduce((a, b) => a + b, 0);
            let totalLifeFavs = lifeFavsArray.map(Number).reduce((a, b) => a + b, 0);
            let totalViewers = viewersArray.map(Number).reduce((a, b) => a + b, 0);

            res.render("workshop", {
                user: userName,
                array: results,
                subs: totalSubs,
                favs: totalFavs,
                lifeSubs: totalLifeSubs,
                lifeFavs: totalLifeFavs,
                viewers: totalViewers
            });
        })
    }, 2500);
}

// Module Export
module.exports = scrap;