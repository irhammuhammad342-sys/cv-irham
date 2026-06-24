// ============================================
// CV MUHAMAD IRHAM - MANHWA STYLE INTERACTIONS
// ============================================

// === Wait for DOM to Load ===
document.addEventListener('DOMContentLoaded', () => {
    initSkillBars();
    initPowerBars();
    initTypingEffect();
    initParticles();
    initSmoothScroll();
    initParallaxEffect();
});

// === Animate Skill Bars on Scroll ===
function initSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    const powerFills = document.querySelectorAll('.power-fill');
    
    const animateBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const width = target.style.width;
                target.style.width = '0';
                
                setTimeout(() => {
                    target.style.width = width;
                }, 100);
                
                observer.unobserve(target);
            }
        });
    };
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(animateBars, observerOptions);
    
    [...skillFills, ...powerFills].forEach(bar => {
        observer.observe(bar);
    });
}

// === Animate Power Bars ===
function initPowerBars() {
    const powerBars = document.querySelectorAll('.power-fill');
    
    powerBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.animation = 'none';
            setTimeout(() => {
                bar.style.animation = 'shimmer 2s infinite';
            }, 10);
        });
    });
}

// === Typing Effect for Tagline ===
function initTypingEffect() {
    const tagline = document.querySelector('.tagline');
    if (!tagline) return;
    
    const text = tagline.textContent;
    tagline.textContent = '';
    tagline.style.opacity = '1';
    
    let index = 0;
    const typingSpeed = 50;
    
    const type = () => {
        if (index < text.length) {
            tagline.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    };
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// === Particle Effects ===
function initParticles() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 107, 53, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        left: ${startX}px;
        top: -10px;
        animation: float ${duration}s linear ${delay}s infinite;
        box-shadow: 0 0 ${size * 2}px rgba(255, 107, 53, 0.5);
    `;
    
    document.body.appendChild(particle);
}

// === Smooth Scroll ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// === Parallax Effect ===
function initParallaxEffect() {
    const header = document.querySelector('.cv-header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (header) {
            header.style.transform = `translateY(${rate}px)`;
        }
    });
}

// === Add Dynamic Styles for Particles ===
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) translateX(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .particle {
        position: fixed;
        pointer-events: none;
        z-index: 0;
    }
`;

document.head.appendChild(style);

// === Interactive Hover Effects ===
document.querySelectorAll('.edu-card, .skill-card, .contact-card, .stat-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// === Add Glitch Effect on Click ===
document.querySelectorAll('.name-main, .name-sub').forEach(name => {
    name.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'glitch 0.3s ease-in-out';
        }, 10);
    });
});

// === Console Easter Egg ===
console.log('%c⚡ MANHWA STYLE CV ⚡', 'font-size: 20px; color: #ff6b35; font-weight: bold;');
console.log('%cCreated by Muhamad Irham', 'font-size: 14px; color: #f7c548;');
console.log('%c💻 Web Developer | 🎨 Designer | ⚡ Fast Learner', 'font-size: 12px; color: #fff;');
console.log('%c📧 muhamad.irham@email.com', 'font-size: 12px; color: #06d6a0;');

// === Performance Optimization ===
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-based animations can be added here
            ticking = false;
        });
        ticking = true;
    }
});

// === Add Loading Animation ===
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// === Keyboard Navigation ===
document.addEventListener('keydown', (e) => {
    // Press 'M' to show a manhwa-style message
    if (e.key === 'm' || e.key === 'M') {
        showManhwaMessage();
    }
});

function showManhwaMessage() {
    const message = document.createElement('div');
    message.className = 'manhwa-message';
    message.textContent = '⚡ TERIMA KASIH TELAH MELIHAT CV SAYA! ⚡';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #ff6b35, #f7c548);
        color: #1a1a2e;
        padding: 30px 50px;
        border-radius: 20px;
        font-family: 'Bangers', cursive;
        font-size: 32px;
        letter-spacing: 3px;
        z-index: 9999;
        border: 5px solid #fff;
        box-shadow: 0 0 50px rgba(255, 107, 53, 0.8);
        animation: messagePop 2s ease-in-out;
    `;
    
    const messageStyle = document.createElement('style');
    messageStyle.textContent = `
        @keyframes messagePop {
            0% {
                transform: translate(-50%, -50%) scale(0) rotate(-10deg);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                opacity: 1;
            }
        }
        
        .manhwa-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff6b35, #f7c548);
            color: #1a1a2e;
            padding: 30px 50px;
            border-radius: 20px;
            font-family: 'Bangers', cursive;
            font-size: 32px;
            letter-spacing: 3px;
            z-index: 9999;
            border: 5px solid #fff;
            box-shadow: 0 0 50px rgba(255, 107, 53, 0.8);
        }
    `;
    
    document.head.appendChild(messageStyle);
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
        messageStyle.remove();
    }, 2000);
}

// === Add Cursor Trail Effect ===
let cursorTrailEnabled = true;

document.addEventListener('mousemove', (e) => {
    if (!cursorTrailEnabled) return;
    
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: rgba(255, 107, 53, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        animation: trailFade 1s ease-out forwards;
    `;
    
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(0);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(trailStyle);
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
        trailStyle.remove();
    }, 1000);
});

// === Initialize Everything ===
console.log('🚀 CV Manhwa Style Loaded!');
console.log('💡 Tip: Tekan tombol "M" untuk pesan rahasia!');