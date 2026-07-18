document.addEventListener('DOMContentLoaded', function() {
  initSidebar();
  initModals();
  initSearch();
  initDropdowns();
  initTooltips();
});

function initSidebar() {
  const toggleBtn = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('appSidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.sidebar-link');
  links.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
}

function initModals() {
  document.querySelectorAll('[data-toggle="modal"]').forEach(btn => {
    btn.addEventListener('click', function() {
      const target = document.querySelector(this.dataset.target);
      if (target) target.classList.add('show');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('show');
    });
  });

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal-overlay').classList.remove('show');
    });
  });
}

function initSearch() {
  document.querySelectorAll('.search-input').forEach(input => {
    input.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const container = this.closest('.table-container') || this.closest('.card-body') || this.closest('.filter-bar');
      if (!container) return;

      const rows = container.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });
}

function initDropdowns() {
  document.addEventListener('click', function(e) {
    const dropdown = e.target.closest('.dropdown');
    if (!dropdown) {
      document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
      return;
    }
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.classList.toggle('show');
  });
}

function initTooltips() {
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', function() {
      const tip = document.createElement('div');
      tip.className = 'tooltip-custom';
      tip.textContent = this.dataset.tooltip;
      document.body.appendChild(tip);
      const rect = this.getBoundingClientRect();
      tip.style.left = rect.left + rect.width / 2 - tip.offsetWidth / 2 + 'px';
      tip.style.top = rect.top - tip.offsetHeight - 8 + 'px';
      this._tooltip = tip;
    });
    el.addEventListener('mouseleave', function() {
      if (this._tooltip) {
        this._tooltip.remove();
        this._tooltip = null;
      }
    });
  });
}

function openModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) modal.classList.add('show');
}

function closeModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) modal.classList.remove('show');
}

function showToast(message, type) {
  type = type || 'success';
  const colors = { success: 'var(--success)', error: 'var(--danger)', warning: 'var(--warning)', info: 'var(--accent)' };
  const container = document.getElementById('toastContainer');
  if (!container) {
    const c = document.createElement('div');
    c.id = 'toastContainer';
    c.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:5000;display:flex;flex-direction:column;gap:8px';
    document.body.appendChild(c);
  }
  const toast = document.createElement('div');
  toast.style.cssText = 'background:' + (colors[type] || colors.success) + ';color:white;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:500;box-shadow:0 4px 12px rgba(0,0,0,0.15);animation:fadeIn 0.3s ease;max-width:360px';
  toast.textContent = message;
  document.getElementById('toastContainer').appendChild(toast);
  setTimeout(function() { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(function() { toast.remove(); }, 300); }, 3000);
}

function getStatusBadge(status) {
  const map = {
    active: '<span class="badge badge-success"><span class="status-indicator status-active"></span> Active</span>',
    inactive: '<span class="badge badge-neutral"><span class="status-indicator status-inactive"></span> Inactive</span>',
    paid: '<span class="badge badge-success">Paid</span>',
    pending: '<span class="badge badge-warning">Pending</span>',
    paid: '<span class="badge badge-success">Paid</span>',
    wholesale: '<span class="badge badge-primary">Wholesale</span>',
    retail: '<span class="badge badge-neutral">Retail</span>',
    high: '<span class="badge badge-danger">High</span>',
    medium: '<span class="badge badge-warning">Medium</span>',
    low: '<span class="badge badge-neutral">Low</span>',
    unresolved: '<span class="badge badge-danger">Unresolved</span>',
    investigating: '<span class="badge badge-warning">Investigating</span>',
    resolved: '<span class="badge badge-success">Resolved</span>',
    up: '<span class="badge badge-success"><i class="fas fa-arrow-up"></i> Up</span>',
    down: '<span class="badge badge-danger"><i class="fas fa-arrow-down"></i> Down</span>',
    stable: '<span class="badge badge-neutral"><i class="fas fa-minus"></i> Stable</span>'
  };
  return map[status] || '<span class="badge badge-neutral">' + status + '</span>';
}
