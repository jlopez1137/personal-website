/**
 * Mobile Navigation Toggle
 * Handles hamburger menu functionality for mobile devices
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mainNav = document.querySelector('.main-nav');
        const navLinks = document.querySelectorAll('.main-nav a');

        // Only initialize if elements exist
        if (!mobileMenuButton || !mainNav) {
            return;
        }

        /**
         * Toggle mobile menu visibility
         */
        function toggleMobileMenu() {
            const isOpen = mainNav.classList.contains('is-open');
            
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }

        /**
         * Open mobile menu
         */
        function openMobileMenu() {
            mainNav.classList.add('is-open');
            mobileMenuButton.classList.add('is-open');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        }

        /**
         * Close mobile menu
         */
        function closeMobileMenu() {
            mainNav.classList.remove('is-open');
            mobileMenuButton.classList.remove('is-open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            
            // Restore body scroll
            document.body.style.overflow = '';
        }

        /**
         * Handle menu button click
         */
        function handleMenuButtonClick(event) {
            event.preventDefault();
            toggleMobileMenu();
        }

        /**
         * Handle navigation link clicks
         */
        function handleNavLinkClick() {
            // Close menu when a link is clicked
            closeMobileMenu();
        }

        /**
         * Handle escape key press
         */
        function handleEscapeKey(event) {
            if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
                closeMobileMenu();
            }
        }

        /**
         * Handle window resize
         */
        function handleWindowResize() {
            // Close mobile menu if window becomes large enough for desktop nav
            if (window.innerWidth > 768 && mainNav.classList.contains('is-open')) {
                closeMobileMenu();
            }
        }

        /**
         * Handle clicks outside the menu
         */
        function handleOutsideClick(event) {
            if (mainNav.classList.contains('is-open') && 
                !mainNav.contains(event.target) && 
                !mobileMenuButton.contains(event.target)) {
                closeMobileMenu();
            }
        }

        // Event listeners
        mobileMenuButton.addEventListener('click', handleMenuButtonClick);
        
        // Close menu when navigation links are clicked
        navLinks.forEach(function(link) {
            link.addEventListener('click', handleNavLinkClick);
        });

        // Close menu on escape key
        document.addEventListener('keydown', handleEscapeKey);

        // Close menu on window resize (if desktop size)
        window.addEventListener('resize', handleWindowResize);

        // Close menu when clicking outside
        document.addEventListener('click', handleOutsideClick);

        // Initialize ARIA attributes
        mobileMenuButton.setAttribute('aria-controls', 'site-nav');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Add ID to navigation for ARIA relationship
        mainNav.setAttribute('id', 'site-nav');

        // Add visually hidden label for screen readers
        const menuLabel = document.createElement('span');
        menuLabel.className = 'visually-hidden';
        menuLabel.textContent = 'Menu';
        mobileMenuButton.appendChild(menuLabel);
    });

})();
