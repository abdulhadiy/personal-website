import { useEffect, useRef } from "react";

interface DetailPageEnhancerProps {
  onBack: () => void;
}

export default function DetailPageEnhancer({ onBack }: DetailPageEnhancerProps) {
  const setupRef = useRef(false);

  useEffect(() => {
    if (setupRef.current) return;
    setupRef.current = true;

    const cleanups: Array<() => void> = [];

    const timer = setTimeout(() => {
      // Back button navigation
      const backButton = document.querySelector('[data-name="sheet"]');
      if (backButton) {
        backButton.addEventListener('click', onBack);
        (backButton as HTMLElement).style.cursor = 'pointer';
        cleanups.push(() => backButton.removeEventListener('click', onBack));
      }

      // Pagination indicator based on scroll position
      const navbar = document.querySelector('[data-name="navbar"]') as HTMLElement | null;
      const content = navbar?.querySelector(':scope > div') as HTMLElement | null;
      const sidebarContainer = document.querySelector('[data-name="Frame 15"]');
      const indicator = document.querySelector('[data-name="Frame 17"] > div:last-child') as HTMLElement;

      if (navbar && content && indicator && sidebarContainer) {
        const sections = Array.from(content.querySelectorAll(':scope > div:not([aria-hidden="true"])')) as HTMLElement[];
        const sidebarItems = Array.from(sidebarContainer.children) as HTMLElement[];
        const sectionNames = sidebarItems.map((item) => (item.textContent || '').trim().toLowerCase());

        let rafId: number | null = null;

        const updatePagination = () => {
          const navbarRect = navbar.getBoundingClientRect();
          const activationY = navbarRect.top + navbar.clientHeight * 0.32;
          const isAtBottom = navbar.scrollTop + navbar.clientHeight >= navbar.scrollHeight - 2;

          let activeIndex = 0;
          let closestDistance = Number.POSITIVE_INFINITY;

          if (isAtBottom) {
            activeIndex = sections.length - 1;
          } else {
            sections.forEach((section, index) => {
              const rect = section.getBoundingClientRect();

              if (rect.top <= activationY && rect.bottom > navbarRect.top) {
                activeIndex = index;
                closestDistance = 0;
                return;
              }

              const distance = Math.abs(rect.top - activationY);
              if (distance < closestDistance) {
                closestDistance = distance;
                activeIndex = index;
              }
            });
          }

          const activeItem = sidebarItems[activeIndex];
          if (activeItem) {
            indicator.style.top = `${activeItem.offsetTop}px`;
            indicator.style.height = `${activeItem.offsetHeight}px`;
          }

          sidebarItems.forEach((item, index) => {
            const isActive = index === activeIndex;
            item.style.color = isActive ? '#000' : '#6e6f73';
            item.style.fontWeight = isActive ? '500' : '400';
            item.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
          });

          navbar.setAttribute('data-active-section', sectionNames[activeIndex] || '');
        };

        const handleScroll = () => {
          if (rafId) return;
          rafId = requestAnimationFrame(() => {
            updatePagination();
            rafId = null;
          });
        };

        navbar.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', updatePagination);
        content.querySelectorAll('img').forEach((image) => {
          image.addEventListener('load', updatePagination);
          cleanups.push(() => image.removeEventListener('load', updatePagination));
        });
        updatePagination();
        cleanups.push(() => {
          navbar.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', updatePagination);
          if (rafId) cancelAnimationFrame(rafId);
        });

        const scrollToSection = (index: number) => {
          const section = sections[index];
          if (!section) return;

          const maxScrollTop = Math.max(0, navbar.scrollHeight - navbar.clientHeight);
          const targetTop = index === sections.length - 1
            ? maxScrollTop
            : Math.max(0, Math.min(section.offsetTop, maxScrollTop));

          navbar.scrollTo({
            top: targetTop,
            behavior: 'auto',
          });
          updatePagination();
        };

        // Sidebar click navigation
        sidebarItems.forEach((item, index) => {
          const handleClick = (event: Event) => {
            event.preventDefault();
            scrollToSection(index);
          };

          const handleKeydown = (event: KeyboardEvent) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            scrollToSection(index);
          };

          item.addEventListener('click', handleClick);
          item.addEventListener('keydown', handleKeydown);
          item.style.cursor = 'pointer';
          item.style.userSelect = 'none';
          item.setAttribute('role', 'button');
          item.setAttribute('tabindex', '0');
          cleanups.push(() => {
            item.removeEventListener('click', handleClick);
            item.removeEventListener('keydown', handleKeydown);
          });
        });
      }
    }, 30);

    return () => {
      clearTimeout(timer);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [onBack]);

  return null;
}
