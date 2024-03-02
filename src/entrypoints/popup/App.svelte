<script lang="ts">
    import Focus from "../bertstates/focus.svelte";
    import Idle from "../bertstates/idle.svelte";
    import Buttons from "./Buttons.svelte";
    import { BertState, getBertStateText } from "./main";
    import Resourcespage from "./resourcespage.svelte";

    $: bertState = BertState.IDLE;

    $: berttext = getBertStateText(bertState);

    $: openresources = false;

    $: resources_bg_color = openresources ? "#323232" : "#242424";

    $: if (bertState) {
        storage.setItem("local:bertState", bertState).then(() => {
            console.log("Saved state to storage");
        });
    }

    storage.getItem("local:bertState").then((value) => {
        if (value) {
            bertState = value as BertState;
        }
    });

    export function setbacktoidle() {
        bertState = BertState.IDLE;
    }
</script>

<main>
    {#if !openresources}
        <h1>{berttext}</h1>
        <div class="container">
            <div class="berts_jail">
                {#if bertState == BertState.IDLE}
                    <Idle />
                {:else if bertState == BertState.FOCUS}
                    <Focus />
                {/if}
            </div>
            <Buttons bind:state={bertState} {setbacktoidle} />
        </div>
    {:else}
        <Resourcespage />
    {/if}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="resources"
        on:click={() => {
            openresources = !openresources;
        }}
    >
        <h2>Resources</h2>
    </div>
</main>

<style>
    .berts_jail {
        height: 400px;
    }
    .container {
        display: flex;
        width: 500px;
        /* height: 350px; */
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .resources {
        width: 100vw;
        border-top: 1px solid white;
        margin-top: 2rem;
        transition: all 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--resources_bg_color);
    }

    .resources:hover {
        color: #74a4c8;
        cursor: pointer;
    }
</style>
