import React from 'react'
import { useI18n, withLocale } from '@/i18n'

type Props = {
    appStoreUrl: string
    googlePlayUrl: string
}

export const WebFooter = React.memo<Props>(function WebFooter({
    appStoreUrl,
    googlePlayUrl,
}) {
    const { messages, locale } = useI18n()

    return (
        <footer className="mt-20 border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/logo.png"
                            alt={messages.footer.brandName}
                            className="h-8 w-auto"
                        />
                        <span className="text-sm font-semibold text-[#1E3A8A]">
                            {messages.footer.brandName}
                        </span>
                    </div>
                    <p className="text-xs text-slate-500">
                        {messages.footer.tagline}
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:items-start md:gap-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">ARTICLES</p>
                        <a
                            href={withLocale('/articles', locale)}
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            {messages.footer.articles}
                        </a>
                        <a
                            href={withLocale('/articles/about-hitasura-math', locale)}
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            {messages.footer.about}
                        </a>
                        <a
                            href={withLocale('/articles/junior-high-math-guide', locale)}
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            {messages.footer.juniorGuide}
                        </a>
                        <a
                            href={withLocale('/articles/high-school-math-guide', locale)}
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            {messages.footer.highGuide}
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">DOWNLOAD</p>
                        <a
                            href={appStoreUrl}
                            aria-label={messages.footer.appStoreAria}
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
                            aria-label={messages.footer.googlePlayAria}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                                alt="Google Play"
                                className="h-6 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">CONTACT</p>
                        <a
                            href={withLocale('/feedback', locale)}
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            {messages.footer.contact}
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
                {messages.footer.copyright}
            </div>
        </footer>
    )
})

export default WebFooter
