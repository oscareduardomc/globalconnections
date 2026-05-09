/**
 * Global Connections HN - Ultra Compatible Script
 */

// Función principal que se ejecuta solo cuando TODO el HTML está listo
function initializeSite() {
    
    // 1. Iconos Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Control del Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-slate-900/95', 'backdrop-blur-md', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-slate-900/95', 'backdrop-blur-md', 'shadow-lg');
            }
        }
    });

    // 3. Animaciones GSAP Blindadas
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Animación de Entrada Hero
        gsap.from('.relative.z-10 > div > *', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Revelado de Secciones (Asegura visibilidad)
        const sections = document.querySelectorAll('#about, #services, #why-us, #ceo, #contact');
        sections.forEach((section) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none none" // "play" evita que se oculten al subir
                },
                y: 30,
                opacity: 0,
                duration: 1,
                clearProps: "all" // Importante: limpia los estilos al terminar para que no desaparezcan
            });
        });

        // Animación de las Tarjetas de Servicio
        const cards = document.querySelectorAll('.group.p-8');
        if (cards.length > 0) {
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: '#services',
                    start: "top 75%",
                    toggleActions: "play none none none"
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all" // Asegura que las tarjetas se queden visibles
            });
        }
    }

    const translations = {
    en: {
        lang_name: "EN",
        lang_flag: "🇺🇸",
        nav_about: "About",
        nav_services: "Services",
        nav_why_hn: "Why Honduras",
        nav_leadership: "Leadership",
        nav_quote: "Get a Quote",
        hero_badge: "Premier Nearshore Partner",
        hero_title: "Connecting Your Business to the <span class='text-[#FF6B2B]'>World</span>",
        hero_desc: "Professional Contact Center Solutions from Honduras. Empowering global brands with high-performance BPO solutions since 2014.",
        hero_cta_quote: "Get a Quote",
        hero_cta_services: "Our Services",
        trusted_by: "CONFIANZA DE EMPRESAS A NIVEL MUNDIAL",
        about_title: "Sobre Global Connections <span class='text-[#FF6B2B]'>HN</span>",
        about_desc: "Fundada en 2014 por la CEO Lidia Chavarría en Choluteca, Honduras, nacimos con la visión de conectar el talento local con oportunidades globales.",
        service_cs: "Servicio al Cliente",
        service_sales: "Ventas y Telemercadeo",
        service_tech: "Soporte Técnico",
        service_coll: "Cobranzas",
        advantage_title: "La Ventaja Nearshore",
        cost_eff_title: "Eficiencia de Costos",
        footer_desc: "Transformando el panorama BPO en el sur de Honduras desde 2014. Excelencia en soluciones nearshore.",
        years_excellence: "Years of Excellence",
        val_reliability: "Reliability",
        val_reliability_desc: "Transparent data-driven operations.",
        val_custom: "Customization",
        val_custom_desc: "Tailored solutions for your brand.",
        services_main_title: "Core BPO Solutions",
        services_main_desc: "Specialized business solutions designed to optimize your operations and maximize ROI.",
        service_cs_desc: "Multichannel support fostering long-term brand loyalty through human-first interactions.",
        service_sales_desc: "Result-oriented strategies designed to convert leads and boost business growth.",
        service_tech_desc: "Tier 1 & 2 troubleshooting delivered by tech-savvy professionals.",
        service_coll_desc: "Professional, compliant, and empathetic debt recovery.",
        adv_bilingual: "Bilingual Excellence",
        adv_bilingual_desc: "English-Spanish fluency with neutral accents.",
        cost_eff_quote: '"Achieve up to 55% operational savings without compromising on quality."',
        ceo_role: "Founder & CEO",
        ceo_bio: "Lidia Chavarría is the Founder and CEO of the company, with over 12 years of experience in the call center industry. She leads a high-performing operation specializing in debt collections, sales, customer service, and technical support, delivering scalable communication solutions for businesses across multiple industries. Under her leadership, the company has successfully operated for more than a decade in Honduras, partnering with businesses and law firms serving the Hispanic community, particularly in immigration services. With a strong focus on performance, cultural understanding, and operational excellence, she has positioned the company as a trusted outsourcing partner offering a diverse range of call center services.",
        contact_title: "Get in Touch",
        contact_desc: "Experience the power of nearshoring. Send us a message and our consultants will reach out.",
        form_name: "Full Name",
        form_btn: "Send Inquiry",
        cta_title: "Ready to Grow Your Business?",
        footer_copy: "© 2026 Global Connections HN. All rights reserved."
    },
    es: {
        lang_name: "ES",
        lang_flag: "🇭🇳", // Usamos la bandera de Honduras por identidad local
        nav_about: "Nosotros",
        nav_services: "Servicios",
        nav_why_hn: "¿Por qué Honduras?",
        nav_leadership: "Liderazgo",
        nav_quote: "Cotizar",
        hero_badge: "Socio Estratégico Nearshore",
        hero_title: "Conectando su Empresa con el <span class='text-[#FF6B2B]'>Mundo</span>",
        hero_desc: "Soluciones Profesionales de Contact Center desde Honduras. Potenciando marcas globales con soluciones BPO de alto rendimiento desde 2014.",
        hero_cta_quote: "Solicitar Cotización",
        hero_cta_services: "Nuestros Servicios",
        trusted_by: "EMPRESAS QUE CONFÍAN EN NOSOTROS",
        about_title: "Sobre Global Connections <span class='text-[#FF6B2B]'>HN</span>",
        about_desc: "Fundada en 2014 por la CEO Lidia Chavarría en Choluteca, Honduras, nacimos con la visión de ser el puente entre el talento local y las oportunidades globales.",
        service_cs: "Servicio al Cliente",
        service_sales: "Ventas y Telemercadeo",
        service_tech: "Soporte Técnico",
        service_coll: "Cobranzas",
        cta_title: "¿Listo para hacer crecer su negocio?",

        advantage_title: "La Ventaja Nearshore",
        cost_eff_title: "Eficiencia de Costos",
        footer_desc: "Transformando el panorama BPO en el sur de Honduras desde 2014. Excelencia en soluciones nearshore.",
        years_excellence: "Años de Excelencia",
        val_reliability: "Confiabilidad",
        val_reliability_desc: "Operaciones transparentes basadas en datos.",
        val_custom: "Personalización",
        val_custom_desc: "Soluciones a la medida de su marca.",
        services_main_title: "Soluciones BPO Principales",
        services_main_desc: "Soluciones empresariales especializadas diseñadas para optimizar sus operaciones.",
        service_cs_desc: "Soporte multicanal que fomenta la lealtad a la marca mediante interacciones humanas.",
        service_sales_desc: "Estrategias orientadas a resultados para convertir prospectos e impulsar el crecimiento.",
        service_tech_desc: "Resolución de problemas de Nivel 1 y 2 por profesionales tecnológicos.",
        service_coll_desc: "Recuperación de deudas profesional, cumpliendo normativas y con empatía.",
        adv_bilingual: "Excelencia Bilingüe",
        adv_bilingual_desc: "Fluidez inglés-español con acentos neutros.",
        cost_eff_quote: '"Logre hasta un 55% de ahorro operativo sin comprometer la calidad."',
        ceo_role: "Fundadora y CEO",
        ceo_bio: "Lidia Chavarría es la fundadora y CEO de la empresa, con más de 12 años de experiencia en la industria de los call centers. Lidera una operación de alto rendimiento especializada en cobranzas, ventas, servicio al cliente y soporte técnico, ofreciendo soluciones de comunicación escalables para empresas de múltiples sectores. Bajo su liderazgo, la empresa ha operado con éxito durante más de una década en Honduras, estableciendo alianzas con empresas y bufetes de abogados que atienden a la comunidad hispana, especialmente en servicios de inmigración. Con un fuerte enfoque en el desempeño, la comprensión cultural y la excelencia operativa, ha posicionado a la empresa como un socio de outsourcing confiable, ofreciendo una amplia gama de servicios de centro de llamadas.",
        contact_title: "Póngase en Contacto",
        contact_desc: "Experimente el poder del nearshoring. Envíenos un mensaje y le contactaremos.",
        form_name: "Nombre Completo",
        form_btn: "Enviar Consulta",
        footer_copy: "© 2026 Global Connections HN. Todos los derechos reservados."
    }
};

let currentLang = 'en';

const langSwitch = document.getElementById('lang-switch');
const langText = document.getElementById('lang-text');
const langFlag = document.getElementById('lang-flag');

langSwitch.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateLanguage();
});

function updateLanguage() {
    // Actualizar textos del botón
    langText.innerText = translations[currentLang].lang_name;
    langFlag.innerText = translations[currentLang].lang_flag;

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}
}

// Ejecutar la inicialización
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSite);
} else {
    initializeSite();
}
