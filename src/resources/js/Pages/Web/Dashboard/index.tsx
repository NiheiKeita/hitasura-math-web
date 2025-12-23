
import React from 'react'

const feelItems = [
    {
        title: '正解するとちょっと嬉しい',
        body: '小さな達成感が、次の一問を呼ぶ。',
    },
    {
        title: 'テンポよく次へ進める',
        body: '迷わず解いて、気持ちよく続ける。',
    },
    {
        title: '考えることに集中できる',
        body: '余計な要素を削ぎ落とした画面。',
    },
]

const modes = [
    {
        title: '無限モード',
        body: '終わるまでひたすら。',
    },
    {
        title: '10問タイムアタック',
        body: 'スピード勝負で集中力全開。',
    },
    {
        title: '難易度',
        body: 'easy / normal / hard を選べる。',
    },
]

const contents = [
    {
        title: '因数分解',
        meta: '基本からサクサク。',
    },
    {
        title: '素因数分解',
        meta: '分解の気持ちよさ。',
    },
    {
        title: '微分 / 積分',
        meta: 'COMING SOON',
        soon: true,
    },
]

const comingSoon = [
    {
        title: 'Ranking',
        body: 'ライバルと比べる楽しさ。',
    },
    {
        title: 'Calendar',
        body: '毎日の積み上げが見える。',
    },
    {
        title: 'More modes',
        body: '遊び方がどんどん増える。',
    },
]

const screenshots = ['SCREEN 01', 'SCREEN 02', 'SCREEN 03', 'SCREEN 04']

