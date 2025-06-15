const flashSale = document.getElementById('flash-sale');

const messages = [
  `<span class="main-text">Flash Sale Weekend. Up to <span style="font-weight: bold;">70%</span> off</span> 
   <a href="#" class="learn-more">Learn more</a>`
];

let index = 0;

function showNextMessage() {
  // Remove previous message
  flashSale.innerHTML = '';

  // Create new slide element
  const div = document.createElement('div');
  div.classList.add('flash-slide');
  div.innerHTML = messages[index];
  flashSale.appendChild(div);

  // Switch to next message
  index = (index + 1) % messages.length;
}

// Start immediately and repeat every 3 seconds
showNextMessage();
setInterval(showNextMessage, 3000);


//Responsive//////////////////////////////////////

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}



// navbar responsive //
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }

 function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }


  // Signup
  window.addEventListener("load", function () {
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const noThanks = document.getElementById("noThanks");

  overlay.style.display = "flex";

  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  noThanks.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "none";
  });
});





// Slider Data
// Slider Data with separate mobile images
const slidesData = [
  {
    image: 'assets/frame1.jpg',
    mobileImage: 'assets/frame-1.jpg',
    titleSmall: 'Super Beauty',
    titleBig: 'Basic Care and Guidelines'
  },
  {
    image: 'assets/frame2.jpg',
    mobileImage: 'assets/frame-2.jpg',
    titleSmall: 'Healthy Skin',
    titleBig: 'Essential Care and Tips'
  }
];

// Get containers
const slidesContainer = document.getElementById('slidesContainer');
const dotsContainer = document.getElementById('dotsContainer');
const mobileSlidesContainer = document.getElementById('mobileSlidesContainer');
const mobileDotsContainer = document.getElementById('mobileDotsContainer');

// Get controls
const desktopPrevBtn = document.querySelector('.desktop-controls .prev');
const desktopNextBtn = document.querySelector('.desktop-controls .next');
const mobilePrevBtn = document.querySelector('.mobile-controls .prev');
const mobileNextBtn = document.querySelector('.mobile-controls .next');

// Track current index
let currentIndexDesktop = 0;
let currentIndexMobile = 0;

// Generate desktop slides and dots
slidesData.forEach((slide, index) => {
  const [first, second] = slide.titleBig.split(' and ');

  const slideDiv = document.createElement('div');
  slideDiv.className = `slide${index === 0 ? ' active' : ''}`;
  slideDiv.style.backgroundImage = `url('${slide.image}')`;

  slideDiv.innerHTML = `
    <div class="text-content">
      <h5>${slide.titleSmall}</h5>
      <h2>
        <span class="line1">${first}</span>
        <span class="line2">${second ? 'and ' + second : ''}</span>
      </h2>
      <button>Explore Now</button>
    </div>
  `;
  slidesContainer.appendChild(slideDiv);

  const dot = document.createElement('div');
  dot.className = `dot${index === 0 ? ' active' : ''}`;
  dot.addEventListener('mouseenter', () => showSlide(index, 'desktop'));
  dotsContainer.appendChild(dot);
});

// Generate mobile slides and dots
slidesData.forEach((slide, index) => {
  const [first, second] = slide.titleBig.split(' and ');
  const mobileSlide = document.createElement('div');
  mobileSlide.className = `mobile-slide${index === 0 ? ' active' : ''}`;

  const imageSrc = slide.mobileImage || slide.image;

  mobileSlide.innerHTML = `
    <img src="${imageSrc}" alt="${slide.titleSmall}">
    <div class="text-content">
      <h5>${slide.titleSmall}</h5>
      <h2>
        <span class="line1">${first}</span>
        <span class="line2">${second ? 'and ' + second : ''}</span>
      </h2>
      <button>Explore Now</button>
    </div>
  `;
  mobileSlidesContainer.appendChild(mobileSlide);

  const mobileDot = document.createElement('div');
  mobileDot.className = `mobile-dot${index === 0 ? ' active' : ''}`;
  mobileDot.addEventListener('mouseenter', () => showSlide(index, 'mobile'));
  mobileDotsContainer.appendChild(mobileDot);
});

