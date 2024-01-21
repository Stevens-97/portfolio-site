import React, { useEffect } from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
    useEffect(() => {
        const canvas = document.getElementById(
            "techCanvas"
        ) as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = 200;

        let mouse = {
            x: 0,
            y: 0,
            radius: 150, // Adjust the radius of interaction
        };

        const mousemoveHandler = (event: MouseEvent) => {
            mouse.x = event.x - canvas.offsetLeft;
            mouse.y = event.y - canvas.offsetTop;
        };

        canvas.addEventListener("mousemove", mousemoveHandler);

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
            }

            update() {
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        // Push the particles
                        this.x += dx / distance;
                        this.y += dy / distance;
                    }
                }

                this.x += this.speedX;
                this.y += this.speedY;

                // Re-position particles when they move off canvas
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = "rgba(0,255,255,1)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particlesArray: Particle[] = [];

        function init() {
            particlesArray = [];
            for (let i = 0; i < 100; i++) {
                particlesArray.push(new Particle());
            }
        }
        init();

        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw(ctx);
            }
            requestAnimationFrame(animate);
        }
        animate();

        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = 200;
            init();
        };

        window.addEventListener("resize", resizeHandler);

        // Clean-up function
        return () => {
            canvas.removeEventListener("mousemove", mousemoveHandler);
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div className={styles.techBanner}>
            <canvas id="techCanvas"></canvas>
        </div>
    );
};

export default Banner;
