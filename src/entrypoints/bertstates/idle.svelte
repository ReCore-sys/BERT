<script lang="ts">
    // @ts-ignore
    import idle_bert from "../../assets/Bert_Idle.png";
    import anime from "animejs";

    function animatetheboy() {
        anime({
            targets: "#bert_idle_img",
            scaleY: 0.8,
            scaleX: 1.1,
            duration: 2000,
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine",
        });
    }
</script>

<body>
    <img
        src={idle_bert}
        alt="bert"
        class="logo"
        id="bert_idle_img"
        on:load={animatetheboy}
    />
</body>

<style>
    .logo:hover {
        filter: drop-shadow(0 0 0.75rem aliceblue);
    }
</style>
