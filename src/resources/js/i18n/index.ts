export const SUPPORTED_LOCALES = ['ja', 'en'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

const DEFAULT_LOCALE: Locale = 'ja'
const LOCALE_STORAGE_KEY = 'hitasura-math-locale'

const normalizeLocale = (value?: string | null): Locale | null => {
    if (!value) return null
    const normalized = value.toLowerCase()
    const match = SUPPORTED_LOCALES.find(
        (locale) => normalized === locale || normalized.startsWith(`${locale}-`),
    )
    return match ?? null
}

export const getLocale = (): Locale => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE

    const searchParams = new URLSearchParams(window.location.search)
    const queryLocale = normalizeLocale(searchParams.get('lang'))
    if (queryLocale) return queryLocale

    const storedLocale = normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY))
    if (storedLocale) return storedLocale

    const htmlLocale = normalizeLocale(document.documentElement.lang)
    if (htmlLocale) return htmlLocale

    const navigatorLocale = normalizeLocale(navigator.language)
    if (navigatorLocale) return navigatorLocale

    return DEFAULT_LOCALE
}

export const initLocale = (): Locale => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE

    const searchParams = new URLSearchParams(window.location.search)
    const queryLocale = normalizeLocale(searchParams.get('lang'))
    const storedLocale = normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY))
    const htmlLocale = normalizeLocale(document.documentElement.lang)
    const navigatorLocale = normalizeLocale(navigator.language)
    const resolved =
        queryLocale ?? storedLocale ?? htmlLocale ?? navigatorLocale ?? DEFAULT_LOCALE

    window.localStorage.setItem(LOCALE_STORAGE_KEY, resolved)
    document.documentElement.lang = resolved
    return resolved
}

export const withLocale = (path: string, locale: Locale): string => {
    if (locale === DEFAULT_LOCALE) return path
    if (typeof window !== 'undefined') {
        const url = new URL(path, window.location.origin)
        url.searchParams.set('lang', locale)
        return `${url.pathname}${url.search}${url.hash}`
    }
    const [base, hash] = path.split('#')
    const [pathname, query] = base.split('?')
    const searchParams = new URLSearchParams(query ?? '')
    searchParams.set('lang', locale)
    const queryString = searchParams.toString()
    return `${pathname}${queryString ? `?${queryString}` : ''}${hash ? `#${hash}` : ''}`
}

