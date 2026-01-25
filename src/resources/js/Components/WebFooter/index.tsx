import React from 'react'

type Props = {
    appStoreUrl: string
    googlePlayUrl: string
}

export const WebFooter = React.memo<Props>(function WebFooter({
    appStoreUrl,
    googlePlayUrl,
}) {
    return (
        <footer className="mt-20 border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/logo.png"
                            alt="ひたすら数学"
                            className="h-8 w-auto"
                        />
                        <span className="text-sm font-semibold text-[#1E3A8A]">ひたすら数学</span>
                    </div>
                    <p className="text-xs text-slate-500">
                        ひたすら解く。数学だけに没頭する計算ゲーム。
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:items-start md:gap-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">ARTICLES</p>
                        <a href="/articles" className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70">
                            記事まとめ
                        </a>
                        <a
                            href="/articles/about-hitasura-math"
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            ひたすら数学とは？
                        </a>
                        <a
                            href="/articles/junior-high-math-guide"
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            中学数学の勉強法まとめ
                        </a>
                        <a
                            href="/articles/high-school-math-guide"
                            className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70"
                        >
                            高校数学の勉強法まとめ
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">DOWNLOAD</p>
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
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">CONTACT</p>
                        <a href="/feedback" className="text-sm font-semibold text-[#1E3A8A] hover:opacity-70">
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
                © ひたすら数学
            </div>
        </footer>
    )
})

export default WebFooter
