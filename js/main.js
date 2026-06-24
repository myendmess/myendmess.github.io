/* =========================================================
   Mohamed Boujnane — portfolio interactions
   Vanilla JS, no dependencies. Progressive enhancement.
   ========================================================= */
(function () {
    "use strict";

    // Mark JS as available so CSS can hide-then-reveal (no-JS = everything visible)
    document.documentElement.classList.add("js");

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- mobile nav ---------- */
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    if (toggle && links) {
        var setOpen = function (open) {
            links.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", String(open));
        };
        toggle.addEventListener("click", function () {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });
        // close after tapping a link
        links.addEventListener("click", function (e) {
            if (e.target.closest("a")) setOpen(false);
        });
        // close on Escape
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") setOpen(false);
        });
    }

    /* ---------- footer year ---------- */
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    /* ---------- scroll reveal ---------- */
    var reveals = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
        reveals.forEach(function (el) { el.classList.add("in-view"); });
    } else {
        var io = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
        reveals.forEach(function (el) { io.observe(el); });
    }

    /* ---------- constellation canvas (cheap, gated) ---------- */
    var canvas = document.getElementById("constellation");
    // Skip on reduced-motion or small/touch screens to save battery & paint cost
    if (canvas && !reduceMotion && window.innerWidth > 760) {
        var ctx = canvas.getContext("2d");
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w, h, points, raf;

        var COUNT = 46;       // particle count
        var LINK = 150;       // max distance to draw a link
        var SPEED = 0.18;

        function size() {
            w = canvas.clientWidth;
            h = canvas.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function seed() {
            points = [];
            for (var i = 0; i < COUNT; i++) {
                points.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * SPEED,
                    vy: (Math.random() - 0.5) * SPEED
                });
            }
        }

        function frame() {
            ctx.clearRect(0, 0, w, h);
            for (var i = 0; i < points.length; i++) {
                var p = points[i];
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(251, 191, 36, 0.7)";
                ctx.fill();

                for (var j = i + 1; j < points.length; j++) {
                    var q = points[j];
                    var dx = p.x - q.x, dy = p.y - q.y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < LINK) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = "rgba(251, 146, 60," + (0.16 * (1 - dist / LINK)) + ")";
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(frame);
        }

        function start() { size(); seed(); cancelAnimationFrame(raf); frame(); }

        start();

        // Pause when tab hidden; resume on return
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) cancelAnimationFrame(raf);
            else frame();
        });

        var resizeTimer;
        window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(start, 200);
        });
    }
})();
