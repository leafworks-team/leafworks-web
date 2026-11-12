import type { App, Localized } from '../apps';

const downloadBase = 'https://cdn.crabnebula.app/download/leafworks/layerdeck/latest/platform';

export const layerdeck: App = {
  slug: 'layerdeck',
  name: 'LayerDeck',
  icon: '/apps/layerdeck.svg',
  tagline: {
    ko: '키와 레이어를 원하는 대로 설정하세요.',
    en: 'Set up your keys and layers the way you like.',
    ja: 'キーとレイヤーを好みに合わせて設定しましょう。',
  },
  summary: { ko: 'ZMK 키보드 도구', en: 'ZMK keyboard tool', ja: 'ZMKキーボードツール' },
  description: {
    ko: 'LayerDeck은 ZMK Studio를 지원하는 키보드의 키맵을 편집하는 데스크톱 앱입니다. USB로 연결해 키와 레이어를 바꾸고, 자주 쓰는 키맵은 슬롯에 보관하세요. 키 테스트에서는 평소 쓰는 키맵 그대로 입력을 확인할 수 있습니다.',
    en: 'LayerDeck is a desktop keymap editor for keyboards that support ZMK Studio. Connect over USB to change keys and layers, and save your favorite keymaps in slots. Key test lets you check input using your usual keymap.',
    ja: 'LayerDeckは、ZMK Studio対応キーボードのキーマップを編集するデスクトップアプリです。USBで接続してキーやレイヤーを変更し、よく使うキーマップをスロットに保存できます。キーテストでは、いつものキーマップのまま入力を確認できます。',
  },
  features: [
    {
      title: {
        ko: '키보드 설정을 한눈에 확인하세요.',
        en: 'See your keyboard settings at a glance.',
        ja: 'キーボードの設定をひと目で確認しましょう。',
      },
      body: {
        ko: '키보드를 연결하고 레이어별 키 배치를 확인하세요.',
        en: 'Connect your keyboard and see how the keys are arranged on each layer.',
        ja: 'キーボードを接続して、レイヤーごとのキー配置を確認できます。',
      },
    },
    {
      title: {
        ko: '자주 쓰는 키를 편한 자리에 배치하세요.',
        en: 'Put the keys you use most within easy reach.',
        ja: 'よく使うキーを押しやすい位置に配置しましょう。',
      },
      body: {
        ko: '바꾸고 싶은 키를 고르고 원하는 기능을 지정하세요.',
        en: 'Select a key and choose the function you want it to perform.',
        ja: '変更したいキーを選んで、使いたい機能を割り当てられます。',
      },
    },
    {
      title: {
        ko: '자주 쓰는 설정을 슬롯에 보관하세요.',
        en: 'Save your favorite setups in slots.',
        ja: 'よく使う設定をスロットに保存しましょう。',
      },
      body: {
        ko: '키맵을 슬롯에 저장하고, 필요할 때 꺼내 쓰거나 파일로 옮기세요.',
        en: 'Save keymaps in slots, apply them when needed, or export and import slot files.',
        ja: 'キーマップをスロットに保存して、必要なときに適用したり、ファイルで書き出し・読み込みしたりできます。',
      },
    },
    {
      title: {
        ko: '키가 입력되는지 화면에서 확인하세요.',
        en: 'Check key input on screen.',
        ja: 'キーの入力を画面で確認しましょう。',
      },
      body: {
        ko: '평소 쓰는 키맵 그대로, 입력이 감지된 키를 화면에서 확인하세요.',
        en: 'Use your usual keymap and see which key inputs are detected.',
        ja: 'いつものキーマップのまま、検出されたキー入力を画面で確認できます。',
      },
    },
  ],
  platforms: ['macOS', 'Windows'],
  status: 'released',
  category: { ko: 'ZMK Studio 키보드 도구', en: 'ZMK Studio keyboard tool', ja: 'ZMK Studioキーボードツール' },
  downloadNote: {
    ko: 'ZMK Studio USB 연결을 지원하는 펌웨어가 필요합니다.',
    en: 'Your keyboard needs firmware that supports ZMK Studio over USB.',
    ja: 'ZMK StudioのUSB接続に対応したファームウェアが必要です。',
  },
  downloads: [
    {
      label: { ko: 'Mac용 다운로드 · Apple Silicon', en: 'Download for Mac · Apple Silicon', ja: 'Mac版をダウンロード · Apple Silicon' },
      url: `${downloadBase}/dmg-aarch64`,
    },
    {
      label: { ko: 'Mac용 다운로드 · Intel', en: 'Download for Mac · Intel', ja: 'Mac版をダウンロード · Intel' },
      url: `${downloadBase}/dmg-x86_64`,
    },
    {
      label: { ko: 'Windows용 다운로드', en: 'Download for Windows', ja: 'Windows版をダウンロード' },
      url: `${downloadBase}/windows-x86_64`,
    },
  ],
};

export const layerdeckDetail = {
  heading: {
    ko: '키보드에 연결하고, 화면에서 바꾸세요.',
    en: 'Connect your keyboard and make it yours.',
    ja: 'キーボードを接続して、画面から設定を変えましょう。',
  },
  installHeading: {
    ko: '설치 전에 확인해 주세요.',
    en: 'Before you install.',
    ja: 'インストール前にご確認ください。',
  },
  windowsNote: {
    ko: 'Windows에서는 실행 시 보호 안내가 표시될 수 있습니다.',
    en: 'Windows may show a security warning when you run the installer.',
    ja: 'Windowsでは、インストーラーの実行時に保護に関する警告が表示される場合があります。',
  },
  imageNote: {
    ko: '이미지 크게 보기', en: 'Open full-size image (Korean)', ja: '画像を拡大して表示（韓国語）',
  },
} satisfies Record<string, Localized>;

export const layerdeckRequirements: { label: Localized; value: Localized }[] = [
  {
    label: { ko: '지원 환경', en: 'Platforms', ja: '対応環境' },
    value: { ko: 'macOS · Windows', en: 'macOS · Windows', ja: 'macOS · Windows' },
  },
  {
    label: { ko: '키보드 연결', en: 'Connection', ja: 'キーボード接続' },
    value: {
      ko: 'ZMK Studio USB 연결을 지원하는 펌웨어',
      en: 'Firmware with ZMK Studio USB support',
      ja: 'ZMK StudioのUSB接続に対応したファームウェア',
    },
  },
  {
    label: { ko: '설정 보관', en: 'Saved settings', ja: '設定の保存' },
    value: {
      ko: '슬롯 저장 · 슬롯 파일 내보내기와 가져오기',
      en: 'Save keymaps in slots · Export and import slot files',
      ja: 'スロットに保存 · スロットファイルの書き出しと読み込み',
    },
  },
  {
    label: { ko: '입력 확인', en: 'Key test', ja: '入力の確認' },
    value: {
      ko: '같은 입력을 보내는 키나 레이어 전환 키는 각각 구분하기 어려울 수 있습니다.',
      en: 'Keys that send the same input, or keys that switch layers, may not be individually distinguishable.',
      ja: '同じ入力を送るキーやレイヤー切り替えキーは、個別に区別できない場合があります。',
    },
  },
];

export const layerdeckImages = [
  '01-overview.png', '02-keymap.png', '03-slots.png', '04-keytest.png',
];
