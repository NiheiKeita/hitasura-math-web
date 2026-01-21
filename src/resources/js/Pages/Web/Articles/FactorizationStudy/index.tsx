import React from 'react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'

const APP_STORE_URL =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%95%B0%E5%AD%A6/id6757374941'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.qboad.hitasura_math'

export const FactorizationStudy = React.memo(function FactorizationStudy() {
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
                    <span className="text-[#1E3A8A]">因数分解の勉強法</span>
                </nav>

                <article className="article-content mt-6 space-y-10">
                    <header className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                            Factorization Study Guide
                        </p>
                        <h1 className="text-3xl font-extrabold leading-[1.35] text-[#0F172A] md:text-5xl">
                            因数分解の勉強法まとめ｜アプリ学習で苦手を克服する完全ガイド
                        </h1>
                        <p className="text-base text-[#475569] md:text-lg">
                            因数分解の勉強に悩む中学生向けに、つまずきの原因から具体的な勉強法までを整理。
                            因数分解アプリを使った反復学習のメリットも解説します。
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                因数分解 勉強
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                因数分解 アプリ
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                中学数学
                            </span>
                        </div>
                    </header>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            因数分解の勉強でつまずいていませんか？
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>因数分解のやり方は習ったはずなのに解けない</li>
                            <li>どこから手をつけていいかわからない</li>
                            <li>テストになると時間が足りない</li>
                        </ul>
                        <p>
                            これは、あなただけではありません。因数分解は中学数学の中でも特につまずきやすい単元です。
                        </p>
                        <p>
                            でも安心してください。因数分解が苦手な原因は、才能ではなく「勉強のやり方」にあります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            因数分解とは？まずは意味を正しく理解しよう
                        </h2>
                        <p>
                            因数分解とは、足し算や引き算で書かれた式を「かけ算の形」に戻すことです。
                        </p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            x<sup>2</sup> + 5x
                            <br />
                            x × x + x × 5
                            <br />
                            x(x + 5)
                        </p>
                        <p>
                            新しいことをしているわけではなく、<strong>元に戻しているだけ</strong>。この感覚をつかむことがとても重要です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            なぜ因数分解を勉強するのか（ここが一番大事）
                        </h2>
                        <p>「正直、テストのためだけじゃないの？」そう思われがちですが、因数分解にははっきりした目的があります。</p>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">方程式を解くため</h3>
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> + 5x = 0
                                <br />
                                x(x + 5) = 0
                                <br />
                                x = 0 / x = -5
                            </p>
                            <p>
                                高校数学では、因数分解ができないと先に進めない場面が一気に増えます。
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">グラフの形を理解するため</h3>
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                y = x(x - 2)
                                <br />
                                x = 0 / x = 2
                            </p>
                            <p>
                                因数分解の形で見れば、グラフがx軸と交わる位置がすぐ判断できます。
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            中学生がまず覚えるべき因数分解のパターン
                        </h2>
                        <p>
                            因数分解は、全部を一気に覚えようとすると失敗します。順番がとても大切です。
                        </p>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">共通因数でくくる（最重要）</h3>
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                2x + 4
                                <br />
                                2(x + 2)
                            </p>
                            <p>
                                因数分解で迷ったら、まず「くくれないか」を疑ってください。中学範囲の多くは、この形から始まります。
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">x<sup>2</sup> + ax + b 型</h3>
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> + 5x + 6
                                <br />
                                (x + 2)(x + 3)
                            </p>
                            <p>
                                「足して 5」「かけて 6」になる2つの数を探すのがポイントです。
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">公式（平方差など）</h3>
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> - 9
                                <br />
                                (x + 3)(x - 3)
                            </p>
                            <p>
                                暗記が必要ですが、使う頻度はそこまで高くありません。
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            因数分解の勉強がうまくいかない理由
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>毎回考えすぎてしまう</li>
                            <li>公式を丸暗記しようとする</li>
                            <li>問題数が圧倒的に足りない</li>
                        </ul>
                        <p>
                            これは理解力の問題ではありません。<strong>勉強量と勉強方法の問題</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            「わかる」と「できる」はまったく別
                        </h2>
                        <p>
                            解説を読んで「なるほど」と思っても、何も見ずに解けない・解くのに時間がかかる状態ではテストで使えません。
                        </p>
                        <p>
                            因数分解は、<strong>見て理解する勉強ではなく、手を動かす勉強</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            因数分解の勉強法｜一番効果が出るやり方
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>1回3〜5分</li>
                            <li>毎日</li>
                            <li>正解率は気にしない</li>
                        </ul>
                        <p>
                            長時間まとめてやるよりも、短時間で何度も解くほうが圧倒的に効果があります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            因数分解の勉強にはアプリ学習が向いている理由
                        </h2>
                        <p>因数分解の勉強には、問題集よりもアプリ学習が向いています。理由はとてもシンプルです。</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>すぐ始められる</li>
                            <li>丸付けが不要</li>
                            <li>同じパターンを何度も解ける</li>
                            <li>間違えてもストレスが少ない</li>
                        </ul>
                        <p>
                            因数分解は「理解」よりも「反復」が重要な分野です。そのため、因数分解アプリの方が勉強量を確保しやすくなります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            ひたすら数学は因数分解の勉強にどう使う？
                        </h2>
                        <p>
                            ひたすら数学は、初歩レベルの因数分解をテンポよく無限に解けるように作られています。
                        </p>
                        <p>
                            目的は、<strong>考える前に手が動く状態を作ること</strong>です。問題集で挫折した人ほど、効果を実感しやすい設計です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">因数分解は才能じゃない</h2>
                        <p>
                            因数分解が速い人は、頭が良いわけではありません。<strong>見た回数が多いだけ</strong>です。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>反復した人 → 速くなる</li>
                            <li>反復していない人 → 止まる</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            まとめ｜因数分解の勉強で一番大切なこと
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>因数分解は元に戻す操作</li>
                            <li>目的は方程式とグラフ</li>
                            <li>つまずく原因は練習不足</li>
                            <li>勉強法は短時間×反復</li>
                            <li>アプリ学習と相性がいい</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">最後に</h2>
                        <p>
                            もし今、因数分解が苦手・勉強しても身につかないと感じているなら、必要なのは新しい説明ではなく「解く回数」です。
                        </p>
                        <p>
                            まずは軽く、短く、ひたすら解くところから始めてみてください。
                        </p>
                    </section>

                    <section className="rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
                        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    Factorization App
                                </p>
                                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                                    因数分解アプリで、毎日の勉強を続けよう
                                </h2>
                                <p className="mt-3 text-sm text-white/80 md:text-base">
                                    ひたすら数学なら、因数分解の問題をテンポよく反復できます。短時間で
                                    取り組めるので、毎日の学習習慣にもぴったりです。
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

export default FactorizationStudy
