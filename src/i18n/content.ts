import type { Locale } from './config';

/**
 * Every user-facing string on the site. The Korean dictionary defines the
 * shape and English must satisfy it, so a key added in one language and
 * forgotten in the other fails `astro check` instead of shipping blank.
 */
const ko = {
  meta: {
    title: '리프웍스 Leafworks',
    description: '리프웍스(Leafworks)는 기술과 아이디어를 바탕으로 새로운 제품과 경험을 만들어가는 개발 스튜디오입니다.',
  },
  nav: {
    apps: 'Apps',
    about: 'About',
    brand: 'Brand',
    contact: 'Contact',
    home: '리프웍스 홈',
    language: '언어 선택',
  },
  hero: {
    eyebrow: 'Leafworks · Development Studio',
    title: ['기술과 아이디어로', '새로운 제품과 경험을 만듭니다.'],
    lead: '리프웍스는 우리가 쓰고 싶은 도구를 만들고, 누구나 편하게 쓸 수 있도록 다듬는 개발 스튜디오입니다.',
    scroll: 'Scroll',
  },
  tagline: {
    // The horizontal-text phrase stays in English on both locales (brand tagline).
    first: 'Tools we wanted.',
    second: 'Made for everyone.',
  },
  about: {
    eyebrow: 'About',
    title: ['우리가 쓰고 싶던 도구를,', '모두가 쓸 수 있게.'],
    body: '리프웍스는 기술과 아이디어를 바탕으로 새로운 제품과 경험을 만들어가는 개발 스튜디오입니다. 직접 필요해서 만든 도구를, 누구나 편하게 쓸 수 있도록 다듬어 내놓습니다.',
    pillars: [
      { title: '실용성', label: 'Practical', body: '멋보다 쓸모를 먼저. 실제로 필요한 문제를 풉니다.' },
      { title: '친근함', label: 'Friendly', body: '어렵게 말하지 않고, 처음 쓰는 사람도 헤매지 않게.' },
    ],
  },
  apps: {
    eyebrow: 'Apps',
    title: '우리가 만든 앱',
    lead: '필요해서 만들고, 모두가 쓸 수 있게 다듬은 앱들입니다.',
    folder: 'Apps',
    open: '폴더를 눌러 열기',
    close: '닫기',
    comingSoon: 'Coming soon',
    next: '다음 앱',
  },
  appDetail: {
    back: '← Apps',
    homepage: '홈페이지 방문',
    github: 'GitHub',
    features: '주요 기능',
    status: { 'in-development': '개발 중', released: '출시' },
    info: {
      platform: '플랫폼',
      status: '상태',
      license: '라이선스',
      website: '홈페이지',
      source: '소스',
    },
    unavailable: '공개 준비 중',
  },
  brand: {
    eyebrow: 'Brand',
    title: '브랜드 가이드',
    lead: '리프웍스 로고·색·서체·레이아웃·문구를 쓰기 위한 기준과 파일입니다.',
    downloadAll: '에셋 전체 다운로드 (.zip)',
  },
  footer: {
    tagline: 'Tools we wanted. Made for everyone.',
    contact: 'Contact',
    brand: 'Brand',
    brandLink: '브랜드 가이드 →',
    business: '리프웍스(Leafworks) · 대표 임태건 · 사업자등록번호 320-64-00793',
    rights: '© 2026 Leafworks. All rights reserved.',
  },
  notFound: {
    title: '페이지를 찾을 수 없습니다',
    body: '주소가 바뀌었거나 없는 페이지입니다.',
    home: '홈으로',
  },
};

type Content = typeof ko;

