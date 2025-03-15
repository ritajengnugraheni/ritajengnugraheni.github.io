document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('a[href^="#section-"]');
    const sections = document.querySelectorAll('.site-section, .site-blocks-cover');
    
    // Variable to store the current active section ID
    let currentActiveSection = null;
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Get the height of the fixed header
          const headerHeight = document.querySelector('.fixed-top').offsetHeight;
          
          // Scroll to the target section
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
          });
          
          // We don't set active class here anymore
          // Instead, we'll let the scroll event handler take care of it
        }
      });
    });
    
    // Function to set active menu item based on scroll position
    function setActiveMenuItem() {
      // Get current scroll position
      const scrollPosition = window.scrollY;
      
      // Get header height
      const headerHeight = document.querySelector('.fixed-top').offsetHeight;
      
      // Variable to track if any section is active
      let foundActive = false;
      let newActiveSection = null;
      
      // Check each section's position
      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 20; // 20px offset for better UX
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // If the user has scrolled to or past the section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          newActiveSection = sectionId;
          foundActive = true;
        }
      });
      
      // If no section is active (e.g., at the very top of the page)
      if (!foundActive && scrollPosition < 50) {
        newActiveSection = 'section-home';
      }
      
      // Only update the DOM if the active section has changed
      if (newActiveSection !== currentActiveSection) {
        currentActiveSection = newActiveSection;
        
        // Remove active class from all menu items
        navLinks.forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to corresponding menu item if we found an active section
        if (newActiveSection) {
          const activeItem = document.querySelector(`.menu[href="#${newActiveSection}"]`);
          if (activeItem) {
            activeItem.classList.add('active');
          }
        }
      }
      
      // Shrink header on scroll
      const header = document.querySelector('.fixed-top');
      if (scrollPosition > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Set active menu item on page load
    setActiveMenuItem();
    
    // Use a more efficient scroll event handler with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          setActiveMenuItem();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Handle window resize events with throttling
    let resizeTicking = false;
    window.addEventListener('resize', function() {
      if (!resizeTicking) {
        window.requestAnimationFrame(function() {
          setActiveMenuItem();
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    });
    
    // Phone number click function
    window.keteranganNomor = function() {
      alert("For privacy reasons, the complete phone number is not displayed. Please contact via email.");
    };
    
    // Add animation on scroll with throttling
    let animationTicking = false;
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.experience-item, .foto-portofolio');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight * 0.8 && position.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run animation check on load
    animateOnScroll();
    
    // Run animation check on scroll with throttling
    window.addEventListener('scroll', function() {
      if (!animationTicking) {
        window.requestAnimationFrame(function() {
          animateOnScroll();
          animationTicking = false;
        });
        animationTicking = true;
      }
    });
  });