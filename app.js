/* ============================================
   BarberHome Medellín — JavaScript
   Vanilla JS · Sin dependencias externas
   ============================================ */

(function () {
  'use strict';

  /* ─── Translations ─── */
  var i18n = {
    es: {
      // Nav
      nav_services: 'Servicios',
      nav_zones:    'Zonas',
      nav_book:     'Reservar',
      // Hero
      hero_eyebrow:       '✦ Barbería a Domicilio en Medellín ✦',
      hero_title:         'Tu barbero.<br/>Tu casa.<br/>Tu estilo.',
      hero_sub:           'Llevamos la experiencia de barbería premium directamente a tu hogar.<br/>Sin esperas. Sin desplazamientos. Solo excelencia.',
      hero_cta_primary:   'Reservar Cita',
      hero_cta_secondary: 'Ver Servicios',
      hero_scroll:        'Descubre más',
      // Services section
      svc_eyebrow: '— Lo que ofrecemos —',
      svc_title:   'Nuestros Servicios',
      svc_sub:     'Cada servicio incluye la atención personalizada de un barbero profesional en la comodidad de tu espacio.',
      // Badges
      badge_popular:     'Más popular',
      badge_recommended: 'Recomendado',
      badge_vip:         'VIP Exclusivo',
      badge_specialty:   'Especialidad',
      // Card 1
      c1_title: 'Corte Clásico',
      c1_f1: 'Corte personalizado a tu gusto',
      c1_f2: 'Diseño y acabado profesional',
      c1_f3: 'Lavado incluido',
      // Card 2
      c2_title: 'Corte + Barba',
      c2_f1: 'Corte completo a tu estilo',
      c2_f2: 'Arreglo de barba profesional',
      c2_f3: '🔥 Toalla caliente',
      c2_f4: '🌿 Exfoliación facial',
      // Card 3
      c3_title: 'La Experiencia',
      c3_f1: 'Servicio completo premium',
      c3_f2: 'Tratamiento facial de lujo',
      c3_f3: '🔥 Toalla caliente',
      c3_f4: '🌿 Exfoliación profunda',
      c3_f5: '💧 Aceites esenciales',
      c3_f6: '👂 Limpieza de oídos y nariz',
      // Card 4
      c4_title: 'Solo Barba',
      c4_f1: 'Diseño y perfilado de barba',
      c4_f2: '🔥 Toalla caliente',
      c4_f3: '🌿 Exfoliación facial',
      c4_f4: '💧 Aceites esenciales',
      // Card 5
      c5_title: 'Limpieza de Oídos y Nariz',
      c5_f1: 'Limpieza profesional y segura',
      c5_f2: 'Complemento ideal para cualquier servicio',
      // CTAs
      cta_book: 'Reservar',
      cta_add:  'Agregar',
      // Zones
      zones_eyebrow: '— Cobertura —',
      zones_title:   '¿Dónde llegamos?',
      zones_sub:     'Cubrimos los mejores sectores de Medellín y el Área Metropolitana.',
      z1_desc: 'Zona Rosa, Parque Lleras, Patio Bonito y alrededores.',
      z2_desc: 'Belén La Gloria, Manzanillo, Las Mercedes y alrededores.',
      z3_desc: 'Estadio, Los Conquistadores, La 70 y alrededores.',
      z4_desc: 'El Esmeraldal, Loma del Escobero, Centro de Envigado.',
      // Why us
      why_eyebrow: '— ¿Por qué nosotros? —',
      why_title:   'La diferencia BarberHome',
      v1_title: 'Sin Esperas',
      v1_desc:  'Llegamos a la hora acordada. Tu tiempo es valioso.',
      v2_title: 'En tu Espacio',
      v2_desc:  'Comodidad total. Tu casa, tu apartamento, tu oficina.',
      v3_title: 'Equipo Profesional',
      v3_desc:  'Herramientas certificadas y productos de alta calidad.',
      v4_title: 'Experiencia Premium',
      v4_desc:  'Servicio que supera cualquier barbería tradicional.',
      // Contact
      contact_eyebrow: '— Contáctanos —',
      contact_title:   'Reserva tu Cita',
      contact_sub:     'Escríbenos y confirmamos disponibilidad en minutos.',
      form_name:       'Nombre completo',
      form_name_ph:    'Tu nombre',
      form_phone:      'Teléfono / WhatsApp',
      form_zone:       'Barrio / Zona',
      form_zone_ph:    'Selecciona tu zona',
      form_service:    'Servicio deseado',
      form_service_ph: 'Selecciona un servicio',
      form_msg:        'Mensaje adicional (opcional)',
      form_msg_ph:     'Horario preferido, dirección, indicaciones especiales...',
      form_submit:     'Enviar por WhatsApp',
      form_note:       'También puedes escribirnos directamente al <strong>WhatsApp</strong> y atendemos de inmediato.',
      opt1: 'Corte Clásico — $100.000',
      opt2: 'Corte + Barba — $150.000',
      opt3: 'La Experiencia VIP — $250.000',
      opt4: 'Solo Barba — $100.000',
      opt5: 'Limpieza de Oídos y Nariz — $40.000',
      ci_wa:           'Respuesta inmediata',
      ci_zones_title:  'Zonas de cobertura',
      ci_hours_title:  'Horario de atención',
      ci_hours:        'Lunes a Sábado: 8am – 8pm<br/>Domingo: 9am – 5pm',
      ci_confirm_title:'Confirmación',
      ci_confirm:      'En menos de 30 minutos',
      // Footer
      footer_tagline: 'Barbería a domicilio premium en Medellín',
      footer_copy:    '© 2026 BarberHome Medellín. Todos los derechos reservados.',
      // Meta
      meta_desc: 'Barbería a domicilio en Medellín. Atendemos en El Poblado, Belén, Laureles y Envigado. Cortes premium, arreglo de barba con toalla caliente y exfoliación. Reserva ahora.',
      page_title: 'BarberHome Medellín — Barbería a Domicilio',
      // Toast
      toast_wa: '✅ ¡Redirigiendo a WhatsApp!',
      toast_err: '⚠️ Por favor completa todos los campos requeridos.',
    },
    en: {
      // Nav
      nav_services: 'Services',
      nav_zones:    'Areas',
      nav_book:     'Book Now',
      // Hero
      hero_eyebrow:       '✦ Mobile Barber Service in Medellín ✦',
      hero_title:         'Your barber.<br/>Your home.<br/>Your style.',
      hero_sub:           'We bring the premium barbershop experience directly to you.<br/>No waiting. No travel. Just excellence.',
      hero_cta_primary:   'Book Appointment',
      hero_cta_secondary: 'See Services',
      hero_scroll:        'Discover more',
      // Services section
      svc_eyebrow: '— What we offer —',
      svc_title:   'Our Services',
      svc_sub:     'Every service includes personalized attention from a professional barber in the comfort of your space.',
      // Badges
      badge_popular:     'Most popular',
      badge_recommended: 'Recommended',
      badge_vip:         'VIP Exclusive',
      badge_specialty:   'Specialty',
      // Card 1
      c1_title: 'Classic Haircut',
      c1_f1: 'Custom cut to your preference',
      c1_f2: 'Professional design and finish',
      c1_f3: 'Wash included',
      // Card 2
      c2_title: 'Haircut + Beard',
      c2_f1: 'Full haircut your way',
      c2_f2: 'Professional beard trim',
      c2_f3: '🔥 Hot towel',
      c2_f4: '🌿 Facial exfoliation',
      // Card 3
      c3_title: 'The Experience',
      c3_f1: 'Full premium service',
      c3_f2: 'Luxury facial treatment',
      c3_f3: '🔥 Hot towel',
      c3_f4: '🌿 Deep exfoliation',
      c3_f5: '💧 Essential oils',
      c3_f6: '👂 Ear & nose cleaning',
      // Card 4
      c4_title: 'Beard Only',
      c4_f1: 'Beard design & shaping',
      c4_f2: '🔥 Hot towel',
      c4_f3: '🌿 Facial exfoliation',
      c4_f4: '💧 Essential oils',
      // Card 5
      c5_title: 'Ear & Nose Cleaning',
      c5_f1: 'Professional & safe cleaning',
      c5_f2: 'Perfect add-on for any service',
      // CTAs
      cta_book: 'Book Now',
      cta_add:  'Add On',
      // Zones
      zones_eyebrow: '— Coverage —',
      zones_title:   'Where do we go?',
      zones_sub:     'We cover the best areas of Medellín and the Metropolitan Area.',
      z1_desc: 'Zona Rosa, Parque Lleras, Patio Bonito and surroundings.',
      z2_desc: 'Belén La Gloria, Manzanillo, Las Mercedes and surroundings.',
      z3_desc: 'Estadio, Los Conquistadores, La 70 and surroundings.',
      z4_desc: 'El Esmeraldal, Loma del Escobero, Centro de Envigado.',
      // Why us
      why_eyebrow: '— Why us? —',
      why_title:   'The BarberHome difference',
      v1_title: 'No Waiting',
      v1_desc:  'We arrive on time. Your schedule matters.',
      v2_title: 'Your Space',
      v2_desc:  'Total comfort. Your home, apartment, or office.',
      v3_title: 'Pro Equipment',
      v3_desc:  'Certified tools and premium quality products.',
      v4_title: 'Premium Experience',
      v4_desc:  'A service that surpasses any traditional barbershop.',
      // Contact
      contact_eyebrow: '— Contact us —',
      contact_title:   'Book Your Appointment',
      contact_sub:     'Message us and we confirm availability in minutes.',
      form_name:       'Full name',
      form_name_ph:    'Your name',
      form_phone:      'Phone / WhatsApp',
      form_zone:       'Neighborhood / Area',
      form_zone_ph:    'Select your area',
      form_service:    'Desired service',
      form_service_ph: 'Select a service',
      form_msg:        'Additional message (optional)',
      form_msg_ph:     'Preferred time, address, special instructions...',
      form_submit:     'Send via WhatsApp',
      form_note:       'You can also message us directly on <strong>WhatsApp</strong> for immediate attention.',
      opt1: 'Classic Haircut — $100.000',
      opt2: 'Haircut + Beard — $150.000',
      opt3: 'The VIP Experience — $250.000',
      opt4: 'Beard Only — $100.000',
      opt5: 'Ear & Nose Cleaning — $40.000',
      ci_wa:           'Immediate response',
      ci_zones_title:  'Coverage areas',
      ci_hours_title:  'Business hours',
      ci_hours:        'Monday to Saturday: 8am – 8pm<br/>Sunday: 9am – 5pm',
      ci_confirm_title:'Confirmation',
      ci_confirm:      'In less than 30 minutes',
      // Footer
      footer_tagline: 'Premium mobile barber service in Medellín',
      footer_copy:    '© 2026 BarberHome Medellín. All rights reserved.',
      // Meta
      meta_desc: 'Mobile barber service in Medellín. We serve El Poblado, Belén, Laureles and Envigado. Premium haircuts, beard trims with hot towel and exfoliation. Book now.',
      page_title: 'BarberHome Medellín — Mobile Barber Service',
      // Toast
      toast_wa:  '✅ Redirecting to WhatsApp!',
      toast_err: '⚠️ Please fill in all required fields.',
    }
  };

  var currentLang = 'es';

  /* ─── Apply translations ─── */
  window.setLang = function (lang) {
    if (!i18n[lang]) return;
    currentLang = lang;

    var t = i18n[lang];

    // Update html lang attribute
    document.getElementById('htmlRoot').setAttribute('lang', lang);

    // Update page title
    document.title = t.page_title;

    // Update meta description
    var metaDesc = document.getElementById('metaDesc');
    if (metaDesc) metaDesc.setAttribute('content', t.meta_desc);

    // Update regular text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // Update innerHTML (for elements with HTML tags like <br/> or <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    // Update active button state — desktop
    var btnEs    = document.getElementById('btnEs');
    var btnEn    = document.getElementById('btnEn');
    var btnEsMob = document.getElementById('btnEsMob');
    var btnEnMob = document.getElementById('btnEnMob');

    if (btnEs)    btnEs.classList.toggle('active', lang === 'es');
    if (btnEn)    btnEn.classList.toggle('active', lang === 'en');
    if (btnEsMob) btnEsMob.classList.toggle('active', lang === 'es');
    if (btnEnMob) btnEnMob.classList.toggle('active', lang === 'en');
  };

  /* ─── Navbar scroll ─── */
  var navbar = document.getElementById('navbar');
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ─── Hamburger menu ─── */
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.mob-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  /* ─── Scroll-reveal animations ─── */
  function revealOnScroll() {
    var targets = document.querySelectorAll(
      '.service-card, .zona-card, .valor-item'
    );
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el    = entry.target;
            var delay = parseInt(el.dataset.delay || 0, 10);
            setTimeout(function () {
              el.classList.add('visible');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach(function (el) { observer.observe(el); });
  }
  revealOnScroll();

  /* ─── Toast notification ─── */
  function showToast(msg) {
    var toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3200);
  }

  /* ─── Contact form → WhatsApp ─── */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre   = form.nombre.value.trim();
      var telefono = form.telefono.value.trim();
      var zona     = form.zona.value;
      var servicio = form.servicio.value;
      var mensaje  = form.mensaje.value.trim();

      if (!nombre || !telefono || !zona || !servicio) {
        showToast(i18n[currentLang].toast_err);
        return;
      }

      var lines = [
        '✦ *RESERVA — BarberHome Medellín* ✦',
        '',
        '👤 *' + (currentLang === 'es' ? 'Nombre' : 'Name') + ':* ' + nombre,
        '📞 *' + (currentLang === 'es' ? 'Teléfono' : 'Phone') + ':* ' + telefono,
        '📍 *' + (currentLang === 'es' ? 'Zona' : 'Area') + ':* ' + zona,
        '✂ *' + (currentLang === 'es' ? 'Servicio' : 'Service') + ':* ' + servicio,
      ];
      if (mensaje) {
        lines.push('💬 *' + (currentLang === 'es' ? 'Mensaje' : 'Message') + ':* ' + mensaje);
      }
      lines.push('', '_Enviado desde barberhomemedellin.co_');

      var text   = encodeURIComponent(lines.join('\n'));
      var number = '573043262248';
      var waUrl  = 'https://wa.me/' + number + '?text=' + text;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
      showToast(i18n[currentLang].toast_wa);
      form.reset();
    });
  }

  /* ─── Active nav link highlight ─── */
  var sections   = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 90;
      if (window.scrollY >= top) { current = section.id; }
    });
    navAnchors.forEach(function (a) {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ─── Subtle parallax on hero ─── */
  var hero = document.getElementById('hero');
  function heroParallax() {
    if (!hero) return;
    var offset = window.scrollY * 0.35;
    hero.style.backgroundPositionY = offset + 'px';
  }
  window.addEventListener('scroll', heroParallax, { passive: true });

})();
