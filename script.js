
const year = document.getElementById("year");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const serviceSelect = document.getElementById("serviceSelect");
const requestButtons = document.querySelectorAll("[data-service]");
const langButtons = document.querySelectorAll("[data-lang]");
const previewButtons = document.querySelectorAll(".preview-btn");
const previewModal = document.getElementById("previewModal");
const previewFrame = document.getElementById("previewFrame");
const closePreviewButtons = document.querySelectorAll("[data-close-preview]");
const filterButtons = document.querySelectorAll("[data-filter]");
const filterCards = document.querySelectorAll(".filter-card");
const revealSections = document.querySelectorAll(".reveal-section");


var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.onclick = function () {
    navLinks.classList.toggle("active");
  };
}

const translations = {
  en: {
    navServices: "Services", navProcess: "Process", navPricing: "Pricing", navDemos: "Demos", navProjects: "Projects", navContact: "Contact",
    heroEyebrow: "Simple • Elegant • Informational Websites",
    heroTitle: "Professional websites for businesses, brands, and personal projects.",
    heroText: "I create clean informational websites without databases. You choose the pages you need, and I help bring your idea to life with a polished, easy-to-use design.",
    bookConsultation: "Book a Consultation", viewServices: "View Services",
    starter: "Website Starter", starterTitle: "Custom design proposal included",
    starterText: "We talk about your vision, your goals, and the style you want. Then I propose how your website could look before moving forward.",
    offerEyebrow: "What I offer", offerTitle: "Websites that look professional without being complicated.",
    offerText: "Perfect for small businesses, real estate professionals, service providers, events, personal brands, portfolios, and simple online information pages.",
    studioEyebrow: "A more personal process", studioTitle: "Your website should feel like you — not like a template.", studioText: "I like to understand the story behind your business first: the feeling you want people to have, the information they need, and the little details that make your brand feel real.", point1: "Warm visuals", point2: "Clear sections", point3: "Easy contact",
    service1Title: "Informational Websites", service1Text: "Clean websites with sections like Home, About, Services, Gallery, FAQs, and Contact. No database required.",
    service2Title: "Pay Per Page", service2Text: "You only pay for the pages you need. Simple, flexible, and easy to understand.",
    service3Title: "Domain Assistance", service3Text: "I can investigate domain options for you. You decide if you want to purchase one, and I can help set it up.",
    service4Title: "Maintenance Options", service4Text: "No monthly fee unless changes are needed, or choose a monthly plan for unlimited website changes.",
    service5Title: "Personalized Invitations", service5Text: "Custom digital invitations for weddings, events, and special celebrations with a beautiful preview link guests can open online.", previewInvitation: "Preview Invitation Demo",
    processEyebrow: "How it works", processTitle: "From idea to website in a clear step-by-step process.",
    step1Title: "Consultation", step1Text: "We talk about what you want, your style, your business, and what pages you need.",
    step2Title: "Website Idea Proposal", step2Text: "I propose a website direction, layout, colors, and structure based on your goals.",
    step3Title: "Design & Build", step3Text: "Once approved, I create your website pages and make sure they look good on desktop and phone.",
    step4Title: "Launch Support", step4Text: "If you want a domain, I help with setup after you approve and purchase it.",
    pricingEyebrow: "Website Packages", pricingTitle: "Choose the package that fits your business right now.", pricingIntro: "All packages are one-time payments and include Badin-and-Co hosting. If you already have a domain, I can connect it for you.",
    consultEyebrow: "Start here", consultTitle: "Consultation — $49", consultText: "We talk about your vision, what you need, your style, and I propose an idea of how your website could look before moving forward.",
    basicTitle: "Basic Package", basicPrice: "$399", oneTime: "One-time payment", basicItem1: "Badin-and-Co hosting included", basicItem2: "If you already have a domain, I can connect it", basicItem3: "One scroll-down page", basicItem4: "Home section", basicItem5: "Who you are / Mission / Vision", basicItem6: "Contact information only — no form", basicItem7: "No maintenance included", basicItem8: "You receive your website code",
    mostPopular: "Most Popular", proTitle: "Pro Package", proPrice: "$599", proItem1: "Badin-and-Co hosting included", proItem2: "If you already have a domain, I can connect it", proItem3: "Two scroll-down pages", proItem4: "Home section", proItem5: "Who you are / Mission / Vision", proItem6: "Contact form connected to your email", proItem7: "No maintenance included", proItem8: "You receive your website code",
    eliteTitle: "Elite Package", elitePrice: "$1,299", eliteItem1: "Badin-and-Co hosting included", eliteItem2: "If you already have a domain, I can connect it", eliteItem3: "Up to 5 custom pages", eliteItem4: "Home, About, Mission/Vision, Services, and Contact", eliteItem5: "Contact form setup", eliteItem6: "Project gallery or portfolio section", eliteItem7: "Bilingual option ENG / SPA", eliteItem8: "Premium animations and mobile optimization", eliteItem9: "You receive your website code",
    alaCarteEyebrow: "A la carte", alaCarteTitle: "Need something extra?", ala1Title: "Contact Form Setup", ala1Text: "$150 — includes your own account with 50 free entries per month", ala2Title: "Additional Scroll Page", ala2Text: "$150 each", ala3Title: "Project Gallery Page", ala3Text: "$150 + $50 each project added", ala4Title: "Monthly Maintenance", ala4Text: "$150/month with unlimited changes", ala5Title: "Picture Updates", ala5Text: "Starting at $50 to add or replace a picture", ala6Title: "Custom Changes", ala6Text: "Price varies depending on the request",
    requestInfo: "Request Info",
    demosEyebrow: "Demo previews", demosTitle: "Preview what your online experience could look like.", demosText: "Choose a category and explore sample experiences. Each preview opens inside the page, so visitors can close it and keep browsing.", filterAll: "All", filterWebsites: "Websites", filterInvitations: "Invitations", filterBranding: "Brand Feel",
    demoWebsiteTitle: "Website Demo", demoWebsiteText: "A preview area for a business or service website. Add your live website demo link here when ready.",
    demoInvitationTitle: "Personalized Digital Invitation Demos", demoInvitationText: "Choose from different invitation styles for weddings, events, and special celebrations.", viewInvitationDemo: "View Invitation Demo", invitationDemo1: "Elegant Demo", invitationDemo2: "Romantic Demo", invitationDemo3: "Modern Demo", brandFeelTitle: "Brand Feel Preview", brandFeelText: "A soft visual direction section to help clients imagine colors, photos, tone, and the feeling of their future website.",
    projectsEyebrow: "Projects", projectsTitle: "Website project examples coming soon.", projectsText: "These cards are ready for your future project links so people can preview real websites when you add them.",
    comingSoon: "Coming Soon", viewPreview: "View Preview", comingSoonBtn: "Coming Soon",
    project1Title: "Business Website", project1Text: "A clean site for a small business with services, about, and contact sections.",
    project2Title: "Real Estate Website", project2Text: "A simple promotional website for listings, open houses, and agent information.",
    project3Title: "Restaurant Website", project3Text: "A stylish informational website for menus, hours, location, and contact.",
    project4Title: "Personal Brand Website", project4Text: "A polished online presence for portfolios, services, and personal projects.",
    domainEyebrow: "Domain support", domainTitle: "Need a website name?", domainText: "I can research domain options for your business. You decide whether to purchase the domain, and I can help connect it to your website.", askDomains: "Ask About Domains",
    caption1: "Simple pages that are easy to understand.", caption2: "Built around your goals, not random trends.", caption3: "Polished, warm, and ready to share.",
    contactEyebrow: "Let’s start", contactTitle: "Ready to create your website?", contactText: "Send your information and the type of website you need. I’ll get back to you to schedule your first consultation.",
    labelName: "Name", namePlaceholder: "Your name", labelEmail: "Email", labelService: "Service Interested In", labelMessage: "Tell me about your website idea",
    messagePlaceholder: "Example: I need a website for my business with Home, Services, Gallery, and Contact pages.",
    sendRequest: "Send Request", footer: "TB Websites. Custom informational websites.",
    optConsultation: "First Consultation", optBasic: "Basic Package", optPro: "Pro Package", optElite: "Elite Package", optDomain: "Domain Assistance", optMaintenance: "Maintenance Plan", optInvitations: "Personalized Invitations",
    sending: "Sending your request...", success: name => `Thank you, ${name}! Your request has been sent successfully.`, error: "Something went wrong. Please try again or contact me directly.", offline: "Unable to send right now. Please check your connection and try again."
  },
  es: {
    navServices: "Servicios", navProcess: "Proceso", navPricing: "Precios", navDemos: "Demos", navProjects: "Proyectos", navContact: "Contacto",
    heroEyebrow: "Páginas informativas • Elegantes • Profesionales",
    heroTitle: "Páginas web profesionales para negocios, marcas y proyectos personales.",
    heroText: "Creo páginas web informativas sin base de datos. Tú eliges las páginas que necesitas y yo te ayudo a convertir tu idea en un diseño limpio, moderno y fácil de usar.",
    bookConsultation: "Agendar Consulta", viewServices: "Ver Servicios",
    starter: "Inicio de Página Web", starterTitle: "Propuesta de diseño incluida",
    starterText: "Hablamos sobre tu visión, tus metas y el estilo que deseas. Después te propongo cómo podría verse tu página antes de avanzar.",
    offerEyebrow: "Lo que ofrezco", offerTitle: "Páginas web profesionales sin complicaciones.",
    offerText: "Ideal para pequeños negocios, agentes de bienes raíces, proveedores de servicios, eventos, marcas personales, portafolios y páginas informativas simples.",
    studioEyebrow: "Un proceso más personal", studioTitle: "Tu página debe sentirse como tú, no como una plantilla.", studioText: "Me gusta entender primero la historia de tu negocio: lo que quieres transmitir, la información que tus clientes necesitan y esos detalles que hacen que tu marca se sienta real.", point1: "Visuales cálidos", point2: "Secciones claras", point3: "Contacto fácil",
    service1Title: "Páginas Informativas", service1Text: "Páginas limpias con secciones como Inicio, Acerca de, Servicios, Galería, Preguntas Frecuentes y Contacto. Sin base de datos.",
    service2Title: "Pago Por Página", service2Text: "Solo pagas por las páginas que necesitas. Simple, flexible y fácil de entender.",
    service3Title: "Ayuda con Dominio", service3Text: "Puedo investigar opciones de dominio para ti. Tú decides si quieres comprar uno y yo puedo ayudarte a configurarlo.",
    service4Title: "Opciones de Mantenimiento", service4Text: "Sin cuota mensual a menos que se necesiten cambios, o puedes elegir un plan mensual con cambios ilimitados.",
    service5Title: "Invitaciones Personalizadas", service5Text: "Invitaciones digitales para bodas, eventos y celebraciones especiales con un link de vista previa que los invitados pueden abrir en línea.", previewInvitation: "Ver Demo de Invitación",
    processEyebrow: "Cómo funciona", processTitle: "De la idea a la página web con un proceso claro.",
    step1Title: "Consulta", step1Text: "Hablamos sobre lo que quieres, tu estilo, tu negocio y las páginas que necesitas.",
    step2Title: "Propuesta de Idea", step2Text: "Te propongo una dirección de diseño, estructura, colores y secciones según tus metas.",
    step3Title: "Diseño y Creación", step3Text: "Cuando apruebas la idea, creo tus páginas y me aseguro de que se vean bien en computadora y celular.",
    step4Title: "Apoyo para Lanzamiento", step4Text: "Si quieres un dominio, te ayudo con la configuración después de que lo apruebes y lo compres.",
    pricingEyebrow: "Paquetes de Página Web", pricingTitle: "Elige el paquete que mejor se ajuste a tu negocio.", pricingIntro: "Todos los paquetes son pagos únicos e incluyen hosting de Badin-and-Co. Si ya tienes dominio, puedo conectarlo por ti.",
    consultEyebrow: "Empieza aquí", consultTitle: "Consulta — $49", consultText: "Hablamos de tu visión, lo que necesitas, tu estilo y te propongo una idea de cómo podría verse tu página antes de avanzar.",
    basicTitle: "Paquete Básico", basicPrice: "$399", oneTime: "Pago único", basicItem1: "Hosting de Badin-and-Co incluido", basicItem2: "Si ya tienes dominio, puedo conectarlo", basicItem3: "Una página tipo scroll", basicItem4: "Sección de inicio", basicItem5: "Quién eres / Misión / Visión", basicItem6: "Información de contacto solamente — sin formulario", basicItem7: "No incluye mantenimiento", basicItem8: "Recibes el código de tu página",
    mostPopular: "Más Popular", proTitle: "Paquete Pro", proPrice: "$599", proItem1: "Hosting de Badin-and-Co incluido", proItem2: "Si ya tienes dominio, puedo conectarlo", proItem3: "Dos páginas tipo scroll", proItem4: "Sección de inicio", proItem5: "Quién eres / Misión / Visión", proItem6: "Formulario de contacto conectado a tu correo", proItem7: "No incluye mantenimiento", proItem8: "Recibes el código de tu página",
    eliteTitle: "Paquete Elite", elitePrice: "$1,299", eliteItem1: "Hosting de Badin-and-Co incluido", eliteItem2: "Si ya tienes dominio, puedo conectarlo", eliteItem3: "Hasta 5 páginas personalizadas", eliteItem4: "Inicio, Acerca de, Misión/Visión, Servicios y Contacto", eliteItem5: "Configuración de formulario de contacto", eliteItem6: "Galería de proyectos o sección de portafolio", eliteItem7: "Opción bilingüe ENG / SPA", eliteItem8: "Animaciones premium y optimización móvil", eliteItem9: "Recibes el código de tu página",
    alaCarteEyebrow: "A la carta", alaCarteTitle: "¿Necesitas algo extra?", ala1Title: "Formulario de Contacto", ala1Text: "$150 — incluye tu propia cuenta con 50 entradas gratis al mes", ala2Title: "Página Scroll Adicional", ala2Text: "$150 cada una", ala3Title: "Página de Galería", ala3Text: "$150 + $50 por cada proyecto agregado", ala4Title: "Mantenimiento Mensual", ala4Text: "$150/mes con cambios ilimitados", ala5Title: "Cambios de Fotos", ala5Text: "Desde $50 para agregar o reemplazar una foto", ala6Title: "Cambios Personalizados", ala6Text: "El precio varía según la solicitud",
    requestInfo: "Pedir Información",
    demosEyebrow: "Demos", demosTitle: "Muestra cómo podría verse tu experiencia online.", demosText: "Elige una categoría y explora ejemplos. Cada vista previa se abre dentro de la página para que puedan cerrarla y seguir navegando.", filterAll: "Todo", filterWebsites: "Páginas web", filterInvitations: "Invitaciones", filterBranding: "Estilo de marca",
    demoWebsiteTitle: "Demo de Página Web", demoWebsiteText: "Área de vista previa para una página de negocio o servicio. Agrega aquí tu link cuando esté listo.",
    demoInvitationTitle: "Demos de Invitaciones Digitales Personalizadas", demoInvitationText: "Elige entre diferentes estilos de invitación para bodas, eventos y celebraciones especiales.", viewInvitationDemo: "Ver Demo de Invitación", invitationDemo1: "Demo Elegante", invitationDemo2: "Demo Romántica", invitationDemo3: "Demo Moderna", brandFeelTitle: "Vista de Estilo de Marca", brandFeelText: "Una sección visual para ayudar a tus clientes a imaginar colores, fotos, tono y la sensación de su futura página.",
    projectsEyebrow: "Proyectos", projectsTitle: "Ejemplos de páginas web próximamente.", projectsText: "Estas tarjetas están listas para tus futuros links de proyectos para que las personas puedan ver páginas reales cuando los agregues.",
    comingSoon: "Próximamente", viewPreview: "Ver Vista Previa", comingSoonBtn: "Próximamente",
    project1Title: "Página de Negocio", project1Text: "Una página limpia para negocios pequeños con servicios, acerca de y contacto.",
    project2Title: "Página de Bienes Raíces", project2Text: "Una página promocional simple para propiedades, open houses e información del agente.",
    project3Title: "Página de Restaurante", project3Text: "Una página informativa elegante para menú, horarios, ubicación y contacto.",
    project4Title: "Página de Marca Personal", project4Text: "Una presencia online profesional para portafolios, servicios y proyectos personales.",
    domainEyebrow: "Soporte de dominio", domainTitle: "¿Necesitas nombre para tu web?", domainText: "Puedo investigar dominios disponibles para tu negocio. Tú decides si quieres comprarlo y yo puedo ayudarte a conectarlo a tu página.", askDomains: "Preguntar por Dominios",
    caption1: "Páginas simples y fáciles de entender.", caption2: "Diseñadas según tus metas, no por tendencias al azar.", caption3: "Pulidas, cálidas y listas para compartir.",
    contactEyebrow: "Empecemos", contactTitle: "¿Lista para crear tu página web?", contactText: "Envíame tu información y el tipo de página que necesitas. Te contactaré para coordinar tu primera consulta.",
    labelName: "Nombre", namePlaceholder: "Tu nombre", labelEmail: "Correo", labelService: "Servicio de interés", labelMessage: "Cuéntame sobre tu idea de página web",
    messagePlaceholder: "Ejemplo: Necesito una página para mi negocio con Inicio, Servicios, Galería y Contacto.",
    sendRequest: "Enviar Solicitud", footer: "TB Websites. Páginas web informativas personalizadas.",
    optConsultation: "Primera Consulta", optBasic: "Paquete Básico", optPro: "Paquete Pro", optElite: "Paquete Elite", optDomain: "Ayuda con Dominio", optMaintenance: "Plan de Mantenimiento", optInvitations: "Invitaciones Personalizadas",
    sending: "Enviando tu solicitud...", success: name => `¡Gracias, ${name}! Tu solicitud fue enviada correctamente.`, error: "Algo salió mal. Intenta de nuevo o contáctame directamente.", offline: "No se pudo enviar ahora. Revisa tu conexión e intenta de nuevo."
  }
};

