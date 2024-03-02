<script lang="ts">
    import anime from "animejs";

    // @ts-ignore
    import focusgif from "../../assets/focus.gif";

    function animatetheboy() {
        anime({
            targets: "#bert_study_img",
            scaleY: 0.9,
            scaleX: 1.05,
            duration: 2000,
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine",
        });
    }

    let timer_start_time = new Date().getTime();

    storage.getItem("local:focusstart").then((value) => {
        if (value) {
            timer_start_time = value as number;
        }
    });

    storage
        .setItem("local:focusstart", timer_start_time)
        .then(() => {
            console.log("Saved focus start time to storage");
        })
        .catch((err) => {
            console.error("Error saving focus start time to storage", err);
        });

    $: display_time = "00:00:00";

    $: timer_exceeded = false;

    function updateTimer() {
        let current_time = new Date().getTime();
        let time_difference = current_time - timer_start_time;
        let hours = Math.floor(
            (time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
            (time_difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((time_difference % (1000 * 60)) / 1000);
        // format to 2 digits
        let strhours = hours < 10 ? "0" + hours : hours;
        let strminutes = minutes < 10 ? "0" + minutes : minutes;
        let strseconds = seconds < 10 ? "0" + seconds : seconds;
        if (hours > 99) {
            display_time = "Bert needed a rest!";
            timer_exceeded = true;
            return;
        } else {
            display_time = `${strhours}:${strminutes}:${strseconds}`;
        }
        setTimeout(updateTimer, 1000);
    }

    updateTimer();
</script>

<body>
    <img
        src={focusgif}
        alt="bert"
        class="logo"
        id="bert_study_img"
        on:load={animatetheboy}
    />
    <p>Remember to take breaks!</p>
    <p id="timer">{display_time}</p>
</body>

<style>
    p {
        font-size: 2em;
        font-weight: bold;
    }
    body {
        display: flex;
        flex-direction: column;
    }
</style>
