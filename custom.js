document.addEventListener('DOMContentLoaded', function() {
    // Enhanced navigation highlighting function
    function highlightActiveNavItem() {
        // Get current page path (more reliable method)
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        // Select all navigation elements that can be active
        const navItems = document.querySelectorAll('.navbar-nav .nav-item');
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        
        // First reset all active states
        navItems.forEach(item => item.classList.remove('active'));
        dropdownItems.forEach(item => item.classList.remove('active'));
        
        // Check regular nav items
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link:not(.dropdown-toggle)');
            if (link) {
                const linkPath = link.getAttribute('href').split('/').pop();
                if (currentPath === linkPath) {
                    item.classList.add('active');
                }
            }
        });
        
        // Check dropdown items
        dropdownItems.forEach(item => {
            const itemPath = item.getAttribute('href').split('/').pop();
            if (currentPath === itemPath) {
                item.classList.add('active');
                // Also activate the parent dropdown
                const dropdown = item.closest('.dropdown');
                if (dropdown) {
                    dropdown.classList.add('active');
                    const toggle = dropdown.querySelector('.dropdown-toggle');
                    if (toggle) toggle.classList.add('active');
                }
            }
        });
        
        // Special handling for index/home page
        if (currentPath === '' || currentPath === 'index.html') {
            const homeLinks = document.querySelectorAll('.navbar-nav a[href="index.html"], .navbar-nav a[href="/"]');
            if (homeLinks.length > 0) {
                homeLinks[0].closest('.nav-item').classList.add('active');
            }
        }
    }
    
    // Run on page load
    highlightActiveNavItem();
    
    // Optional: Re-run when navigating via AJAX or other dynamic content loading
    window.addEventListener('popstate', highlightActiveNavItem);
});
// Add scroll event listener
  window.addEventListener("scroll", function() {
    const navbar = document.getElementById("ftco-navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  