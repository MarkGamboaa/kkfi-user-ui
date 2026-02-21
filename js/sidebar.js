/**
 * iSKKOLAR User UI - Utilities
 * Navigation and common functionality
 * Note: Bottom navigation is now embedded directly in each HTML page
 */

(function() {
  'use strict';

  // Utility functions for the iSKKOLAR User UI
  const ISKKOLAR = {
    
    // Format date helper
    formatDate: function(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    },
    
    // Show toast notification
    showToast: function(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#5b5f97'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        animation: fadeInUp 0.3s ease;
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    },
    
    // Set active navigation item based on current page
    setActiveNav: function() {
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navItems = document.querySelectorAll('.bottom-nav .nav-item');
      
      navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    iSKKOLAR.setActiveNav();
  });

  // Make available globally
  window.iSKKOLAR = iSKKOLAR;

})();