const en: Content = {
  meta: {
    title: 'Leafworks',
    description: 'Leafworks is a development studio that builds new products and experiences from technology and ideas.',
  },
  nav: {
    apps: 'Apps',
    about: 'About',
    brand: 'Brand',
    contact: 'Contact',
    home: 'Leafworks home',
    language: 'Choose language',
  },
  hero: {
    eyebrow: 'Leafworks · Development Studio',
    title: ['Building new products', 'and experiences.'],
    lead: 'Leafworks is a development studio that builds the tools we want to use, and polishes them so anyone can.',
    scroll: 'Scroll',
  },
  tagline: {
    first: 'Tools we wanted.',
    second: 'Made for everyone.',
  },
  about: {
    eyebrow: 'About',
    title: ['Tools we wanted,', 'made for everyone.'],
    body: 'Leafworks is a development studio that builds new products and experiences from technology and ideas. We make the tools we need ourselves, then refine them so anyone can use them with ease.',
    pillars: [
      { title: 'Practical', label: '실용성', body: 'Usefulness before flash. We solve problems people actually have.' },
      { title: 'Friendly', label: '친근함', body: 'Simple words, so even first-time users never feel lost.' },
    ],
  },
  apps: {
    eyebrow: 'Apps',
    title: 'Our apps',
    lead: 'Built because we needed them, refined so everyone can use them.',
    folder: 'Apps',
    open: 'Tap to open',
    close: 'Close',
    comingSoon: 'Coming soon',
    next: 'Next app',
  },
  appDetail: {
    back: '← Apps',
    homepage: 'Visit website',
    github: 'GitHub',
    features: 'Features',
    status: { 'in-development': 'In development', released: 'Released' },
    info: {
      platform: 'Platform',
      status: 'Status',
      license: 'License',
      website: 'Website',
      source: 'Source',
    },
    unavailable: 'Not public yet',
  },
  brand: {
    eyebrow: 'Brand',
    title: 'Brand guidelines',
    lead: 'Standards and files for using the Leafworks logo, color, type, layout and voice.',
    downloadAll: 'Download all assets (.zip)',
  },
  footer: {
    tagline: 'Tools we wanted. Made for everyone.',
    contact: 'Contact',
    brand: 'Brand',
    brandLink: 'Brand guidelines →',
    business: 'Leafworks · CEO TAEGEON LIM · Business Registration No. 320-64-00793',
    rights: '© 2026 Leafworks. All rights reserved.',
  },
  notFound: {
    title: 'Page not found',
    body: 'The address may have changed, or the page does not exist.',
    home: 'Go home',
  },
};

const ja: Content = {
  meta: {
    title: 'Leafworks',
    description: 'Leafworks（リーフワークス）は、テクノロジーとアイデアをもとに新しいプロダクトと体験をつくる開発スタジオです。',
  },
  nav: {
    apps: 'Apps',
    about: 'About',
    brand: 'Brand',
    contact: 'Contact',
    home: 'Leafworks ホーム',
    language: '言語を選択',
  },
  hero: {
    eyebrow: 'Leafworks · Development Studio',
    title: ['テクノロジーとアイデアで、', '新しいプロダクトと体験をつくる。'],
    lead: 'Leafworksは、自分たちが使いたい道具をつくり、誰もが気持ちよく使えるように磨き上げる開発スタジオです。',
    scroll: 'Scroll',
  },
  tagline: {
    first: 'Tools we wanted.',
    second: 'Made for everyone.',
  },
  about: {
    eyebrow: 'About',
    title: ['使いたかった道具を、', 'みんなが使えるように。'],
    body: 'Leafworksは、テクノロジーとアイデアをもとに新しいプロダクトと体験をつくる開発スタジオです。自分たちに必要でつくった道具を、誰もが気軽に使えるように仕上げて届けます。',
    pillars: [
      { title: '実用性', label: 'Practical', body: '見た目より役に立つことを優先し、本当に必要な課題を解決します。' },
      { title: '親しみやすさ', label: 'Friendly', body: '難しい言葉を使わず、初めての人でも迷わないように。' },
    ],
  },
  apps: {
    eyebrow: 'Apps',
    title: '私たちのアプリ',
    lead: '必要だからつくり、誰もが使えるように磨いたアプリです。',
    folder: 'Apps',
    open: 'タップして開く',
    close: '閉じる',
    comingSoon: 'Coming soon',
    next: '次のアプリ',
  },
  appDetail: {
    back: '← Apps',
    homepage: 'ウェブサイトへ',
    github: 'GitHub',
    features: '主な機能',
    status: { 'in-development': '開発中', released: 'リリース済み' },
    info: {
      platform: 'プラットフォーム',
      status: 'ステータス',
      license: 'ライセンス',
      website: 'ウェブサイト',
      source: 'ソース',
    },
    unavailable: '公開準備中',
  },
  brand: {
    eyebrow: 'Brand',
    title: 'ブランドガイドライン',
    lead: 'Leafworksのロゴ・カラー・書体・レイアウト・文章表現を使うための基準とファイルです。',
    downloadAll: 'アセットを一括ダウンロード (.zip)',
  },
  footer: {
    tagline: 'Tools we wanted. Made for everyone.',
    contact: 'Contact',
    brand: 'Brand',
    brandLink: 'ブランドガイドライン →',
    business: 'Leafworks · 代表 TAEGEON LIM · 事業者登録番号 320-64-00793',
    rights: '© 2026 Leafworks. All rights reserved.',
  },
  notFound: {
    title: 'ページが見つかりません',
    body: 'アドレスが変わったか、存在しないページです。',
    home: 'ホームへ',
  },
};

const CONTENT: Record<Locale, Content> = { ko, en, ja };

export function getContent(locale: Locale): Content {
  return CONTENT[locale];
}

export const SUPPORT_EMAIL = 'support@leafworks.dev';
export const GITHUB_URL = 'https://github.com/leafworks-team';
