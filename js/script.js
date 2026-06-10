/* ═══════════════════════════════════════════════════════
   BRAJ ROYALE — Complete Interactive Script
═══════════════════════════════════════════════════════ */

"use strict";

// ═══════════════════════════════
// MENU DATA — 30+ Items
// ═══════════════════════════════
const MENU_ITEMS = [
  // PIZZA
  { id:1, cat:'pizza', name:'Paneer Tikka Royale', desc:'Wood-fired base, smoky paneer, tandoori sauce, roasted peppers', price:349, rating:4.8, reviews:312, badge:'bestseller', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:2, cat:'pizza', name:'Golden Corn Fiesta', desc:'Sweet corn, jalapeños, mozzarella, golden paprika crust', price:299, rating:4.6, reviews:188, badge:'new', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80' },
  { id:3, cat:'pizza', name:'Mushroom & Truffle', desc:'Wild mushrooms, truffle oil, béchamel, fresh thyme', price:429, rating:4.9, reviews:245, badge:'bestseller', img:'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&q=80' },
  { id:4, cat:'pizza', name:'Margherita Divina', desc:'San Marzano tomato, fresh buffalo mozzarella, basil, EVOO', price:279, rating:4.5, reviews:420, badge:null, img:'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&q=80' },

  // BURGER
  { id:5, cat:'burger', name:'Braj Royal Burger', desc:'Double paneer patty, house sauce, caramelised onions, brioche bun', price:249, rating:4.7, reviews:298, badge:'bestseller', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
  { id:6, cat:'burger', name:'Crispy Aloo Tikki', desc:'Spiced potato patty, mint chutney, pickled onions, sesame bun', price:189, rating:4.5, reviews:372, badge:null, img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&q=80' },
  { id:7, cat:'burger', name:'Smoky BBQ Mushroom', desc:'Portobello mushroom, BBQ glaze, coleslaw, cheddar, brioche', price:219, rating:4.6, reviews:164, badge:'new', img:'https://images.unsplash.com/photo-1534938665420-4193effeacc4?w=500&q=80' },

  // PASTA
  { id:8, cat:'pasta', name:'Pesto Paneer Penne', desc:'Homemade basil pesto, paneer cubes, cherry tomatoes, pine nuts', price:269, rating:4.7, reviews:201, badge:null, img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80' },
  { id:9, cat:'pasta', name:'Arrabiata Royale', desc:'Spicy tomato sauce, fresh basil, garlic chips, aged parmesan', price:239, rating:4.5, reviews:167, badge:null, img:'https://images.unsplash.com/photo-1551183053-bf91798d765f?w=500&q=80' },
  { id:10, cat:'pasta', name:'Creamy Alfredo', desc:'Rich cream sauce, butter, parm, garlic, Italian parsley', price:289, rating:4.8, reviews:289, badge:'bestseller', img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80' },

  // SANDWICH
  { id:11, cat:'sandwich', name:'Club Royale', desc:'Toasted sourdough, paneer, cheese, lettuce, house aioli', price:179, rating:4.5, reviews:143, badge:null, img:'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&q=80' },
  { id:12, cat:'sandwich', name:'Grilled Veggie Melt', desc:'Grilled aubergine, capsicum, mozzarella, pesto, ciabatta', price:199, rating:4.4, reviews:98, badge:null, img:'https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=500&q=80' },
  { id:13, cat:'sandwich', name:'Tandoori Wrap', desc:'Soft roti, tandoori paneer, raita, mint chutney', price:159, rating:4.6, reviews:320, badge:'bestseller', img:'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=500&q=80' },

  // THALI
  { id:14, cat:'thali', name:'Braj Maharaja Thali', desc:'8 dishes: dal, 2 sabzis, paneer, rice, 4 rotis, dessert, papad', price:449, rating:4.9, reviews:512, badge:'bestseller', img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80' },
  { id:15, cat:'thali', name:'Vrindavan Special Thali', desc:'6-dish feast with kadhi, mixed veg, pulao, dessert', price:349, rating:4.8, reviews:387, badge:null, img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80' },
  { id:16, cat:'thali', name:'Mini Thali', desc:'Dal, sabzi, 2 rotis, rice, raita — perfect for solo diners', price:229, rating:4.6, reviews:210, badge:null, img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80' },

  // SOUTH INDIAN
  { id:17, cat:'southindian', name:'Masala Dosa Royale', desc:'Crispy dosa, spiced potato masala, coconut chutney, sambar', price:149, rating:4.7, reviews:680, badge:'bestseller', img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80' },
  { id:18, cat:'southindian', name:'Uthappam Medley', desc:'Thick rice pancake with onion, tomato, green chilli, coriander', price:139, rating:4.5, reviews:241, badge:null, img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80' },
  { id:19, cat:'southindian', name:'Idli Sambar Platter', desc:'4 soft idlis, drum-stick sambar, 3 chutneys', price:119, rating:4.6, reviews:390, badge:null, img:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&q=80' },
  { id:20, cat:'southindian', name:'Medu Vada', desc:'Crispy lentil donuts, sambar dip, coconut chutney', price:99, rating:4.4, reviews:275, badge:null, img:'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=500&q=80' },

  // CHINESE
  { id:21, cat:'chinese', name:'Paneer Manchurian', desc:'Golden paneer balls in spicy manchurian gravy, fried rice', price:249, rating:4.7, reviews:310, badge:'bestseller', img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80' },
  { id:22, cat:'chinese', name:'Veg Hakka Noodles', desc:'Wok-tossed noodles, mixed veggies, soy-ginger sauce', price:189, rating:4.5, reviews:267, badge:null, img:'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&q=80' },
  { id:23, cat:'chinese', name:'Veg Fried Rice', desc:'Fragrant jasmine rice, seasonal vegetables, sesame oil', price:169, rating:4.4, reviews:198, badge:null, img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80' },
  { id:24, cat:'chinese', name:'Chilli Paneer Dry', desc:'Crispy paneer, soy-chilli sauce, spring onion, sesame seeds', price:229, rating:4.7, reviews:415, badge:'bestseller', img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80' },

  // DESSERTS
  { id:25, cat:'dessert', name:'Gulab Jamun Soufflé', desc:'Warm milk-solid soufflé, rose-cardamom syrup, pistachio dust', price:169, rating:4.9, reviews:480, badge:'bestseller', img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80' },
  { id:26, cat:'dessert', name:'Saffron Panna Cotta', desc:'Silky panna cotta, saffron gel, candied orange peel', price:189, rating:4.8, reviews:201, badge:'new', img:'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&q=80' },
  { id:27, cat:'dessert', name:'Mango Kulfi Royale', desc:'House-churned Alphonso mango kulfi, pistachio crumble', price:149, rating:4.7, reviews:356, badge:null, img:'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=80' },
  { id:28, cat:'dessert', name:'Chocolate Lava Cake', desc:'Dark 70% chocolate fondant, vanilla bean ice cream', price:199, rating:4.9, reviews:523, badge:'bestseller', img:'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&q=80' },

  // BEVERAGES
  { id:29, cat:'beverage', name:'Rose Thandai', desc:'Cold rose-infused milk, almonds, pistachios, saffron', price:99, rating:4.8, reviews:312, badge:'bestseller', img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80' },
  { id:30, cat:'beverage', name:'Vrindavan Lemonade', desc:'House-made lemonade, tulsi, black salt, fresh mint', price:79, rating:4.6, reviews:445, badge:null, img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80' },
  { id:31, cat:'beverage', name:'Mango Lassi', desc:'Thick Alphonso mango, hung curd, rose water, cardamom', price:89, rating:4.7, reviews:530, badge:'bestseller', img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80' },
  { id:32, cat:'beverage', name:'Masala Chai', desc:'Ginger, cardamom, cinnamon, full-cream milk, Assam tea', price:59, rating:4.5, reviews:812, badge:null, img:'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=500&q=80' },
  { id:33, cat:'beverage', name:'Jaljeera Cooler', desc:'Chilled cumin-mint water, lemon, black salt, pomegranate', price:69, rating:4.4, reviews:189, badge:null, img:'https://images.unsplash.com/photo-1571006682291-adaef4c32de8?w=500&q=80' },
];

// ═══════════════════════════════
// REVIEWS DATA
// ═══════════════════════════════
const REVIEWS = [
  { name:'Priya Sharma', role:'Food Blogger, Delhi', text:'"Braj Royale is the first restaurant in India that made me feel like I was dining in a Michelin-star kitchen while being spiritually present in Vrindavan."', stars:5, avatar:'https://i.pravatar.cc/80?img=1' },
  { name:'Arjun Mehta', role:'Travel Writer', text:'"The Maharaja Thali is something else entirely. Layers of flavour, perfect spice balance, served with absolute elegance. I drove 200km just for this."', stars:5, avatar:'https://i.pravatar.cc/80?img=7' },
  { name:'Kavitha Nair', role:'Interior Designer, Mumbai', text:'"The ambience alone deserves 5 stars. Gold light, temple motifs, the smell of fresh flowers — I felt like a guest in a royal palace."', stars:5, avatar:'https://i.pravatar.cc/80?img=5' },
  { name:'Rahul Verma', role:'Tech Entrepreneur', text:'"Best pizza in Vrindavan, arguably in all of UP. The paneer tikka royale is criminally good. Already booked my next visit."', stars:5, avatar:'https://i.pravatar.cc/80?img=12' },
  { name:'Sneha Kulkarni', role:'Nutritionist', text:'"Pure vegetarian fine dining that does not compromise on flavour or creativity. The saffron panna cotta is unlike anything I\'ve had."', stars:5, avatar:'https://i.pravatar.cc/80?img=9' },
  { name:'Amit Agarwal', role:'Chartered Accountant', text:'"Perfect for anniversary dinners. The staff arranged the most beautiful table setup with flowers and diyas. Truly a magical experience."', stars:5, avatar:'https://i.pravatar.cc/80?img=15' },
  { name:'Deepika Rao', role:'Yoga Instructor', text:'"I travel to Vrindavan every month and Braj Royale is my non-negotiable stop. The rose thandai is pure poetry in a glass."', stars:5, avatar:'https://i.pravatar.cc/80?img=20' },
  { name:'Vikram Singh', role:'Hotelier, Agra', text:'"As a hospitality professional, I rarely give 5 stars. Braj Royale earned every one. Service, presentation, and flavour — all world class."', stars:5, avatar:'https://i.pravatar.cc/80?img=33' },
];

// ═══════════════════════════════
// GALLERY DATA
// ═══════════════════════════════
const GALLERY_ITEMS = [
  { img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', caption:'The Royal Hall', tall:true },
  { img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', caption:'Paneer Tikka Royale' },
  { img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80', caption:'Gulab Jamun Soufflé' },
  { img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80', caption:'Chef at Work' },
  { img:'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&q=80', caption:'Mushroom Truffle Pizza', tall:true },
  { img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80', caption:'Maharaja Thali' },
  { img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80', caption:'Rose Thandai' },
  { img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', caption:'Braj Royal Burger', tall:true },
  { img:'https://images.unsplash.com/photo-1551183053-bf91798d765f?w=500&q=80', caption:'Pasta Arrabiata' },
  { img:'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&q=80', caption:'Chocolate Lava Cake' },
  { img:'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=80', caption:'Mango Kulfi' },
  { img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80', caption:'Masala Dosa' },
];

// ═══════════════════════════════
// PIZZA STATE
// ═══════════════════════════════
const pizzaState = {
  base: 'thin',
  toppings: new Set(),
  basePrice: 249,
  toppingPrices: { cheese:40, paneer:50, mushroom:35, olives:30, corn:25, capsicum:25, jalapeno:30, onion:20, tomato:20 },
};

const toppingColors = {
  cheese:   '#FFD700',
  paneer:   '#F5E6D0',
  mushroom: '#8B7355',
  olives:   '#6B6B3A',
  corn:     '#FFE066',
  capsicum: '#2ECC40',
  jalapeno: '#27AE60',
  onion:    '#C0A0B8',
  tomato:   '#E74C3C',
};

// ═══════════════════════════════
// BURGER STATE
// ═══════════════════════════════
const burgerState = {
  layers: new Set(['bun-bot']),
  basePrice: 199,
  layerPrices: { patty:60, cheese:30, tomato:15, onion:15, sauce:20, lettuce:10 },
};

// ═══════════════════════════════
// CART STATE
// ═══════════════════════════════
let cart = [];

// ═══════════════════════════════
// INIT
// ═══════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initSpotlight();
  initParticleCanvas();
  renderMenu('all');
  renderReviews();
  renderGallery();
  initScrollReveal();
  initMenuFilters();
  initBurgerBuilder();
  initNavScroll();
  setDefaultDate();
});

// ════════════════════════════════════
// LOADER
// ════════════════════════════════════
function initLoader() {
  const loader    = document.getElementById('loader');
  const bar       = document.querySelector('.loader-bar');
  const percent   = document.querySelector('.loader-percent');
  let progress    = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 8 + 2;
    if (progress >= 100) { progress = 100; clearInterval(interval); }
    bar.style.width = progress + '%';
    percent.textContent = Math.floor(progress) + '%';

    if (progress === 100) {
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.style.display = 'none';
          triggerHeroIntro();
        }, 800);
      }, 400);
    }
  }, 60);
}

// ════════════════════════════════════
// HERO INTRO — CINEMATIC SEQUENCE
// ════════════════════════════════════
function triggerHeroIntro() {
  const scene1   = document.getElementById('heroScene1');
  const heroMain = document.getElementById('heroMain');
  const resCard  = document.getElementById('heroResCard');

  // Scene 1: Logo Reveal
  scene1.classList.add('active');

  // Scene 2–3: Particles + Logo hold
  setTimeout(() => {
    scene1.style.transition = 'opacity 1s ease';
    scene1.style.opacity = '0';
    setTimeout(() => { scene1.style.display = 'none'; }, 1000);

    // Reveal main hero
    heroMain.classList.add('visible');
    resCard.classList.add('visible');
  }, 2800);
}

// ════════════════════════════════════
// CUSTOM CURSOR
// ════════════════════════════════════
function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth follower
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover expand
  const hoverTargets = document.querySelectorAll('a, button, .menu-card, .gallery-item, .exp-card, .topping-btn');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('expanded');
      follower.classList.add('expanded');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('expanded');
      follower.classList.remove('expanded');
    });
  });
}

// ════════════════════════════════════
// SPOTLIGHT
// ════════════════════════════════════
function initSpotlight() {
  const spotlight = document.createElement('div');
  spotlight.className = 'spotlight';
  document.body.appendChild(spotlight);

  document.addEventListener('mousemove', (e) => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top  = e.clientY + 'px';
  });
}

// ════════════════════════════════════
// PARTICLE CANVAS
// ════════════════════════════════════
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.6 + 0.1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -(Math.random() * 0.5 + 0.2),
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201, 146, 10, ${p.opacity})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#FFD700';
      ctx.fill();
      ctx.shadowBlur = 0;

      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10 || p.x > canvas.width + 10) { p.x = Math.random() * canvas.width; }
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ════════════════════════════════════
// NAVBAR SCROLL
// ════════════════════════════════════
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ════════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════════
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}

// ════════════════════════════════════
// MENU RENDER
// ════════════════════════════════════
function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const items = cat === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === cat);

  items.forEach((item, idx) => {
    const stars = '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 >= 0.5 ? '★' : '');
    const badgeHTML = item.badge
      ? `<span class="menu-badge badge-${item.badge}">${item.badge}</span>` : '';

    const card = document.createElement('div');
    card.className = 'menu-card reveal-up';
    card.style.setProperty('--delay', (idx * 0.05) + 's');
    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy" />
        ${badgeHTML}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-cat">${item.cat}</div>
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">₹${item.price}</span>
          <div class="menu-card-rating">
            <span class="stars">${stars}</span>
            <span>${item.rating} (${item.reviews})</span>
          </div>
          <button class="add-btn" onclick="addToCart(${item.id})" title="Add to order">+</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // Re-observe new elements
  setTimeout(() => {
    const newEls = grid.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    newEls.forEach(el => observer.observe(el));
  }, 50);
}

// ════════════════════════════════════
// MENU FILTERS
// ════════════════════════════════════
function initMenuFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      renderMenu(cat);
    });
  });
}

// ════════════════════════════════════
// GALLERY
// ════════════════════════════════════
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  GALLERY_ITEMS.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal-up';
    div.style.setProperty('--delay', (i * 0.08) + 's');
    div.innerHTML = `
      <img src="${item.img}" alt="${item.caption}" loading="lazy" />
      <div class="gallery-overlay"><span>${item.caption}</span></div>`;
    div.addEventListener('click', () => openLightbox(item.img, item.caption));
    grid.appendChild(div);
  });

  setTimeout(() => {
    const els = grid.querySelectorAll('.reveal-up');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  }, 50);
}

function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lbImg').src = src;
  document.getElementById('lbCaption').textContent = caption;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ════════════════════════════════════
// REVIEWS
// ════════════════════════════════════
function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;

  // Duplicate for infinite scroll
  const allReviews = [...REVIEWS, ...REVIEWS];
  allReviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card glass-card';
    card.innerHTML = `
      <div class="rc-stars">${'★'.repeat(r.stars)}</div>
      <div class="rc-text">${r.text}</div>
      <div class="rc-author">
        <img class="rc-avatar" src="${r.avatar}" alt="${r.name}" loading="lazy"/>
        <div>
          <div class="rc-name">${r.name}</div>
          <div class="rc-role">${r.role}</div>
        </div>
      </div>`;
    track.appendChild(card);
  });
}