// Show slide function
function showSlide(index, device) {
  if (device === 'desktop') {
    const allSlides = document.querySelectorAll('.slide');
    const allDots = document.querySelectorAll('.dot');
    allSlides.forEach(slide => slide.classList.remove('active'));
    allDots.forEach(dot => dot.classList.remove('active'));
    allSlides[index].classList.add('active');
    allDots[index].classList.add('active');
    currentIndexDesktop = index;
  } else if (device === 'mobile') {
    const allSlides = document.querySelectorAll('.mobile-slide');
    const allDots = document.querySelectorAll('.mobile-dot');
    allSlides.forEach(slide => slide.classList.remove('active'));
    allDots.forEach(dot => dot.classList.remove('active'));
    allSlides[index].classList.add('active');
    allDots[index].classList.add('active');
    currentIndexMobile = index;
  }
}

// Controls
desktopPrevBtn.addEventListener('click', () => {
  const prevIndex = (currentIndexDesktop - 1 + slidesData.length) % slidesData.length;
  showSlide(prevIndex, 'desktop');
});

desktopNextBtn.addEventListener('click', () => {
  const nextIndex = (currentIndexDesktop + 1) % slidesData.length;
  showSlide(nextIndex, 'desktop');
});

mobilePrevBtn.addEventListener('click', () => {
  const prevIndex = (currentIndexMobile - 1 + slidesData.length) % slidesData.length;
  showSlide(prevIndex, 'mobile');
});

mobileNextBtn.addEventListener('click', () => {
  const nextIndex = (currentIndexMobile + 1) % slidesData.length;
  showSlide(nextIndex, 'mobile');
});



// Shop By Category 
const categories = [
  {
    title: "Body care",
    items: "9Items",
    img: "assets/category-1.jpg"
  },
  {
    title: "Face cream",
    items: "8Items",
    img: "assets/category-2.jpg"
  },
  {
    title: "Best Seller",
    items: "12Items",
    img: "assets/category-3.jpg"
  },
  {
    title: "Skin care",
    items: "9Items",
    img: "assets/insta-4.jpg"
  }
];

const container = document.getElementById("category-container");

categories.forEach(({ title, items, img }) => {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `
    <img src="${img}" alt="${title}" />
    <div class="info">
      <h3>${title}</h3>
      <p>${items}</p>
    </div>
  `;
  container.appendChild(card);
});


//GALLARY//
const gallerySection = document.getElementById("imageGallery");

const images = [
  {
    src: "assets/banner-2.jpg",
    alt: "Product 2",
    link: "https://example.com/product2",
    label: "What's New"
  },
  {
    src: "assets/banner-3.jpg",
    alt: "Product 3",
    link: "https://example.com/product3",
    label: "Tips and Trends"
  }
];

images.forEach((item) => {
  const card = document.createElement("div");
  card.className = "image-card";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;

  const label = document.createElement("div");
  label.className = "label";
  label.textContent = item.label;

  const link = document.createElement("a");
  link.href = item.link;
  link.className = "shop-button";
  link.textContent = "Shop Now →";

  card.appendChild(img);
  card.appendChild(label);
  card.appendChild(link);
  gallerySection.appendChild(card);
});


// Featured Collection//
const featuredSection = document.getElementById("featuredProducts");

const products = [
   {
    img: "assets/pic2.jpg",
    name: "Glow Face Cream",
    originalPrice: "Rs 5,000.00",
    discountedPrice: "Rs 4,500.00 PKR",
    saleTag: "-3% Sale",
    colors: ["#007bff", "#28a745", "#000000"] // blue, green, black
  },
  {
    img: "assets/pic3.jpg",
    name: "Hair Serum",
    originalPrice: "Rs 8,000.00",
    discountedPrice: "Rs 6,800.00 PKR",
    saleTag: "-4% Sale",
    colors: ["#ff0000", "#ffa500", "#800080"] // red, orange, purple
  },
  {
    img: "assets/pic4.jpg",
    name: "Glow Face Cream",
    originalPrice: "Rs 5,000.00",
    discountedPrice: "Rs 4,500.00 PKR",
    colors: ["#007bff", "#28a745", "#000000"] // blue, green, black
  },
  {
    img: "assets/img5.jpg",
    name: "Refreshing Lip Balm",
    // originalPrice: null,   ❌ Don't write this line
    discountedPrice: "Rs 45,400.00 PKR",
    saleTag: "", // ✅ Keep empty to remove SALE TAG
    colors: ["#ff0000", "#ffa500"]
  },
 {
    img: "assets/img6.jpg",
    name: "Glow Face Cream",
    originalPrice: "Rs 5,000.00",
    discountedPrice: "Rs 4,500.00 PKR",
    saleTag: "-10% Sale",
    colors: ["#007bff", "#28a745", "#ff0000"] 
  },
 {
    img: "assets/pic2.jpg",
    name: "Glow Face Cream",
    originalPrice: "Rs 5,000.00",
    discountedPrice: "Rs 4,500.00 PKR",
    saleTag: "-10% Sale",
    colors: ["#007bff", "#28a745", "#000000"] 
  },
 {
    img: "assets/img7.jpg",
    name: "Brightening Eye Cream",
    originalPrice: "Rs 5,000.00",
    discountedPrice: "Rs 4,500.00 PKR",
    saleTag: "-10% Sale",
    colors: ["#007bff", "#ffa500", "#000000"] 
  }
];


