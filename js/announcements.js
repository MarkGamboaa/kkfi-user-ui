/**
 * iSKKOLAR Announcements Module
 * Handles filtering, searching, and dynamic rendering of announcements
 */

// DOM Elements
const filterDropdown = document.querySelector('.filter-dropdown');
const searchInput = document.querySelector('.search-bar input');
const announcementListContainer = document.querySelector('.announcement-list');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

/**
 * Render an individual announcement card
 */
function renderAnnouncementCard(announcement) {
  const isEvent = announcement.type === 'event';
  const iconClass = isEvent ? 'event' : 'announcement';
  const icon = isEvent ? '📅' : '📣';
  const typeLabel = isEvent ? 'Event' : 'Announcement';
  const metaLabel = isEvent ? 'Event Date:' : 'Posted on:';
  const metaDate = isEvent ? announcement.date : announcement.dateTime;

  return `
    <a href="view-announcement.html?id=${announcement.id}" class="announcement-card" data-type="${announcement.type}" data-id="${announcement.id}">
      <div class="announcement-icon ${iconClass}">
        ${icon}
      </div>
      <div class="announcement-body">
        <span class="announcement-type ${iconClass}">${typeLabel}</span>
        <h3 class="announcement-title">${announcement.title}</h3>
        <p class="announcement-excerpt">${announcement.excerpt}</p>
      </div>
      <div class="announcement-meta">
        <span class="meta-label">${metaLabel}</span>
        <span class="meta-date">${metaDate}</span>
      </div>
    </a>
  `;
}

/**
 * Render empty state when no announcements match
 */
function renderEmptyState() {
  return `
    <div class="empty-state">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <h3>No announcements found</h3>
      <p>Try adjusting your filter or search terms</p>
    </div>
  `;
}

/**
 * Filter and search announcements
 */
function getFilteredAnnouncements() {
  let filtered = userData.announcements;

  // Apply type filter
  if (currentFilter !== 'all') {
    const filterType = currentFilter === 'announcements' ? 'announcement' : 'event';
    filtered = filtered.filter(a => a.type === filterType);
  }

  // Apply search filter
  if (currentSearch.trim()) {
    const searchLower = currentSearch.toLowerCase().trim();
    filtered = filtered.filter(a => 
      a.title.toLowerCase().includes(searchLower) ||
      a.excerpt.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}

/**
 * Render the announcement list
 */
function renderAnnouncementList() {
  const filtered = getFilteredAnnouncements();

  if (filtered.length === 0) {
    announcementListContainer.innerHTML = renderEmptyState();
  } else {
    announcementListContainer.innerHTML = filtered.map(renderAnnouncementCard).join('');
  }
}

/**
 * Initialize event listeners
 */
function initEventListeners() {
  // Filter dropdown change
  if (filterDropdown) {
    filterDropdown.addEventListener('change', (e) => {
      currentFilter = e.target.value;
      renderAnnouncementList();
    });
  }

  // Search input
  if (searchInput) {
    // Real-time search with debounce
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentSearch = e.target.value;
        renderAnnouncementList();
      }, 300);
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        clearTimeout(debounceTimer);
        currentSearch = e.target.value;
        renderAnnouncementList();
      }
    });
  }
}

/**
 * Initialize the announcements page
 */
function initAnnouncementsPage() {
  if (announcementListContainer) {
    renderAnnouncementList();
    initEventListeners();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnnouncementsPage);
