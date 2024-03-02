import "./app.css";
import App from "./App.svelte";

export enum BertState {
    IDLE = "IDLE",
    FOCUS = "FOCUS",
    STRETCH = "STRETCH",
    CALM = "CALM",
}

const app = new App({
    target: document.getElementById("app")!,
});

export default app;
