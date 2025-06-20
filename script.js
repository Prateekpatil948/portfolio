const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()
// Project Image Sliders
document.addEventListener('DOMContentLoaded', function() {
    const projectSliders = document.querySelectorAll('.slider-container');
    
    projectSliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        const dotsContainer = slider.nextElementSibling;
        const dots = dotsContainer.querySelectorAll('.dot');
        let currentIndex = 0;
        
        // Initialize first image and dot
        images[currentIndex].classList.add('active-slide');
        dots[currentIndex].classList.add('active-dot');
        
        // Auto slide every 2 seconds
        const interval = setInterval(() => {
            // Remove active classes
            images[currentIndex].classList.remove('active-slide');
            dots[currentIndex].classList.remove('active-dot');
            
            // Move to next image
            currentIndex = (currentIndex + 1) % images.length;
            
            // Add active classes
            images[currentIndex].classList.add('active-slide');
            dots[currentIndex].classList.add('active-dot');
        }, 2000);
        
        // Click on dots to navigate
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Clear the auto-slide interval
                clearInterval(interval);
                
                // Remove active classes
                images[currentIndex].classList.remove('active-slide');
                dots[currentIndex].classList.remove('active-dot');
                
                // Set new index
                currentIndex = index;
                
                // Add active classes
                images[currentIndex].classList.add('active-slide');
                dots[currentIndex].classList.add('active-dot');
            });
        });
    });
});
const themeSwitch = document.getElementById('theme-switch');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});
