import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'

export const GcdVsLcm = React.memo(function GcdVsLcm() {
    return (
        <ArticleLayout
            breadcrumbLabel="最大公約数と最小公倍数の違い"
            eyebrow="GCD vs LCM"
            title="最大公約数と最小公倍数の違いを完全解説"
            subtitle="中学数学で混乱しない考え方"
            description="最大公約数と最小公倍数の違いを整理し、使い分けのポイントを解説します。"
            tags={['最大公約数 最小公倍数 違い', '中学数学', '使い分け']}
        >
            <ArticleSection title="最大公約数と最小公倍数の違いが分からず困っていませんか？">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>最大公約数と最小公倍数、名前が似ていてごちゃごちゃになる</li>
                    <li>問題を見るたびに、どっちを求めるのか迷う</li>
                    <li>計算方法は覚えたけど意味が分からない</li>
                </ul>
                <p>
                    これは、とてもよくある悩みです。最大公約数と最小公倍数は、<strong>中学数学で必ず混乱しやすい組み合わせ</strong>です。
                </p>
                <p>
                    でも安心してください。違いが分からない原因は、<strong>才能ではなく整理の仕方</strong>にあります。
                </p>
            </ArticleSection>

            <ArticleSection title="最大公約数と最小公倍数の違いを一言で言うと">
                <p>まずは、これだけ覚えてください。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>
                        <strong>最大公約数：共通している中でいちばん大きい数</strong>
                    </li>
                    <li>
                        <strong>最小公倍数：両方がそろう中でいちばん小さい数</strong>
                    </li>
                </ul>
                <p>
                    ポイントは、<strong>「共通を見るのか」「全部をそろえるのか」</strong>この違いです。
                </p>
            </ArticleSection>

            <ArticleSection title="最大公約数とは何かを簡単に説明すると">
                <p>
                    最大公約数とは、<strong>2つ以上の数に共通する約数の中で、いちばん大きいもの</strong>です。
                </p>
                <p>たとえば、12 と 18 を考えてみましょう。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>12 の約数：1、2、3、4、6、12</li>
                    <li>18 の約数：1、2、3、6、9、18</li>
                </ul>
                <p>共通しているのは 1、2、3、6。この中でいちばん大きいのが<strong>6</strong>です。</p>
                <p>これが、12 と 18 の最大公約数です。</p>
            </ArticleSection>

            <ArticleSection title="最小公倍数とは何かを簡単に説明すると">
                <p>
                    最小公倍数とは、<strong>2つ以上の数の公倍数の中で、いちばん小さいもの</strong>です。
                </p>
                <p>同じく、12 と 18 を考えてみましょう。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>12 の倍数：12、24、36、48…</li>
                    <li>18 の倍数：18、36、54…</li>
                </ul>
                <p>両方に共通しているのは 36、72…。この中でいちばん小さいのが<strong>36</strong>です。</p>
                <p>これが、12 と 18 の最小公倍数です。</p>
            </ArticleSection>

            <ArticleSection title="最大公約数と最小公倍数の決定的な違い">
                <ArticleSubsection title="見ているものの違い">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>最大公約数：共通している部分</li>
                        <li>最小公倍数：全部がそろう形</li>
                    </ul>
                </ArticleSubsection>
                <ArticleSubsection title="使う場面の違い">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>最大公約数：分ける・整理する</li>
                        <li>最小公倍数：そろえる・合わせる</li>
                    </ul>
                </ArticleSubsection>
                <ArticleSubsection title="イメージの違い">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>最大公約数：共通部分を取り出す</li>
                        <li>最小公倍数：足りない分を補って集める</li>
                    </ul>
                </ArticleSubsection>
            </ArticleSection>

            <ArticleSection title="問題を見たときの見分け方">
                <p>迷ったら、次を考えてください。</p>
                <ArticleSubsection title="最大公約数を使う問題の特徴">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>同じ大きさに分けたい</li>
                        <li>余りなく配りたい</li>
                        <li>共通する数を探したい</li>
                    </ul>
                    <p>
                        <strong>分ける・共通を見るなら最大公約数</strong>
                    </p>
                </ArticleSubsection>
                <ArticleSubsection title="最小公倍数を使う問題の特徴">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>同じタイミングで起こる</li>
                        <li>周期がそろう</li>
                        <li>何回目で一致するか</li>
                    </ul>
                    <p>
                        <strong>そろえる・合わせるなら最小公倍数</strong>
                    </p>
                </ArticleSubsection>
            </ArticleSection>

            <ArticleSection title="なぜ最大公約数と最小公倍数で混乱するのか">
                <p>混乱する人の多くは、名前だけで覚えている・計算手順を暗記している・使う目的を考えていないという状態です。</p>
                <p>
                    これは理解力の問題ではありません。<strong>使い分けに慣れていないだけ</strong>です。
                </p>
            </ArticleSection>

            <ArticleSection title="最大公約数と最小公倍数の勉強法">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>まず素因数分解する</li>
                    <li>共通を見るか、全部集めるかを判断する</li>
                    <li>1回3〜5分、毎日反復する</li>
                </ul>
                <p>流れを何度も繰り返すことで、自然に判断できるようになります。</p>
            </ArticleSection>

            <ArticleSection title="この単元の勉強にはアプリ学習が向いている理由">
                <p>最大公約数と最小公倍数は、手順が決まっている・繰り返し練習が必要という特徴があります。</p>
                <p>
                    そのため、すぐ問題に取りかかれる・同じ流れを何度も確認できる<strong>アプリ学習との相性がとても良い</strong>単元です。
                </p>
            </ArticleSection>

            <ArticleSection title="ひたすら数学はどう使う？">
                <p>
                    ひたすら数学では、素因数分解・最大公約数・最小公倍数を<strong>同じ流れでテンポよく練習</strong>できます。
                </p>
                <p>
                    目的は、<strong>問題を見た瞬間に「どちらを求めるか」を迷わず判断できる状態を作ること</strong>です。
                </p>
            </ArticleSection>

            <ArticleSection title="まとめ｜最大公約数と最小公倍数の違いで一番大切なこと">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>最大公約数は共通部分</li>
                    <li>最小公倍数は全部をそろえる</li>
                    <li>名前ではなく目的で判断する</li>
                    <li>暗記より流れ</li>
                    <li>反復が近道</li>
                </ul>
            </ArticleSection>

            <ArticleSection title="最後に">
                <p>
                    もし今、最大公約数と最小公倍数がごちゃごちゃになる・問題を見るたびに迷ってしまうと感じているなら、必要なのは新しい公式ではなく
                    <strong>判断の回数</strong>です。
                </p>
                <p>
                    まずは軽く、短く、最大公約数と最小公倍数をひたすら見分ける練習から始めてみてください。
                </p>
            </ArticleSection>

            <ArticleCta
                eyebrow="GCD & LCM App"
                title="最大公約数と最小公倍数を、アプリで整理しよう"
                description="最大公約数と最小公倍数は現在開発中です（COMING SOON）。短時間で反復できる学習体験を準備しています。"
            />
        </ArticleLayout>
    )
})

export default GcdVsLcm
