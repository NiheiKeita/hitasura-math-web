import React from 'react'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'

const APP_STORE_URL =
    'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%95%B0%E5%AD%A6/id6757374941'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.qboad.hitasura_math'

export const DifferentialStudy = React.memo(function DifferentialStudy() {
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
                    <span className="text-[#1E3A8A]">微分の勉強法</span>
                </nav>

                <article className="article-content mt-6 space-y-10">
                    <header className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                            Differential Study Guide
                        </p>
                        <h1 className="text-3xl font-extrabold leading-[1.35] text-[#0F172A] md:text-5xl">
                            微分の勉強法まとめ｜アプリ学習で苦手を克服する完全ガイド
                        </h1>
                        <p className="text-base text-[#475569] md:text-lg">
                            微分の基本理解からつまずきポイントまでを整理。微分アプリで反復学習するメリットもまとめています。
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                微分 勉強
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                微分 アプリ
                            </span>
                            <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-[#0369A1]">
                                高校数学
                            </span>
                        </div>
                    </header>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分の勉強でつまずいていませんか？
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>公式は覚えたのに問題が解けない</li>
                            <li>何を求めているのか分からない</li>
                            <li>計算が合っているのか不安になる</li>
                        </ul>
                        <p>
                            これは、あなただけではありません。微分は、高校数学に入って最初に多くの人がつまずく単元です。
                        </p>
                        <p>
                            でも安心してください。微分が苦手になる原因は、<strong>才能ではなく勉強の順番とやり方</strong>にあります。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分とは？まずは意味を正しく理解しよう
                        </h2>
                        <p>
                            微分とは、<strong>変化のしかたを調べるための考え方</strong>です。
                        </p>
                        <p>
                            もう少し噛み砕くと、<strong>「今、この瞬間でどれくらい増えているか（減っているか）」</strong>を表します。
                        </p>
                        <p>たとえば、y = x² という関数を考えます。</p>
                        <p>
                            x が少し増えたとき、y がどれくらい増えるかを調べるのが微分です。
                        </p>
                        <p>
                            この結果を<strong>微分係数</strong>や<strong>導関数</strong>と呼びます。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            なぜ微分を勉強するのか（ここが一番大事）
                        </h2>
                        <p>「正直、何に使うの？」そう感じる人はとても多いです。</p>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">グラフの傾きを調べるため</h3>
                            <p>微分を使うと、グラフのある点での<strong>傾き</strong>が分かります。</p>
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>上り坂なのか</li>
                                <li>下り坂なのか</li>
                                <li>どれくらい急なのか</li>
                            </ul>
                            <p>これを数値で判断できるのが微分です。</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-[#0F172A]">最大値・最小値を求めるため</h3>
                            <p>
                                微分は、一番高いところ・一番低いところを見つけるときにも使います。
                            </p>
                            <p>
                                これは、物理・経済・工学など、あらゆる分野につながります。
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分で最初につまずきやすいポイント
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>公式の意味が分からないまま使っている</li>
                            <li>計算手順を丸暗記している</li>
                            <li>グラフと式が結びついていない</li>
                        </ul>
                        <p>
                            これらはすべて、<strong>理解不足ではなく「慣れ不足」</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分は「公式暗記」だけでは身につかない
                        </h2>
                        <p>
                            微分は、公式を覚えること自体が目的ではありません。
                        </p>
                        <p>
                            大切なのは、なぜその形になるのか・どんな変化を表しているのかをイメージしながら、
                            <strong>何度も手を動かすこと</strong>です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分の勉強法｜一番効果が出るやり方
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>1回3〜5分</li>
                            <li>毎日</li>
                            <li>正解率は気にしない</li>
                        </ul>
                        <p>
                            最初は、正しく微分できたか・形が合っているかだけを確認すれば十分です。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            微分の勉強にはアプリ学習が向いている理由
                        </h2>
                        <p>
                            微分の勉強には、問題集よりも<strong>アプリ学習</strong>が向いています。理由は次の通りです。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>問題を探す時間がいらない</li>
                            <li>短時間で始められる</li>
                            <li>同じタイプの問題を何度も解ける</li>
                            <li>計算ミスにすぐ気づける</li>
                        </ul>
                        <p>
                            微分は「理解」と「反復」を同時に進める必要があるため、<strong>微分アプリの方が学習効率が高くなりやすい</strong>のです。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            ひたすら数学は微分の勉強にどう使う？
                        </h2>
                        <p>
                            ひたすら数学は、基本的な微分問題をテンポよく繰り返し解けるように作られています。
                        </p>
                        <p>
                            目的は、<strong>「公式を見た瞬間に手が動く状態」を作ること</strong>です。
                        </p>
                        <p>
                            微分に苦手意識がある人ほど、負担なく続けられる設計になっています。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">微分は才能じゃない</h2>
                        <p>
                            微分が得意な人は、最初から理解できていたわけではありません。<strong>問題を解いた回数が多いだけ</strong>です。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>反復した人 → 慣れる</li>
                            <li>反復していない人 → 止まる</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            まとめ｜微分の勉強で一番大切なこと
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分は変化を見るための考え方</li>
                            <li>グラフとセットで理解する</li>
                            <li>つまずく原因は練習不足</li>
                            <li>勉強法は短時間×反復</li>
                            <li>アプリ学習と相性がいい</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">最後に</h2>
                        <p>
                            もし今、微分が苦手・何から勉強すればいいか分からないと感じているなら、必要なのは新しい説明ではなく「解く回数」です。
                        </p>
                        <p>
                            まずは軽く、短く、微分の問題をひたすら解くところから始めてみてください。
                        </p>
                    </section>

                    <section className="rounded-3xl bg-[#1E3A8A] px-6 py-10 text-white md:px-10">
                        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    Differential App
                                </p>
                                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                                    微分アプリで、毎日の勉強を続けよう
                                </h2>
                                <p className="mt-3 text-sm text-white/80 md:text-base">
                                    ひたすら数学なら、微分の問題をテンポよく反復できます。短時間で取り組めるので、
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

export default DifferentialStudy