// ════════════════════════════════════
// PIZZA BUILDER
// ════════════════════════════════════
function selectBase(btn, base) {
  document.querySelectorAll('.bc-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  pizzaState.base = base;

  if (base === 'thin') pizzaState.basePrice = 249;
  else if (base === 'thick') pizzaState.basePrice = 279;
  else if (base === 'cheese') pizzaState.basePrice = 329;

  updatePizzaPrice();
  showToast(`${base.charAt(0).toUpperCase()+base.slice(1)} Crust selected ✓`);
}

function addPizzaTopping(btn) {
  const topping = btn.dataset.topping;
  const isActive = btn.classList.contains('active');

  if (isActive) {
    btn.classList.remove('active');
    pizzaState.toppings.delete(topping);
    removePizzaTopping(topping);
  } else {
    btn.classList.add('active');
    pizzaState.toppings.add(topping);
    animateToppingOnPizza(topping);
  }
  updatePizzaPrice();
}

function animateToppingOnPizza(topping) {
  const layer = document.getElementById('pizzaToppings');
  const color = toppingColors[topping] || '#AAA';
  const count = topping === 'cheese' ? 8 : (topping === 'corn' ? 12 : 6);

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'topping-particle';
      el.dataset.topping = topping;
      const angle = Math.random() * 360;
      const dist  = 30 + Math.random() * 70;
      const cx    = 50 + dist * Math.cos(angle * Math.PI / 180);
      const cy    = 50 + dist * Math.sin(angle * Math.PI / 180);
      const size  = topping === 'cheese' ? 14 : (topping === 'corn' ? 7 : 10);

      el.style.cssText = `
        left: ${cx}%; top: ${cy}%;
        width: ${size}px; height: ${size + (topping === 'paneer' ? 4 : 0)}px;
        background: ${color};
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        border-radius: ${topping === 'paneer' ? '3px' : '50%'};
        transform: translate(-50%, -50%);
      `;
      layer.appendChild(el);
    }, i * 60);
  }

  // Special cheese drip
  if (topping === 'cheese') {
    const base = document.getElementById('pizzaBase');
    base.style.filter = 'brightness(1.1)';
    setTimeout(() => { base.style.filter = ''; }, 600);
  }

  // Show sauce on first topping
  const sauce = document.querySelector('.pizza-sauce');
  if (sauce) sauce.classList.add('visible');
}

