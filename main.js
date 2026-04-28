/**
 * Global Connections HN - Main Interaction Script
 */


lucide.createIcons();


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


gsap.registerPlugin(ScrollTrigger);


gsap.from('.relative.z-10 > div > *', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});


const revealElements = document.querySelectorAll('#about, #services, #why-us, #ceo, #contact');

revealElements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});


gsap.from('.group.p-8', {
    scrollTrigger: {
        trigger: '#services',
        start: "top 70%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)"
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


const contactForm = document.querySelector('form');
if (contactForm) {
    const submitBtn = contactForm.querySelector('button');
    submitBtn.addEventListener('click', (e) => {
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Processing...";
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerText = "Message Sent Successfully!";
            submitBtn.classList.remove('bg-[#003366]');
            submitBtn.classList.add('bg-[#00A86B]');
            
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.classList.add('bg-[#003366]');
                submitBtn.classList.remove('bg-[#00A86B]');
                submitBtn.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 1500);
    });
}


const moveTechBg = () => {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        gsap.to('body', {
            'background-position': `${mouseX * 20}px ${mouseY * 20}px`,
            duration: 1
        });
    });
};

moveTechBg();
