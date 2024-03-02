<script lang="ts">
    $: items = ["aaa"];
    for (let i = 0; i < 100; i++) {
        items.push(i.toString() + "\n");
    }
</script>

<body>
    <h1>Resources</h1>
    {#each items as item}
        <p>{item}</p>
        <br />
    {/each}
</body>

<style>
    body {
        height: 400px;
    }
</style>