function removePizzaTopping(topping) {
  const layer = document.getElementById('pizzaToppings');
  const particles = layer.querySelectorAll(`[data-topping="${topping}"]`);
  particles.forEach(p => {
    p.style.transition = 'all 0.3s ease';
    p.style.opacity = '0';
    p.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => p.remove(), 300);
  });
}

function updatePizzaPrice() {
  let total = pizzaState.basePrice;
  pizzaState.toppings.forEach(t => { total += pizzaState.toppingPrices[t] || 0; });
  document.getElementById('pizzaPrice').textContent = '₹' + total;
}

// ════════════════════════════════════
// BURGER BUILDER
// ════════════════════════════════════
function initBurgerBuilder() {
  renderBurgerStack();
}

function renderBurgerStack() {
  const stack = document.getElementById('burgerStack');
  if (!stack) return;
  stack.innerHTML = '';

  const layerOrder = ['bun-bot', 'lettuce', 'sauce', 'onion', 'tomato', 'cheese', 'patty', 'bun-top'];
  layerOrder.forEach((layer, idx) => {
    if (layer === 'bun-bot' || layer === 'bun-top' || burgerState.layers.has(layer)) {
      const div = document.createElement('div');
      div.className = `burger-layer blayer-${layer}`;
      div.style.animationDelay = (idx * 0.06) + 's';
      stack.appendChild(div);
    }
  });
}