products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const colorCircles = product.colors.map(
    (color) => `<span class="color" style="background-color: ${color};"></span>`
  ).join("");

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.img}" alt="${product.name}" />
      <span class="sale-tag">${product.saleTag}</span>
      <div class="top-icons">
        <span class="icon wishlist" title="Add to Wishlist">♡</span>
        <span class="icon cart" title="Add to Compare">🛒</span>
      </div>
      <div class="quick-add">Quick Add</div>
    </div>
    <div class="product-details">
      <h3>${product.name}</h3>
      <div class="price">
        <del>${product.originalPrice}</del>
        <span class="discounted">${product.discountedPrice}</span>
      </div>
      <div class="colors">
        ${colorCircles}
      </div>
    </div>
  `;

  document.getElementById("featuredProducts").appendChild(card);
});


// Beauty 

  document.addEventListener("DOMContentLoaded", () => {
  const p = document.getElementById("beautyText");

  // ✅ Step 1: Wrap second line in a <span>
  const words = p.innerText.split(" ");
  const cutoff = 13; // You can adjust word count
  const line1 = words.slice(0, cutoff).join(" ");
  const line2 = words.slice(cutoff).join(" ");
  p.innerHTML = `${line1}<br><span class="indent-line">${line2}</span>`;

  const beautyText = document.querySelector(".beauty-text");

  // ✅ Step 2: Add optional fade-in on load
  setTimeout(() => {
    beautyText.classList.add("visible");
  }, 300);

  // ✅ Step 3: Scroll-based color darkening
  const updateTextColorOnScroll = () => {
    const rect = beautyText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top >= windowHeight || rect.bottom <= 0) return;

    let visibleRatio = 1 - rect.top / windowHeight;
    visibleRatio = Math.max(0, Math.min(visibleRatio, 1)); // clamp between 0 and 1

    const shade = Math.round(204 - visibleRatio * (204 - 17));
    beautyText.style.color = `rgb(${shade}, ${shade}, ${shade})`;
  };

  window.addEventListener("scroll", updateTextColorOnScroll);
  window.addEventListener("resize", updateTextColorOnScroll);
  updateTextColorOnScroll(); // call once on load
});


////////////////////////////////////////////////Deal/////////////////////////////////////////////////
const deals = [
  {
    tag: "Deal of the Day!",
    heading: "Define yourself<br>be different.",
    desc: "Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.",
    images: ["assets/banner-5.webp", "assets/banner-6.webp"],
    button: "Shop Now"
  }
];


const dealContainer = document.getElementById("dealContainer");

deals.forEach((deal) => {
  const section = document.createElement("section");
  section.className = "deal-section";

  section.innerHTML = `
    <div class="deal-images">
      <img src="${deal.images[0]}" alt="Deal Image 1">
      <img src="${deal.images[1]}" alt="Deal Image 2">
    </div>
    <div class="deal-text">
      <small>${deal.tag}</small>
      <h2>${deal.heading}</h2>
      <p>${deal.desc}</p>
      <button>${deal.button}</button>
    </div>
  `;

  dealContainer.appendChild(section);
});



////////////////////////////////////////////// Payment section /////////////////////////////////////////////////
const features = [
  {
    icon: "🧴",
    title: "Cruelty free & Vegan",
    description: "High shine, long-lasting vegan nail polishes in a range of fashion colors and finishes."
  },
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description: "Our products use plant-based, skin-friendly formulas without harmful chemicals."
  },
  {
    icon: "✨",
    title: "Glowing Finish",
    description: "Leaves your nails with a professional salon-like glow that lasts for days."
  }
];

const section = document.getElementById("features-section");

features.forEach(item => {
  const box = document.createElement("div");
  box.className = "feature-box";

  box.innerHTML = `
    <div class="feature-content">
      <div class="feature-icon">${item.icon}</div>
      <div>
        <div class="feature-title">${item.title}</div>
        <div class="feature-description">${item.description}</div>
      </div>
    </div>
  `;

  section.appendChild(box);
});

//////////////////////////////////////////////////Hero///////////////////////////////////////////////////
const heroSection = document.getElementById("hero-section");

heroSection.innerHTML = `
  <div class="hero-image-wrapper">
    <img src="assets/banner-4.webp" alt="Hero image" class="hero-image-bg" />
    <div class="hero-text-overlay">
      <h1>Freshly picked<br>is here!</h1>
      <p>Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.</p>
      <button>Shop Now</button>
    </div>
  </div>
