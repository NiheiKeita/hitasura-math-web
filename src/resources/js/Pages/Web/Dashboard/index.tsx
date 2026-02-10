
import React from 'react'
import { Head } from '@inertiajs/react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/storeUrls'
import { useI18n, withLocale } from '@/i18n'

export const Dashboard = React.memo(function Dashboard() {
    const { messages, locale } = useI18n()
    const storeUrl =
        typeof navigator === 'undefined'
            ? APP_STORE_URL
            : /android/i.test(navigator.userAgent)
                ? GOOGLE_PLAY_URL
                : /iPad|iPhone|iPod/.test(navigator.userAgent)
                    ? APP_STORE_URL
                    : APP_STORE_URL

    const screenshots = messages.dashboard.screenshots.items.map((item, index) => ({
        ...item,
        src: `/images/game_screen/game_${index + 1}.png`,
    }))

    return (
        <div
            className="min-h-screen bg-white text-[#64748B]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <Head title={messages.dashboard.metaTitle}>
                <meta name="description" content={messages.dashboard.metaDescription} />
                <meta property="og:title" content={messages.dashboard.metaTitle} />
                <meta property="og:description" content={messages.dashboard.metaDescription} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={messages.dashboard.metaTitle} />
                <meta name="twitter:description" content={messages.dashboard.metaDescription} />
            </Head>
            <SiteHeader appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />

            <main>
                <section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#1E3A8A]/5" />
                        <div className="absolute right-0 top-32 h-40 w-40 rounded-full bg-[#1E3A8A]/5" />
                        <div className="motion-safe:animate-swim-left absolute right-0 top-4 h-32 w-32 opacity-30 md:-right-6 md:top-8 md:h-40 md:w-40">
                            <div className="fish-smooth motion-safe:animate-bob-fast">
                                <img
                                    src="/images/logo.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full rotate-6"
                                />
                            </div>
                        </div>
                        <div className="motion-safe:animate-swim-right absolute bottom-6 left-6 hidden h-24 w-24 opacity-15 md:block">
                            <div className="fish-smooth motion-safe:animate-bob-fast">
                                <img
                                    src="/images/logo.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full -rotate-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
                        <div className="space-y-5">
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                                {messages.dashboard.hero.eyebrow}
                            </p>
                            <h1 className="text-4xl font-extrabold leading-[1.25] text-[#1E3A8A] md:text-6xl md:leading-[1.2]">
                                <span className="block">{messages.dashboard.hero.titleLine1}</span>
                                <span className="relative left-2 block">
                                    {messages.dashboard.hero.titleLine2}
                                    <span className="relative inline-block">
                                        {messages.dashboard.hero.titlePunctuation}
                                        <span className="bubble pointer-events-none absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#2DD4BF]/60" />
                                        <span className="bubble bubble-delay-1 pointer-events-none absolute -right-2 top-2 h-3 w-3 rounded-full bg-[#2DD4BF]/50" />
                                        <span className="bubble bubble-delay-2 pointer-events-none absolute -right-0 top-4 h-4 w-4 rounded-full bg-[#2DD4BF]/40" />
                                        <span className="bubble bubble-delay-3 pointer-events-none absolute -right-3 top-5 h-3 w-3 rounded-full bg-[#2DD4BF]/40" />
                                    </span>
                                </span>
                            </h1>
                            <p className="text-base text-[#64748B] md:text-lg">
                                {messages.dashboard.hero.description}
                            </p>
                            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
                                <a
                                    href={storeUrl}
                                    className="rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2DD4BF]/30"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {messages.dashboard.hero.cta}
                                </a>
                                <div className="flex flex-wrap items-center gap-3">
                                    <a
                                        href={APP_STORE_URL}
                                        aria-label={messages.siteHeader.appStoreAria}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                            alt="App Store"
                                            className="h-7 w-auto"
                                        />
                                    </a>
                                    <a
                                        href={GOOGLE_PLAY_URL}
                                        aria-label={messages.siteHeader.googlePlayAria}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                                            alt="Google Play"
                                            className="h-7 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto w-full max-w-sm">
                            <div className="relative rounded-[32px] bg-white p-3 shadow-2xl shadow-[#1E3A8A]/10">
                                <div className="rounded-[26px] bg-white p-3 shadow-inner shadow-black/5">
                                    <img
                                        src="/images/game_top.png"
                                        alt="Game screen preview"
                                        className="w-full rounded-3xl object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            {messages.dashboard.feel.eyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            {messages.dashboard.feel.title}
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {messages.dashboard.feel.items.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.08)]"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm font-bold text-[#1E3A8A]">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="mt-3 text-sm text-[#64748B]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            {messages.dashboard.modes.eyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            {messages.dashboard.modes.title}
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {messages.dashboard.modes.items.map((mode) => (
                            <div
                                key={mode.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
                            >
                                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                                    {mode.title}
                                </h3>
                                <p className="mt-3 text-sm text-[#64748B]">{mode.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                                {messages.dashboard.contents.eyebrow}
                            </p>
                            <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                                {messages.dashboard.contents.title}
                            </h2>
                        </div>
                        {/* <span className="rounded-full bg-[#2DD4BF] px-4 py-1 text-xs font-semibold text-white">
                            More coming
                        </span> */}
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {messages.dashboard.contents.items.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                                        {item.title}
                                    </h3>
                                    {'soon' in item && item.soon ? (
                                        <span className="rounded-full bg-[#2DD4BF] px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white">
                                            COMING SOON
                                        </span>
                                    ) : null}
                                </div>
                                <p className="mt-3 text-sm text-[#64748B]">{item.meta}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-8">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            {messages.dashboard.screenshots.eyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            {messages.dashboard.screenshots.title}
                        </h2>
                    </div>
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-2 text-sm text-[#1E3A8A]">
                        {screenshots.map((shot) => (
                            <div
                                key={shot.label}
                                className="w-[240px] shrink-0 snap-center rounded-3xl bg-white p-4 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
                            >
                                <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
                                    <img
                                        src={shot.src}
                                        alt={`${shot.label} screenshot`}
                                        className="h-full w-full rounded-xl object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-3 text-xs text-[#64748B]">
                                    {shot.caption}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="grid gap-8 rounded-3xl bg-[#F8FAFC] p-8 shadow-[0_20px_40px_rgba(30,58,138,0.08)] md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                                {messages.dashboard.calendar.eyebrow}
                            </p>
                            <h2 className="mt-3 text-2xl font-bold text-[#1E3A8A] md:text-3xl">
                                {messages.dashboard.calendar.title}
                            </h2>
                            <p className="mt-3 text-sm text-[#64748B] md:text-base">
                                {messages.dashboard.calendar.description}
                            </p>
                        </div>
                        <div className="rounded-3xl border border-[#1E3A8A]/10 bg-white p-6 text-sm text-[#64748B] shadow-[0_12px_30px_rgba(30,58,138,0.06)]">
                            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                                <img
                                    src="/images/calendar.jpg"
                                    alt="Calendar screen showing learning progress"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="mt-4 text-xs text-[#94A3B8]">
                                {messages.dashboard.calendar.note}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                            {messages.dashboard.comingSoon.eyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-[#1E3A8A]">
                            {messages.dashboard.comingSoon.title}
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {messages.dashboard.comingSoon.items.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(30,58,138,0.06)]"
                            >
                                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-[#64748B]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-10">
                    <div className="rounded-3xl bg-white p-8 text-center shadow-[0_20px_40px_rgba(30,58,138,0.08)] md:p-12">
                        <h2 className="text-3xl font-extrabold text-[#1E3A8A]">
                            {messages.dashboard.download.title}
                        </h2>
                        <p className="mt-3 text-sm text-[#64748B]">
                            {messages.dashboard.download.description}
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <a
                                href={APP_STORE_URL}
                                aria-label={messages.siteHeader.appStoreAria}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                                    alt="App Store"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <a
                                href={GOOGLE_PLAY_URL}
                                aria-label={messages.siteHeader.googlePlayAria}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
                                    alt="Google Play"
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                        <div className="mt-6 text-xs text-[#64748B]">
                            <a
                                className="hover:text-[#1E3A8A]"
                                href="https://keitamax.qboad.com/apps/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {messages.dashboard.download.otherApps}
                            </a>
                        </div>
                    </div>
                </section>
                <section className="mx-auto max-w-6xl px-5 pb-20 md:px-10">
                    <div className="rounded-3xl border border-[#1E3A8A]/10 bg-[#F8FAFC] p-8 text-center shadow-[0_20px_40px_rgba(30,58,138,0.08)] md:p-12">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#94A3B8]">
                            {messages.dashboard.feedback.eyebrow}
                        </p>
                        <h2 className="mt-3 text-2xl font-bold text-[#1E3A8A] md:text-3xl">
                            <span className="block sm:inline">
                                {messages.dashboard.feedback.titleLine1}
                            </span>
                            <span className="block sm:inline">
                                {messages.dashboard.feedback.titleLine2}
                            </span>
                        </h2>
                        <p className="mt-3 text-sm text-[#64748B] md:text-base">
                            {messages.dashboard.feedback.description}
                        </p>
                        <div className="mt-6">
                            <a
                                href={withLocale('/feedback', locale)}
                                className="inline-flex items-center justify-center rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2DD4BF]/30 transition hover:opacity-90"
                            >
                                {messages.dashboard.feedback.cta}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <WebFooter appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />
        </div>
    )
})
export default Dashboard
