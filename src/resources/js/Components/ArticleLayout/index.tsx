import React, { useMemo } from 'react'
import { Head, usePage } from '@inertiajs/react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/storeUrls'
import { useI18n, withLocale } from '@/i18n'

type Props = {
    breadcrumbLabel: string
    eyebrow: string
    title: string
    subtitle?: string
    description: string
    tags: string[]
    children: React.ReactNode
}

export const ArticleLayout = React.memo<Props>(function ArticleLayout({
    breadcrumbLabel,
    eyebrow,
    title,
    subtitle,
    description,
    tags,
    children,
}) {
    const { messages, locale } = useI18n()
    const { url } = usePage()
    const metaTitle = subtitle ? `${title}｜${subtitle}` : title
    const canonicalUrl = useMemo(() => {
        if (typeof window === 'undefined') return ''
        return `${window.location.origin}${url}`
    }, [url])
    const ogImageUrl =
        typeof window === 'undefined' ? '/images/logo.png' : `${window.location.origin}/images/logo.png`

    return (
        <div
            className="min-h-screen bg-white text-[#64748B]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <Head title={metaTitle}>
                <meta name="description" content={description} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
                <meta property="og:image" content={ogImageUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImageUrl} />
                {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
            </Head>
            <SiteHeader appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />

            <main className="mx-auto max-w-4xl px-5 py-12 md:px-10 md:py-16">
                <nav className="text-xs font-semibold text-[#94A3B8]">
                    <a href={withLocale('/articles', locale)} className="hover:text-[#1E3A8A]">
                        {messages.articleLayout.breadcrumb}
                    </a>
                    <span className="mx-2">/</span>
                    <span className="text-[#1E3A8A]">{breadcrumbLabel}</span>
                </nav>

                <article className="article-content mt-6 space-y-10">
                    <header className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                            {eyebrow}
                        </p>
                        <h1 className="text-3xl font-extrabold leading-[1.35] text-[#0F172A] md:text-5xl">
                            {title}
                        </h1>
                        {subtitle ? (
                            <p className="text-sm font-semibold text-[#1E3A8A]/80 md:text-base">
                                {subtitle}
                            </p>
                        ) : null}
                        <p className="text-base text-[#475569] md:text-lg">{description}</p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>
                    {children}
                </article>
            </main>

            <WebFooter appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />
        </div>
    )
})

export default ArticleLayout
