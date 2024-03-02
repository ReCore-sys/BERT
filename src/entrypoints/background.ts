export default defineBackground(() => {
    storage
        .getItem("local:focusstart")
        .then((value) => {
            if (value) {
                storage.removeItem("local:focusstart");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    console.log("Hello background!", { id: browser.runtime.id });
});