function toggleBurgerLayer(btn) {
  const layer = btn.dataset.layer;
  if (layer === 'bun-top' || layer === 'bun-bot') return;

  const isActive = btn.classList.contains('active');
  if (isActive) {
    btn.classList.remove('active');
    burgerState.layers.delete(layer);
  } else {
    btn.classList.add('active');
    burgerState.layers.add(layer);
  }
  renderBurgerStack();
  updateBurgerPrice();
}

function updateBurgerPrice() {
  let total = burgerState.basePrice;
  burgerState.layers.forEach(l => { total += burgerState.layerPrices[l] || 0; });
  document.getElementById('burgerPrice').textContent = '₹' + total;
}

// ════════════════════════════════════
// BUILDER SWITCHER
// ════════════════════════════════════
function switchBuilder(type) {
  const pizzaBuilder  = document.getElementById('pizzaBuilder');
  const burgerBuilder = document.getElementById('burgerBuilder');
  const pizzaToggle   = document.getElementById('pizzaToggle');
  const burgerToggle  = document.getElementById('burgerToggle');

  if (type === 'pizza') {
    pizzaBuilder.classList.remove('hidden');
    burgerBuilder.classList.add('hidden');
    pizzaToggle.classList.add('active');
    burgerToggle.classList.remove('active');
  } else {
    burgerBuilder.classList.remove('hidden');
    pizzaBuilder.classList.add('hidden');
    burgerToggle.classList.add('active');
    pizzaToggle.classList.remove('active');
  }
}

