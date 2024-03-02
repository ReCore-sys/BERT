<script lang="ts">
    import idle_bert from "../../assets/Bert_Idle.png";
</script>

<body>
    <img src={idle_bert} alt="bert" class="logo" />
</body>

<style>
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
