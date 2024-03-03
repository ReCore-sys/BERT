import "./app.css";
import App from "./App.svelte";

export enum BertState {
    IDLE = "IDLE",
    FOCUS = "FOCUS",
    STRETCH = "STRETCH",
    CALM = "CALM",
}

export function getBertStateText(state: BertState): string {
    switch (state) {
        case BertState.IDLE:
            return "What would you like to do?";
        case BertState.FOCUS:
            return "Bert is focusing";
        case BertState.STRETCH:
            return "Bert is stretching";
        case BertState.CALM:
            return "Bert is breathing";
    }
}

const app = new App({
    target: document.getElementById("app")!,
});

export default app;