let currentLang = localStorage.getItem("language") || "en";

year.textContent = new Date().getFullYear();

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const value = translations[lang][key];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-placeholder-key]").forEach(element => {
    const key = element.dataset.placeholderKey;
    element.placeholder = translations[lang][key];
  });

  langButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

langButtons.forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

requestButtons.forEach(button => {
  button.addEventListener("click", () => {
    serviceSelect.value = button.dataset.service;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
});

previewButtons.forEach(button => {
  button.addEventListener("click", () => {
    const url = button.dataset.previewUrl;
    if (!url) return;
    previewFrame.src = url;
    previewModal.classList.add("active");
    previewModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closePreview() {
  previewModal.classList.remove("active");
  previewModal.setAttribute("aria-hidden", "true");
  previewFrame.src = "about:blank";
  document.body.style.overflow = "";
}

closePreviewButtons.forEach(button => {
  button.addEventListener("click", closePreview);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && previewModal.classList.contains("active")) {
    closePreview();
  }
});

form.addEventListener("submit", async event => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");

  formMessage.textContent = translations[currentLang].sending;

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      formMessage.textContent = translations[currentLang].success(name);
      form.reset();
    } else {
      formMessage.textContent = translations[currentLang].error;
    }
  } catch (error) {
    formMessage.textContent = translations[currentLang].offline;
  }
});


filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach(btn => btn.classList.toggle("active", btn === button));

    filterCards.forEach(card => {
      const shouldShow = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealSections.forEach(section => revealObserver.observe(section));

setLanguage(currentLang);


document.addEventListener("DOMContentLoaded", function () {
  var revealSections = document.querySelectorAll(".reveal-section");

  revealSections.forEach(function (section) {
    section.classList.remove("visible");
  });

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.18
  });

  revealSections.forEach(function (section) {
    revealObserver.observe(section);
  });

  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});