<script lang="ts">
    import BertIdle from "../../assets/Bert_Idle.png";
    import Buttons from "./Buttons.svelte";
</script>

<main>
    <div class="container">
        <img src={BertIdle} alt="BERT" class="logo" />
        <Buttons />
    </div>
</main>

<style>
    .container {
        display: flex;
        width: 600px;
        height: 400px;
        flex-direction: row;
        align-items: center;
    }

    .logo {
        width: 300px;
        will-change: filter;
        transition: filter 300ms;
        transition: all 0.5s;
    }

    .logo:hover {
        filter: drop-shadow(0 0 0.75rem aliceblue);
    }
</style>