`;


/////////////////////////////////////// FAQ ///////////////////////////////////////////////////////
const questions = document.querySelectorAll('.faq-question');

questions.forEach(btn => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('active');

    // Close all open answers
    questions.forEach(q => {
      q.classList.remove('active');
      q.nextElementSibling.style.maxHeight = null;
      q.querySelector('.arrow').textContent = '˅';
    });

    // Open clicked one if it was not active
    if (!isActive) {
      btn.classList.add('active');
      const answer = btn.nextElementSibling;
      const arrow = btn.querySelector('.arrow');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      arrow.textContent = '˄'; // upward arrow
    }
  });
});

/////////////////////////////////////// Testimonial  ///////////////////////////////////////////////////////
const testimonials = [
  {
    name: "John",
    feedback: "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
    image: "assets/testimonial-3.webp"
  },
  {
    name: "Jenifer",
    feedback: "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
    image: "assets/testimonial-2.webp"
  },
  {
    name: "Chawdhuri",
    feedback: "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.!",
    image: "assets/testimonial-4.webp"
  }
];

const feedbackEl = document.getElementById("feedback");
const nameEl = document.getElementById("name");
const imageEl = document.getElementById("testimonial-img");
const dotsEl = document.getElementById("dots");

let dots = [];

testimonials.forEach((_, index) => {
  const dot = document.createElement("span");

  // 👇 Only change testimonial on press/hold
  dot.addEventListener("mousedown", () => showTestimonial(index));

  dotsEl.appendChild(dot);
  dots.push(dot);
});

function showTestimonial(index) {
  const { name, feedback, image } = testimonials[index];

  // Remove animation class to re-trigger it
  feedbackEl.classList.remove("slide-in");
  imageEl.classList.remove("slide-in");

  // Force reflow
  void feedbackEl.offsetWidth;
  void imageEl.offsetWidth;

  // Update content
  feedbackEl.textContent = feedback;
  nameEl.textContent = name;
  imageEl.src = image;

  // Add animation
  feedbackEl.classList.add("slide-in");
  imageEl.classList.add("slide-in");

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Show first testimonial on load
showTestimonial(0);

/////////////////////////////////////// Instagram  ///////////////////////////////////////////////////////
const tickerTrack = document.getElementById('ticker-track');
const message = "✔ WELCOME TO OUR STORE ";
const repeatCount = 30; // Adjust for desired length

for (let i = 0; i < repeatCount; i++) {
  const span = document.createElement('span');
  // Alternate between solid and outline style
  span.classList.add(i % 2 === 0 ? 'solid-text' : 'outline-text');
  span.textContent = message;
  tickerTrack.appendChild(span);
}



// Footer
document.querySelectorAll('.toggle-title').forEach((title) => {
  title.addEventListener('click', () => {
    const list = title.nextElementSibling;
    const icon = title.querySelector('.toggle-icon');
    title.classList.toggle('active');
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
    icon.textContent = icon.textContent === '+' ? '-' : '+';
  });
});


