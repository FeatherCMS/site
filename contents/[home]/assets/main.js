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

(() => {
    const canvas = document.querySelector(".hero-bubbles");
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!context) return;
    const buffer = document.createElement("canvas");
    const bufferContext = buffer.getContext("2d", { alpha: true, willReadFrequently: true });
    if (!bufferContext) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const bubbles = [
        [930, 220, 72, 0, "a"],
        [1080, 285, 122, -7, "b"],
        [1240, 185, 80, -12, "a"],
        [1380, 330, 96, -4, "b"],
        [890, 670, 95, -9, "b"],
        [1050, 610, 128, -15, "a"],
        [1220, 665, 68, -5, "b"],
        [1390, 575, 122, -18, "a"],
    ];

    let color = getComputedStyle(canvas)
        .getPropertyValue("--accent-color-primary-tint")
        .trim();
    let isIntersecting = false;
    let isRunning = false;
    let timeoutId;
    let animationFrameId;
    let lastFrame = 0;
    let resolution = 0.45;

    const resize = () => {
        const bounds = canvas.getBoundingClientRect();
        const width = Math.max(1, Math.round(bounds.width * resolution));
        const height = Math.max(1, Math.round(bounds.height * resolution));

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            buffer.width = width;
            buffer.height = height;
        }
        render(performance.now());
    };

    const render = (time) => {
        const scale = Math.max(canvas.width / 1440, canvas.height / 760);
        const offsetX = (canvas.width - 1440 * scale) / 2;
        const offsetY = (canvas.height - 760 * scale) / 2;
        bufferContext.setTransform(scale, 0, 0, scale, offsetX, offsetY);
        bufferContext.clearRect(-offsetX / scale, -offsetY / scale, buffer.width / scale, buffer.height / scale);
        bufferContext.filter = "blur(10px)";
        bufferContext.fillStyle = color;

        for (const [baseX, baseY, radius, delay, orbit] of bubbles) {
            const phase = (time / 24000 + delay / 24000) * Math.PI * 2;
            const x = orbit === "a"
                ? baseX - 105 * Math.cos(phase)
                : baseX + 92 * Math.cos(phase);
            const y = orbit === "a"
                ? baseY + 72 * Math.sin(phase)
                : baseY - 64 * Math.sin(phase);
            const size = orbit === "a"
                ? radius * (1 + 0.04 * Math.sin(phase))
                : radius * (1 + 0.06 * Math.cos(phase));

            bufferContext.beginPath();
            bufferContext.arc(x, y, size, 0, Math.PI * 2);
            bufferContext.fill();
        }

        bufferContext.filter = "none";
        const image = bufferContext.getImageData(0, 0, buffer.width, buffer.height);
        const pixels = image.data;
        for (let i = 3; i < pixels.length; i += 4) {
            const alpha = pixels[i];
            pixels[i] = alpha < 48 ? 0 : Math.min(255, (alpha - 48) * 4);
        }
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.putImageData(image, 0, 0);
    };

    const schedule = () => {
        timeoutId = window.setTimeout(() => {
            animationFrameId = window.requestAnimationFrame(tick);
        }, 1000 / 40);
    };

    const tick = (time) => {
        if (!isRunning) return;
        if (time - lastFrame >= 1000 / 24) {
            render(time);
            lastFrame = time;
        }
        if (!motionPreference.matches) schedule();
    };

    const start = () => {
        if (isRunning || !isIntersecting || document.hidden) return;
        isRunning = true;
        animationFrameId = window.requestAnimationFrame(tick);
    };

    const stop = () => {
        isRunning = false;
        window.clearTimeout(timeoutId);
        window.cancelAnimationFrame(animationFrameId);
    };

    const observer = new IntersectionObserver(([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) start();
        else stop();
    });

    if ("ResizeObserver" in window) {
        new ResizeObserver(resize).observe(canvas);
    } else {
        window.addEventListener("resize", resize, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) stop();
        else start();
    });

    const handleMotionPreference = (event) => {
        if (event.matches) {
            stop();
            render(performance.now());
        } else {
            start();
        }
    };
    if (motionPreference.addEventListener) {
        motionPreference.addEventListener("change", handleMotionPreference);
    } else {
        motionPreference.addListener(handleMotionPreference);
    }

    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    colorScheme.addEventListener("change", () => {
        color = getComputedStyle(canvas)
            .getPropertyValue("--accent-color-primary-tint")
            .trim();
        render(performance.now());
    });

    resize();
    observer.observe(canvas);
})();
