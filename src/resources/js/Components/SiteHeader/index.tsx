import React, { useState } from 'react'
import { useI18n, withLocale } from '@/i18n'

type Props = {
    appStoreUrl: string
    googlePlayUrl: string
}

export const SiteHeader = React.memo<Props>(function SiteHeader({
    appStoreUrl,
    googlePlayUrl,
}) {
    const { messages, locale } = useI18n()
    const [isOpen, setIsOpen] = useState(false)
    const languageLink = (nextLocale: 'ja' | 'en') => {
        if (typeof window === 'undefined') return `/?lang=${nextLocale}`
        const url = new URL(window.location.href)
        url.searchParams.set('lang', nextLocale)
        return `${url.pathname}${url.search}`
    }

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
                <a href={withLocale('/', locale)} className="flex items-center gap-2">
                    <img
                        src="/images/logo_full.png"
                        alt={messages.siteHeader.brandName}
                        className="h-7 w-auto md:h-8"
                    />
                    <img
                        src="/images/logo.png"
                        alt={messages.siteHeader.brandIconAlt}
                        className="h-7 w-auto md:h-8"
                    />
                </a>
                <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-1 rounded-full border border-[#1E3A8A]/20 bg-white/80 p-1 text-[11px] font-semibold text-[#1E3A8A] md:inline-flex">
                        <a
                            href={languageLink('ja')}
                            className={`rounded-full px-2 py-1 transition ${
                                locale === 'ja'
                                    ? 'bg-[#1E3A8A] text-white'
                                    : 'hover:bg-[#1E3A8A]/10'
                            }`}
                            aria-label="日本語に切り替え"
                        >
                            JP
                        </a>
                        <a
                            href={languageLink('en')}
                            className={`rounded-full px-2 py-1 transition ${
                                locale === 'en'
                                    ? 'bg-[#1E3A8A] text-white'
                                    : 'hover:bg-[#1E3A8A]/10'
                            }`}
                            aria-label="Switch to English"
                        >
                            EN
                        </a>
                    </div>
                    <a
                        href={withLocale('/articles', locale)}
                        className="hidden rounded-full border border-[#1E3A8A]/20 px-4 py-2 text-xs font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5 md:inline-flex md:text-sm"
                    >
                        {messages.siteHeader.articles}
                    </a>
                    <a
                        href={withLocale('/feedback', locale)}
                        className="hidden rounded-full border border-[#1E3A8A]/20 px-4 py-2 text-xs font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5 md:inline-flex md:text-sm"
                    >
                        {messages.siteHeader.contact}
                    </a>
                    <a
                        href={appStoreUrl}
                        aria-label={messages.siteHeader.appStoreAria}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                            alt="App Store"
                            className="h-6 w-auto"
                        />
                    </a>
                    <a
                        href={googlePlayUrl}
                        aria-label={messages.siteHeader.googlePlayAria}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                            alt="Google Play"
                            className="h-6 w-auto"
                        />
                    </a>
                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1E3A8A]/20 text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5 md:hidden -mr-1"
                        aria-label={messages.siteHeader.menuOpenAria}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span className="sr-only">{messages.siteHeader.menuSr}</span>
                        <div className="flex flex-col gap-1">
                            <span className="block h-0.5 w-4 rounded-full bg-current" />
                            <span className="block h-0.5 w-4 rounded-full bg-current" />
                            <span className="block h-0.5 w-4 rounded-full bg-current" />
                        </div>
                    </button>
                </div>
            </div>
            {isOpen ? (
                <div className="absolute left-0 right-0 top-full border-b border-slate-100 bg-white/95 shadow-lg md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4">
                        <div className="flex items-center gap-2">
                            <a
                                href={languageLink('ja')}
                                className={`inline-flex flex-1 items-center justify-center rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                                    locale === 'ja'
                                        ? 'border-[#1E3A8A] bg-[#1E3A8A] text-white'
                                        : 'border-[#1E3A8A]/20 text-[#1E3A8A] hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5'
                                }`}
                                aria-label="日本語に切り替え"
                            >
                                日本語
                            </a>
                            <a
                                href={languageLink('en')}
                                className={`inline-flex flex-1 items-center justify-center rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                                    locale === 'en'
                                        ? 'border-[#1E3A8A] bg-[#1E3A8A] text-white'
                                        : 'border-[#1E3A8A]/20 text-[#1E3A8A] hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5'
                                }`}
                                aria-label="Switch to English"
                            >
                                English
                            </a>
                        </div>
                        <a
                            href={withLocale('/articles', locale)}
                            className="rounded-2xl border border-[#1E3A8A]/20 px-4 py-3 text-sm font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5"
                        >
                            {messages.siteHeader.articles}
                        </a>
                        <a
                            href={withLocale('/feedback', locale)}
                            className="rounded-2xl border border-[#1E3A8A]/20 px-4 py-3 text-sm font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5"
                        >
                            {messages.siteHeader.contact}
                        </a>
                    </div>
                </div>
            ) : null}
        </header>
    )
})

export default SiteHeader
