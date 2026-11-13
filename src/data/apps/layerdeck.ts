import type { App, Localized } from '../apps';

const downloadBase = 'https://cdn.crabnebula.app/download/leafworks/layerdeck/latest/platform';

export const layerdeck: App = {
  slug: 'layerdeck',
  name: 'LayerDeck',
  productType: 'tools',
  icon: '/apps/layerdeck.svg',
  tagline: {
    ko: '키와 레이어를 원하는 대로 설정하세요.',
    en: 'Set up your keys and layers the way you like.',
    ja: 'キーとレイヤーを好みに合わせて設定しましょう。',
  },
  summary: { ko: 'ZMK 키보드 도구', en: 'ZMK keyboard tool', ja: 'ZMKキーボードツール' },
  card: {
    headline: {
      ko: '키와 레이어를 원하는 대로.',
      en: 'Your keys and layers, your way.',
      ja: 'キーとレイヤーを、好みのままに。',
    },
    description: {
      ko: 'ZMK Studio 키보드를 USB로 연결해 키맵을 편집하고, 자주 쓰는 설정을 슬롯에 보관하세요.',
      en: 'Connect your ZMK Studio keyboard over USB to edit keymaps and save your favorite setups in slots.',
      ja: 'ZMK Studio対応キーボードをUSBで接続し、キーマップを編集。よく使う設定はスロットに保存できます。',
    },
    compactDescription: {
      ko: 'ZMK 키보드의 키와 레이어를 바꾸고, 자주 쓰는 설정을 슬롯에 보관하세요.',
      en: 'Change your ZMK keyboard’s keys and layers, and save your favorite setups in slots.',
      ja: 'ZMKキーボードのキーとレイヤーを変更し、よく使う設定をスロットに保存できます。',
    },
    category: { ko: '키보드 · 생산성', en: 'Keyboards · Productivity', ja: 'キーボード · 作業効率' },
  },
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
    ko: '화면 크게 보기', en: 'Open full-size image (Korean UI)', ja: '画像を拡大して表示（韓国語のUI）',
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
  {
    file: 'overview-screen.png',
    alt: {
      ko: '슬롯 목록과 Base·Mac·Fn 레이어가 표시된 키보드 편집 화면',
      en: 'Keyboard editor with saved slots and Base, Mac, and Fn layers',
      ja: 'スロット一覧とBase・Mac・Fnレイヤーが表示されたキーボード編集画面',
    },
    note: {
      ko: 'ZMK Studio USB 연결을 지원하는 키보드에서 사용할 수 있습니다.',
      en: 'Works with keyboards that support ZMK Studio over USB.',
      ja: 'ZMK StudioのUSB接続に対応したキーボードで使用できます。',
    },
  },
  {
    file: 'keymap-screen.png',
    alt: {
      ko: '키보드 배열에서 F 키를 선택하고 동작을 지정하는 화면',
      en: 'The F key selected in the keyboard layout with its assigned function shown alongside',
      ja: 'キー配列でFキーを選択し、機能を割り当てる画面',
    },
    note: {
      ko: '사용할 수 있는 동작과 레이어 수는 키보드 펌웨어에 따라 달라집니다.',
      en: 'Available functions and the number of layers depend on your keyboard firmware.',
      ja: '利用できる機能とレイヤー数は、キーボードのファームウェアによって異なります。',
    },
  },
  {
    file: 'slots-screen.png',
    alt: {
      ko: '저장된 슬롯 목록과 슬롯 파일 내보내기·가져오기 화면',
      en: 'Saved slots with options to export and import slot files',
      ja: '保存したスロットの一覧と、スロットファイルの書き出し・読み込み画面',
    },
    note: {
      ko: '슬롯에는 키맵을 보관합니다. 펌웨어와 블루투스 연결 정보는 포함하지 않습니다.',
      en: 'Slots store keymaps. They do not include firmware or Bluetooth pairing information.',
      ja: 'スロットに保存されるのはキーマップです。ファームウェアやBluetoothのペアリング情報は含まれません。',
    },
  },
  {
    file: 'keytest-screen.png',
    alt: {
      ko: '입력이 확인된 키가 초록색으로 표시된 키보드 배열',
      en: 'Keyboard layout with detected key inputs highlighted in green',
      ja: '入力が確認されたキーを緑色で表示したキー配列',
    },
    note: {
      ko: '같은 입력을 보내는 키나 레이어 전환 키는 각각 구분하기 어려울 수 있습니다.',
      en: 'Keys that send the same input, or keys that switch layers, may not be individually distinguishable.',
      ja: '同じ入力を送るキーやレイヤー切り替えキーは、個別に区別できない場合があります。',
    },
  },
] satisfies { file: string; alt: Localized; note: Localized }[];
