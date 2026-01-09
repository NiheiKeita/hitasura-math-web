import React from 'react'

type Props = {
    appStoreUrl: string
    googlePlayUrl: string
}

export const SiteHeader = React.memo<Props>(function SiteHeader({
    appStoreUrl,
    googlePlayUrl,
}) {
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
                </div>
            </div>
        </header>
    )
})

export default SiteHeader
