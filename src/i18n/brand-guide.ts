import type { Locale } from './config';

/**
 * Copy for the /brand guide. Mirrors the Figma file "Leafworks Brand
 * Guidelines" pages 01–06; 07 Product Family is internal and not published.
 * Numbers (sizes, hex values, ratios) live in BrandPage.astro and
 * brand/tokens/colors.json, not here.
 */
const ko = {
  toc: {
    label: '목차',
    brand: '브랜드',
    logo: '로고',
    color: '색',
    typography: '서체',
    layout: '레이아웃',
    voice: '문구',
  },
  brand: {
    title: '브랜드',
    intro: '리프웍스(Leafworks)는 기술과 아이디어를 바탕으로 새로운 제품과 경험을 만들어가는 개발 스튜디오입니다.',
    taglineLabel: '태그라인',
    personalityTitle: '브랜드 성격',
    personality: [
      {
        title: '실용성',
        label: 'Practical',
        body: '멋보다 쓸모를 먼저 생각합니다. 실제로 필요한 문제를 풀고, 누구나 매일 쓸 수 있는 제품을 만듭니다.',
      },
      {
        title: '친근함',
        label: 'Friendly',
        body: '어렵게 말하지 않습니다. 처음 쓰는 사람도 헤매지 않도록 다정하게 안내합니다.',
      },
    ],
  },
  logo: {
    title: '로고',
    intro: '여우와 잎사귀가 하나의 원을 이루는 심볼입니다. 제공된 파일을 그대로 써 주세요.',
    mark: {
      title: '마크',
      body: '밝은 배경에는 Positive, 어두운 배경에는 Reversed를 씁니다. 두 파일은 색만 바꾼 것이 아니라 서로 다른 그림입니다.',
    },
    wordmark: {
      title: '워드마크',
      body: 'Pretendard SemiBold로 윤곽선을 만든 「Leafworks」 한 단어 표기입니다. 서체로 다시 입력하지 말고 제공된 파일을 씁니다.',
    },
    lockup: {
      title: '가로 조합',
      body: '워드마크 높이는 마크 높이의 53%, 둘 사이 간격은 23%입니다. 공간이 좁으면 마크만 씁니다.',
    },
    clearSpace: {
      title: '여백',
      body: '로고 주변에는 마크 높이의 ¼(x) 이상을 비워 둡니다.',
    },
    minSize: {
      title: '최소 크기',
      body: '마크는 16px, 가로 조합은 높이 24px보다 작게 쓰지 않습니다.',
    },
    donts: {
      title: '하지 말아야 할 것',
      items: ['색 바꾸기', '늘이기', '회전', '효과 추가', '복잡한 배경'],
    },
    files: '파일',
  },
  color: {
    title: '색',
    intro: '로고와 화면의 대부분은 흑백입니다. Leaf는 링크·버튼·강조에, Signal은 아주 드물게 씁니다.',
    ratio: '비율',
    groups: {
      neutral: { name: 'Neutral', note: '로고와 대부분의 화면' },
      leaf: { name: 'Leaf', note: '링크·버튼·강조. 기준색 700' },
      signal: { name: 'Signal', note: '큰 글씨·점·아이콘에만. 기준색 500' },
    },
    rulesTitle: '대비',
    rules: [
      'Leaf 700은 흰 바탕에서 7.44:1이라 본문 글씨에도 쓸 수 있습니다.',
      'Signal 500은 흰 바탕에서 3.82:1이라 본문 글씨로 쓰지 않습니다.',
      '어두운 배경에서는 Leaf 400(8.71:1)을 쓰고, 그 위의 글씨는 어두운 색으로 씁니다.',
    ],
    download: 'colors.json 내려받기',
  },
  typography: {
    title: '서체',
    intro: '한국어와 영어는 Pretendard, 일본어는 Pretendard JP를 씁니다. 둘 다 SIL Open Font License 1.1이라 상업적으로도 무료로 쓸 수 있습니다.',
    familiesTitle: '서체 구성',
    families: [
      {
        name: 'Pretendard',
        use: '한국어 · 영어',
        note: '한국어와 영어만 쓰는 제품 화면에 씁니다.',
      },
      {
        name: 'Pretendard JP',
        use: '일본어',
        note: 'Pretendard에 일본어 한자·가나를 더한 서체입니다. 이 사이트처럼 일본어 화면이 있는 제품은 한국어·영어까지 이 서체 하나로 씁니다. 기본 Pretendard에는 한자가 없어 문장 중간에 서체가 바뀌기 때문입니다.',
      },
    ],
    weights: '굵기',
    weightUse: { regular: '본문', semibold: '소제목 · 라벨', bold: '제목' },
    scale: '크기 단계',
    sample: '우리가 쓰고 싶던 도구를, 모두가 쓸 수 있게.',
    source: 'Pretendard · Pretendard JP 받기',
  },
  layout: {
    title: '레이아웃',
    intro: '모든 간격은 4의 배수를 씁니다. 모서리는 로고의 둥근 실루엣에 맞춰 부드럽게 둡니다.',
    spacing: '간격',
    radius: '모서리',
    grid: '웹 그리드',
    gridHead: { device: '화면', columns: '열', gutter: '열 간격', margin: '좌우 여백', max: '최대 폭' },
    devices: { desktop: '데스크톱', tablet: '태블릿', mobile: '모바일' },
  },
  voice: {
    title: '문구',
    summary: '실용적이고 친근하게. 필요한 말을, 쉬운 말로.',
    principles: [
      { tag: '실용성', title: '다음 행동을 알려준다', body: '무슨 일이 일어났는지와 무엇을 하면 되는지를 함께 씁니다.' },
      { tag: '실용성', title: '짧고 구체적으로', body: '꾸밈말보다 숫자·이름·동작을 씁니다. 한 문장에 한 가지만 씁니다.' },
      { tag: '친근함', title: '쉬운 말로', body: '전문 용어는 꼭 필요할 때만 쓰고, 처음 나오면 풀어서 설명합니다.' },
      { tag: '친근함', title: '탓하지 않는다', body: '오류를 사용자의 잘못처럼 쓰지 않습니다. 해결 방법을 먼저 씁니다.' },
    ],
    examplesTitle: '예시',
    dont: '이렇게 쓰지 않습니다',
    do: '이렇게 씁니다',
    examples: [
      {
        context: '오류',
        bad: '치명적인 오류가 발생했습니다! (Error 0x02)',
        good: '키보드와 연결이 끊겼어요. USB 케이블을 다시 연결해 주세요.',
      },
      {
        context: '안내',
        bad: '혁신적인 가사 경험을 지금 바로 만나보세요!',
        good: '음악을 틀면 가사가 자동으로 나타나요.',
      },
    ],
    rulesTitle: '작성 규칙',
    rules: [
      '회사 소개·공식 문서는 「합니다」체, 제품 화면 문구는 「해요」체를 씁니다.',
      '느낌표는 쓰지 않습니다.',
      '언어 이름은 각 언어로 씁니다: 한국어 · English · 日本語.',
      '기기가 알려준 값(기기 이름, 레이어 이름 등)은 번역하지 않습니다.',
    ],
  },
};

