/// <reference types="astro/client" />

interface Window {
  /** Wave-curtain page transition, installed by PageCurtain.astro. */
  leafworksCurtain?: {
    go(href: string): void;
  };
}
