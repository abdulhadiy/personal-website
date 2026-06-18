import { useEffect, useRef, useState, useCallback } from "react";
import PersonalWebsite from "../imports/PersonalWebsite";
import PersonalWebsiteDetail from "../imports/PersonalWebsiteDetail-1/PersonalWebsiteDetail";
import TuntunDetail from "../imports/TuntunDetail/TuntunDetail";
import DetailPageEnhancer from "./components/DetailPageEnhancer";

// Portfolio App - Abdul Hadiy
function getJakartaTime(): { hours: string; minutes: string; seconds: string } {
  const now = new Date();
  const jakartaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  return {
    hours: String(jakartaTime.getHours()).padStart(2, "0"),
    minutes: String(jakartaTime.getMinutes()).padStart(2, "0"),
    seconds: String(jakartaTime.getSeconds()).padStart(2, "0"),
  };
}

// Create a realistic mechanical click sound using Web Audio API
function playClickSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Layer 1: Sharp transient (the "click" attack)
    const clickBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.015, ctx.sampleRate);
    const clickData = clickBuffer.getChannelData(0);
    for (let i = 0; i < clickData.length; i++) {
      const t = i / ctx.sampleRate;
      clickData[i] = (Math.random() * 2 - 1) * Math.exp(-t * 400) * 0.6;
    }
    const clickSource = ctx.createBufferSource();
    clickSource.buffer = clickBuffer;
    
    // Bandpass filter to shape the click
    const clickFilter = ctx.createBiquadFilter();
    clickFilter.type = "bandpass";
    clickFilter.frequency.value = 3000;
    clickFilter.Q.value = 1.5;
    
    const clickGain = ctx.createGain();
    clickGain.gain.setValueAtTime(0.35, ctx.currentTime);
    clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    
    clickSource.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(ctx.destination);
    clickSource.start(ctx.currentTime);
    
    // Layer 2: Low thud for body
    const thudOsc = ctx.createOscillator();
    thudOsc.frequency.setValueAtTime(150, ctx.currentTime);
    thudOsc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.03);
    const thudGain = ctx.createGain();
    thudGain.gain.setValueAtTime(0.12, ctx.currentTime);
    thudGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(ctx.currentTime);
    thudOsc.stop(ctx.currentTime + 0.05);
    
    setTimeout(() => ctx.close(), 200);
  } catch (e) {
    // silently fail if audio not supported
  }
}

