// Currently no functionality needed, but file is ready for future interaction
console.log("Script loaded successfully!");


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

//Responsive//////////////////////////////////////

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


//payment
const features = [
  {
    icon: "🧴",
    title: "Worldwide Shipping",
    description: "World Wide Free Shipping."
  },
  {
    icon: "🌿",
    title: "Secured Payment",
    description: "Safe & Secured Payments"
  },
  {
    icon: "🌿",
    title: "30-Days Free Returns",
    description: "Within 30 Days for an Exchange"
  },
  {
    icon: "✨",
    title: "Surprise Gift",
    description: "Free gift cards & vouchers"
  }
];

const section = document.getElementById("features-section");

features.forEach(item => {
  const box = document.createElement("div");
  box.className = "feature-box";

  box.innerHTML = `
    <div class="feature-icon">${item.icon}</div>
    <div class="feature-title">${item.title}</div>
    <div class="feature-description">${item.description}</div>
  `;

  section.appendChild(box);
});


//video thumbnail
const playBtn = document.getElementById('playBtn');
const modal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeBtn');
const videoFrame = document.getElementById('videoFrame');

const videoID = '9no7Q4jYnsI';

playBtn.addEventListener('click', () => {
  modal.classList.add('active');
  videoFrame.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0`;
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  videoFrame.src = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    videoFrame.src = '';
  }
});


// Arrow interaction (placeholder)
const categories = [
  {
    title: "Savannah Nguyen",
    items: "Salesperson",
    img: "../../assets/product-5.webp"
  },
  {
    title: "Leslie Alexander",
    items: "Salesperson",
    img: "../../assets/team-2.webp"
  },
  {
    title: "Name",
    items: "Designer",
    img: "../../assets/team-1.webp"
  }
];

const container = document.getElementById("category-container");
let currentIndex = 0;

// Function to detect mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Render cards
function renderCards() {
  container.innerHTML = "";

  // MOBILE: Show only 1 card with swipe
  if (isMobile()) {
    const { title, items, img } = categories[currentIndex];
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

    // Add swipe support
    let startX = 0;

    card.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    card.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;

      if (diff < -30) {
        // Swipe left
        currentIndex = (currentIndex + 1) % categories.length;
        renderCards();
      } else if (diff > 30) {
        // Swipe right
        currentIndex = (currentIndex - 1 + categories.length) % categories.length;
        renderCards();
      }
    });

  } 
  // DESKTOP: Show all cards
  else {
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
  }
}

renderCards();

// Re-render on resize
window.addEventListener("resize", renderCards);


