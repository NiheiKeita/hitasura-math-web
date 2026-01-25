import React, { useState } from 'react'

type Props = {
    appStoreUrl: string
    googlePlayUrl: string
}

export const SiteHeader = React.memo<Props>(function SiteHeader({
    appStoreUrl,
    googlePlayUrl,
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="/images/logo_full.png"
                        alt="ひたすら数学"
                        className="h-7 w-auto md:h-8"
                    />
                    <img
                        src="/images/logo.png"
                        alt="ひたすら数学アイコン"
                        className="h-7 w-auto md:h-8"
                    />
                </a>
                <div className="flex items-center gap-2">
                    <a
                        href="/articles"
                        className="hidden rounded-full border border-[#1E3A8A]/20 px-4 py-2 text-xs font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5 md:inline-flex md:text-sm"
                    >
                        記事まとめ
                    </a>
                    <a
                        href="/feedback"
                        className="hidden rounded-full border border-[#1E3A8A]/20 px-4 py-2 text-xs font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5 md:inline-flex md:text-sm"
                    >
                        お問い合わせ
                    </a>
                    <a href={appStoreUrl} aria-label="App Storeで見る" target="_blank" rel="noreferrer">
                        <img
                            src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                            alt="App Store"
                            className="h-6 w-auto"
                        />
                    </a>
                    <a href={googlePlayUrl} aria-label="Google Playで見る" target="_blank" rel="noreferrer">
                        <img
                            src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                            alt="Google Play"
                            className="h-6 w-auto"
                        />
                    </a>
                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1E3A8A]/20 text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5 md:hidden -mr-1"
                        aria-label="メニューを開く"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span className="sr-only">メニュー</span>
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
                        <a
                            href="/articles"
                            className="rounded-2xl border border-[#1E3A8A]/20 px-4 py-3 text-sm font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5"
                        >
                            記事まとめ
                        </a>
                        <a
                            href="/feedback"
                            className="rounded-2xl border border-[#1E3A8A]/20 px-4 py-3 text-sm font-semibold text-[#1E3A8A] transition hover:border-[#1E3A8A]/40 hover:bg-[#1E3A8A]/5"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            ) : null}
        </header>
    )
})

export default SiteHeader
