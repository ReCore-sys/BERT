<script lang="ts">
    import Focus from "../bertstates/focus.svelte";
    import Idle from "../bertstates/idle.svelte";
    import Buttons from "./Buttons.svelte";
    import { BertState } from "./main";

    $: bertState = BertState.IDLE;

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
    <h2>Bert is currenty doing {bertState}</h2>
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
</main>

<style>
    .berts_jail {
        height: 400px;
    }
    .container {
        display: flex;
        width: 500px;
        height: 400px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