// ════════════════════════════════════
// CART
// ════════════════════════════════════
function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCart();
  showToast(`${item.name} added to order! 🎉`);
}

function addToCartPizza() {
  let total = pizzaState.basePrice;
  pizzaState.toppings.forEach(t => { total += pizzaState.toppingPrices[t] || 0; });
  const toppings = [...pizzaState.toppings].join(', ') || 'plain';
  cart.push({ id: Date.now(), name: `Custom Pizza (${pizzaState.base}, ${toppings})`, price: total, qty: 1 });
  updateCart();
  showToast('Custom pizza added to order! 🍕');
}

function addToCartBurger() {
  let total = burgerState.basePrice;
  burgerState.layers.forEach(l => { total += burgerState.layerPrices[l] || 0; });
  const layers = [...burgerState.layers].join(', ');
  cart.push({ id: Date.now(), name: `Custom Burger (${layers})`, price: total, qty: 1 });
  updateCart();
  showToast('Custom burger added to order! 🍔');
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
}

function updateCart() {
  const badge     = document.getElementById('cartBadge');
  const countEl   = document.getElementById('cartCount');
  const itemsEl   = document.getElementById('cartItems');
  const totalEl   = document.getElementById('cartTotal');

  const totalQty  = cart.reduce((a, c) => a + c.qty, 0);
  const totalAmt  = cart.reduce((a, c) => a + c.price * c.qty, 0);

  countEl.textContent = totalQty;
  totalEl.textContent = '₹' + totalAmt;

  if (totalQty > 0) {
    badge.classList.add('visible');
  } else {
    badge.classList.remove('visible');
  }

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cs-empty">Your cart is empty</p>';
    return;
  }

  itemsEl.innerHTML = cart.map(c => `
    <div class="cs-item">
      <span class="cs-item-name">${c.name} × ${c.qty}</span>
      <span class="cs-item-price">₹${c.price * c.qty}</span>
      <button class="cs-item-remove" onclick="removeFromCart(${c.id})">✕</button>
    </div>`).join('');
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar.classList.toggle('open');
}

