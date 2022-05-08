// Basic
import React, { Component } from "react";

// Components
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Types
type Addon = {
    image: string,
    url: string,
    title: string,
    subs: number,
    lifeSubs: number,
    favs: number,
    lifeFavs: number,
    viewers: number,
    likes: number,
    dislikes: number
}

type DataProps = {
    username: string
}

type DataState = {
    loading: boolean,
    error: boolean,
    errorMessage: string,
    username: string,
    profileImage: string,
    subs: number,
    lifeSubs: number,
    favs: number,
    lifeFavs: number,
    viewers: number,
    addons: Addon[]
}

// Data Component
class Data extends Component<DataProps, DataState> {
    private end: React.RefObject<HTMLInputElement>;

    constructor(props: DataProps) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            errorMessage: "",
            username: "",
            profileImage: "",
            subs: 0,
            lifeSubs: 0,
            favs: 0,
            lifeFavs: 0,
            viewers: 0,
            addons: []
        }
        this.end = React.createRef();
    }

    private async fetchData(): Promise<void> {
        this.setState({
            loading: false,
            error: false
        });

        const response = await fetch(`https://javiertcs-api.herokuapp.com/steam-workshop-stats?url=${this.props.username}`);
        const result = await response.json();

        if (response.status === 200) {
            this.setState({
                username: result.username,
                profileImage: result.profileImage,
                subs: result.subs,
                lifeSubs: result.lifeSubs,
                favs: result.favs,
                lifeFavs: result.lifeFavs,
                viewers: result.viewers,
                addons: result.addons,
                loading: true
            });
        } else {
            this.setState({
                error: true,
                errorMessage: result.message
            });
        }
    }

    private scrollToBottom(): void {
        this.end.current!.scrollIntoView({ behavior: 'smooth' })
    }

    public async componentDidMount(): Promise<void> {
        await this.fetchData();
        this.scrollToBottom();
    }

    public componentDidUpdate(prevProps: any): void {
        if (this.props.username !== prevProps.username) {
            this.fetchData();
        }
    }

    public render() {
        return (
            <div className="pt-5">
                <div ref={this.end} />
                {this.state.loading ? (
                    <div>
                        <h2 className="text-center">Statistics of {this.state.username}</h2>
                        <img src={this.state.profileImage} className="img-fluid mx-auto d-block py-3" alt="" />
                        <p className="text-center">
                            <span className="badge bg-success mx-2 my-2"><i className="fa-solid fa-eye"></i> Total Views: {this.state.viewers}</span>
                            <span className="badge bg-warning mx-2 my-2"><i className="fa-solid fa-user"></i> Total Subs: {this.state.subs}</span>
                            <span className="badge bg-warning mx-2 my-2"><i className="fa-solid fa-user"></i> Total Life Subs: {this.state.lifeSubs}</span>
                            <span className="badge bg-danger mx-2 my-2"><i className="fa-solid fa-heart"></i> Total Favorites: {this.state.favs}</span>
                            <span className="badge bg-danger mx-2 my-2"><i className="fa-solid fa-heart"></i> Total Life Favorites: {this.state.lifeFavs}</span>
                        </p>
                        <div className="container pb-2">
                            <ResponsiveContainer width="99%" aspect={2}>
                                <AreaChart width={500} height={300} data={this.state.addons.slice().reverse()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid stroke="" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Area type="monotone" dataKey="viewers" stackId="1" stroke="#198754" fill="#198754" />
                                    <Area type="monotone" dataKey="subs" stackId="1" stroke="#FFC107" fill="#FFC107" />
                                    <Area type="monotone" dataKey="favs" stackId="1" stroke="#DC3545" fill="#DC3545" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <h2 className="text-center pt-4">Addons of {this.state.username}</h2>
                        {this.state.addons.length ? (
                            <div className="container pt-5">
                                <div className="row">
                                    {this.state.addons.map((addon: Addon, i: number) => {
                                        if (this.state.addons.length > 0) {
                                            return (
                                                <div key={'addon_' + i} className="col-12 col-md-4 col-sm-6 pb-5" >
                                                    <div className="card bg-primary rounded">
                                                        <img className="card-img-top p-3" src={addon.image} alt="Logo" />
                                                        <div className="card-body">
                                                            <h5 className="card-title text-center">{addon.title}</h5>
                                                            <p className="text-center">
                                                                <span className="badge bg-success mx-2 my-2"><i className="fa-solid fa-eye"></i> Views: {addon.viewers}</span>
                                                                <span className="badge bg-warning mx-2 my-2"><i className="fa-solid fa-user"></i> Subs: {addon.subs}</span>
                                                                <span className="badge bg-warning mx-2 my-2"><i className="fa-solid fa-user"></i> Life Subs: {addon.lifeSubs}</span>
                                                                <span className="badge bg-danger mx-2 my-2"><i className="fa-solid fa-heart"></i> Favorites: {addon.favs}</span>
                                                                <span className="badge bg-danger mx-2 my-2"><i className="fa-solid fa-heart"></i> Life Favorites: {addon.lifeFavs}</span>
                                                            </p>
                                                            <p className="text-center">
                                                                <span className="badge bg-success mx-2 my-2"><i className="fa-solid fa-thumbs-up"></i> Likes: {addon.likes}</span>
                                                                <span className="badge bg-danger mx-2 my-2"><i className="fa-solid fa-thumbs-down"></i> Dislikes: {addon.dislikes}</span>
                                                            </p>
                                                            <div className="d-flex justify-content-center">
                                                                <a href={addon.url} target="_blank" rel="noreferrer" className="btn btn-secondary text-white"><i className="fa-solid fa-magnifying-glass"></i> Search Addon</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            </div>
                        ) : (
                            <h3 className="text-center pt-4">There are no addons avaible!</h3>
                        )
                        }
                    </div>
                ) : (
                    this.state.error ? (
                        <div className="d-flex justify-content-center">
                            <div className="alert alert-danger text-center" style={{ width: "20%" }} role="alert">
                                {this.state.errorMessage}
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        );
    }
}

export default Data;