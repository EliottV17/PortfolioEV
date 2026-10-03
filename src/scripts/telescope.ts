import { useTranslations } from '../i18n/ui';

interface ProjectData {
  id: string;
  name: string;
  url: string;
  videoUrl?: string;
  detail: string;
  stack: string;
  color: string;
  index: string;
  techIcon?: string;
  filename?: string;
  diagram?: string;
  highlights?: string[];
}

type TelescopeMode = 'INSERT' | 'NORMAL';

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const initTelescope = () => {
  const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
  const t = useTranslations(lang);
  const overlay = document.getElementById('telescope-modal');
  if (!overlay) return;

  const dataScript = document.getElementById('telescope-projects-data');
  if (!dataScript || !dataScript.textContent) return;

  let projects: ProjectData[] = [];
  try {
    projects = JSON.parse(dataScript.textContent);
  } catch (err) {
    console.error('Error parsing telescope projects data', err);
    return;
  }

  const openTriggers = document.querySelectorAll<HTMLElement>(
    '[data-open-telescope]',
  );
  const mobileCloseBtn = document.getElementById('telescope-mobile-close');
  const searchInput = document.getElementById(
    'telescope-search-input',
  ) as HTMLInputElement | null;
  const counterEl = document.getElementById('telescope-counter');
  const itemsList = document.getElementById('telescope-items-list');
  const statusModeEl = document.getElementById('status-mode-indicator');

  // Preview elements
  const previewBorderTitle = document.getElementById('preview-border-title');
  const previewName = document.getElementById('preview-proj-name');
  const previewVideoLink = document.getElementById(
    'preview-video-link',
  ) as HTMLAnchorElement | null;
  const previewGithubLink = document.getElementById(
    'preview-github-link',
  ) as HTMLAnchorElement | null;
  const previewDetail = document.getElementById('preview-detail-text');
  const previewDiagram = document.getElementById('preview-diagram');
  const previewHighlights = document.getElementById('preview-highlights-list');
  const previewStack = document.getElementById('preview-stack-line');

  let activeIndex = 0;
  let visibleProjectIds: string[] = projects.map((p) => p.id);
  let mode: TelescopeMode = 'INSERT';
  let previousOverflow: Array<{
    element: HTMLElement;
    value: string;
    priority: string;
  }> | null = null;

  const setMode = (
    newMode: TelescopeMode,
    options: { skipFocus?: boolean } = {},
  ) => {
    mode = newMode;
    if (statusModeEl) {
      statusModeEl.textContent = newMode;
      if (newMode === 'INSERT') {
        statusModeEl.classList.add('mode-insert');
      } else {
        statusModeEl.classList.remove('mode-insert');
      }
    }
    if (newMode === 'NORMAL') {
      searchInput?.blur();
    } else {
      if (!options.skipFocus && !isTouchDevice()) {
        setTimeout(() => searchInput?.focus(), 10);
      }
    }
  };

  const updatePreview = (proj: ProjectData | undefined) => {
    if (!proj) {
      if (previewBorderTitle) previewBorderTitle.textContent = 'empty';
      if (previewName) previewName.textContent = 'No project selected';
      if (previewVideoLink) previewVideoLink.style.display = 'none';
      if (previewGithubLink) previewGithubLink.style.display = 'none';
      if (previewDetail)
        previewDetail.textContent = 'No details available for current search.';
      if (previewDiagram) {
        previewDiagram.style.display = 'none';
        previewDiagram.textContent = '';
        previewDiagram.setAttribute('aria-label', t('telescope.diagram.aria'));
      }
      if (previewHighlights) {
        previewHighlights.style.display = 'none';
        previewHighlights.innerHTML = '';
      }
      if (previewStack) previewStack.textContent = '';
      return;
    }

    const toSlug = (str: string) =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    if (previewBorderTitle) {
      previewBorderTitle.textContent =
        proj.filename || `${toSlug(proj.name)}.${proj.techIcon || 'ts'}`;
    }
    if (previewName) previewName.textContent = proj.name;

    if (previewVideoLink) {
      if (proj.videoUrl) {
        previewVideoLink.href = proj.videoUrl;
        previewVideoLink.style.display = 'inline';
      } else {
        previewVideoLink.style.display = 'none';
      }
    }

    if (previewGithubLink) {
      if (proj.url) {
        previewGithubLink.href = proj.url;
        previewGithubLink.style.display = 'inline';
      } else {
        previewGithubLink.style.display = 'none';
      }
    }

    if (previewDetail) previewDetail.textContent = proj.detail;

    if (previewDiagram) {
      if (proj.diagram) {
        previewDiagram.style.display = 'block';
        previewDiagram.textContent = proj.diagram;
        previewDiagram.setAttribute(
          'aria-label',
          t('telescope.diagram.project.aria').replace('{name}', proj.name),
        );
      } else {
        previewDiagram.style.display = 'none';
        previewDiagram.textContent = '';
        previewDiagram.setAttribute('aria-label', t('telescope.diagram.aria'));
      }
    }

    if (previewHighlights) {
      if (proj.highlights && proj.highlights.length > 0) {
        previewHighlights.style.display = 'flex';
        previewHighlights.innerHTML = proj.highlights
          .map(
            (h) => `
            <div class="preview-highlight-item">
              <span class="preview-highlight-bullet">-</span>
              <span>${h}</span>
            </div>
          `,
          )
          .join('');
      } else {
        previewHighlights.style.display = 'none';
        previewHighlights.innerHTML = '';
      }
    }

    if (previewStack) previewStack.textContent = proj.stack;
  };

  const updateSelectedVisual = () => {
    const rows = itemsList?.querySelectorAll<HTMLElement>(
      '.telescope-row-item',
    );
    if (!rows) return;

    rows.forEach((row) => {
      const rowId = row.getAttribute('data-id');
      const isCurrent =
        visibleProjectIds.length > 0 &&
        rowId === visibleProjectIds[activeIndex];

      if (isCurrent) {
        row.classList.add('is-selected');
        row.setAttribute('aria-selected', 'true');
        row.scrollIntoView({ block: 'nearest' });
      } else {
        row.classList.remove('is-selected');
        row.setAttribute('aria-selected', 'false');
      }
    });

    const activeProject = projects.find(
      (p) => p.id === visibleProjectIds[activeIndex],
    );
    updatePreview(activeProject);
  };

  const filterProjects = (query: string) => {
    const q = query.toLowerCase().trim();
    const rows = itemsList?.querySelectorAll<HTMLElement>(
      '.telescope-row-item',
    );

    visibleProjectIds = [];

    rows?.forEach((row) => {
      const name = (row.getAttribute('data-name') || '').toLowerCase();
      const stack = (row.getAttribute('data-stack') || '').toLowerCase();
      const id = row.getAttribute('data-id') || '';

      const matches = !q || name.includes(q) || stack.includes(q);

      if (matches) {
        row.style.display = 'flex';
        visibleProjectIds.push(id);
      } else {
        row.style.display = 'none';
      }
    });

    if (counterEl) {
      counterEl.textContent = `${visibleProjectIds.length}/${projects.length}`;
    }

    if (activeIndex >= visibleProjectIds.length) {
      activeIndex = Math.max(0, visibleProjectIds.length - 1);
    }

    updateSelectedVisual();
  };

  const openModal = (targetId?: string) => {
    overlay.removeAttribute('hidden');
    void overlay.offsetWidth;
    overlay.classList.add('is-active');
    if (!previousOverflow) {
      previousOverflow = [document.documentElement, document.body].map(
        (element) => ({
          element,
          value: element.style.getPropertyValue('overflow'),
          priority: element.style.getPropertyPriority('overflow'),
        }),
      );
      previousOverflow.forEach(({ element }) => {
        element.style.setProperty('overflow', 'hidden');
      });
    }

    if (searchInput) {
      searchInput.value = '';
    }
    filterProjects('');

    const targetIndex = targetId ? visibleProjectIds.indexOf(targetId) : -1;
    activeIndex = targetIndex >= 0 ? targetIndex : 0;
    updateSelectedVisual();

    // On touch devices (pointer: coarse), skip auto-focusing to prevent virtual keyboard popup
    setMode('INSERT', { skipFocus: isTouchDevice() });
  };

  const closeModal = () => {
    overlay.classList.remove('is-active');
    previousOverflow?.forEach(({ element, value, priority }) => {
      if (value) {
        element.style.setProperty('overflow', value, priority);
      } else {
        element.style.removeProperty('overflow');
      }
    });
    previousOverflow = null;
    setMode('NORMAL');
    setTimeout(() => {
      if (!overlay.classList.contains('is-active')) {
        overlay.setAttribute('hidden', '');
      }
    }, 180);
  };

  const moveSelection = (direction: 'next' | 'prev') => {
    if (visibleProjectIds.length === 0) return;
    if (direction === 'next') {
      activeIndex = (activeIndex + 1) % visibleProjectIds.length;
    } else {
      activeIndex =
        (activeIndex - 1 + visibleProjectIds.length) % visibleProjectIds.length;
    }
    updateSelectedVisual();
  };

  // Triggers
  openTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      if ((e.target as HTMLElement | null)?.closest('a')) {
        return;
      }
      const mouseEvent = e as MouseEvent;
      if (
        mouseEvent.button !== 0 ||
        mouseEvent.ctrlKey ||
        mouseEvent.metaKey ||
        mouseEvent.shiftKey ||
        mouseEvent.altKey
      ) {
        return;
      }
      e.preventDefault();
      const targetId = trigger.getAttribute('data-project-id') || undefined;
      openModal(targetId);
    });

    trigger.addEventListener('keydown', (e) => {
      if ((e.target as HTMLElement | null)?.closest('a')) {
        return;
      }
      if (e.key === 'Enter' || (e.key === ' ' && e.target === trigger)) {
        e.preventDefault();
        const targetId = trigger.getAttribute('data-project-id') || undefined;
        openModal(targetId);
      }
    });
  });

  mobileCloseBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal();
  });

  // Backdrop click & touch closing
  const handleBackdropClose = (e: MouseEvent | TouchEvent) => {
    if (e.target === overlay) {
      e.preventDefault();
      closeModal();
    }
  };

  overlay.addEventListener('click', handleBackdropClose);
  overlay.addEventListener('touchend', handleBackdropClose, { passive: false });

  // Search input events
  searchInput?.addEventListener('input', (e) => {
    const val = (e.target as HTMLInputElement).value;
    filterProjects(val);
  });

  searchInput?.addEventListener('focus', () => {
    if (mode !== 'INSERT') {
      setMode('INSERT', { skipFocus: true });
    }
  });

  // Item click / tap: select and update preview without opening repository
  itemsList?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetRow = (e.target as HTMLElement).closest<HTMLElement>(
      '.telescope-row-item',
    );
    if (!targetRow) return;

    const rowId = targetRow.getAttribute('data-id');
    const idx = visibleProjectIds.indexOf(rowId || '');
    if (idx !== -1) {
      activeIndex = idx;
      updateSelectedVisual();
    }
  });

  // Focus trap inside modal
  overlay.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = overlay.querySelectorAll<HTMLElement>(
      'input, a[href], button:not([disabled])',
    );
    const visibleFocusable = Array.from(focusable).filter(
      (el) => el.offsetParent !== null,
    );
    if (visibleFocusable.length === 0) return;

    const first = visibleFocusable[0];
    const last = visibleFocusable[visibleFocusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Global keydown handler
  window.addEventListener('keydown', (e) => {
    const isOpen = overlay.classList.contains('is-active');

    // Shortcut to open: Ctrl+P or Cmd+P
    if (!isOpen && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      openModal();
      return;
    }

    if (!isOpen) return;

    // --- ESCAPE KEY LOGIC ---
    if (e.key === 'Escape') {
      e.preventDefault();
      if (mode === 'INSERT') {
        // First ESC: switch to NORMAL mode
        setMode('NORMAL');
      } else {
        // Second ESC (in NORMAL mode): close modal
        closeModal();
      }
      return;
    }

    // --- NORMAL MODE SHORTCUTS ---
    if (mode === 'NORMAL') {
      // j: down, k: up
      if (e.key === 'j' || e.key === 'ArrowDown') {
        e.preventDefault();
        moveSelection('next');
        return;
      }
      if (e.key === 'k' || e.key === 'ArrowUp') {
        e.preventDefault();
        moveSelection('prev');
        return;
      }
      // i or /: enter INSERT mode
      if (e.key === 'i' || e.key === '/') {
        e.preventDefault();
        setMode('INSERT');
        return;
      }
      // q: quit
      if (e.key === 'q') {
        e.preventDefault();
        closeModal();
        return;
      }
    }

    // --- INSERT MODE NAVIGATION SHORTCUTS ---
    if (mode === 'INSERT') {
      if (
        e.key === 'ArrowDown' ||
        ((e.ctrlKey || e.metaKey) && (e.key === 'j' || e.key === 'n'))
      ) {
        e.preventDefault();
        moveSelection('next');
        return;
      }
      if (
        e.key === 'ArrowUp' ||
        ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'p'))
      ) {
        e.preventDefault();
        moveSelection('prev');
        return;
      }
    }

    // --- ENTER: Open repository ---
    if (e.key === 'Enter') {
      const currentProj = projects.find(
        (p) => p.id === visibleProjectIds[activeIndex],
      );
      if (currentProj && currentProj.url) {
        e.preventDefault();
        window.open(currentProj.url, '_blank', 'noopener,noreferrer');
      }
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTelescope);
} else {
  initTelescope();
}
