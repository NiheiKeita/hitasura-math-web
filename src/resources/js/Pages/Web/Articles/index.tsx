import React, { useMemo } from 'react'
import { Head, usePage } from '@inertiajs/react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/storeUrls'
import { useI18n, withLocale } from '@/i18n'

type Article = {
    title: string
    subtitle: string
    description: string
    href: string
    badge: string
    readTime: string | number
    keywords: ReadonlyArray<string>
}

export const Articles = React.memo(function Articles() {
    const { messages, locale } = useI18n()
    const { url } = usePage()
    const canonicalUrl = useMemo(() => {
        if (typeof window === 'undefined') return ''
        return `${window.location.origin}${url}`
    }, [url])
    const metaTitle = messages.articles.metaTitle
    const metaDescription = messages.articles.metaDescription
    const ogImageUrl =
        typeof window === 'undefined' ? '/images/logo.png' : `${window.location.origin}/images/logo.png`
    const articles: ReadonlyArray<Article> = messages.articles.items

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
                            {messages.articles.hero.eyebrow}
                        </p>
                        <h1 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-5xl">
                            {messages.articles.hero.title}
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-[#475569] md:text-lg">
                            {messages.articles.hero.description}
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
                    <div className="grid gap-6 md:grid-cols-2">
                        {articles.map((article) => (
                            <a
                                key={article.title}
                                href={withLocale(article.href, locale)}
                                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1E3A8A]/30 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
                                    <span>{article.badge}</span>
                                    <span className="text-[#94A3B8]">
                                        {messages.articles.readTimeLabel}: {article.readTime}{' '}
                                        {messages.articles.readTimeUnit}
                                    </span>
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
                                    {messages.articles.readCta}
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
                        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    {messages.articles.cta.eyebrow}
                                </p>
                                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                                    {messages.articles.cta.title}
                                </h2>
                                <p className="mt-3 text-sm text-white/80 md:text-base">
                                    {messages.articles.cta.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#1E3A8A]"
                                >
                                    {messages.articles.cta.appStore}
                                </a>
                                <a
                                    href={GOOGLE_PLAY_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/60 px-5 py-2 text-xs font-semibold text-white"
                                >
                                    {messages.articles.cta.googlePlay}
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
