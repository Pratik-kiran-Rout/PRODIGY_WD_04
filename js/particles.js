/*
   Pratik Kiran Rout - Portfolio Website
   Particles Animation for Hero Section
*/

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('home');
    
    if (heroSection) {
        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.className = 'particles-canvas';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.opacity = '0.5';
        
        // Insert canvas as first child of hero section
        heroSection.insertBefore(canvas, heroSection.firstChild);
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Get canvas context
        const ctx = canvas.getContext('2d');
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = `rgba(138, 43, 226, ${Math.random() * 0.3 + 0.1})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y < 0 || this.y > canvas.height) {
                    this.speedY = -this.speedY;
                }
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Create particles
        const particles = [];
        const particleCount = Math.min(Math.floor(canvas.width * canvas.height / 10000), 100);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections between particles
            ctx.strokeStyle = 'rgba(138, 43, 226, 0.05)';
            ctx.lineWidth = 0.5;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            // Update and draw particles
            for (const particle of particles) {
                particle.update();
                particle.draw();
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
});