<script lang="ts">
    import Idle from "../bertstates/idle.svelte";
    import Buttons from "./Buttons.svelte";
    import { BertState } from "./main";

    $: bertState = BertState.IDLE;
</script>

<main>
    <h1>Bert is currenty doing {bertState}</h1>
    <div class="container">
        <div class="berts_jail">
            {#if bertState == BertState.IDLE}
                <Idle />
            {/if}
        </div>
        <Buttons bind:state={bertState} />
    </div>
</main>

<style>
    .container {
        display: flex;
        width: 500px;
        height: 400px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
