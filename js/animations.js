// Modern UI Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Loading Animation
    const body = document.body;
    body.style.opacity = '0';
    setTimeout(() => {
        body.style.opacity = '1';
        body.style.transition = 'opacity 0.5s ease';
    }, 100);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Smooth Section Transitions
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Typing Animation Enhancement
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: ['Smart Cities', 'Green Energy', 'Sustainability', 'Innovation'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Parallax Effect
    document.addEventListener('mousemove', parallax);
    function parallax(e) {
        document.querySelectorAll('.parallax').forEach(element => {
            const speed = element.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    // Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Card Hover Effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const boundingRect = card.getBoundingClientRect();
            const x = e.clientX - boundingRect.left;
            const y = e.clientY - boundingRect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Menu Toggle Animation
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