function checkoutWhatsApp() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  let msg = `Hello Braj Royale! 🙏\n\nI'd like to place an order:\n\n`;
  cart.forEach(c => { msg += `• ${c.name} × ${c.qty} — ₹${c.price * c.qty}\n`; });
  msg += `\n*Total: ₹${total}*\n\nPlease confirm my order. Thank you!`;
  window.open(`https://wa.me/9111111988888?text=${encodeURIComponent(msg)}`, '_blank');
}

// ════════════════════════════════════
// RESERVATION
// ════════════════════════════════════
function submitReservation() {
  const name    = document.getElementById('resName').value.trim();
  const phone   = document.getElementById('resPhone').value.trim();
  const date    = document.getElementById('resDate').value;
  const time    = document.getElementById('resTime').value;
  const guests  = document.getElementById('resGuests').value;
  const request = document.getElementById('resRequest').value.trim();

  if (!name || !phone || !date) {
    showToast('Please fill in all required fields ⚠️');
    return;
  }

  const msg = `Hello Braj Royale! 🙏\n\nReservation Request:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Date: ${date}\n🕐 Time: ${time}\n👥 Guests: ${guests}${request ? '\n📝 Notes: ' + request : ''}\n\nPlease confirm my reservation. Thank you!`;
  window.open(`https://wa.me/9111111988888?text=${encodeURIComponent(msg)}`, '_blank');
}

