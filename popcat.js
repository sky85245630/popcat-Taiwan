let e = new KeyboardEvent("keydown", { key: "Q" });
setInterval(() => {
    document.dispatchEvent(e);
}, 40);
