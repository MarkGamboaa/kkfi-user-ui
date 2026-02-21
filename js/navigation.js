// Navigation Component - iSKKOLAR
// This file contains the shared header and bottom navigation

function getHeaderHTML() {
  return `
    <header class="topbar">
      <div class="brand-wrap">
        <div class="brand-logo">
          <img src="image/logo.png" alt="Logo" onerror="this.parentElement.innerHTML='<div style=\\'width:45px;height:45px;border-radius:50%;background:linear-gradient(135deg,#5b5f97,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700\\'>K</div>'">
        </div>
        <span class="brand-text">ISKKOLAR</span>
      </div>
      <div class="topbar-right">
        <a href="announcements.html" class="notification-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span class="notification-badge">3</span>
        </a>
        <a href="profile.html" class="user-menu">
          <div class="user-avatar">DM</div>
          <div class="user-info">
            <span class="user-name">Dominic Madlangbayan</span>
            <span class="user-role">Active Scholar</span>
          </div>
        </a>
      </div>
    </header>
  `;
}

function getBottomNavHTML(activePage = 'home') {
  const navItems = [
    {
      id: 'home',
      href: 'index.html',
      label: 'Home',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>'
    },
    {
      id: 'activities',
      href: 'activities.html',
      label: 'Activities',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
    },
    {
      id: 'application',
      href: 'application.html',
      label: 'Application',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
    },
    {
      id: 'profile',
      href: 'profile.html',
      label: 'Profile',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>'
    }
  ];

  let navHTML = '<nav class="bottom-nav">';
  
  navItems.forEach(item => {
    const activeClass = item.id === activePage ? ' active' : '';
    navHTML += `
      <a href="${item.href}" class="nav-item${activeClass}">
        <div class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            ${item.icon}
          </svg>
        </div>
        <span class="nav-label">${item.label}</span>
      </a>
    `;
  });
  
  navHTML += '</nav>';
  return navHTML;
}

// Initialize navigation components
function initNavigation(activePage = 'home') {
  // Insert header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = getHeaderHTML();
  }
  
  // Insert bottom nav
  const navPlaceholder = document.getElementById('bottom-nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = getBottomNavHTML(activePage);
  }
}

// Auto-detect active page based on current URL
function getActivePageFromURL() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1);
  
  if (filename === '' || filename === 'index.html') return 'home';
  if (filename === 'activities.html') return 'activities';
  if (filename === 'application.html' || filename === 'scholarship-renewal.html' || filename === 'board-exam.html') return 'application';
  if (filename === 'profile.html') return 'profile';
  
  return 'home'; // default
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const activePage = getActivePageFromURL();
  initNavigation(activePage);
});
