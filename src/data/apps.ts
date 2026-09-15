import type { Locale } from '../i18n/config';

type Localized = Record<Locale, string>;

export type AppStatus = 'in-development' | 'released';

export interface App {
  /** URL segment under /apps/ and the Motion layoutId suffix. */
  slug: string;
  name: string;
  /** Rounded-tile artwork in public/apps/. */
  icon: string;
  tagline: Localized;
  summary: Localized;
  description: Localized;
  features: { title: Localized; body: Localized }[];
  platforms: string[];
  status: AppStatus;
  license?: string;
  /**
   * Only public URLs. A link to a private repository 404s for every visitor, so
   * leave these out until the destination is public — the page hides the button.
   */
  homepage?: string;
  github?: string;
}

export const APPS: App[] = [
  {
    slug: 'leafyrics',
    name: 'Leafyrics',
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
  },
  {
    slug: 'layerdeck',
    name: 'LayerDeck',
    icon: '/apps/layerdeck.svg',
    tagline: {
      ko: 'ZMK 키보드를 위한 키맵 편집·키 테스트·백업 도구.',
      en: 'Keymap editor, key tester and backup tool for ZMK keyboards.',
      ja: 'ZMKキーボードのためのキーマップ編集・キーテスト・バックアップツール。',
    },
    summary: {
      ko: 'ZMK 키보드 도구',
      en: 'ZMK keyboard tool',
      ja: 'ZMKキーボードツール',
    },
    description: {
      ko: 'ZMK Studio를 지원하는 키보드라면 어떤 키보드든 연결해 키맵을 편집하고, 모든 스위치가 실제로 눌리는지 확인하고, 설정을 파일로 백업하거나 여러 벌을 바꿔 가며 쓸 수 있습니다.',
      en: 'Connect any keyboard that supports ZMK Studio to edit its keymap, check that every switch really registers, and back up or swap between multiple layouts.',
      ja: 'ZMK Studioに対応したキーボードなら、どれでも接続してキーマップを編集し、すべてのスイッチが実際に反応するかを確かめ、設定をファイルにバックアップしたり複数を切り替えたりできます。',
    },
    features: [
      {
        title: { ko: '키 테스트', en: 'Key test', ja: 'キーテスト' },
        body: {
          ko: '중복 키코드와 레이어 키까지 모든 스위치를 확인합니다.',
          en: 'Checks every switch, including duplicate keycodes and layer keys.',
          ja: '重複したキーコードやレイヤーキーまで、すべてのスイッチを確認します。',
        },
      },
      {
        title: { ko: '내보내기 · 가져오기', en: 'Export · Import', ja: 'エクスポート · インポート' },
        body: {
          ko: '키맵을 파일로 백업하고 그대로 되돌립니다.',
          en: 'Back up a keymap to a file and restore it exactly.',
          ja: 'キーマップをファイルにバックアップし、そのまま元に戻せます。',
        },
      },
      {
        title: { ko: '슬롯', en: 'Slots', ja: 'スロット' },
        body: {
          ko: '설정을 여러 벌 두고 원하는 것을 바로 적용합니다.',
          en: 'Keep several layouts and apply any of them at once.',
          ja: '複数の設定を保存し、使いたいものをすぐに適用できます。',
        },
      },
    ],
    platforms: ['macOS', 'Windows'],
    status: 'in-development',
    // Repository is private (Im-Tae/LayerDeck) and has no homepage yet.
  },
];

export function getApp(slug: string): App | undefined {
  return APPS.find((a) => a.slug === slug);
}
