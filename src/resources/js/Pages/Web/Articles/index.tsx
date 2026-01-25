import React, { useMemo } from 'react'
import { Head, usePage } from '@inertiajs/react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'

const APP_STORE_URL =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%95%B0%E5%AD%A6/id6757374941'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.qboad.hitasura_math'

type Article = {
    title: string
    subtitle: string
    description: string
    href: string
    badge: string
    readTime: string
    keywords: string[]
}

const articles: Article[] = [
    {
        title: '中学数学の勉強法まとめ',
        subtitle: 'アプリ学習で苦手を克服する完全ガイド',
        description:
            '中学数学の勉強法と主要単元のポイントを整理。因数分解や素因数分解など関連記事もまとめた記事。',
        href: '/articles/junior-high-math-guide',
        badge: 'まとめ',
        readTime: '読む目安: 8分',
        keywords: ['中学数学 勉強法', '数学 アプリ', '勉強法'],
    },
    {
        title: '高校数学の勉強法まとめ',
        subtitle: '微分・積分から始める苦手克服ガイド',
        description:
            '高校数学の勉強法と主要単元のポイントを整理。微分・積分の関連記事へつながる記事。',
        href: '/articles/high-school-math-guide',
        badge: 'まとめ',
        readTime: '読む目安: 7分',
        keywords: ['高校数学 勉強法', '微分 積分', '数学 アプリ'],
    },
    {
        title: 'ひたすら数学とは？',
        subtitle: '苦手な人のために作られた数学練習アプリ',
        description:
            'ひたすら数学の特徴や作った理由、どんな人に向いているかをまとめた紹介記事。',
        href: '/articles/about-hitasura-math',
        badge: 'アプリ紹介',
        readTime: '読む目安: 6分',
        keywords: ['ひたすら数学', '数学アプリ', '勉強法'],
    },
    {
        title: '因数分解の勉強法まとめ',
        subtitle: 'アプリ学習で苦手を克服する完全ガイド',
        description:
            '因数分解 勉強に悩む人向けに、つまずきの原因と勉強法を整理。因数分解 アプリ学習が効果的な理由も解説。',
        href: '/articles/factorization-study',
        badge: '学習ガイド',
        readTime: '読む目安: 6分',
        keywords: ['因数分解 勉強', '因数分解 アプリ', '中学数学'],
    },
    {
        title: '素因数分解の勉強法まとめ',
        subtitle: 'アプリ学習で基礎を固める完全ガイド',
        description:
            '素因数分解の基本とつまずきポイントを整理。素因数分解 アプリで反復するメリットを紹介。',
        href: '/articles/prime-factorization-study',
        badge: '学習ガイド',
        readTime: '読む目安: 6分',
        keywords: ['素因数分解 勉強', '素因数分解 アプリ', '中学数学'],
    },
    {
        title: '微分の勉強法まとめ',
        subtitle: 'アプリ学習で苦手を克服する完全ガイド',
        description:
            '微分の意味やつまずきポイントを整理。微分 アプリ学習で反復するメリットも解説。',
        href: '/articles/differential-study',
        badge: '学習ガイド',
        readTime: '読む目安: 7分',
        keywords: ['微分 勉強', '微分 アプリ', '高校数学'],
    },
    {
        title: '積分の勉強法まとめ',
        subtitle: 'アプリ学習で苦手を克服する完全ガイド',
        description:
            '積分の意味とつまずきポイントを整理。積分 アプリ学習で反復するメリットも解説。',
        href: '/articles/integration-study',
        badge: '学習ガイド',
        readTime: '読む目安: 7分',
        keywords: ['積分 勉強', '積分 アプリ', '高校数学'],
    },
    {
        title: '微分と積分の違いを完全解説',
        subtitle: '高校数学でつまずかないための考え方',
        description:
            '微分と積分の違いを一言で整理し、使い分けのポイントを解説。判断に迷う人向けの基礎ガイド。',
        href: '/articles/differential-vs-integration',
        badge: '基礎理解',
        readTime: '読む目安: 6分',
        keywords: ['微分 積分 違い', '高校数学', '使い分け'],
    },
    {
        title: '因数分解と素因数分解の違いを完全解説',
        subtitle: '中学数学で混乱しないための整理',
        description:
            '因数分解と素因数分解の違いを一言で整理し、見分け方や使い分けを解説。混乱しやすい人向けの基礎ガイド。',
        href: '/articles/factorization-vs-prime-factorization',
        badge: '基礎理解',
        readTime: '読む目安: 6分',
        keywords: ['因数分解 素因数分解 違い', '中学数学', '使い分け'],
    },
    {
        title: '因数分解と式の展開の違いを完全解説',
        subtitle: '中学数学で迷わなくなる考え方',
        description:
            '因数分解と式の展開の違いを一言で整理し、使い分けのポイントを解説。迷いやすい人向けの基礎ガイド。',
        href: '/articles/factorization-vs-expansion',
        badge: '基礎理解',
        readTime: '読む目安: 6分',
        keywords: ['因数分解 展開 違い', '中学数学', '使い分け'],
    },
    {
        title: '最大公約数と最小公倍数の違いを完全解説',
        subtitle: '中学数学で混乱しない考え方',
        description:
            '最大公約数と最小公倍数の違いを一言で整理し、使い分けのポイントを解説。混乱しやすい人向けの基礎ガイド。',
        href: '/articles/gcd-vs-lcm',
        badge: '基礎理解',
        readTime: '読む目安: 6分',
        keywords: ['最大公約数 最小公倍数 違い', '中学数学', '使い分け'],
    },
    {
        title: '分数の約分と通分の考え方を完全解説',
        subtitle: '中学数学で迷わなくなる基本整理',
        description:
            '約分と通分の違いを一言で整理し、最大公約数・最小公倍数との関係も解説。迷いやすい人向けの基礎ガイド。',
        href: '/articles/fraction-reduction-vs-common-denominator',
        badge: '基礎理解',
        readTime: '読む目安: 6分',
        keywords: ['約分 通分 違い', '分数 計算', '中学数学'],
    },
    {
        title: '最大公約数とは？意味・求め方・使い道までやさしく完全解説',
        subtitle: '中学数学の基礎をやさしく整理',
        description:
            '最大公約数の意味、求め方、使い道をわかりやすく解説。素因数分解を使った考え方も整理。',
        href: '/articles/gcd-basics',
        badge: '基礎理解',
        readTime: '読む目安: 7分',
        keywords: ['最大公約数', '中学数学', '求め方'],
    },
    {
        title: '最小公倍数とは？意味・求め方・使い道までやさしく完全解説',
        subtitle: '中学数学の基礎をやさしく整理',
        description:
            '最小公倍数の意味、求め方、使い道をわかりやすく解説。素因数分解を使った考え方も整理。',
        href: '/articles/lcm-basics',
        badge: '基礎理解',
        readTime: '読む目安: 7分',
        keywords: ['最小公倍数', '中学数学', '求め方'],
    },
]

