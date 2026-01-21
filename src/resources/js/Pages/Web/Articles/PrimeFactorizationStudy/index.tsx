import React from 'react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'

const APP_STORE_URL =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%95%B0%E5%AD%A6/id6757374941'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.qboad.hitasura_math'

export const PrimeFactorizationStudy = React.memo(function PrimeFactorizationStudy() {
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
                    <span className="text-[#1E3A8A]">素因数分解の勉強法</span>
                </nav>

                <article className="article-content mt-6 space-y-10">
                    <header className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                            Prime Factorization Study Guide
                        </p>
                        <h1 className="text-3xl font-extrabold leading-[1.35] text-[#0F172A] md:text-5xl">
                            素因数分解の勉強法まとめ｜アプリ学習で基礎を固める完全ガイド
                        </h1>
                        <p className="text-base text-[#475569] md:text-lg">
                            素因数分解の勉強でつまずく原因と、短時間で繰り返し練習する方法を整理。
                            素因数分解アプリを使った反復学習の効果もまとめました。
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                素因数分解 勉強
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                素因数分解 アプリ
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                中学数学
                            </span>
                        </div>
                    </header>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            素因数分解の勉強でつまずいていませんか？
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>どこから割ればいいかわからない</li>
                            <li>途中でミスして答えが合わない</li>
                            <li>計算に時間がかかりすぎる</li>
                        </ul>
                        <p>
                            これは、あなただけではありません。素因数分解は、中学数学の中でも「最初につまずきやすい単元」です。
                        </p>
                        <p>
                            でも安心してください。素因数分解が苦手な原因は、<strong>才能ではなく勉強のやり方</strong>にあります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            素因数分解とは？まずは意味を正しく理解しよう
                        </h2>
                        <p>
                            素因数分解とは、<strong>ある数を素数だけのかけ算で表すこと</strong>です。
                        </p>
                        <p>例として、60を考えてみましょう。</p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            60 = 2 × 2 × 3 × 5
                        </p>
                        <p>
                            このように、<strong>2・3・5 といった素数だけで表すこと</strong>が素因数分解です。
                        </p>
                        <p>
                            ポイントは、<strong>1や合成数は使わない</strong>ということです。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            なぜ素因数分解を勉強するのか（ここが一番大事）
                        </h2>
                        <p>「正直、これ何に使うの？」そう感じる人も多いですが、素因数分解はとても重要です。</p>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">最大公約数・最小公倍数につながる</h3>
                            <p>
                                最大公約数や最小公倍数は、素因数分解ができないと理解できません。
                            </p>
                            <p>
                                素因数分解は、<strong>中学数学の計算分野すべての土台</strong>になっています。
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">分数の計算が楽になる</h3>
                            <p>
                                分数を約分するときも、実は頭の中で素因数分解をしています。
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            素因数分解の基本的なやり方
                        </h2>
                        <p>基本の流れは、とてもシンプルです。</p>
                        <ol className="list-inside list-decimal space-y-2 text-[#475569]">
                            <li>小さい素数から割る</li>
                            <li>割れなくなったら次の素数</li>
                            <li>最後まで素数になったら終了</li>
                        </ol>
                        <p>例：60 の場合</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>60 は偶数 → 2で割る</li>
                            <li>30 も偶数 → 2で割る</li>
                            <li>15 は 3 で割れる</li>
                            <li>5 は素数</li>
                        </ul>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            60 = 2 × 2 × 3 × 5
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">素因数分解でよくあるミス</h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>いきなり大きな数で割ろうとする</li>
                            <li>割れるかどうかを毎回考えすぎる</li>
                            <li>途中で計算ミスに気づけない</li>
                        </ul>
                        <p>
                            これは理解力の問題ではありません。<strong>慣れと反復の問題</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            「わかる」と「できる」はまったく別
                        </h2>
                        <p>
                            解説を読んで「なるほど、わかった」と思っても、スムーズに手が動かない・計算に時間がかかる状態ではテストで使えません。
                        </p>
                        <p>
                            素因数分解は、<strong>見て覚える勉強ではなく、手を動かして慣れる勉強</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            素因数分解の勉強法｜一番効果が出るやり方
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>1回3〜5分</li>
                            <li>毎日</li>
                            <li>正解率は気にしない</li>
                        </ul>
                        <p>
                            大事なのは、<strong>短時間で何度も解くこと</strong>です。長時間まとめてやる必要はありません。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            素因数分解の勉強にはアプリ学習が向いている理由
                        </h2>
                        <p>素因数分解の勉強には、問題集よりもアプリ学習が向いています。理由は次の通りです。</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>すぐに問題を解き始められる</li>
                            <li>丸付けが不要</li>
                            <li>同じタイプの問題を何度も解ける</li>
                            <li>間違えてもやり直しやすい</li>
                        </ul>
                        <p>
                            素因数分解は「理解」よりも「反復」が重要なので、<strong>素因数分解アプリの方が勉強量を確保しやすい</strong>のです。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            ひたすら数学は素因数分解の勉強にどう使う？
                        </h2>
                        <p>
                            ひたすら数学は、初歩レベルの素因数分解をテンポよく無限に解けるように作られています。
                        </p>
                        <p>
                            目的は、<strong>考える前に手が動く状態を作ること</strong>です。問題集で挫折した人ほど、無理なく続けやすい設計になっています。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">素因数分解は才能じゃない</h2>
                        <p>
                            素因数分解が速い人は、頭が良いからではありません。<strong>見た回数が多いだけ</strong>です。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>反復した人 → 速くなる</li>
                            <li>反復していない人 → 手が止まる</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            まとめ｜素因数分解の勉強で一番大切なこと
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>素因数分解は素数に分ける操作</li>
                            <li>中学数学の基礎中の基礎</li>
                            <li>つまずく原因は練習不足</li>
                            <li>勉強法は短時間×反復</li>
                            <li>アプリ学習と相性がいい</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">最後に</h2>
                        <p>
                            もし今、素因数分解が苦手・勉強しても身につかないと感じているなら、必要なのは新しい説明ではなく「解く回数」です。
                        </p>
                        <p>
                            まずは軽く、短く、素因数分解をひたすら解くところから始めてみてください。
                        </p>
                    </section>

                    <section className="rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
                        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    Prime Factorization App
                                </p>
                                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                                    素因数分解アプリで、毎日の勉強を続けよう
                                </h2>
                                <p className="mt-3 text-sm text-white/80 md:text-base">
                                    ひたすら数学なら、素因数分解の問題をテンポよく反復できます。短時間で
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

export default PrimeFactorizationStudy
