// Loading screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.opacity = '0';  
  setTimeout(() => {
    loadingScreen.style.display = 'none'; 
  }, 10000);  
});

//Greeting based on time of day
const greeting = document.getElementById("greeting");
const hours = new Date().getHours();

if (hours < 12) {
  greeting.innerHTML = "Good Morning, I'm Jo Erick Fontanilla <br>Software Developer";
} else if (hours < 18) {
  greeting.innerHTML = "Good Afternoon, I'm Jo Erick Fontanilla <br>Software Developer";
} else {
  greeting.innerHTML = "Good Evening, I'm Jo Erick Fontanilla <br>Software Developer";
}

// Logo Hover Animation
const logo = document.getElementById("logo");
logo.addEventListener("mouseover", () => {
  logo.style.transform = "rotate(360deg)";
});

logo.addEventListener("mouseout", () => {
  logo.style.transform = "rotate(0deg)";
});

// Button Animation when Hovered
const resumeButton = document.getElementById("resume-button");
resumeButton.addEventListener("mouseover", () => {
  resumeButton.style.transform = "translateY(-5px)";
  resumeButton.style.boxShadow = "0 0 15px #ff00ff, 0 0 30px #ff00ff";
});

resumeButton.addEventListener("mouseout", () => {
  resumeButton.style.transform = "translateY(0)";
  resumeButton.style.boxShadow = "none";
});

// Scroll-triggered animations
const fadeInElements = document.querySelectorAll('.fade-in');

const handleScroll = () => {
  fadeInElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);
handleScroll();  // Initialize scroll listener

// Scroll Indicator Update
const scrollIndicator = document.getElementById('scroll-indicator');
window.addEventListener('scroll', () => {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / totalHeight) * 100;
  scrollIndicator.style.width = scrollPercentage + '%';
});

// Modal for Contact Form
const modal = document.getElementById("contact-modal");
const contactLink = document.getElementById("contact-link");
const closeModal = document.getElementById("close-modal");

contactLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Initialize scroll listener
handleScroll();

// Adding animations for the timeline items when scrolled into view
const timelineItems = document.querySelectorAll('.timeline-item');

const handleScrollTimeline = () => {
  timelineItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScrollTimeline);
handleScrollTimeline();  

// Add fade-in animation when the timeline section is in view
const fadeInTimeline = document.querySelector('#education');

const handleFadeInTimeline = () => {
  const rect = fadeInTimeline.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    fadeInTimeline.classList.add('visible');
  }
};

window.addEventListener('scroll', handleFadeInTimeline);
handleFadeInTimeline();  

// Hover effect and info display
const icons = document.querySelectorAll('.personality-icon');
const infoText = document.getElementById('info-text');
const infoBox = document.getElementById('personality-info');

icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    const info = icon.getAttribute('data-info');
    infoText.textContent = info;
    infoBox.style.display = 'block';
  });
  
  icon.addEventListener('mouseout', () => {
    infoBox.style.display = 'none';
  });
});

// Function to change nav background color on scroll into Education section
window.addEventListener('scroll', () => {
  const educationSection = document.getElementById('education');
  const nav = document.querySelector('nav');
  
  const rect = educationSection.getBoundingClientRect();
  
  // Check if the Education section is in the viewport
  if (rect.top <= 0 && rect.bottom >= 0) {
    nav.style.backgroundColor = 'black'; // Change nav background to black when on Education section
  } else {
    nav.style.backgroundColor = 'transparent'; // Keep nav background transparent otherwise
  }
});
