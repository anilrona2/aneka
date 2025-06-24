// Language switching functionality
let currentLanguage = 'kn'; // Default to Kannada

// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.language-switcher button');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.textContent.toLowerCase().includes('ಕನ್ನಡ') ? 'kn' : 'en';
            switchLanguage(lang);
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-kn][data-en]');
    elements.forEach(element => {
        if (lang === 'kn') {
            element.textContent = element.getAttribute('data-kn');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
    
    // Update placeholders
    const inputs = document.querySelectorAll('input[placeholder*="|"], textarea[placeholder*="|"]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
            const parts = placeholder.split(' | ');
            if (lang === 'kn') {
                input.placeholder = parts[0];
            } else {
                input.placeholder = parts[1];
            }
        }
    });
    
    // Update form validation messages
    updateFormValidationMessages(lang);
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Update form validation messages based on language
function updateFormValidationMessages(lang) {
    const messages = {
        kn: {
            required: 'ಈ ಫೀಲ್ಡ್ ಅಗತ್ಯವಿದೆ',
            email: 'ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
            success: 'ನಿಮ್ಮ ಸಂದೇಶಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.',
            newsletter: 'ನಮ್ಮ ವಾರ್ತಾಪತ್ರಿಕೆಗೆ ಚಂದಾದಾರರಾಗಲು ಧನ್ಯವಾದಗಳು!',
            emailRequired: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ'
        },
        en: {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            success: 'Thank you for your message! We will get back to you soon.',
            newsletter: 'Thank you for subscribing to our newsletter!',
            emailRequired: 'Please enter your email address'
        }
    };
    
    // Store messages for use in form validation
    window.formMessages = messages[lang];
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
        
        // Update active button
        const langButtons = document.querySelectorAll('.language-switcher button');
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if ((btn.textContent.toLowerCase().includes('ಕನ್ನಡ') && savedLanguage === 'kn') ||
                (btn.textContent.toLowerCase().includes('english') && savedLanguage === 'en')) {
                btn.classList.add('active');
            }
        });
    }
});

// Mobile Navigation Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(255, 153, 51, 0.95) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(19, 136, 8, 0.95) 100%)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--saffron) 0%, var(--white) 50%, var(--green) 100%)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for anchor links
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-header, .program-card, .gallery-item, .about-content, .contact-content');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact form handling
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !phone || !subject || !message) {
        const message = currentLanguage === 'kn' ? 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಫೀಲ್ಡ್‌ಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.' : 'Please fill in all fields.';
        showNotification(message, 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        const message = currentLanguage === 'kn' ? 'ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.' : 'Please enter a valid email address.';
        showNotification(message, 'error');
        return;
    }
    
    // Simulate form submission
    const successMessage = currentLanguage === 'kn' ? 
        'ನಿಮ್ಮ ಸಂದೇಶಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.' : 
        'Thank you for your message! We will get back to you soon.';
    showNotification(successMessage, 'success');
    form.reset();
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Gallery lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
    
    // Add escape key listener
    const closeOnEscape = (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    
    document.addEventListener('keydown', closeOnEscape);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize form validation messages
    updateFormValidationMessages(currentLanguage);
    
    // Add fade-in animation class
    const fadeElements = document.querySelectorAll('.section-header, .program-card, .gallery-item, .about-content, .contact-content');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));
});

// Add patriotic wave animation to flag emoji
document.addEventListener('DOMContentLoaded', () => {
    const flagEmojis = document.querySelectorAll('h1, h2, h3');
    flagEmojis.forEach(element => {
        if (element.textContent.includes('🇮🇳')) {
            element.style.animation = 'flag-wave 3s ease-in-out infinite';
        }
    });
}); 