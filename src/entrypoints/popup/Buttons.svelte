<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<script lang="ts">
    import { storage } from "wxt/storage";
    import { BertState } from "./main";
    export let setbacktoidle: () => void;
    export let state: BertState;
</script>

<body>
    <div class="button_grid">
        <!--  				  -->
        <!-- Stretch Handling -->
        <!--  				  -->

        {#if state == BertState.STRETCH}
            <div class="button1 button back2idle" on:click={setbacktoidle}>
                <h2>Done</h2>
            </div>
        {:else}
            <div
                class="button1 button"
                on:click={() => {
                    state = BertState.STRETCH;
                }}
            >
                <h2>Stretch</h2>
            </div>
        {/if}

        <!--  				-->
        <!-- Focus Handling -->
        <!--  				-->

        {#if state == BertState.FOCUS}
            <div
                class="button1 button back2idle"
                on:click={() => {
                    setbacktoidle();
                    storage.getItem("local:focusstart").then((value) => {
                        if (value) {
                            storage.removeItem("local:focusstart");
                        }
                    });
                }}
            >
                <h2>Done For Now</h2>
            </div>
        {:else}
            <div
                class="button2 button"
                on:click={() => {
                    state = BertState.FOCUS;
                }}
            >
                <h2>Focus</h2>
            </div>
        {/if}

        <!--  				-->
        <!-- Calm Handling  -->
        <!--  				-->

        {#if state == BertState.CALM}
            <div class="button3 button back2idle" on:click={setbacktoidle}>
                <h2>Feeling Good</h2>
            </div>
        {:else}
            <div
                class="button3 button"
                on:click={() => {
                    state = BertState.CALM;
                }}
            >
                <h2>Breathe</h2>
            </div>
        {/if}
    </div>
</body>

<style>
    .back2idle {
        background-color: #cbebf5 !important;
        color: #224048 !important;
        filter: drop-shadow(0 0 0.25rem #74a4c8);
    }
    .button_grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
        height: 100%;
        margin-right: 6em;
    }
    .button {
        transition: all 0.5s;
        font-size: larger;
        height: 10em;
        width: 10em;
        border: 1px solid gray;
        border-radius: 20px;
        margin: 12px;
        background-color: #303434;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button:hover {
        background-color: #3d3d3d;
        cursor: pointer;
    }
</style>
