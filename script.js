let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
        navbar.classList.remove('sticky'); // Remove yellow background when hidden
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
        navbar.classList.add('sticky'); // Add yellow background when visible
    }

    // Reset navbar color when scrolled to the top
    if (currentScrollTop === 0) {
        navbar.classList.remove('sticky'); // Remove yellow background at the top
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#buttons .category-button');
    const projects = document.querySelectorAll('.project-item');
    
    function filterProjects(category) {
        projects.forEach((project) => {
            const projectCategory = project.dataset.category;
            if (category === 'all-categories' || projectCategory === category) {
                project.style.display = 'block'; // Show project
            } else {
                project.style.display = 'none'; // Hide project
            }
        });
    }
    
    function handleButtonClick(event) {
        buttons.forEach((button) => button.classList.remove('active'));
        event.target.classList.add('active');

        const category = event.target.getAttribute('data-category');
        filterProjects(category);
    }
    
    buttons.forEach((button) => button.addEventListener('click', handleButtonClick));

    // Optional: Set default category
    buttons[0].click(); // Trigger click on the first button to set default category
});