export const Articles = React.memo(function Articles() {
    const { url } = usePage()
    const canonicalUrl = useMemo(() => {
        if (typeof window === 'undefined') return ''
        return `${window.location.origin}${url}`
    }, [url])
    const metaTitle = '数学の勉強が進む記事まとめ'
    const metaDescription =
        '因数分解・素因数分解・微分・積分など、数学学習を進めるための記事をまとめています。'
    const ogImageUrl =
        typeof window === 'undefined' ? '/images/logo.png' : `${window.location.origin}/images/logo.png`

    return (
        <div
            className="min-h-screen bg-white text-[#64748B]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <Head title={metaTitle}>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
                <meta property="og:image" content={ogImageUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={ogImageUrl} />
                {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
            </Head>
            <SiteHeader appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />

            <main>
                <section className="relative overflow-hidden border-b border-slate-100">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#1E3A8A]/5" />
                        <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-[#2DD4BF]/10" />
                    </div>
                    <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#1E3A8A]">
                            Articles
                        </p>
                        <h1 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-5xl">
                            数学の勉強が進む記事まとめ
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-[#475569] md:text-lg">
                            因数分解の勉強法や、因数分解アプリの活用方法をわかりやすく整理。
                            迷ったときに戻ってこれる、実践向けの学習ガイドを集めています。
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
                    <div className="grid gap-6 md:grid-cols-2">
                        {articles.map((article) => (
                            <a
                                key={article.title}
                                href={article.href}
                                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1E3A8A]/30 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
                                    <span>{article.badge}</span>
                                    <span className="text-[#94A3B8]">{article.readTime}</span>
                                </div>
                                <h2 className="mt-4 text-xl font-bold text-[#0F172A] transition group-hover:text-[#1E3A8A]">
                                    {article.title}
                                </h2>
                                <p className="mt-2 text-sm font-semibold text-[#1E3A8A]/80">
                                    {article.subtitle}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                                    {article.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {article.keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0369A1]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6 text-sm font-semibold text-[#1E3A8A]">
                                    記事を読む →
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
                        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    Factorization App
                                </p>
                                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                                    因数分解の勉強を、アプリで習慣に。
                                </h2>
                                <p className="mt-3 text-sm text-white/80 md:text-base">
                                    ひたすら数学は、因数分解をテンポよく反復できる学習アプリです。
                                    短時間でも毎日続けやすく、苦手克服にぴったり。
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#1E3A8A]"
                                >
                                    App Storeで見る
                                </a>
                                <a
                                    href={GOOGLE_PLAY_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/60 px-5 py-2 text-xs font-semibold text-white"
                                >
                                    Google Playで見る
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <WebFooter appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />
        </div>
    )
})

export default Articles
