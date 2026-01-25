import React, { useMemo } from 'react'
import { Head, usePage } from '@inertiajs/react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/storeUrls'

const highlights = [
    {
        title: 'とにかく反復',
        body: '短時間で何度も解く。理解は浅くてOK、回数で定着。',
    },
    {
        title: '迷いを減らす設計',
        body: '問題選び・丸付けの手間をなくし、数学に集中。',
    },
    {
        title: '苦手に寄り添う',
        body: '途中で止まった人が再開しやすいテンポと難易度。',
    },
]

const fitItems = [
    '数学が苦手',
    '勉強しても続かない',
    '何からやればいいか分からない',
    '参考書や動画で挫折した',
    'テスト前になると焦る',
]

const features = [
    'すぐ問題が始まる',
    '丸付け不要',
    '短時間で終われる',
    '間違えても気にならない',
]

const faqItems = [
    {
        question: '本当に数学が苦手でも大丈夫ですか？',
        answer: 'はい。むしろ、数学が苦手な人向けに作られています。',
    },
    {
        question: 'どれくらいの時間使えばいいですか？',
        answer: '1日3〜5分で十分です。大切なのは時間ではなく回数です。',
    },
    {
        question: '解説はありますか？',
        answer: '最低限の説明はありますが、長い解説よりも解く回数を重視しています。',
    },
]

