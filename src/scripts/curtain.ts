import { gsap } from 'gsap';

/**
 * The wave curtain from the GSAP "dynamic morphing" demo (codepen GreenSock
 * qBedXpg): each layer is a path through ten points that travel 100 → 0 with
 * their own random delay, so the edge ripples as it moves. The numbers below
 * are the demo's; the Interaction Spec frame in Figma documents them.
 *
 * Coordinates are 0–100 in a `viewBox="0 0 100 100"` svg stretched with
 * `preserveAspectRatio="none"`.
 */
const NUM_POINTS = 10;
const DELAY_POINTS_MAX = 0.3;
const DELAY_PER_PATH = 0.25;
const DURATION = 0.9;

/**
 * `rise`    — the layer grows up from the bottom edge until it covers the screen.
 * `retract` — the layer starts covering the screen and withdraws upward.
 */
export type CurtainMode = 'rise' | 'retract';

export function wavePath(points: number[], mode: CurtainMode): string {
  const last = points.length - 1;
  const step = 100 / last;
  let d = mode === 'rise' ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;
  for (let j = 0; j < last; j++) {
    const p = (j + 1) * step;
    const cp = p - step / 2;
    d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
  }
  return d + (mode === 'rise' ? ' V 100 H 0' : ' V 0 H 0');
}

/**
 * A paused timeline driving `paths` (back layer first). Play it for a page
 * transition, or hand it to a ScrollTrigger to scrub it with the scroll.
 */
export function buildCurtain(paths: SVGPathElement[], mode: CurtainMode): gsap.core.Timeline {
  const points = paths.map(() => new Array<number>(NUM_POINTS).fill(100));
  const delays = Array.from({ length: NUM_POINTS }, () => Math.random() * DELAY_POINTS_MAX);

  const render = () => {
    paths.forEach((path, i) => path.setAttribute('d', wavePath(points[i], mode)));
  };

  const tl = gsap.timeline({
    paused: true,
    onUpdate: render,
    defaults: { ease: 'power2.inOut', duration: DURATION },
  });

  paths.forEach((_, i) => {
    // Rising, the back layer leads; retracting, the front layer leaves first —
    // either way the leaf gradient is seen between the page and the cover.
    const pathDelay = DELAY_PER_PATH * (mode === 'rise' ? i : paths.length - i - 1);
    for (let j = 0; j < NUM_POINTS; j++) {
      tl.to(points[i], { [j]: 0 }, delays[j] + pathDelay);
    }
  });

  render();
  return tl;
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