type BrandGuide = typeof ko;

const en: BrandGuide = {
  toc: {
    label: 'Contents',
    brand: 'Brand',
    logo: 'Logo',
    color: 'Color',
    typography: 'Typography',
    layout: 'Layout',
    voice: 'Voice & tone',
  },
  brand: {
    title: 'Brand',
    intro: 'Leafworks is a development studio that builds new products and experiences from technology and ideas.',
    taglineLabel: 'Tagline',
    personalityTitle: 'Personality',
    personality: [
      {
        title: 'Practical',
        label: '실용성',
        body: 'Usefulness comes before flash. We solve real problems and build products people can use every day.',
      },
      {
        title: 'Friendly',
        label: '친근함',
        body: 'We keep things simple and speak kindly, so even first-time users never feel lost.',
      },
    ],
  },
  logo: {
    title: 'Logo',
    intro: 'A fox and a leaf forming a single circle. Please use the supplied files as they are.',
    mark: {
      title: 'Mark',
      body: 'Use Positive on light backgrounds and Reversed on dark. They are different drawings, not recolors of each other.',
    },
    wordmark: {
      title: 'Wordmark',
      body: '"Leafworks" as one word, outlined from Pretendard SemiBold. Use the supplied file rather than retyping it.',
    },
    lockup: {
      title: 'Horizontal lockup',
      body: 'The wordmark is 53% of the mark height, with a gap of 23%. Use the mark alone when space is tight.',
    },
    clearSpace: {
      title: 'Clear space',
      body: 'Keep at least ¼ of the mark height (x) clear on every side.',
    },
    minSize: {
      title: 'Minimum size',
      body: 'Never smaller than 16px for the mark, or 24px tall for the lockup.',
    },
    donts: {
      title: "Don'ts",
      items: ['Recolor', 'Stretch', 'Rotate', 'Add effects', 'Busy background'],
    },
    files: 'Files',
  },
  color: {
    title: 'Color',
    intro: 'The logo and most surfaces are monochrome. Leaf is for links, buttons and emphasis; Signal is used sparingly.',
    ratio: 'Ratio',
    groups: {
      neutral: { name: 'Neutral', note: 'The logo and most surfaces' },
      leaf: { name: 'Leaf', note: 'Links, buttons, emphasis. Base 700' },
      signal: { name: 'Signal', note: 'Large text, dots and icons only. Base 500' },
    },
    rulesTitle: 'Contrast',
    rules: [
      'Leaf 700 is 7.44:1 on white, so it works for body text.',
      'Signal 500 is 3.82:1 on white — never use it for body text.',
      'On dark backgrounds use Leaf 400 (8.71:1), with dark text on top of it.',
    ],
    download: 'Download colors.json',
  },
  typography: {
    title: 'Typography',
    intro: 'Pretendard for Korean and English, Pretendard JP for Japanese. Both are licensed under SIL Open Font License 1.1, free for commercial use.',
    familiesTitle: 'Families',
    families: [
      {
        name: 'Pretendard',
        use: 'Korean · English',
        note: 'Product screens that use only Korean and English.',
      },
      {
        name: 'Pretendard JP',
        use: 'Japanese',
        note: 'Pretendard with Japanese kanji and kana added. Products with Japanese screens — like this site — use it for Korean and English too, because plain Pretendard has no kanji and the face would change mid-sentence.',
      },
    ],
    weights: 'Weights',
    weightUse: { regular: 'Body', semibold: 'Subheads · labels', bold: 'Headings' },
    scale: 'Type scale',
    sample: 'Tools we wanted. Made for everyone.',
    source: 'Get Pretendard · Pretendard JP',
  },
  layout: {
    title: 'Layout',
    intro: 'All spacing uses multiples of 4. Soft corners echo the round silhouette of the mark.',
    spacing: 'Spacing',
    radius: 'Corner radius',
    grid: 'Web grid',
    gridHead: { device: 'Screen', columns: 'Columns', gutter: 'Gutter', margin: 'Margin', max: 'Max width' },
    devices: { desktop: 'Desktop', tablet: 'Tablet', mobile: 'Mobile' },
  },
  voice: {
    title: 'Voice & tone',
    summary: 'Practical and friendly. Say what is needed, in plain words.',
    principles: [
      { tag: 'Practical', title: 'Say what to do next', body: 'Explain what happened and what the person can do about it.' },
      { tag: 'Practical', title: 'Short and specific', body: 'Numbers, names and actions over adjectives. One idea per sentence.' },
      { tag: 'Friendly', title: 'Plain words', body: 'Use jargon only when needed, and explain it the first time it appears.' },
      { tag: 'Friendly', title: 'Never blame', body: 'Don’t write errors as the user’s fault. Lead with the fix.' },
    ],
    examplesTitle: 'Examples',
    dont: 'Not like this',
    do: 'Like this',
    examples: [
      {
        context: 'Error',
        bad: 'A fatal error has occurred! (Error 0x02)',
        good: 'Your keyboard disconnected. Plug the USB cable back in.',
      },
      {
        context: 'Onboarding',
        bad: 'Discover a revolutionary lyrics experience now!',
        good: 'Play some music and the lyrics appear on their own.',
      },
    ],
    rulesTitle: 'Writing rules',
    rules: [
      'English uses sentence case.',
      'No exclamation marks.',
      'Language names are written in their own language: 한국어 · English · 日本語.',
      'Never translate values reported by a device, such as device or layer names.',
    ],
  },
};

