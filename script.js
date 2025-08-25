// Portfolio Website JavaScript

// Matrix-style typing effect for hero section
function initMatrixTyping() {
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero .hero-subtitle');
    
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        function typeText(element, text, speed = 100) {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    // Add cursor blink effect
                    element.style.borderRight = '2px solid #00ff41';
                    element.style.animation = 'blink 1s infinite';
                }
            }, speed);
        }
        
        setTimeout(() => typeText(heroTitle, originalText, 150), 1000);
    }
}

// Add glitch effect to buttons on hover
function initGlitchEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
}

// Add CSS animations for Matrix effects
function addMatrixStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { border-color: #00ff41; }
            51%, 100% { border-color: transparent; }
        }
        
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
        
        @keyframes matrix-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 65, 0.3); }
            50% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.6); }
        }
        
        .matrix-glow {
            animation: matrix-glow 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initTypingEffect();
    initSmoothScrolling();
    initMobileMenu();
    initMatrixTyping();
    initGlitchEffects();
    addMatrixStyles();
    
    // Add matrix glow to skill bars
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.classList.add('matrix-glow');
        });
    }, 3000);
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(13, 17, 23, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.2)';
        } else {
            navbar.style.background = 'rgba(13, 17, 23, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.1)';
        }
    });
    
    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Matrix-style binary rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const binary = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px Fira Code, monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = binary[Math.floor(Math.random() * binary.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 100);
}

// Initialize Matrix rain effect
createMatrixRain();

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Smooth scrolling for CTA buttons
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .education-item, .cert-item, .stat, .info-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('#skills');
    
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        skillsObserver.observe(skillsSection);
    }
    
    function animateSkillBars() {
        // Define skill levels (you can modify these based on actual skills)
        const skillLevels = {
            'JavaScript': 90,
            'Python': 85,
            'React': 88,
            'Node.js': 82,
            'HTML/CSS': 95,
            'SQL': 80,
            'Git': 85,
            'AWS': 75,
            'Docker': 70,
            'MongoDB': 78,
            'Express.js': 85,
            'Vue.js': 75,
            'TypeScript': 80,
            'PHP': 70,
            'Laravel': 68,
            'MySQL': 82,
            'PostgreSQL': 75,
            'Redis': 65,
            'GraphQL': 70,
            'REST APIs': 88
        };
        
        skillBars.forEach(bar => {
            const skillName = bar.closest('.skill-item').querySelector('.skill-name').textContent;
            const level = skillLevels[skillName] || 75; // Default to 75% if not found
            
            // Update the skill level text
            const skillLevelElement = bar.closest('.skill-item').querySelector('.skill-level');
            if (skillLevelElement) {
                skillLevelElement.textContent = `${level}%`;
            }
            
            // Animate the progress bar
            setTimeout(() => {
                bar.style.width = `${level}%`;
            }, Math.random() * 500); // Stagger the animations
        });
    }
}

// Typing effect for hero section
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const titles = [
            'Full Stack Developer',
            'Software Engineer',
            'Web Developer',
            'Problem Solver'
        ];
        
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentTitle = '';
        
        function typeEffect() {
            const fullTitle = titles[titleIndex];
            
            if (isDeleting) {
                currentTitle = fullTitle.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentTitle = fullTitle.substring(0, charIndex + 1);
                charIndex++;
            }
            
            heroSubtitle.textContent = currentTitle;
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === fullTitle.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typeSpeed = 500; // Pause before starting new title
            }
            
            setTimeout(typeEffect, typeSpeed);
        }
        
        // Start the typing effect after a short delay
        setTimeout(typeEffect, 1000);
    }
}

// Initialize EmailJS
(function() {
    // Check if config is loaded, fallback to placeholder if not
    const publicKey = (typeof EMAILJS_CONFIG !== 'undefined') ? EMAILJS_CONFIG.PUBLIC_KEY : "YOUR_PUBLIC_KEY";
    
    emailjs.init({
        publicKey: publicKey
    });
})();

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Prepare email parameters with timestamp
            const now = new Date();
            const timeString = now.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            });
            
            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                time: timeString,
                to_email: (typeof EMAILJS_CONFIG !== 'undefined') ? EMAILJS_CONFIG.TO_EMAIL : 'montie2206@gmail.com'
            };
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Send email using EmailJS
            // Get service and template IDs from config
            const serviceId = (typeof EMAILJS_CONFIG !== 'undefined') ? EMAILJS_CONFIG.SERVICE_ID : 'YOUR_SERVICE_ID';
            const templateId = (typeof EMAILJS_CONFIG !== 'undefined') ? EMAILJS_CONFIG.TEMPLATE_ID : 'YOUR_TEMPLATE_ID';
            
            emailjs.send(serviceId, templateId, templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showNotification('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
                })
                .finally(function() {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                });
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Trigger initial animations
    document.body.classList.add('loaded');
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c👋 Welcome to Montie\'s Portfolio!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #64748b; font-size: 14px;');

// Add some interactive Easter eggs
let clickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('profile-avatar')) {
        clickCount++;
        if (clickCount === 5) {
            showNotification('🎉 You found the Easter egg! Thanks for exploring!', 'success');
            clickCount = 0;
        }
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563eb';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Initialize theme toggle (if you want to add dark mode later)
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }
}

// Call theme toggle initialization
initThemeToggle();