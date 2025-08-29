 // Toggle hamburger menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link (data-analyst)
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside (data-analyst)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Project filtering functionality
        const projectMenuItems = document.querySelectorAll('.project-menu-item');
        const projectCards = document.querySelectorAll('.project-card');

        projectMenuItems.forEach(item => {
            item.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all menu items
                projectMenuItems.forEach(menuItem => {
                    menuItem.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Filter project cards
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
        
        // tools filtering functionality
        const toolsMenuItems = document.querySelectorAll('.tools-menu-item');
        const toolItems = document.querySelectorAll('.tool-item');

        toolsMenuItems.forEach(item => {
            item.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all menu items
                toolsMenuItems.forEach(menuItem => {
                    menuItem.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Filter tool items
                toolItems.forEach(tool => {
                    const category = tool.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        tool.classList.remove('hidden');
                    } else {
                        tool.classList.add('hidden');
                    }
                });
            });
        });