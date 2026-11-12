document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
        const commands = button.getAttribute("data-copy");
        try {
            await navigator.clipboard.writeText(commands);
        } catch {
            const input = document.createElement("textarea");
            input.value = commands;
            input.style.position = "fixed";
            input.style.opacity = "0";
            document.body.append(input);
            input.select();
            document.execCommand("copy");
            input.remove();
        }
        const originalLabel = button.textContent;
        const originalAriaLabel = button.getAttribute("aria-label");
        button.textContent = "Copied";
        button.setAttribute("aria-label", "Commands copied");
        window.setTimeout(() => {
            button.textContent = originalLabel;
            button.setAttribute("aria-label", originalAriaLabel);
        }, 1600);
    });
});
