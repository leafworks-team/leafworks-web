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
    products: 'Products',
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
  products: {
    eyebrow: 'Products',
    title: '우리가 만든 제품',
    lead: '우리가 쓰고 싶어서 만들고, 함께 쓰는 제품들.',
    compactLead: '우리가 쓰고 싶어서 만든 제품들.',
    catalog: {
      all: '전체',
      types: { apps: 'Apps', tools: 'Tools' },
      filters: '제품 유형',
      details: '자세히 보기',
      results: '{category} 제품 {count}개',
      empty: '아직 등록된 제품이 없습니다.',
    },
  },
  appDetail: {
    back: '← Products',
    homepage: '홈페이지 방문',
    github: 'GitHub',
    features: '주요 기능',
    status: { 'in-development': '개발 중', released: '출시됨' },
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
    business: '리프웍스(Leafworks)',
    legal: '약관 및 정책',
    rights: '© 2026 Leafworks. All rights reserved.',
  },
  legal: {
    title: '약관 및 정책',
    lead: '리프웍스가 만든 앱마다 약관과 정책을 따로 둡니다.',
    documents: {
      'terms-of-service': '이용약관',
      'privacy-policy': '개인정보처리방침',
      'refund-policy': '환불정책',
      security: '보안 취약점 신고',
    },
    effective: '시행일',
    latest: '최신',
    versions: '버전',
    olderNotice: '이전 버전입니다.',
    seeLatest: '최신 버전 보기 →',
    draft: '초안입니다. 아직 시행 전이라 내용이 바뀔 수 있습니다.',
    // 이 언어로 된 본문이 없을 때 대신 보이는 언어별 안내
    fallback: { ko: '이 버전은 한국어로만 제공됩니다.', en: '이 버전은 영어로 제공됩니다.' },
    changes: '이번에 바뀐 점',
    aboutApp: '앱 소개 보기 →',
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
    products: 'Products',
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
  products: {
    eyebrow: 'Products',
    title: 'Our products',
    lead: 'Products we wanted to use, made to share.',
    compactLead: 'Products we wanted to use.',
    catalog: {
      all: 'All',
      types: { apps: 'Apps', tools: 'Tools' },
      filters: 'Product type',
      details: 'Learn more',
      results: '{category}: {count} products',
      empty: 'No products yet.',
    },
  },
  appDetail: {
    back: '← Products',
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
    business: 'Leafworks',
    legal: 'Legal',
    rights: '© 2026 Leafworks. All rights reserved.',
  },
  legal: {
    title: 'Legal',
    lead: 'Each Leafworks app has its own terms and policies.',
    documents: {
      'terms-of-service': 'Terms of Service',
      'privacy-policy': 'Privacy Policy',
      'refund-policy': 'Refund Policy',
      security: 'Security Vulnerability Reporting',
    },
    effective: 'Effective',
    latest: 'Latest',
    versions: 'Versions',
    olderNotice: 'This is an earlier version.',
    seeLatest: 'See the latest version →',
    draft: 'Draft. It is not in force yet and may still change.',
    fallback: { ko: 'This version is available in Korean only.', en: 'This version is available in English.' },
    changes: 'What changed',
    aboutApp: 'About the app →',
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
    products: 'Products',
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
  products: {
    eyebrow: 'Products',
    title: '私たちのプロダクト',
    lead: '自分たちが使いたくてつくったものを、みんなにも。',
    compactLead: '自分たちが使いたくてつくったもの。',
    catalog: {
      all: 'すべて',
      types: { apps: 'Apps', tools: 'Tools' },
      filters: 'プロダクトの種類',
      details: '詳しく見る',
      results: '{category}：{count}件',
      empty: 'まだプロダクトがありません。',
    },
  },
  appDetail: {
    back: '← Products',
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
    business: 'Leafworks',
    legal: '規約とポリシー',
    rights: '© 2026 Leafworks. All rights reserved.',
  },
  legal: {
    title: '規約とポリシー',
    lead: 'Leafworksのアプリごとに規約とポリシーを分けています。',
    documents: {
      'terms-of-service': '利用規約',
      'privacy-policy': 'プライバシーポリシー',
      'refund-policy': '返金ポリシー',
      security: '脆弱性の報告',
    },
    effective: '施行日',
    latest: '最新',
    versions: 'バージョン',
    olderNotice: 'これは以前のバージョンです。',
    seeLatest: '最新のバージョンを見る →',
    draft: '草案です。まだ施行前のため、内容が変わる可能性があります。',
    fallback: {
      ko: 'このバージョンは韓国語のみで提供しています。',
      en: 'このバージョンは日本語版がないため、英語で表示しています。',
    },
    changes: '今回の変更点',
    aboutApp: 'アプリの紹介を見る →',
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
