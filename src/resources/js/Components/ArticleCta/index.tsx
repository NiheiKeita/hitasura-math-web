import React from 'react'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/storeUrls'

type Props = {
    eyebrow: string
    title: string
    description: string
}

export const ArticleCta = React.memo<Props>(function ArticleCta({
    eyebrow,
    title,
    description,
}) {
    return (
        <section className="rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                        {eyebrow}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">
                        {title}
                    </h2>
                    <p className="mt-3 text-sm text-white/80 md:text-base">{description}</p>
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
        </section>
    )
})

export default ArticleCta