const messages = {
    ja: {
        siteHeader: {
            brandName: 'ひたすら数学',
            brandIconAlt: 'ひたすら数学アイコン',
            articles: '記事まとめ',
            contact: 'お問い合わせ',
            appStoreAria: 'App Storeで見る',
            googlePlayAria: 'Google Playで見る',
            menuOpenAria: 'メニューを開く',
            menuSr: 'メニュー',
        },
        footer: {
            brandName: 'ひたすら数学',
            tagline: 'ひたすら解く。数学だけに没頭する計算ゲーム。',
            articles: '記事まとめ',
            about: 'ひたすら数学とは？',
            juniorGuide: '中学数学の勉強法まとめ',
            highGuide: '高校数学の勉強法まとめ',
            contact: 'お問い合わせ',
            appStoreAria: 'App Storeで見る',
            googlePlayAria: 'Google Playで見る',
            copyright: '© ひたすら数学',
        },
        articleLayout: {
            breadcrumb: '記事一覧',
        },
        dashboard: {
            metaTitle: 'ひたすら数学 | タップで解く数学アプリ',
            metaDescription:
                '因数分解・素因数分解・最大公約数・最小公倍数・微分積分まで反復できるタップ式の数学ゲーム。',
            hero: {
                eyebrow: 'Math game',
                titleLine1: 'ひたすら解く。',
                titleLine2: 'ただそれだけ',
                titlePunctuation: '。',
                description: '短い計算で、ひらめきが続く。タップするだけの数学ゲーム。',
                cta: '今すぐダウンロード',
            },
            feel: {
                eyebrow: 'FEEL',
                title: '気持ちいい数学',
                items: [
                    {
                        title: '正解の快感',
                        body: '解けるたびに、気持ちよさが増える。',
                    },
                    {
                        title: 'テンポ',
                        body: '次へ、次へ。手が止まらない。',
                    },
                    {
                        title: '集中',
                        body: '画面はシンプル。数学だけに没頭。',
                    },
                ],
            },
            modes: {
                eyebrow: 'MODES',
                title: '遊び方を選ぶ',
                items: [
                    {
                        title: '無限',
                        body: '終わりがないから続く。',
                    },
                    {
                        title: '10問タイムアタック',
                        body: '短時間で燃えるスピード勝負。',
                    },
                    {
                        title: 'easy / normal / hard',
                        body: '好みの強さで挑戦。',
                    },
                ],
            },
            contents: {
                eyebrow: 'CONTENTS',
                title: '数学の気持ちよさ',
                items: [
                    {
                        title: '因数分解',
                        meta: '基本を軽快に。',
                    },
                    {
                        title: '素因数分解',
                        meta: '分解の手触り。',
                    },
                    {
                        title: '最大公約数（GCD）',
                        meta: '共通因数のいちばん大きいもの。',
                    },
                    {
                        title: '最小公倍数（LCM）',
                        meta: '共通の倍数でいちばん小さいもの。',
                    },
                    {
                        title: '微分・積分',
                        meta: '変化をつかむ。',
                    },
                    {
                        title: '式の展開',
                        meta: '広げる力を鍛える。',
                        soon: true,
                    },
                ],
            },
            screenshots: {
                eyebrow: 'SCREENSHOT',
                title: '画面の流れ',
                items: [
                    {
                        label: 'PLAY 01',
                        caption: 'やりたいカテゴリを選択',
                    },
                    {
                        label: 'PLAY 02',
                        caption: 'やりたいモードを選択',
                    },
                    {
                        label: 'PLAY 03',
                        caption: '問題を解く',
                    },
                    {
                        label: 'PLAY 04',
                        caption: '結果が出る',
                    },
                ],
            },
            calendar: {
                eyebrow: 'CALENDAR',
                title: '学習の積み上げが見える',
                description:
                    'カレンダーで毎日の学習をひと目で確認。続いている日が増えるほど、勉強の手応えが見えてきます。',
                note: '継続日数が増えるほど、色が広がっていくイメージです。',
            },
            comingSoon: {
                eyebrow: 'COMING SOON',
                title: '近日追加予定の機能',
                items: [
                    {
                        title: 'Ranking',
                        body: '自己ベストと競う。',
                    },
                    {
                        title: 'More modes',
                        body: '遊び方が広がる。',
                    },
                ],
            },
            download: {
                title: '無料でダウンロード',
                description: 'ひらめきの気持ちよさを、今すぐ。',
                otherApps: 'その他のアプリ',
            },
            feedback: {
                eyebrow: 'FEEDBACK',
                titleLine1: 'バグや改善点、',
                titleLine2: '欲しい機能があれば',
                description:
                    'ぜひお問い合わせから教えてください。より良い体験にアップデートしていきます。',
                cta: 'お問い合わせする',
            },
        },
        articles: {
            metaTitle: '数学の勉強が進む記事まとめ',
            metaDescription:
                '因数分解・素因数分解・最大公約数・最小公倍数・微分・積分など、数学学習を進めるための記事をまとめています。',
            hero: {
                eyebrow: 'Articles',
                title: '数学の勉強が進む記事まとめ',
                description:
                    '因数分解の勉強法や、因数分解アプリの活用方法をわかりやすく整理。迷ったときに戻ってこれる、実践向けの学習ガイドを集めています。',
            },
            readTimeLabel: '読む目安',
            readTimeUnit: '分',
            readCta: '記事を読む →',
            cta: {
                eyebrow: 'Factorization App',
                title: '因数分解の勉強を、アプリで習慣に。',
                description:
                    'ひたすら数学は、因数分解をテンポよく反復できる学習アプリです。短時間でも毎日続けやすく、苦手克服にぴったり。',
                appStore: 'App Storeで見る',
                googlePlay: 'Google Playで見る',
            },
            items: [
                {
                    title: '中学数学の勉強法まとめ',
                    subtitle: 'アプリ学習で苦手を克服する完全ガイド',
                    description:
                        '中学数学の勉強法と主要単元のポイントを整理。因数分解や素因数分解など関連記事もまとめた記事。',
                    href: '/articles/junior-high-math-guide',
                    badge: 'まとめ',
                    readTime: '8',
                    keywords: ['中学数学 勉強法', '数学 アプリ', '勉強法'],
                },
                {
                    title: '高校数学の勉強法まとめ',
                    subtitle: '微分・積分から始める苦手克服ガイド',
                    description:
                        '高校数学の勉強法と主要単元のポイントを整理。微分・積分の関連記事へつながる記事。',
                    href: '/articles/high-school-math-guide',
                    badge: 'まとめ',
                    readTime: '7',
                    keywords: ['高校数学 勉強法', '微分 積分', '数学 アプリ'],
                },
                {
                    title: 'ひたすら数学とは？',
                    subtitle: '苦手な人のために作られた数学練習アプリ',
                    description:
                        'ひたすら数学の特徴や作った理由、どんな人に向いているかをまとめた紹介記事。',
                    href: '/articles/about-hitasura-math',
                    badge: 'アプリ紹介',
                    readTime: '6',
                    keywords: ['ひたすら数学', '数学アプリ', '勉強法'],
                },
                {
                    title: '因数分解の勉強法まとめ',
                    subtitle: 'アプリ学習で苦手を克服する完全ガイド',
                    description:
                        '因数分解 勉強に悩む人向けに、つまずきの原因と勉強法を整理。因数分解 アプリ学習が効果的な理由も解説。',
                    href: '/articles/factorization-study',
                    badge: '学習ガイド',
                    readTime: '6',
                    keywords: ['因数分解 勉強', '因数分解 アプリ', '中学数学'],
                },
                {
                    title: '素因数分解の勉強法まとめ',
                    subtitle: 'アプリ学習で基礎を固める完全ガイド',
                    description:
                        '素因数分解の基本とつまずきポイントを整理。素因数分解 アプリで反復するメリットを紹介。',
                    href: '/articles/prime-factorization-study',
                    badge: '学習ガイド',
                    readTime: '6',
                    keywords: ['素因数分解 勉強', '素因数分解 アプリ', '中学数学'],
                },
                {
                    title: '微分の勉強法まとめ',
                    subtitle: 'アプリ学習で苦手を克服する完全ガイド',
                    description:
                        '微分の意味やつまずきポイントを整理。微分 アプリ学習で反復するメリットも解説。',
                    href: '/articles/differential-study',
                    badge: '学習ガイド',
                    readTime: '7',
                    keywords: ['微分 勉強', '微分 アプリ', '高校数学'],
                },
                {
                    title: '積分の勉強法まとめ',
                    subtitle: 'アプリ学習で苦手を克服する完全ガイド',
                    description:
                        '積分の意味とつまずきポイントを整理。積分 アプリ学習で反復するメリットも解説。',
                    href: '/articles/integration-study',
                    badge: '学習ガイド',
                    readTime: '7',
                    keywords: ['積分 勉強', '積分 アプリ', '高校数学'],
                },
                {
                    title: '微分と積分の違いを完全解説',
                    subtitle: '高校数学でつまずかないための考え方',
                    description:
                        '微分と積分の違いを一言で整理し、使い分けのポイントを解説。判断に迷う人向けの基礎ガイド。',
                    href: '/articles/differential-vs-integration',
                    badge: '基礎理解',
                    readTime: '6',
                    keywords: ['微分 積分 違い', '高校数学', '使い分け'],
                },
                {
                    title: '因数分解と素因数分解の違いを完全解説',
                    subtitle: '中学数学で混乱しないための整理',
                    description:
                        '因数分解と素因数分解の違いを一言で整理し、見分け方や使い分けを解説。混乱しやすい人向けの基礎ガイド。',
                    href: '/articles/factorization-vs-prime-factorization',
                    badge: '基礎理解',
                    readTime: '6',
                    keywords: ['因数分解 素因数分解 違い', '中学数学', '使い分け'],
                },
                {
                    title: '因数分解と式の展開の違いを完全解説',
                    subtitle: '中学数学で迷わなくなる考え方',
                    description:
                        '因数分解と式の展開の違いを一言で整理し、使い分けのポイントを解説。迷いやすい人向けの基礎ガイド。',
                    href: '/articles/factorization-vs-expansion',
                    badge: '基礎理解',
                    readTime: '6',
                    keywords: ['因数分解 展開 違い', '中学数学', '使い分け'],
                },
                {
                    title: '最大公約数と最小公倍数の違いを完全解説',
                    subtitle: '中学数学で混乱しない考え方',
                    description:
                        '最大公約数と最小公倍数の違いを一言で整理し、使い分けのポイントを解説。混乱しやすい人向けの基礎ガイド。',
                    href: '/articles/gcd-vs-lcm',
                    badge: '基礎理解',
                    readTime: '6',
                    keywords: ['最大公約数 最小公倍数 違い', '中学数学', '使い分け'],
                },
                {
                    title: '分数の約分と通分の考え方を完全解説',
                    subtitle: '中学数学で迷わなくなる基本整理',
                    description:
                        '約分と通分の違いを一言で整理し、最大公約数・最小公倍数との関係も解説。迷いやすい人向けの基礎ガイド。',
                    href: '/articles/fraction-reduction-vs-common-denominator',
                    badge: '基礎理解',
                    readTime: '6',
                    keywords: ['約分 通分 違い', '分数 計算', '中学数学'],
                },
                {
                    title: '最大公約数とは？意味・求め方・使い道までやさしく完全解説',
                    subtitle: '中学数学の基礎をやさしく整理',
                    description:
                        '最大公約数の意味、求め方、使い道をわかりやすく解説。素因数分解を使った考え方も整理。',
                    href: '/articles/gcd-basics',
                    badge: '基礎理解',
                    readTime: '7',
                    keywords: ['最大公約数', '中学数学', '求め方'],
                },
                {
                    title: '最小公倍数とは？意味・求め方・使い道までやさしく完全解説',
                    subtitle: '中学数学の基礎をやさしく整理',
                    description:
                        '最小公倍数の意味、求め方、使い道をわかりやすく解説。素因数分解を使った考え方も整理。',
                    href: '/articles/lcm-basics',
                    badge: '基礎理解',
                    readTime: '7',
                    keywords: ['最小公倍数', '中学数学', '求め方'],
                },
            ],
        },
    },
    en: {
        siteHeader: {
            brandName: 'Hitasura Math',
            brandIconAlt: 'Hitasura Math icon',
            articles: 'Articles',
            contact: 'Contact',
            appStoreAria: 'View on the App Store',
            googlePlayAria: 'View on Google Play',
            menuOpenAria: 'Open menu',
            menuSr: 'Menu',
        },
        footer: {
            brandName: 'Hitasura Math',
            tagline: 'Solve relentlessly. A calculation game focused only on math.',
            articles: 'Articles',
            about: 'What is Hitasura Math?',
            juniorGuide: 'Junior High Math Study Guide',
            highGuide: 'High School Math Study Guide',
            contact: 'Contact',
            appStoreAria: 'View on the App Store',
            googlePlayAria: 'View on Google Play',
            copyright: '© Hitasura Math',
        },
        articleLayout: {
            breadcrumb: 'Articles',
        },
        dashboard: {
            metaTitle: 'Hitasura Math | Tap-to-play math practice',
            metaDescription:
                'A tap-to-play math game covering factorization, prime factorization, GCD, LCM, and calculus practice.',
            hero: {
                eyebrow: 'Math game',
                titleLine1: 'Solve relentlessly.',
                titleLine2: 'That is all',
                titlePunctuation: '.',
                description: 'Short problems, nonstop sparks. A tap-to-play math game.',
                cta: 'Download now',
            },
            feel: {
                eyebrow: 'FEEL',
                title: 'Math that feels good',
                items: [
                    {
                        title: 'The thrill of correct answers',
                        body: 'Every solve feels better.',
                    },
                    {
                        title: 'Rhythm',
                        body: "Next, next. Your hands won't stop.",
                    },
                    {
                        title: 'Focus',
                        body: 'A simple screen. Just you and the math.',
                    },
                ],
            },
            modes: {
                eyebrow: 'MODES',
                title: 'Choose how to play',
                items: [
                    {
                        title: 'Endless',
                        body: 'No end, so you keep going.',
                    },
                    {
                        title: '10-question time attack',
                        body: 'A fast, burning sprint.',
                    },
                    {
                        title: 'easy / normal / hard',
                        body: 'Pick the intensity you like.',
                    },
                ],
            },
            contents: {
                eyebrow: 'CONTENTS',
                title: 'The satisfying side of math',
                items: [
                    {
                        title: 'Factorization',
                        meta: 'Get the basics moving.',
                    },
                    {
                        title: 'Prime factorization',
                        meta: 'Feel the breakdown.',
                    },
                    {
                        title: 'Greatest common divisor (GCD)',
                        meta: 'Find the biggest common divisor.',
                    },
                    {
                        title: 'Least common multiple (LCM)',
                        meta: 'Find the smallest common multiple.',
                    },
                    {
                        title: 'Differentiation & integration',
                        meta: 'Grab the change.',
                    },
                    {
                        title: 'Expansion',
                        meta: 'Train to expand.',
                        soon: true,
                    },
                ],
            },
            screenshots: {
                eyebrow: 'SCREENSHOT',
                title: 'How it flows',
                items: [
                    {
                        label: 'PLAY 01',
                        caption: 'Choose a category',
                    },
                    {
                        label: 'PLAY 02',
                        caption: 'Choose a mode',
                    },
                    {
                        label: 'PLAY 03',
                        caption: 'Solve problems',
                    },
                    {
                        label: 'PLAY 04',
                        caption: 'See your results',
                    },
                ],
            },
            calendar: {
                eyebrow: 'CALENDAR',
                title: 'See your learning stack up',
                description:
                    'Track daily learning at a glance. The more days you keep going, the more progress you see.',
                note: 'Imagine the color spreading as your streak grows.',
            },
            comingSoon: {
                eyebrow: 'COMING SOON',
                title: 'Features coming soon',
                items: [
                    {
                        title: 'Ranking',
                        body: 'Compete with your personal best.',
                    },
                    {
                        title: 'Calendar',
                        body: 'See learning at a glance.',
                    },
                    {
                        title: 'More modes',
                        body: 'More ways to play.',
                    },
                ],
            },
            download: {
                title: 'Download for free',
                description: 'Feel the spark right now.',
                otherApps: 'Other apps',
            },
            feedback: {
                eyebrow: 'FEEDBACK',
                titleLine1: 'Bugs, improvements,',
                titleLine2: 'or features you want?',
                description:
                    "Let us know via the contact form. We'll keep improving the experience.",
                cta: 'Contact us',
            },
        },
        articles: {
            metaTitle: 'Math Study Articles',
            metaDescription:
                'Articles on factorization, prime factorization, GCD, LCM, differentiation, integration, and more.',
            hero: {
                eyebrow: 'Articles',
                title: 'Math study articles',
                description:
                    'Clear, practical guides for studying math, from factorization and GCD/LCM to calculus.',
            },
            readTimeLabel: 'Read time',
            readTimeUnit: 'min',
            readCta: 'Read the article →',
            cta: {
                eyebrow: 'Math Practice App',
                title: 'Make math practice a habit with the app.',
                description:
                    'Hitasura Math helps you repeat topics like factorization, GCD, LCM, and calculus in short bursts.',
                appStore: 'View on App Store',
                googlePlay: 'View on Google Play',
            },
            items: [
                {
                    title: 'Junior High Math Study Guide',
                    subtitle: 'A complete guide to overcoming weak points with an app',
                    description:
                        'Study methods and key units, with links to related articles on factorization and prime factorization.',
                    href: '/articles/junior-high-math-guide',
                    badge: 'Guide',
                    readTime: '8',
                    keywords: ['junior high math study', 'math app', 'study methods'],
                },
                {
                    title: 'High School Math Study Guide',
                    subtitle: 'Start with differentiation and integration',
                    description:
                        'Study methods and key units, with links to calculus-related articles.',
                    href: '/articles/high-school-math-guide',
                    badge: 'Guide',
                    readTime: '7',
                    keywords: ['high school math study', 'differentiation integration', 'math app'],
                },
                {
                    title: 'What is Hitasura Math?',
                    subtitle: 'A math practice app built for people who struggle',
                    description:
                        'An overview of Hitasura Math, why it was made, and who it is for.',
                    href: '/articles/about-hitasura-math',
                    badge: 'About',
                    readTime: '6',
                    keywords: ['Hitasura Math', 'math app', 'study methods'],
                },
                {
                    title: 'Factorization Study Guide',
                    subtitle: 'Overcome weak points with app practice',
                    description:
                        'Why people struggle with factorization, study tips, and why app practice helps.',
                    href: '/articles/factorization-study',
                    badge: 'Study guide',
                    readTime: '6',
                    keywords: ['factorization study', 'factorization app', 'junior high math'],
                },
                {
                    title: 'Prime Factorization Study Guide',
                    subtitle: 'Build the basics with app practice',
                    description:
                        'The basics and common stumbling points, plus the benefits of repetition.',
                    href: '/articles/prime-factorization-study',
                    badge: 'Study guide',
                    readTime: '6',
                    keywords: ['prime factorization study', 'prime factorization app', 'junior high math'],
                },
                {
                    title: 'Differentiation Study Guide',
                    subtitle: 'Overcome weak points with app practice',
                    description:
                        'The meaning of differentiation, common stumbling points, and why repetition helps.',
                    href: '/articles/differential-study',
                    badge: 'Study guide',
                    readTime: '7',
                    keywords: ['differentiation study', 'differentiation app', 'high school math'],
                },
                {
                    title: 'Integration Study Guide',
                    subtitle: 'Overcome weak points with app practice',
                    description:
                        'The meaning of integration, common stumbling points, and why repetition helps.',
                    href: '/articles/integration-study',
                    badge: 'Study guide',
                    readTime: '7',
                    keywords: ['integration study', 'integration app', 'high school math'],
                },
                {
                    title: 'Differentiation vs Integration: A Clear Explanation',
                    subtitle: 'Avoid confusion in high school math',
                    description:
                        'A one-sentence difference plus tips for choosing which one to use.',
                    href: '/articles/differential-vs-integration',
                    badge: 'Fundamentals',
                    readTime: '6',
                    keywords: ['differentiation integration difference', 'high school math', 'how to choose'],
                },
                {
                    title: 'Factorization vs Prime Factorization: A Clear Explanation',
                    subtitle: 'Avoid confusion in junior high math',
                    description:
                        'The difference, how to tell them apart, and how to choose the right one.',
                    href: '/articles/factorization-vs-prime-factorization',
                    badge: 'Fundamentals',
                    readTime: '6',
                    keywords: ['factorization vs prime factorization', 'junior high math', 'how to choose'],
                },
                {
                    title: 'Factorization vs Expansion: A Clear Explanation',
                    subtitle: 'Never get stuck in junior high math',
                    description:
                        'The difference, how to tell them apart, and how to choose the right one.',
                    href: '/articles/factorization-vs-expansion',
                    badge: 'Fundamentals',
                    readTime: '6',
                    keywords: ['factorization vs expansion', 'junior high math', 'how to choose'],
                },
                {
                    title: 'GCD vs LCM: A Clear Explanation',
                    subtitle: 'Avoid confusion in junior high math',
                    description:
                        'A one-sentence difference and tips for choosing which one to use.',
                    href: '/articles/gcd-vs-lcm',
                    badge: 'Fundamentals',
                    readTime: '6',
                    keywords: ['gcd vs lcm', 'junior high math', 'how to choose'],
                },
                {
                    title: 'Reducing Fractions vs Common Denominators: A Clear Explanation',
                    subtitle: 'Clear fundamentals for junior high math',
                    description:
                        'The difference between reducing and finding common denominators, plus how GCD/LCM fits.',
                    href: '/articles/fraction-reduction-vs-common-denominator',
                    badge: 'Fundamentals',
                    readTime: '6',
                    keywords: ['reducing fractions', 'common denominators', 'junior high math'],
                },
                {
                    title: 'What Is the GCD? Meaning, How to Find It, and Uses',
                    subtitle: 'Clear basics for junior high math',
                    description:
                        'A simple explanation of GCD, how to find it, and where it is used.',
                    href: '/articles/gcd-basics',
                    badge: 'Fundamentals',
                    readTime: '7',
                    keywords: ['gcd', 'junior high math', 'how to find'],
                },
                {
                    title: 'What Is the LCM? Meaning, How to Find It, and Uses',
                    subtitle: 'Clear basics for junior high math',
                    description:
                        'A simple explanation of LCM, how to find it, and where it is used.',
                    href: '/articles/lcm-basics',
                    badge: 'Fundamentals',
                    readTime: '7',
                    keywords: ['lcm', 'junior high math', 'how to find'],
                },
            ],
        },
    },
} as const

type Messages = (typeof messages)[Locale]

export const useI18n = (): { locale: Locale; messages: Messages } => {
    const locale = getLocale()
    const selected = messages[locale] ?? messages.en
    return {
        locale,
        messages: selected,
    }
}