const ja: BrandGuide = {
  toc: {
    label: '目次',
    brand: 'ブランド',
    logo: 'ロゴ',
    color: 'カラー',
    typography: '書体',
    layout: 'レイアウト',
    voice: '文章表現',
  },
  brand: {
    title: 'ブランド',
    intro: 'Leafworks（リーフワークス）は、テクノロジーとアイデアをもとに新しいプロダクトと体験をつくる開発スタジオです。',
    taglineLabel: 'タグライン',
    personalityTitle: 'ブランドパーソナリティ',
    personality: [
      {
        title: '実用性',
        label: 'Practical',
        body: '見た目より役に立つことを先に考えます。本当に必要な課題を解決し、誰もが毎日使えるプロダクトをつくります。',
      },
      {
        title: '親しみやすさ',
        label: 'Friendly',
        body: '難しい言い方をしません。初めて使う人でも迷わないよう、やさしく案内します。',
      },
    ],
  },
  logo: {
    title: 'ロゴ',
    intro: 'キツネと葉がひとつの円をかたちづくるシンボルです。提供されたファイルをそのまま使ってください。',
    mark: {
      title: 'マーク',
      body: '明るい背景にはPositive、暗い背景にはReversedを使います。2つは色を変えただけではなく、別々に描かれたものです。',
    },
    wordmark: {
      title: 'ワードマーク',
      body: 'Pretendard SemiBoldをアウトライン化した「Leafworks」の1語表記です。書体で打ち直さず、提供されたファイルを使います。',
    },
    lockup: {
      title: '横組み',
      body: 'ワードマークの高さはマークの高さの53%、間隔は23%です。スペースが狭い場合はマークのみを使います。',
    },
    clearSpace: {
      title: '余白',
      body: 'ロゴの周囲には、マークの高さの¼（x）以上の余白を空けます。',
    },
    minSize: {
      title: '最小サイズ',
      body: 'マークは16px、横組みは高さ24pxより小さくしません。',
    },
    donts: {
      title: 'やってはいけないこと',
      items: ['色を変える', '引き伸ばす', '回転する', '効果を加える', '複雑な背景'],
    },
    files: 'ファイル',
  },
  color: {
    title: 'カラー',
    intro: 'ロゴと画面の大部分はモノクロです。Leafはリンク・ボタン・強調に、Signalはごく控えめに使います。',
    ratio: '比率',
    groups: {
      neutral: { name: 'Neutral', note: 'ロゴと画面の大部分' },
      leaf: { name: 'Leaf', note: 'リンク・ボタン・強調。基準色 700' },
      signal: { name: 'Signal', note: '大きな文字・ドット・アイコンのみ。基準色 500' },
    },
    rulesTitle: 'コントラスト',
    rules: [
      'Leaf 700は白背景で7.44:1なので、本文テキストにも使えます。',
      'Signal 500は白背景で3.82:1のため、本文テキストには使いません。',
      '暗い背景ではLeaf 400（8.71:1）を使い、その上の文字は暗い色にします。',
    ],
    download: 'colors.jsonをダウンロード',
  },
  typography: {
    title: '書体',
    intro: '韓国語と英語にはPretendard、日本語にはPretendard JPを使います。どちらもSIL Open Font License 1.1で、商用でも無料で使えます。',
    familiesTitle: '書体の構成',
    families: [
      {
        name: 'Pretendard',
        use: '韓国語 · 英語',
        note: '韓国語と英語だけを使うプロダクトの画面に使います。',
      },
      {
        name: 'Pretendard JP',
        use: '日本語',
        note: 'Pretendardに日本語の漢字・かなを加えた書体です。このサイトのように日本語の画面があるプロダクトでは、韓国語・英語もこの書体ひとつで表示します。Pretendardには漢字がなく、文の途中で書体が切り替わってしまうためです。',
      },
    ],
    weights: 'ウェイト',
    weightUse: { regular: '本文', semibold: '小見出し · ラベル', bold: '見出し' },
    scale: 'サイズ',
    sample: '使いたかった道具を、みんなが使えるように。',
    source: 'Pretendard · Pretendard JPを入手',
  },
  layout: {
    title: 'レイアウト',
    intro: 'すべての余白は4の倍数を使います。角はマークの丸いシルエットに合わせてやわらかくします。',
    spacing: '余白',
    radius: '角丸',
    grid: 'Webグリッド',
    gridHead: { device: '画面', columns: '列', gutter: '列間', margin: '左右余白', max: '最大幅' },
    devices: { desktop: 'デスクトップ', tablet: 'タブレット', mobile: 'モバイル' },
  },
  voice: {
    title: '文章表現',
    summary: '実用的で、親しみやすく。必要なことを、やさしい言葉で。',
    principles: [
      { tag: '実用性', title: '次の行動を伝える', body: '何が起きたかと、何をすればよいかを一緒に書きます。' },
      { tag: '実用性', title: '短く、具体的に', body: '飾りの言葉より、数字・名前・動作を使います。一文にひとつのことだけを書きます。' },
      { tag: '親しみやすさ', title: 'やさしい言葉で', body: '専門用語は本当に必要なときだけ使い、初めて出てきたら説明します。' },
      { tag: '親しみやすさ', title: '責めない', body: 'エラーを使う人のせいのように書きません。解決方法を先に書きます。' },
    ],
    examplesTitle: '例',
    dont: 'こうは書きません',
    do: 'こう書きます',
    examples: [
      {
        context: 'エラー',
        bad: '致命的なエラーが発生しました！（Error 0x02）',
        good: 'キーボードとの接続が切れました。USBケーブルを接続し直してください。',
      },
      {
        context: '案内',
        bad: '革新的な歌詞体験を今すぐ体感しよう！',
        good: '音楽を再生すると、歌詞が自動で表示されます。',
      },
    ],
    rulesTitle: '書き方のルール',
    rules: [
      '日本語は「です・ます」調で書きます。',
      '感嘆符は使いません。',
      '言語名はそれぞれの言語で書きます：한국어 · English · 日本語。',
      'デバイスが伝える値（デバイス名、レイヤー名など）は翻訳しません。',
    ],
  },
};

const GUIDE: Record<Locale, BrandGuide> = { ko, en, ja };

export function getBrandGuide(locale: Locale): BrandGuide {
  return GUIDE[locale];
}