export const AboutHitasuraMath = React.memo(function AboutHitasuraMath() {
    const { url } = usePage()
    const canonicalUrl = useMemo(() => {
        if (typeof window === 'undefined') return ''
        return `${window.location.origin}${url}`
    }, [url])
    const metaTitle = 'ひたすら数学とは？｜苦手な人のために作られた数学練習アプリ'
    const metaDescription =
        'ひたすら数学の特徴、作った理由、向いている人、使い方をまとめた紹介記事。'
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
                <meta property="og:type" content="article" />
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
                <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#ECFEFF] via-white to-white">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-16 top-14 h-52 w-52 rounded-full bg-[#1E3A8A]/5" />
                        <div className="absolute right-0 top-24 h-36 w-36 rounded-full bg-[#2DD4BF]/20" />
                    </div>
                    <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-24">
                        <div className="space-y-6">
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#1E3A8A]">
                                ABOUT HITASURA MATH
                            </p>
                            <h1 className="text-3xl font-extrabold leading-[1.3] text-[#0F172A] md:text-5xl">
                                ひたすら数学とは？
                            </h1>
                            <p className="text-lg font-semibold text-[#1E3A8A]/80">
                                苦手な人のために作られた数学練習アプリ
                            </p>
                            <p className="text-base text-[#475569] md:text-lg">
                                ひたすら数学は、数学が苦手な人・途中でつまずいた人のために作られた、短時間の反復に特化した数学アプリです。
                            </p>
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-[#1E3A8A] px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-[#1E3A8A]/30"
                                >
                                    App Storeで見る
                                </a>
                                <a
                                    href={GOOGLE_PLAY_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[#1E3A8A]/30 px-6 py-3 text-xs font-semibold text-[#1E3A8A]"
                                >
                                    Google Playで見る
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-[28px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0F2FE]">
                                        <img src="/images/logo.png" alt="ひたすら数学ロゴ" className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">
                                            CONCEPT
                                        </p>
                                        <p className="text-lg font-bold text-[#0F172A]">解く回数を増やす</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-[#64748B]">
                                    長い解説よりも、短時間で何度も解く。考える前に手が動く状態を作ります。
                                </p>
                                <div className="mt-5 grid gap-3">
                                    {highlights.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3"
                                        >
                                            <p className="text-sm font-semibold text-[#1E3A8A]">{item.title}</p>
                                            <p className="mt-1 text-xs text-[#64748B]">{item.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 hidden h-16 w-16 rounded-full bg-[#2DD4BF]/30 md:block" />
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#0F172A]">
                                ひたすら数学とは？
                            </h2>
                            <p className="text-[#475569]">
                                ひたすら数学とは、中学数学・高校数学の基礎を短時間で何度も解くことに特化した数学アプリです。
                            </p>
                            <p className="text-[#475569]">
                                解説を長く読むアプリでも、いろいろな機能があるアプリでもありません。とにかく「解く回数」を増やすためのアプリです。
                            </p>
                            <p className="text-[#475569]">
                                数学が苦手な人ほど、<strong>「考える前に手が動く状態」を作ること</strong>を目的にしています。
                            </p>
                        </div>
                        <div className="rounded-3xl bg-[#0F172A] p-6 text-white">
                            <p className="text-xs font-semibold tracking-[0.3em] text-white/60">
                                WHY WE BUILT
                            </p>
                            <h3 className="mt-3 text-xl font-bold">ひたすら数学を作った理由</h3>
                            <p className="mt-3 text-sm text-white/80">
                                数学が苦手な人の多くは、理解力ではなく「解く回数」が足りないだけです。
                                「進めないから理解できない」という悪循環を断ち切るために作られました。
                            </p>
                            <div className="mt-4 rounded-2xl bg-white/10 p-4 text-sm">
                                <p className="font-semibold">
                                    「理解できないから進めない」ではなく
                                </p>
                                <p className="mt-2 text-white/80">
                                    「進めないから理解できない」
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-10 md:px-10">
                    <div className="rounded-3xl bg-[#F8FAFC] p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-[#0F172A]">ひたすら数学が大切にしている考え方</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {['数学は才能ではない', '数学は反復で身につく', '完璧な理解は後でいい'].map((text) => (
                                <div key={text} className="rounded-2xl bg-white p-4 shadow-sm">
                                    <p className="text-sm font-semibold text-[#1E3A8A]">{text}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-5 text-sm text-[#475569]">
                            まずは短時間で、何度も、同じ形の問題に触れる。これを最優先にしています。
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
                    <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
                        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6">
                            <h2 className="text-xl font-bold text-[#0F172A]">どんな人に向いている？</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {fitItems.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0369A1]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-[#475569]">
                                逆に、長い解説を読みたい・1問1問じっくり考えたい人には、少し物足りなく感じるかもしれません。
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6">
                            <h2 className="text-xl font-bold text-[#0F172A]">ひたすら数学でできること</h2>
                            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#475569]">
                                {features.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-[#475569]">
                                「1回5分」でも、確実に数学に触れる回数が増えます。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-12 md:px-10">
                    <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#0F172A]">中学数学・高校数学との関係</h2>
                            <p className="text-[#475569]">
                                ひたすら数学は、中学数学の計算分野・高校数学の入口（微分・積分）を中心に設計されています。
                            </p>
                            <p className="text-[#475569]">
                                特に、因数分解・素因数分解・分数の計算・微分・積分といった<strong>つまずきやすい単元の反復</strong>に強みがあります。
                            </p>
                        </div>
                        <div className="rounded-3xl bg-[#1E3A8A] p-6 text-white">
                            <p className="text-xs font-semibold tracking-[0.3em] text-white/70">FOCUS</p>
                            <div className="mt-4 grid gap-3 text-sm">
                                {['因数分解', '素因数分解', '分数の計算', '微分', '積分'].map((item) => (
                                    <div key={item} className="rounded-2xl bg-white/10 px-4 py-2">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-12 md:px-10">
                    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8">
                        <h2 className="text-2xl font-bold text-[#0F172A]">ひたすら数学は「理解用」ではなく「定着用」</h2>
                        <p className="mt-4 text-[#475569]">
                            解説で分かったつもりでも、問題が解けなければ意味がありません。ひたすら数学は、
                            <strong>「分かった」を「できる」に変える場所</strong>です。
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-14 md:px-10">
                    <div className="rounded-3xl bg-[#F1F5F9] p-8">
                        <h2 className="text-2xl font-bold text-[#0F172A]">よくある質問</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {faqItems.map((item) => (
                                <div key={item.question} className="rounded-2xl bg-white p-5 shadow-sm">
                                    <p className="text-sm font-semibold text-[#0F172A]">{item.question}</p>
                                    <p className="mt-2 text-xs text-[#64748B]">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-16 md:px-10">
                    <div className="rounded-3xl bg-[#0F172A] p-10 text-white md:p-12">
                        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold tracking-[0.3em] text-white/60">
                                    HITASURA MATH
                                </p>
                                <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                                    ひたすら数学を、今すぐ始めよう
                                </h2>
                                <p className="mt-3 text-sm text-white/75 md:text-base">
                                    まずは軽く、短く。ひたすら数学で数学に触れる回数を増やしてみてください。
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-white px-6 py-3 text-xs font-semibold text-[#0F172A]"
                                >
                                    App Storeで見る
                                </a>
                                <a
                                    href={GOOGLE_PLAY_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/50 px-6 py-3 text-xs font-semibold text-white"
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

export default AboutHitasuraMath
