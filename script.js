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
    
    // Update page title and meta description
    if (lang === 'kn') {
        document.title = 'ಅನೇಕ ಟ್ರಸ್ಟ್ - Aneka Trust | Empowering Children for a Better Tomorrow';
        document.querySelector('meta[name="description"]').setAttribute('content', 'ಅನೇಕ ಟ್ರಸ್ಟ್ - Empowering underprivileged children through education, cultural activities, and global opportunities. Supporting secularism and liberalism in India.');
    } else {
        document.title = 'Aneka Trust | Empowering Children for a Better Tomorrow';
        document.querySelector('meta[name="description"]').setAttribute('content', 'Aneka Trust - Empowering underprivileged children through education, cultural activities, and global opportunities. Supporting secularism and liberalism in India.');
    }
    
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

// Modern header scroll effect with backdrop blur
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links with offset for fixed header
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button with fade effect
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
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.program-card, .gallery-item, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
    
    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLanguage === 'kn' ? 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...' : 'Sending...';
    submitBtn.disabled = true;
    
    // Prepare email data
    const emailData = {
        to: 'anilrona2@gmail.com',
        from: email,
        subject: `Aneka Trust Contact Form: ${subject}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };
    
    // Send email using a simple webhook service
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            access_key: '3cdf8104-b435-45b9-bdc1-fb79fd83b050',
            ...emailData
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const successMessage = currentLanguage === 'kn' ? 
                'ನಿಮ್ಮ ಸಂದೇಶಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.' : 
                'Thank you for your message! We will get back to you soon.';
            showNotification(successMessage, 'success');
            form.reset();
        } else {
            throw new Error('Failed to send email');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const errorMessage = currentLanguage === 'kn' ? 
            'ಸಂದೇಶ ಕಳುಹಿಸುವಲ್ಲಿ ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.' : 
            'Error sending message. Please try again.';
        showNotification(errorMessage, 'error');
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
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

// Lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
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
    document.body.style.overflow = 'auto';
} 