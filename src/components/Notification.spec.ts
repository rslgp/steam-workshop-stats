import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import Notification from "./Notification.svelte";

describe("Notification Component", () => {
	it("Renders", () => {
		render(Notification, { message: "Error Message" });
	});
});