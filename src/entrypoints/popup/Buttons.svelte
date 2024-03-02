<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<script lang="ts">
    function cock() {
        alert("cock");
    }

    function nballs() {
        alert("and balls");
    }
</script>

<body>
    <div class="button_grid">
        <div class="button1 button" on:click={cock}>
            <h1>placeholder1</h1>
        </div>
        <div class="button2 button" on:click={nballs}>
            <h1>placeholder2</h1>
        </div>
    </div>
</body>

<style>
    .button_grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    .button {
        font-size: larger;
        height: 12em;
        width: 24em;
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
