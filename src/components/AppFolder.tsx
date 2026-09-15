import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import './AppFolder.css';

/**
 * iOS-style app folder (motion.dev "react-ios-app-folder"): the closed folder
 * shows a 3×3 preview; opening it moves each icon to the expanded grid through
 * a shared `layoutId`, and tapping an app hands off to the wave-curtain page
 * transition.
 *
 * Performance notes — each of these made the open animation stutter:
 * - No CSS transform on the folder button. Motion measures the icons when the
 *   click lands; a :active scale on their ancestor skews that measurement and
 *   the icons jump at the start.
 * - No backdrop-filter on the overlay. Fading a full-screen blur repaints the
 *   blurred page behind it on every frame.
 * - The panel background fades only; scaling a large shadowed box is a repaint
 *   per frame too.
 */

export interface FolderApp {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  href: string;
}

interface Props {
  apps: FolderApp[];
  labels: {
    folder: string;
    open: string;
    close: string;
    comingSoon: string;
    next: string;
  };
}

const PREVIEW_SLOTS = 9;
const COMING_SOON = 2;

// In style, not CSS: Motion only corrects radius distortion during a layout
// animation for values it can read from the style prop.
const TILE_RADIUS = { borderRadius: '22.5%' };

export default function AppFolder({ apps, labels }: Props) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      // Return focus to the folder only when it was actually closed, not on mount.
      if (wasOpen.current) trigger.current?.focus({ preventScroll: true });
      return;
    }
    wasOpen.current = true;
    closeButton.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const navigate = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const curtain = window.leafworksCurtain;
    if (!curtain || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    curtain.go(href);
  };

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} reducedMotion="user">
      <div className="app-folder">
        <button
          ref={trigger}
          type="button"
          className="app-folder__folder"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={`${labels.folder} · ${labels.open}`}
        >
          {Array.from({ length: PREVIEW_SLOTS }, (_, i) => {
            const app = apps[i];
            if (app && !open) {
              return (
                <motion.img
                  key={app.slug}
                  layoutId={`app-${app.slug}`}
                  src={app.icon}
                  alt=""
                  className="app-tile app-tile--mini"
                  style={TILE_RADIUS}
                  draggable={false}
                />
              );
            }
            return <span key={`slot-${i}`} className="app-folder__slot" />;
          })}
        </button>
        <p className="app-folder__label">
          {labels.folder} · {apps.length}
        </p>
        <p className="app-folder__hint">{labels.open}</p>
      </div>

      <AnimatePresence mode="popLayout">
        {open && (
          <div className="app-folder__overlay" key="overlay">
            <motion.div
              className="app-folder__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <div
              className="app-folder__panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="app-folder-title"
            >
              <motion.div
                className="app-folder__panel-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="app-folder__head"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 id="app-folder-title">{labels.folder}</h3>
                <button
                  ref={closeButton}
                  type="button"
                  className="app-folder__close"
                  onClick={() => setOpen(false)}
                  aria-label={labels.close}
                >
                  ✕ <span aria-hidden="true">Esc</span>
                </button>
              </motion.div>
              <ul className="app-folder__grid">
                {apps.map((app, i) => (
                  <li key={app.slug}>
                    <a href={app.href} className="app-folder__app" onClick={(e) => navigate(e, app.href)}>
                      <motion.img
                        layoutId={`app-${app.slug}`}
                        src={app.icon}
                        alt=""
                        className="app-tile"
                        style={TILE_RADIUS}
                        draggable={false}
                      />
                      <motion.span
                        className="app-folder__name"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.12 + i * 0.03, duration: 0.25 }}
                      >
                        {app.name}
                      </motion.span>
                      <motion.span
                        className="app-folder__summary"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.15 + i * 0.03, duration: 0.25 }}
                      >
                        {app.summary}
                      </motion.span>
                    </a>
                  </li>
                ))}
                {Array.from({ length: COMING_SOON }, (_, i) => (
                  <motion.li
                    key={`soon-${i}`}
                    className="app-folder__app app-folder__app--soon"
                    aria-hidden="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 + (apps.length + i) * 0.03, duration: 0.25 }}
                  >
                    <span className="app-tile app-tile--empty" />
                    <span className="app-folder__name">{labels.comingSoon}</span>
                    <span className="app-folder__summary">{labels.next}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
