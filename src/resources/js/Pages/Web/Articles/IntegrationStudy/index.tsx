import React from 'react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'

const APP_STORE_URL =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%95%B0%E5%AD%A6/id6757374941'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.qboad.hitasura_math'

export const IntegrationStudy = React.memo(function IntegrationStudy() {
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
                    <span className="text-[#1E3A8A]">積分の勉強法</span>
                </nav>

                <article className="article-content mt-6 space-y-10">
                    <header className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                            Integration Study Guide
                        </p>
                        <h1 className="text-3xl font-extrabold leading-[1.35] text-[#0F172A] md:text-5xl">
                            積分の勉強法まとめ｜アプリ学習で苦手を克服する完全ガイド
                        </h1>
                        <p className="text-base text-[#475569] md:text-lg">
                            積分の基礎理解からつまずきポイントまでを整理。積分アプリで反復学習するメリットもまとめています。
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                積分 勉強
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                積分 アプリ
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                高校数学
                            </span>
                        </div>
                    </header>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            積分の勉強でつまずいていませんか？
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分はなんとなく分かるのに、積分になると手が止まる</li>
                            <li>公式は覚えたはずなのに使い分けができない</li>
                            <li>何を求めている計算なのか分からない</li>
                        </ul>
                        <p>
                            これは、あなただけではありません。積分は、高校数学の中でも
                            <strong>「急に難しくなった」と感じやすい単元</strong>です。
                        </p>
                        <p>
                            でも安心してください。積分が苦手になる原因は、<strong>才能ではなく勉強の進め方</strong>にあります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            積分とは？まずは意味を正しく理解しよう
                        </h2>
                        <p>
                            積分とは、<strong>微分の逆の操作</strong>です。
                        </p>
                        <p>
                            もう少し噛み砕くと、<strong>変化のしかた（微分）から、元の形を復元する考え方</strong>です。
                        </p>
                        <p>たとえば、y = 2x という関数を微分すると、傾きは一定になります。</p>
                        <p>
                            積分では、この逆に<strong>「傾きが分かっている状態から、元の関数を求める」</strong>ことを行います。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            なぜ積分を勉強するのか（ここが一番大事）
                        </h2>
                        <p>「これ、何に使うの？」そう思われがちですが、積分にははっきりした役割があります。</p>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">面積を求めるため</h3>
                            <p>
                                積分を使うと、グラフとx軸に囲まれた部分の<strong>面積</strong>を求めることができます。
                            </p>
                            <p>
                                これは、物理（移動距離）・経済（累積量）・工学など、さまざまな分野につながります。
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">微分とセットで使うため</h3>
                            <p>
                                高校数学では、微分で「変化」を見る・積分で「全体量」を見るというセットで使われます。
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            積分で最初につまずきやすいポイント
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分との関係があいまい</li>
                            <li>定数Cの意味が分からない</li>
                            <li>計算手順を暗記しているだけ</li>
                        </ul>
                        <p>
                            これらはすべて、<strong>理解不足ではなく慣れ不足</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            積分は「意味」と「計算」を分けて考える
                        </h2>
                        <p>
                            積分を勉強するときは、積分が何を表しているのか・計算としてどう解くのか、この2つを分けて考えるのがコツです。
                        </p>
                        <p>
                            最初は、正しい形に積分できているかだけを確認すれば十分です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            積分の勉強法｜一番効果が出るやり方
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>1回3〜5分</li>
                            <li>毎日</li>
                            <li>正解率は気にしない</li>
                        </ul>
                        <p>
                            積分は計算量が多くなりがちなので、<strong>短時間で区切って反復する</strong>ことがとても重要です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            積分の勉強にはアプリ学習が向いている理由
                        </h2>
                        <p>
                            積分の勉強には、問題集よりも<strong>アプリ学習</strong>が向いています。理由は次の通りです。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>問題を探す時間がいらない</li>
                            <li>途中計算の確認がしやすい</li>
                            <li>同じタイプの問題を何度も解ける</li>
                            <li>ミスしてもすぐやり直せる</li>
                        </ul>
                        <p>
                            積分は「理解」と「計算練習」を同時に進める必要があるため、<strong>積分アプリの方が学習効率が高くなりやすい</strong>のです。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            ひたすら数学は積分の勉強にどう使う？
                        </h2>
                        <p>
                            ひたすら数学は、基本的な積分問題をテンポよく繰り返し解けるように作られています。
                        </p>
                        <p>
                            目的は、<strong>「積分の形を見た瞬間に手が動く状態」を作ること</strong>です。
                        </p>
                        <p>
                            積分に苦手意識がある人ほど、無理なく続けやすい設計になっています。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">積分は才能じゃない</h2>
                        <p>
                            積分が得意な人は、最初から理解できていたわけではありません。<strong>問題を解いた回数が多いだけ</strong>です。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>反復した人 → 慣れる</li>
                            <li>反復していない人 → 手が止まる</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            まとめ｜積分の勉強で一番大切なこと
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>積分は微分の逆</li>
                            <li>面積や全体量を求める考え方</li>
                            <li>つまずく原因は練習不足</li>
                            <li>勉強法は短時間×反復</li>
                            <li>アプリ学習と相性がいい</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">最後に</h2>
                        <p>
                            もし今、積分が苦手・何から勉強すればいいか分からないと感じているなら、必要なのは新しい説明ではなく「解く回数」です。
                        </p>
                        <p>
                            まずは軽く、短く、積分の問題をひたすら解くところから始めてみてください。
                        </p>
                    </section>

                    <section className="rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
                        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    Integration App
                                </p>
                                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                                    積分アプリで、毎日の勉強を続けよう
                                </h2>
                                <p className="mt-3 text-sm text-white/80 md:text-base">
                                    ひたすら数学なら、積分の問題をテンポよく反復できます。短時間で取り組めるので、
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

export default IntegrationStudy
