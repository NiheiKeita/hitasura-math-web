import React from 'react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'

const APP_STORE_URL =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%95%B0%E5%AD%A6/id6757374941'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.qboad.hitasura_math'

export const DifferentialVsIntegration = React.memo(function DifferentialVsIntegration() {
    return (
        <div
            className="min-h-screen bg-white text-[#64748B]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <SiteHeader appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />

            <main className="mx-auto max-w-4xl px-5 py-12 md:px-10 md:py-16">
                <nav className="text-xs font-semibold text-[#94A3B8]">
                    <a href="/articles" className="hover:text-[#1E3A8A]">
                        記事一覧
                    </a>
                    <span className="mx-2">/</span>
                    <span className="text-[#1E3A8A]">微分と積分の違い</span>
                </nav>

                <article className="article-content mt-6 space-y-10">
                    <header className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                            Differential vs Integration
                        </p>
                        <h1 className="text-3xl font-extrabold leading-[1.35] text-[#0F172A] md:text-5xl">
                            微分と積分の違いを完全解説｜高校数学でつまずかないための考え方
                        </h1>
                        <p className="text-base text-[#475569] md:text-lg">
                            微分と積分の違いを一言で整理し、使い分けのポイントをまとめました。判断に迷う人向けの基礎ガイドです。
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                微分 積分 違い
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                高校数学
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                使い分け
                            </span>
                        </div>
                    </header>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分と積分の違いが分からず困っていませんか？
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分と積分、何がどう違うのか説明できない</li>
                            <li>公式は覚えたけど意味が分からない</li>
                            <li>問題によって微分か積分か迷ってしまう</li>
                        </ul>
                        <p>
                            これは、とてもよくある悩みです。微分と積分は、高校数学の中でも
                            <strong>「ここで一気に分からなくなる」</strong>人が多い単元です。
                        </p>
                        <p>
                            でも安心してください。微分と積分の違いが分からない原因は、<strong>才能ではなく整理の仕方</strong>にあります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分と積分の違いを一言で言うと
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>微分：変化のしかたを見る</strong>
                            </li>
                            <li>
                                <strong>積分：全体の量を求める</strong>
                            </li>
                        </ul>
                        <p>
                            微分と積分は、正反対の操作ではありますが、実際には<strong>セットで使う考え方</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">微分とは何かを簡単に説明すると</h2>
                        <p>
                            微分とは、<strong>「今、この瞬間でどれくらい変化しているか」を調べること</strong>です。
                        </p>
                        <p>たとえば、関数 y = x² を考えます。</p>
                        <p>x が少し増えたとき、y がどれくらい増えるのか。</p>
                        <p>
                            この<strong>増え方の速さ（傾き）</strong>を求めるのが微分です。
                        </p>
                        <p>
                            微分をすると、グラフが上り坂か下り坂か・どれくらい急なのかが分かるようになります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">積分とは何かを簡単に説明すると</h2>
                        <p>
                            積分とは、<strong>変化のしかたが分かっているときに、元の量を求めること</strong>です。
                        </p>
                        <p>
                            もう少し具体的に言うと、微分は1つ1つの変化、積分はそれを全部足し合わせた結果という関係になります。
                        </p>
                        <p>
                            積分を使うと、グラフとx軸に囲まれた面積・全体の量や合計を求めることができます。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分と積分の関係をイメージで理解する
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                微分：<strong>細かく分けて変化を見る</strong>
                            </li>
                            <li>
                                積分：<strong>細かい変化を全部集める</strong>
                            </li>
                        </ul>
                        <p>
                            たとえるなら、微分はスピードメーター、積分は走った距離のような関係です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">微分と積分の使い分け方</h2>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">微分を使う問題の特徴</h3>
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>最大値・最小値を求める</li>
                                <li>グラフの傾きを調べる</li>
                                <li>増減を考える</li>
                            </ul>
                            <p>
                                <strong>変化を知りたいときは微分</strong>
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">積分を使う問題の特徴</h3>
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>面積を求める</li>
                                <li>全体の量を求める</li>
                                <li>累積した結果を考える</li>
                            </ul>
                            <p>
                                <strong>合計や全体量を知りたいときは積分</strong>
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分と積分でつまずく人の共通点
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>公式だけを暗記している</li>
                            <li>何を求めているのか考えていない</li>
                            <li>グラフの意味を意識していない</li>
                        </ul>
                        <p>
                            これは理解力の問題ではありません。<strong>考え方に慣れていないだけ</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分と積分は「反復」でしか身につかない
                        </h2>
                        <p>
                            微分も積分も、理解する・何度も解く・手が自然に動く、この流れで身につきます。
                        </p>
                        <p>
                            最初から完璧に理解しようとすると、必ず止まります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分と積分の勉強にはアプリ学習が向いている理由
                        </h2>
                        <p>
                            微分と積分は、問題数をこなす必要がある・同じ形を何度も解く必要があるという特徴があります。
                        </p>
                        <p>
                            そのため、すぐ問題に取りかかれる・短時間で反復できる<strong>アプリ学習との相性がとても良い</strong>分野です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            ひたすら数学は微分と積分の勉強にどう使う？
                        </h2>
                        <p>
                            ひたすら数学は、基本的な微分・積分問題をテンポよく繰り返し解けるように作られています。
                        </p>
                        <p>
                            目的は、<strong>微分か積分かを迷わず判断できる状態を作ること</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            まとめ｜微分と積分の違いで一番大切なこと
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分は変化を見る</li>
                            <li>積分は全体量を見る</li>
                            <li>2つはセットで考える</li>
                            <li>つまずく原因は練習不足</li>
                            <li>短時間×反復が近道</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">最後に</h2>
                        <p>
                            もし今、微分と積分の違いが分からない・問題を見るたびに迷ってしまうと感じているなら、必要なのは新しい説明ではなく
                            <strong>解く回数</strong>です。
                        </p>
                        <p>
                            まずは軽く、短く、微分と積分の問題をひたすら解くところから始めてみてください。
                        </p>
                    </section>

                    <section className="rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
                        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    Differential & Integration App
                                </p>
                                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                                    微分と積分の勉強を、アプリで続けよう
                                </h2>
                                <p className="mt-3 text-sm text-white/80 md:text-base">
                                    ひたすら数学なら、微分と積分をテンポよく反復できます。短時間で取り組めるので、
                                    毎日の学習習慣にもぴったりです。
                                </p>
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
                </article>
            </main>

            <WebFooter appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />
        </div>
    )
})

export default DifferentialVsIntegration