// ════════════════════════════════════
// WHATSAPP
// ════════════════════════════════════
function openWhatsApp() {
  window.open('https://wa.me/9111111988888?text=Hello%20Braj%20Royale!%20I%27d%20like%20to%20make%20a%20reservation.%20🙏', '_blank');
}

// ════════════════════════════════════
// TOAST
// ════════════════════════════════════
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ════════════════════════════════════
// MOBILE MENU
// ════════════════════════════════════
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}

function closeMobileMenu() {
  if (mobileMenu) mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// ════════════════════════════════════
// HELPER: Default Date
// ════════════════════════════════════
function setDefaultDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const str = tomorrow.toISOString().split('T')[0];
  const heroDate = document.getElementById('heroDate');
  const resDate  = document.getElementById('resDate');
  if (heroDate) heroDate.value = str;
  if (resDate)  resDate.value  = str;
  if (heroDate) heroDate.min   = str;
  if (resDate)  resDate.min    = str;
}

// ════════════════════════════════════
// SMOOTH ANCHOR SCROLL
// ════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ════════════════════════════════════
// PARALLAX ON HERO AURORA
// ════════════════════════════════════
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const auroras  = document.querySelectorAll('.hero-aurora');
  auroras.forEach((a, i) => {
    a.style.transform = `translateY(${scrolled * (0.15 + i * 0.05)}px)`;
  });
});

// ════════════════════════════════════
// 3D TILT ON MENU CARDS
// ════════════════════════════════════
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.menu-card:hover');
  cards.forEach(card => {
    const rect   = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top  + rect.height / 2;
    const rotateX = (e.clientY - centerY) / rect.height * -12;
    const rotateY = (e.clientX - centerX) / rect.width  *  12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
  });
});

document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
  });
});