// Realistic soft scroll tick sound
function playScrollTickSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Short burst of filtered noise — like a soft tactile bump
    const bufferLen = Math.floor(ctx.sampleRate * 0.012);
    const noiseBuffer = ctx.createBuffer(1, bufferLen, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferLen; i++) {
      const t = i / ctx.sampleRate;
      noiseData[i] = (Math.random() * 2 - 1) * Math.exp(-t * 600);
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 4500;
    filter.Q.value = 2;
    
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);
    
    noiseSource.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noiseSource.start(ctx.currentTime);
    
    setTimeout(() => ctx.close(), 150);
  } catch (e) {
    // silently fail
  }
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(getJakartaTime());
  const [isVisible, setIsVisible] = useState(false);
  const lastVisibleCardRef = useRef<number>(-1);
  const bibitIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const bibitStateRef = useRef<number>(0);
  const tuntunIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tuntunStateRef = useRef<number>(0);
  const bibitSahamIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const bibitSahamStateRef = useRef<number>(0);
  const ggfIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ggfStateRef = useRef<number>(0);
  const bookingAiIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const bookingAiStateRef = useRef<number>(0);
  const lingkarIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lingkarStateRef = useRef<number>(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<"bibit" | "tuntun">("bibit");

  const handleBackToHome = useCallback(() => {
    setIsCursorVisible(false);
    setCursorText("");
    document.body.style.cursor = "auto";
    setIsVisible(false);
    setShowDetailPage(false);
  }, []);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getJakartaTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // CTA button click sound
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const ctaButton = containerRef.current.querySelector("[data-cta-button]");
    if (ctaButton) {
      const handleClick = () => playClickSound();
      ctaButton.addEventListener("mousedown", handleClick);
      return () => ctaButton.removeEventListener("mousedown", handleClick);
    }
  }, [showDetailPage]);

  // Scroll sound on new project card visibility
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const scrollPanel = containerRef.current.querySelector(
      "[data-navbar-scroll]"
    ) as HTMLElement;

    // Scroll sound: play when a new project card becomes visible
    if (scrollPanel) {
      const cards = scrollPanel.querySelectorAll("[data-project-card]");
      let currentVisible = -1;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const panelRect = scrollPanel.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        if (
          cardCenter >= panelRect.top &&
          cardCenter <= panelRect.bottom
        ) {
          currentVisible = index;
        }
      });
      if (
        currentVisible !== -1 &&
        currentVisible !== lastVisibleCardRef.current
      ) {
        lastVisibleCardRef.current = currentVisible;
        playScrollTickSound();
      }
    }
  }, []);

  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const scrollPanel = containerRef.current.querySelector(
      "[data-navbar-scroll]"
    );
    if (scrollPanel) {
      scrollPanel.addEventListener("scroll", handleScroll, { passive: true });
      return () => scrollPanel.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll, showDetailPage]);

  // Intersection observer for scroll-in animations on project cards
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll("[data-project-card]");
    cards.forEach((card) => {
      (card as HTMLElement).style.opacity = "1";
      (card as HTMLElement).style.transform = "translateY(0)";
    });
  }, [showDetailPage]);

  // Landing entrance animation — stagger each panel and card
  useEffect(() => {
    if (showDetailPage) return;
    setIsVisible(false);

    // Small rAF delay so the browser paints the hidden state first
    let timer: ReturnType<typeof setTimeout> | null = null;
    const raf = requestAnimationFrame(() => {
      timer = setTimeout(() => setIsVisible(true), 30);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
    };
  }, [showDetailPage]);

  // Mobile cards auto-play their interaction panels as they scroll into view.
  useEffect(() => {
    if (showDetailPage || !containerRef.current) return;

    const media = window.matchMedia("(max-width: 1024px)");
    if (!media.matches) return;

    const cards = Array.from(
      containerRef.current.querySelectorAll("[data-project-card]")
    ) as HTMLElement[];
    const intervalMap = new Map<HTMLElement, ReturnType<typeof setInterval>>();
    const stateMap = new Map<HTMLElement, number>();

    const getCardParts = (card: HTMLElement) => {
      const cardRoot = card.querySelector(":scope > div:first-child") as HTMLElement | null;
      const overlay = cardRoot?.querySelector(":scope > div:last-child") as HTMLElement | null;

      if (!cardRoot || !overlay) return null;
      return { cardRoot, overlay };
    };

    const getPositions = (cardRoot: HTMLElement, overlay: HTMLElement) => {
      const firstFrame = overlay.querySelector(":scope > div") as HTMLElement | null;
      const sourceFrameHeight = firstFrame?.offsetHeight || 510;
      const visibleFrameHeight = cardRoot.offsetHeight;
      const frameCount = Math.max(Math.round(overlay.scrollHeight / sourceFrameHeight), 1);
      const positions = Array.from({ length: Math.min(frameCount, 5) }, (_, index) => -(visibleFrameHeight * index));
      const lastPos = -(visibleFrameHeight * (frameCount - 1));

      if (positions.length < 5 && lastPos < 0) {
        positions.push(lastPos);
      }

      return positions;
    };

    const applyPosition = (card: HTMLElement, index: number) => {
      const parts = getCardParts(card);
      if (!parts) return;

      const { cardRoot, overlay } = parts;
      const positions = getPositions(cardRoot, overlay);
      const safeIndex = index % positions.length;

      overlay.style.transition = "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      overlay.style.top = `${positions[safeIndex]}px`;
      overlay.style.bottom = "auto";
    };

    const startCard = (card: HTMLElement) => {
      if (intervalMap.has(card)) return;

      stateMap.set(card, 0);
      applyPosition(card, 0);

      const interval = setInterval(() => {
        const parts = getCardParts(card);
        const totalFrames = parts ? getPositions(parts.cardRoot, parts.overlay).length : 5;
        const nextIndex = ((stateMap.get(card) ?? 0) + 1) % totalFrames;
        stateMap.set(card, nextIndex);
        applyPosition(card, nextIndex);
      }, 1500);

      intervalMap.set(card, interval);
    };

    const stopCard = (card: HTMLElement) => {
      const interval = intervalMap.get(card);
      if (interval) clearInterval(interval);

      intervalMap.delete(card);
      stateMap.set(card, 0);
      applyPosition(card, 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            startCard(card);
          } else {
            stopCard(card);
          }
        });
      },
      { threshold: 0.45 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      intervalMap.forEach((interval) => clearInterval(interval));
      intervalMap.clear();
    };
  }, [showDetailPage]);

  // Stagger project cards after the page fades in
  useEffect(() => {
    if (showDetailPage || !isVisible || !containerRef.current) return;
    const cards = containerRef.current.querySelectorAll("[data-project-card]");
    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      el.style.animation = "none";
      void el.offsetHeight;
      el.style.animation = `cardEntrance 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${500 + i * 90}ms both`;
    });
  }, [isVisible, showDetailPage]);

  // Render time overlay on the footer clock
  useEffect(() => {
    if (!containerRef.current) return;
    const sheetElements = containerRef.current.querySelectorAll(
      '[data-name="sheet"]'
    );
    sheetElements.forEach((sheetEl) => {
      const paragraphs = sheetEl.querySelectorAll("p");
      paragraphs.forEach((p) => {
        const text = p.textContent || "";
        // Match time format or already-animated time
        if (/^\d{2}:\d{2}:\d{2}$/.test(text.trim()) || p.getAttribute("data-time-animated")) {
          const timeStr = `${time.hours}:${time.minutes}:${time.seconds}`;
          if (!p.getAttribute("data-time-animated")) {
            p.setAttribute("data-time-animated", "true");
            p.style.fontVariantNumeric = "tabular-nums";
          }
          const prevTime = p.getAttribute("data-prev-time") || "";
          const chars = timeStr.split("");
          let html = "";
          chars.forEach((char, i) => {
            const changed = prevTime[i] !== char;
            if (char === ":") {
              html += ":";
            } else {
              html += `<span style="display:inline-block;overflow:hidden;height:32px;vertical-align:top;line-height:32px;"><span style="display:block;line-height:32px;${changed ? "animation:slideUp 0.3s ease-out forwards;" : ""}">${char}</span></span>`;
            }
          });
          p.innerHTML = html;
          p.setAttribute("data-prev-time", timeStr);
        }
      });
    });
  }, [time]);

  // Mobile overlay scaling — compute scale from each rendered card width.
  useEffect(() => {
    if (showDetailPage) return;

    const updateCardScale = () => {
      if (!containerRef.current) return;

      const cardRoots = Array.from(
        containerRef.current.querySelectorAll("[data-project-card] > div:first-child")
      ) as HTMLElement[];

      cardRoots.forEach((cardRoot) => {
        if (window.innerWidth <= 1024) {
          cardRoot.style.setProperty("--card-scale", String(cardRoot.offsetWidth / 510));
        } else {
          cardRoot.style.removeProperty("--card-scale");
        }
      });
    };

    const raf = requestAnimationFrame(updateCardScale);
    window.addEventListener('resize', updateCardScale);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateCardScale);
    };
  }, [showDetailPage]);

  // Bibit card hover carousel — cycle through overlay panels on hover
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const firstCard = containerRef.current.querySelector('[data-project-card]');
    if (!firstCard) return;

    const bibitRoot = firstCard.querySelector(':scope > div:first-child') as HTMLElement;
    if (!bibitRoot) return;

    const overlay = bibitRoot.querySelector(':scope > div:last-child') as HTMLElement;
    if (!overlay) return;

    const getPositions = () => {
      const lastPos = -(overlay.scrollHeight - bibitRoot.offsetHeight);
      return [0, -501, -1002, -1503, lastPos];
    };

    const applyPosition = (index: number) => {
      const positions = getPositions();
      overlay.style.top = positions[index] + 'px';
      overlay.style.bottom = 'auto';
    };

    let firstTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
      overlay.style.transition = 'top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      bibitStateRef.current = 0;

      firstTimeout = setTimeout(() => {
        bibitStateRef.current = (bibitStateRef.current + 1) % 5;
        applyPosition(bibitStateRef.current);

        bibitIntervalRef.current = setInterval(() => {
          bibitStateRef.current = (bibitStateRef.current + 1) % 5;
          applyPosition(bibitStateRef.current);
        }, 1400);
      }, 300);
    };

    const handleMouseLeave = () => {
      if (firstTimeout) { clearTimeout(firstTimeout); firstTimeout = null; }
      if (bibitIntervalRef.current) {
        clearInterval(bibitIntervalRef.current);
        bibitIntervalRef.current = null;
      }
      bibitStateRef.current = 0;
      applyPosition(0);
    };

    firstCard.addEventListener('mouseenter', handleMouseEnter);
    firstCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      firstCard.removeEventListener('mouseenter', handleMouseEnter);
      firstCard.removeEventListener('mouseleave', handleMouseLeave);
      if (firstTimeout) clearTimeout(firstTimeout);
      if (bibitIntervalRef.current) clearInterval(bibitIntervalRef.current);
    };
  }, [showDetailPage]);

  // Tuntun card hover carousel
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('[data-project-card]');
    const secondCard = cards[1];
    if (!secondCard) return;

    const tuntunRoot = secondCard.querySelector(':scope > div:first-child') as HTMLElement;
    if (!tuntunRoot) return;

    const overlay = tuntunRoot.querySelector(':scope > div:last-child') as HTMLElement;
    if (!overlay) return;

    const getPositions = () => {
      const lastPos = -(overlay.scrollHeight - tuntunRoot.offsetHeight);
      return [0, -501, -1002, -1503, lastPos];
    };

    const applyPosition = (index: number) => {
      const positions = getPositions();
      overlay.style.top = positions[index] + 'px';
      overlay.style.bottom = 'auto';
    };

    let firstTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
      overlay.style.transition = 'top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      tuntunStateRef.current = 0;

      firstTimeout = setTimeout(() => {
        tuntunStateRef.current = (tuntunStateRef.current + 1) % 5;
        applyPosition(tuntunStateRef.current);

        tuntunIntervalRef.current = setInterval(() => {
          tuntunStateRef.current = (tuntunStateRef.current + 1) % 5;
          applyPosition(tuntunStateRef.current);
        }, 1400);
      }, 300);
    };

    const handleMouseLeave = () => {
      if (firstTimeout) { clearTimeout(firstTimeout); firstTimeout = null; }
      if (tuntunIntervalRef.current) {
        clearInterval(tuntunIntervalRef.current);
        tuntunIntervalRef.current = null;
      }
      tuntunStateRef.current = 0;
      applyPosition(0);
    };

    secondCard.addEventListener('mouseenter', handleMouseEnter);
    secondCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      secondCard.removeEventListener('mouseenter', handleMouseEnter);
      secondCard.removeEventListener('mouseleave', handleMouseLeave);
      if (firstTimeout) clearTimeout(firstTimeout);
      if (tuntunIntervalRef.current) clearInterval(tuntunIntervalRef.current);
    };
  }, [showDetailPage]);

  // BibitSaham card hover carousel
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('[data-project-card]');
    const thirdCard = cards[2];
    if (!thirdCard) return;

    const cardRoot = thirdCard.querySelector(':scope > div:first-child') as HTMLElement;
    if (!cardRoot) return;

    const overlay = cardRoot.querySelector(':scope > div:last-child') as HTMLElement;
    if (!overlay) return;

    const getPositions = () => {
      const lastPos = -(overlay.scrollHeight - cardRoot.offsetHeight);
      return [0, -501, -1002, -1503, lastPos];
    };

    const applyPosition = (index: number) => {
      const positions = getPositions();
      overlay.style.top = positions[index] + 'px';
      overlay.style.bottom = 'auto';
    };

    let firstTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
      overlay.style.transition = 'top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      bibitSahamStateRef.current = 0;

      firstTimeout = setTimeout(() => {
        bibitSahamStateRef.current = (bibitSahamStateRef.current + 1) % 5;
        applyPosition(bibitSahamStateRef.current);

        bibitSahamIntervalRef.current = setInterval(() => {
          bibitSahamStateRef.current = (bibitSahamStateRef.current + 1) % 5;
          applyPosition(bibitSahamStateRef.current);
        }, 1400);
      }, 300);
    };

    const handleMouseLeave = () => {
      if (firstTimeout) { clearTimeout(firstTimeout); firstTimeout = null; }
      if (bibitSahamIntervalRef.current) {
        clearInterval(bibitSahamIntervalRef.current);
        bibitSahamIntervalRef.current = null;
      }
      bibitSahamStateRef.current = 0;
      applyPosition(0);
    };

    thirdCard.addEventListener('mouseenter', handleMouseEnter);
    thirdCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      thirdCard.removeEventListener('mouseenter', handleMouseEnter);
      thirdCard.removeEventListener('mouseleave', handleMouseLeave);
      if (firstTimeout) clearTimeout(firstTimeout);
      if (bibitSahamIntervalRef.current) clearInterval(bibitSahamIntervalRef.current);
    };
  }, [showDetailPage]);

  // Ggf card hover carousel
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('[data-project-card]');
    const fourthCard = cards[3];
    if (!fourthCard) return;

    const cardRoot = fourthCard.querySelector(':scope > div:first-child') as HTMLElement;
    if (!cardRoot) return;

    const overlay = cardRoot.querySelector(':scope > div:last-child') as HTMLElement;
    if (!overlay) return;

    const getPositions = () => {
      const lastPos = -(overlay.scrollHeight - cardRoot.offsetHeight);
      return [0, -501, -1002, -1503, lastPos];
    };

    const applyPosition = (index: number) => {
      const positions = getPositions();
      overlay.style.top = positions[index] + 'px';
      overlay.style.bottom = 'auto';
    };

    let firstTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
      overlay.style.transition = 'top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      ggfStateRef.current = 0;

      firstTimeout = setTimeout(() => {
        ggfStateRef.current = (ggfStateRef.current + 1) % 5;
        applyPosition(ggfStateRef.current);

        ggfIntervalRef.current = setInterval(() => {
          ggfStateRef.current = (ggfStateRef.current + 1) % 5;
          applyPosition(ggfStateRef.current);
        }, 1400);
      }, 300);
    };

    const handleMouseLeave = () => {
      if (firstTimeout) { clearTimeout(firstTimeout); firstTimeout = null; }
      if (ggfIntervalRef.current) {
        clearInterval(ggfIntervalRef.current);
        ggfIntervalRef.current = null;
      }
      ggfStateRef.current = 0;
      applyPosition(0);
    };

    fourthCard.addEventListener('mouseenter', handleMouseEnter);
    fourthCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      fourthCard.removeEventListener('mouseenter', handleMouseEnter);
      fourthCard.removeEventListener('mouseleave', handleMouseLeave);
      if (firstTimeout) clearTimeout(firstTimeout);
      if (ggfIntervalRef.current) clearInterval(ggfIntervalRef.current);
    };
  }, [showDetailPage]);

  // BookingAi card hover carousel
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('[data-project-card]');
    const fifthCard = cards[4];
    if (!fifthCard) return;

    const cardRoot = fifthCard.querySelector(':scope > div:first-child') as HTMLElement;
    if (!cardRoot) return;

    const overlay = cardRoot.querySelector(':scope > div:last-child') as HTMLElement;
    if (!overlay) return;

    const getPositions = () => {
      const lastPos = -(overlay.scrollHeight - cardRoot.offsetHeight);
      return [0, -501, -1002, -1503, lastPos];
    };

    const applyPosition = (index: number) => {
      const positions = getPositions();
      overlay.style.top = positions[index] + 'px';
      overlay.style.bottom = 'auto';
    };

    let firstTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
      overlay.style.transition = 'top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      bookingAiStateRef.current = 0;

      firstTimeout = setTimeout(() => {
        bookingAiStateRef.current = (bookingAiStateRef.current + 1) % 5;
        applyPosition(bookingAiStateRef.current);

        bookingAiIntervalRef.current = setInterval(() => {
          bookingAiStateRef.current = (bookingAiStateRef.current + 1) % 5;
          applyPosition(bookingAiStateRef.current);
        }, 1400);
      }, 300);
    };

    const handleMouseLeave = () => {
      if (firstTimeout) { clearTimeout(firstTimeout); firstTimeout = null; }
      if (bookingAiIntervalRef.current) {
        clearInterval(bookingAiIntervalRef.current);
        bookingAiIntervalRef.current = null;
      }
      bookingAiStateRef.current = 0;
      applyPosition(0);
    };

    fifthCard.addEventListener('mouseenter', handleMouseEnter);
    fifthCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      fifthCard.removeEventListener('mouseenter', handleMouseEnter);
      fifthCard.removeEventListener('mouseleave', handleMouseLeave);
      if (firstTimeout) clearTimeout(firstTimeout);
      if (bookingAiIntervalRef.current) clearInterval(bookingAiIntervalRef.current);
    };
  }, [showDetailPage]);

  // Lingkar card hover carousel
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('[data-project-card]');
    const sixthCard = cards[5];
    if (!sixthCard) return;

    const cardRoot = sixthCard.querySelector(':scope > div:first-child') as HTMLElement;
    if (!cardRoot) return;

    const overlay = cardRoot.querySelector(':scope > div:last-child') as HTMLElement;
    if (!overlay) return;

    const getPositions = () => {
      const lastPos = -(overlay.scrollHeight - cardRoot.offsetHeight);
      return [0, -501, -1002, -1503, lastPos];
    };

    const applyPosition = (index: number) => {
      const positions = getPositions();
      overlay.style.top = positions[index] + 'px';
      overlay.style.bottom = 'auto';
    };

    let firstTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
      overlay.style.transition = 'top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      lingkarStateRef.current = 0;

      firstTimeout = setTimeout(() => {
        lingkarStateRef.current = (lingkarStateRef.current + 1) % 5;
        applyPosition(lingkarStateRef.current);

        lingkarIntervalRef.current = setInterval(() => {
          lingkarStateRef.current = (lingkarStateRef.current + 1) % 5;
          applyPosition(lingkarStateRef.current);
        }, 1400);
      }, 300);
    };

    const handleMouseLeave = () => {
      if (firstTimeout) { clearTimeout(firstTimeout); firstTimeout = null; }
      if (lingkarIntervalRef.current) {
        clearInterval(lingkarIntervalRef.current);
        lingkarIntervalRef.current = null;
      }
      lingkarStateRef.current = 0;
      applyPosition(0);
    };

    sixthCard.addEventListener('mouseenter', handleMouseEnter);
    sixthCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      sixthCard.removeEventListener('mouseenter', handleMouseEnter);
      sixthCard.removeEventListener('mouseleave', handleMouseLeave);
      if (firstTimeout) clearTimeout(firstTimeout);
      if (lingkarIntervalRef.current) clearInterval(lingkarIntervalRef.current);
    };
  }, [showDetailPage]);

  // Custom cursor tracking
  useEffect(() => {
    if (showDetailPage) return;
    if (!containerRef.current) return;

    const bibitStockMailto = "mailto:abdulhadiy8@gmail.com?subject=Hi%20Abdul&body=Hi%20Abdul%2C%0A%0AI%20just%20wanted%20to%20ask%20about%20the%20Bibit%2B%20project";

    const projectTexts = [
      "view summary",      // Bibit - Revamp Transaction Page
      "view summary",      // Tuntun - Good Spirit from the East
      "request access",    // Bibit Saham - Stock in Bibit
      "view client",       // Ggf - Drone, GIS & AI
      "with ai",           // BookingAi - Landing Page, Dashboard & AI
      "with ai"            // Lingkar - Landing Page & Branding
    ];

    const cards = containerRef.current.querySelectorAll('[data-project-card]');
    const handlers = new Map();

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    cards.forEach((card, index) => {
      const handleMouseEnter = () => {
        setIsCursorVisible(true);
        setCursorText(projectTexts[index] || "view summary");
        document.body.style.cursor = "none";
      };

      const handleMouseLeave = () => {
        setIsCursorVisible(false);
        document.body.style.cursor = "auto";
      };

      const handleClick = () => {
        // Show detail page for first two cards (Bibit and Tuntun)
        if (index === 0 || index === 1) {
          playClickSound();
          setIsCursorVisible(false);
          document.body.style.cursor = "auto";
          setSelectedDetail(index === 1 ? "tuntun" : "bibit");
          setShowDetailPage(true);
        } else if (index === 2) {
          playClickSound();
          setIsCursorVisible(false);
          document.body.style.cursor = "auto";
          window.location.href = bibitStockMailto;
        } else if (index === 3) {
          playClickSound();
          setIsCursorVisible(false);
          document.body.style.cursor = "auto";
          window.open("https://www.greatgiantfoods.com/id/", "_blank", "noopener,noreferrer");
        } else if (index === 4) {
          playClickSound();
          setIsCursorVisible(false);
          document.body.style.cursor = "auto";
          window.open("https://bookingin.ai/", "_blank", "noopener,noreferrer");
        } else if (index === 5) {
          playClickSound();
          setIsCursorVisible(false);
          document.body.style.cursor = "auto";
          window.open("https://lingkarstudio.com/", "_blank", "noopener,noreferrer");
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (![0, 1, 2, 3, 4, 5].includes(index) || (e.key !== "Enter" && e.key !== " ")) return;

        e.preventDefault();
        handleClick();
      };

      handlers.set(card, { handleMouseEnter, handleMouseLeave, handleMouseMove, handleClick, handleKeyDown });

      if (index === 0) {
        (card as HTMLElement).setAttribute("role", "button");
        (card as HTMLElement).setAttribute("tabindex", "0");
        (card as HTMLElement).setAttribute("aria-label", "view Bibit case study detail");
      } else if (index === 1) {
        (card as HTMLElement).setAttribute("role", "button");
        (card as HTMLElement).setAttribute("tabindex", "0");
        (card as HTMLElement).setAttribute("aria-label", "view Tuntun case study detail");
      } else if (index === 2) {
        (card as HTMLElement).setAttribute("role", "link");
        (card as HTMLElement).setAttribute("tabindex", "0");
        (card as HTMLElement).setAttribute("aria-label", "request access by email");
      } else if (index === 3) {
        (card as HTMLElement).setAttribute("role", "link");
        (card as HTMLElement).setAttribute("tabindex", "0");
        (card as HTMLElement).setAttribute("aria-label", "view Great Giant Foods client website");
      } else if (index === 4) {
        (card as HTMLElement).setAttribute("role", "link");
        (card as HTMLElement).setAttribute("tabindex", "0");
        (card as HTMLElement).setAttribute("aria-label", "view Bookingin AI client website");
      } else if (index === 5) {
        (card as HTMLElement).setAttribute("role", "link");
        (card as HTMLElement).setAttribute("tabindex", "0");
        (card as HTMLElement).setAttribute("aria-label", "view Lingkar Studio client website");
      }

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mousemove', handleMouseMove as any);
      card.addEventListener('click', handleClick);
      card.addEventListener('keydown', handleKeyDown);
    });

    return () => {
      cards.forEach((card) => {
        const cardHandlers = handlers.get(card);
        if (cardHandlers) {
          card.removeEventListener('mouseenter', cardHandlers.handleMouseEnter);
          card.removeEventListener('mouseleave', cardHandlers.handleMouseLeave);
          card.removeEventListener('mousemove', cardHandlers.handleMouseMove as any);
          if (cardHandlers.handleClick) {
            card.removeEventListener('click', cardHandlers.handleClick);
          }
          if (cardHandlers.handleKeyDown) {
            card.removeEventListener('keydown', cardHandlers.handleKeyDown);
          }
        }
      });
      document.body.style.cursor = "auto";
    };
  }, [showDetailPage]);

  useEffect(() => {
    if (!showDetailPage) return;

    setIsCursorVisible(false);
    setCursorText("");
    document.body.style.cursor = "auto";
  }, [showDetailPage]);

  // Add the keyframe animation for time digits
  useEffect(() => {
    const styleId = "time-animation-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        * {
          font-family: 'Outfit', sans-serif !important;
        }
        /* Hide scrollbars while keeping scroll functionality */
        [data-navbar-scroll] {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        [data-navbar-scroll]::-webkit-scrollbar {
          display: none;
        }
        @keyframes slideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        @keyframes cardEntrance {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes panelFadeUp {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        [data-project-card] {
          will-change: transform, opacity;
        }
        [data-cta-button]:active > div > div:first-child {
          padding-bottom: 3px !important;
        }
        [data-project-card] {
          cursor: none !important;
        }
        [data-project-card] * {
          cursor: none !important;
        }
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: opacity 0.15s ease;
        }
        .custom-cursor-pointer {
          filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.35));
        }
        @media (max-width: 1024px) {
          [data-project-card],
          [data-project-card] * {
            cursor: auto !important;
          }
          .custom-cursor {
            display: none !important;
          }
          /* Root container — single column, matches Figma mobile frame */
          [data-name="personal website"] {
            min-width: 0 !important;
            width: 100% !important;
            height: auto !important;
            min-height: 100vh !important;
          }
          /* Collapse desktop wrapper divs */
          [data-name="personal website"] > div {
            height: auto !important;
          }
          [data-name="personal website"] > div > div {
            flex-direction: column !important;
            padding: 20px !important;
            height: auto !important;
            gap: 20px !important;
            align-items: stretch !important;
            justify-content: flex-start !important;
            position: relative !important;
            border-left: 2px dashed #e0e0e0 !important;
            border-right: 2px dashed #e0e0e0 !important;
          }
          /* Bio section — sticky hero header on mobile */
          [data-name="personal website"] > div > div > div:first-child {
            position: sticky !important;
            top: 0 !important;
            z-index: 10 !important;
            width: 100% !important;
            min-width: 0 !important;
            flex: none !important;
            height: 400px !important;
            background: #fafafa !important;
          }
          /* Bio inner layout — header at top, content centered */
          [data-name="personal website"] > div > div > div:first-child > div {
            height: 100% !important;
            padding: 20px 0 !important;
            justify-content: flex-start !important;
            gap: 0 !important;
          }
          /* Hide bio clock on mobile — moved to footer */
          [data-name="personal website"] > div > div > div:first-child > div > [data-name="sheet"]:last-child:not([data-footer-clock]) {
            display: none !important;
          }
          /* Bio content block — center in remaining space */
          [data-name="personal website"] > div > div > div:first-child > div > div:nth-child(2) {
            height: auto !important;
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          /* Bio text — full width instead of desktop w-[470px] */
          [data-name="personal website"] > div > div > div:first-child > div > div:nth-child(2) > div:first-child {
            width: 100% !important;
          }
          /* Project section — full width, auto height */
          [data-name="personal website"] [data-name="navbar"] {
            width: 100% !important;
            height: auto !important;
          }
          /* Scroll container — no scroll, content flows naturally */
          [data-name="personal website"] [data-navbar-scroll] {
            overflow: visible !important;
            height: auto !important;
            padding: 20px 0 !important;
          }
          /* Dashed borders — hide navbar dashed border on mobile (replaced by full-page borders) */
          [data-name="personal website"] [data-name="navbar"] > div:last-child[aria-hidden="true"] {
            display: none !important;
          }
          /* Project list — full width */
          [data-name="personal website"] [data-name="list"] {
            width: 100% !important;
          }
          [data-name="personal website"] [data-name="list"] > div {
            width: 100% !important;
          }
          /* Project cards — full width */
          [data-project-card] {
            width: 100% !important;
          }
          /* Card image — square, full width, clip scaled overlay */
          [data-project-card] > div:first-child {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 1 / 1;
            overflow: hidden !important;
          }
          /* Overlay container — center and scale proportionally to fit card width */
          [data-project-card] > div:first-child > div:last-child {
            top: 0;
            bottom: auto;
            left: 50% !important;
            width: 510px !important;
            transform-origin: top center !important;
            transform: translateX(-50%) scale(var(--card-scale, 1)) !important;
          }
          /* Company logo containers — 80px width, centered on mobile */
          [data-project-card] > div:last-child > div > div > div:first-child {
            width: 80px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }

        /* Detail Page Styles */
        [data-name="personal website detail"] {
          font-family: 'Outfit', sans-serif !important;
          height: 100vh;
          overflow: hidden;
        }

        /* Detail page navbar - enable vertical scrolling */
        [data-name="personal website detail"] [data-name="navbar"] {
          overflow-y: auto;
          overflow-x: hidden;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          height: 100%;
        }

        [data-name="personal website detail"] [data-name="navbar"]::-webkit-scrollbar {
          display: none;
        }

        /* Smooth transitions for sidebar indicator */
        [data-name="Frame 17"] > div:last-child {
          transition: top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Sidebar items styling */
        [data-name="Frame 15"] p {
          cursor: pointer;
        }

        /* Back button styling */
        [data-name="sheet"] {
          cursor: pointer;
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      {showDetailPage ? (
        <>
          <div
            key={selectedDetail}
            className="w-full h-screen min-w-[320px] lg:min-w-[1440px] overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {selectedDetail === "tuntun" ? (
              <TuntunDetail onBack={handleBackToHome} />
            ) : (
              <PersonalWebsiteDetail onBack={handleBackToHome} />
            )}
          </div>
          <DetailPageEnhancer key={selectedDetail} onBack={handleBackToHome} />
        </>
      ) : (
        <div
          ref={containerRef}
          className="w-full h-screen min-w-[320px] lg:min-w-[1440px] overflow-x-auto max-lg:overflow-y-auto max-lg:h-auto max-lg:min-h-screen"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <PersonalWebsite className="bg-[#fafafa] h-full relative w-full min-w-[320px] lg:min-w-[1440px]" />
        </div>
      )}

      {/* Custom Cursor */}
      {isCursorVisible && (
        <div
          className="custom-cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            opacity: isCursorVisible ? 1 : 0,
          }}
        >
          <div className="relative">
            {/* Pointer */}
            <svg
              className="custom-cursor-pointer"
              width="17"
              height="20"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 1L17 12.1L8.5 13.6L4 20.1L1.5 1H4Z"
                fill="black"
              />
              <path
                d="M4 1L17 12.1L8.5 13.6L4 20.1L1.5 1H4Z"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="square"
              />
            </svg>
            {/* Label */}
            <div
              className="absolute top-0 left-4 bg-white px-1 rounded-[1px] whitespace-nowrap lowercase"
              style={{
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 'normal',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.16)',
                lineHeight: 'normal',
              }}
            >
              {cursorText}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
