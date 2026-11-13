import type { App } from '../apps';

export const leafyrics: App = {
  slug: 'leafyrics',
  name: 'Leafyrics',
  productType: 'apps',
  icon: '/apps/leafyrics.svg',
  tagline: {
    ko: '재생 중인 곡의 가사를, 번역과 함께.',
    en: 'Synced lyrics and AI translation for whatever is playing.',
    ja: '再生中の曲の歌詞を、翻訳と一緒に。',
  },
  summary: {
    ko: '데스크톱 가사 위젯',
    en: 'Desktop lyrics widget',
    ja: 'デスクトップ歌詞ウィジェット',
  },
  card: {
    description: {
      ko: '재생 중인 곡을 자동으로 인식해 가사와 AI 번역을 작은 위젯으로 보여줍니다.',
      en: 'Automatically recognizes the song playing and shows lyrics with AI translation in a small widget.',
      ja: '再生中の曲を自動で認識し、歌詞とAI翻訳を小さなウィジェットに表示します。',
    },
    compactDescription: {
      ko: '지금 듣는 곡의 가사와 AI 번역을 작은 데스크톱 위젯으로 보여줍니다.',
      en: 'Lyrics and AI translation for the song playing, in a small desktop widget.',
      ja: 'いま聴いている曲の歌詞とAI翻訳を、小さなデスクトップウィジェットに表示します。',
    },
    category: { ko: '음악 · 가사', en: 'Music · Lyrics', ja: '音楽 · 歌詞' },
  },
  description: {
    ko: '데스크톱에서 재생 중인 곡을 자동으로 인식해 실시간으로 동기화된 가사와 AI 번역을 작은 PIP 위젯으로 띄웁니다. 어떤 플레이어를 쓰든 따라가고, 번역은 한 번 만들면 모두가 함께 씁니다.',
    en: 'Leafyrics recognizes whatever is playing on your desktop and shows synced lyrics with AI translation in a small picture-in-picture widget. It follows any player, and each translation is made once and shared by everyone.',
    ja: 'デスクトップで再生中の曲を自動で認識し、リアルタイムで同期した歌詞とAI翻訳を小さなPIPウィジェットに表示します。どのプレーヤーを使っていても追従し、翻訳は一度つくればみんなで共有されます。',
  },
  features: [
    {
      title: { ko: '자동 곡 인식', en: 'Automatic detection', ja: '自動曲認識' },
      body: {
        ko: '플레이어에 묶이지 않고 지금 재생 중인 곡을 찾습니다.',
        en: 'Finds the song that is playing, whatever the player.',
        ja: '特定のプレーヤーに縛られず、いま再生中の曲を見つけます。',
      },
    },
    {
      title: { ko: '실시간 동기화', en: 'Real-time sync', ja: 'リアルタイム同期' },
      body: {
        ko: '노래에 맞춰 한 줄씩 가사를 보여줍니다.',
        en: 'Shows each line of lyrics in time with the song.',
        ja: '曲に合わせて歌詞を一行ずつ表示します。',
      },
    },
    {
      title: { ko: 'AI 번역', en: 'AI translation', ja: 'AI翻訳' },
      body: {
        ko: '번역을 캐시해 같은 곡은 바로 보여줍니다.',
        en: 'Translations are cached, so a song seen before appears instantly.',
        ja: '翻訳をキャッシュするので、同じ曲はすぐに表示されます。',
      },
    },
  ],
  platforms: ['macOS', 'Windows'],
  status: 'in-development',
  license: 'Apache-2.0',
  homepage: 'https://leafyrics.com',
  // The organisation page: every app repository under it is still private.
  github: 'https://github.com/leafyrics',
};
