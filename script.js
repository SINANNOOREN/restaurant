
// Gallery Filter Functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        const filter = button.dataset.filter;
        
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.style.display = filter === 'all' || item.dataset.category === filter ? 
                'block' : 'none';
        });
    });
});

// Lightbox Functionality
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const caption = item.querySelector('h3').innerText;
        
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';
        lightbox.querySelector('.lightbox-content').src = imgSrc;
        lightbox.querySelector('.lightbox-caption').innerText = caption;
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.lightbox').style.display = 'none';
});

// Close lightbox when clicking outside
window.onclick = function(event) {
    const lightbox = document.querySelector('.lightbox');
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
}

// Like Button Functionality
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});





// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