export const Dashboard = React.memo(function Dashboard() {
    return (
        <div
            className="min-h-screen bg-white text-[#0B1E4B]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
                    <div className="text-sm font-semibold tracking-wide text-[#1C2E63]">
                        ひたすら数学
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="rounded-full border border-[#D9E2F2] px-4 py-2 text-xs font-semibold text-[#1C2E63]">
                            無料で遊ぶ
                        </button>
                        <button className="rounded-full bg-[#0B1E4B] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#0B1E4B]/20">
                            今すぐ遊ぶ
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section className="relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-70"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 1px 1px, rgba(11,30,75,0.12) 1px, transparent 0)',
                            backgroundSize: '22px 22px',
                        }}
                    />
                    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
                        <div className="space-y-5">
                            <p className="text-sm font-medium tracking-[0.2em] text-[#6C7BA5]">
                                Math game
                            </p>
                            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                                ひたすら解く。ただそれだけ。
                            </h1>
                            <p className="text-base text-[#42507A] md:text-lg">
                                正解する感覚に集中する、数学ゲーム。
                            </p>
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <button className="rounded-full bg-[#0B1E4B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0B1E4B]/20">
                                    今すぐ遊ぶ
                                </button>
                                <button className="rounded-full border border-[#D9E2F2] px-6 py-3 text-sm font-semibold text-[#0B1E4B]">
                                    無料で遊ぶ
                                </button>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#7B89AD]">
                                <span className="inline-flex h-2 w-2 rounded-full bg-[#36D6B5]" />
                                正解の気持ちよさに集中
                            </div>
                        </div>

                        <div className="mx-auto w-full max-w-sm">
                            <div className="relative rounded-[30px] border border-[#E5EAF5] bg-white p-3 shadow-2xl shadow-[#0B1E4B]/10">
                                <div className="rounded-[24px] bg-gradient-to-br from-[#F7FAFF] to-[#E8FAF4] p-4">
                                    <div className="mb-3 flex items-center justify-between text-xs text-[#6C7BA5]">
                                        <span>STREAK 12</span>
                                        <span className="rounded-full bg-[#36D6B5]/15 px-2 py-0.5 text-[#1A7F6B]">
                                            正解
                                        </span>
                                    </div>
                                    <div className="rounded-2xl bg-white p-4">
                                        <div className="text-xs text-[#7B89AD]">
                                            次の問題
                                        </div>
                                        <div className="mt-2 text-2xl font-bold text-[#0B1E4B]">
                                            18 × 7
                                        </div>
                                        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#0B1E4B]">
                                            {['126', '112', '134', '140'].map((value) => (
                                                <div
                                                    key={value}
                                                    className="rounded-xl border border-[#E5EAF5] py-2 text-center"
                                                >
                                                    {value}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-3 h-2 w-full rounded-full bg-white">
                                        <div className="h-2 w-2/3 rounded-full bg-[#36D6B5]" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center text-xs text-[#6C7BA5] motion-safe:animate-float-slow">
                                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#36D6B5]" />
                                スクロール
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-sm font-medium tracking-[0.2em] text-[#6C7BA5]">
                            FEEL
                        </p>
                        <h2 className="mt-2 text-3xl font-bold">気持ちいい数学</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {feelItems.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-[#E5EAF5] bg-white p-6 shadow-[0_10px_30px_rgba(11,30,75,0.08)]"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FAF4] text-sm font-bold text-[#1A7F6B]">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                                <p className="mt-3 text-sm text-[#42507A]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-sm font-medium tracking-[0.2em] text-[#6C7BA5]">
                            MODES
                        </p>
                        <h2 className="mt-2 text-3xl font-bold">遊び方を選ぶ</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {modes.map((mode) => (
                            <div
                                key={mode.title}
                                className="rounded-3xl border border-[#E5EAF5] bg-white p-6 shadow-[0_12px_30px_rgba(11,30,75,0.06)]"
                            >
                                <h3 className="text-lg font-semibold">{mode.title}</h3>
                                <p className="mt-3 text-sm text-[#42507A]">{mode.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="text-sm font-medium tracking-[0.2em] text-[#6C7BA5]">
                                CONTENTS
                            </p>
                            <h2 className="mt-2 text-3xl font-bold">数学の気持ちよさ</h2>
                        </div>
                        <span className="rounded-full bg-[#E8FAF4] px-4 py-1 text-xs font-semibold text-[#1A7F6B]">
                            これから増える
                        </span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {contents.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-[#E5EAF5] bg-white p-6 shadow-[0_12px_30px_rgba(11,30,75,0.06)]"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    {item.soon ? (
                                        <span className="rounded-full bg-[#0B1E4B] px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white">
                                            COMING SOON
                                        </span>
                                    ) : null}
                                </div>
                                <p className="mt-3 text-sm text-[#42507A]">{item.meta}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-8">
                        <p className="text-sm font-medium tracking-[0.2em] text-[#6C7BA5]">
                            SCREENSHOT
                        </p>
                        <h2 className="mt-2 text-3xl font-bold">画面の流れ</h2>
                    </div>
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-2 text-sm text-[#0B1E4B]">
                        {screenshots.map((label) => (
                            <div
                                key={label}
                                className="w-[240px] shrink-0 snap-center rounded-3xl border border-[#E5EAF5] bg-gradient-to-br from-[#F8FAFF] to-[#E8FAF4] p-4 shadow-[0_12px_30px_rgba(11,30,75,0.06)]"
                            >
                                <div className="aspect-[9/16] w-full rounded-2xl bg-white/80 p-3">
                                    <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-[#C9D5EA] text-xs text-[#7B89AD]">
                                        {label}
                                    </div>
                                </div>
                                <div className="mt-3 text-xs text-[#6C7BA5]">
                                    スワイプでチェック
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-16 md:px-10">
                    <div className="mb-10">
                        <p className="text-sm font-medium tracking-[0.2em] text-[#6C7BA5]">
                            COMING SOON
                        </p>
                        <h2 className="mt-2 text-3xl font-bold">これから増える</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {comingSoon.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-[#E5EAF5] bg-white p-6 shadow-[0_12px_30px_rgba(11,30,75,0.06)]"
                            >
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-3 text-sm text-[#42507A]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-10">
                    <div className="rounded-3xl border border-[#D9E2F2] bg-gradient-to-br from-[#F7FAFF] to-[#E8FAF4] p-8 text-center md:p-12">
                        <h2 className="text-3xl font-extrabold">
                            無料で遊ぶ
                        </h2>
                        <p className="mt-3 text-sm text-[#42507A]">
                            ひらめきの気持ちよさを、今すぐ。
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <button className="rounded-full bg-[#0B1E4B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0B1E4B]/20">
                                今すぐ遊ぶ
                            </button>
                            <button className="rounded-full border border-[#D9E2F2] bg-white px-6 py-3 text-sm font-semibold text-[#0B1E4B]">
                                App Store
                            </button>
                            <button className="rounded-full border border-[#D9E2F2] bg-white px-6 py-3 text-sm font-semibold text-[#0B1E4B]">
                                Google Play
                            </button>
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-[#6C7BA5]">
                            <a className="hover:text-[#0B1E4B]" href="#">
                                X
                            </a>
                            <a className="hover:text-[#0B1E4B]" href="#">
                                TikTok
                            </a>
                            <a className="hover:text-[#0B1E4B]" href="#">
                                YouTube
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
})
export default Dashboard
