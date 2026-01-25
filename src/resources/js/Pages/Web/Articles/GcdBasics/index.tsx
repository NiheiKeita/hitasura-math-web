import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'

export const GcdBasics = React.memo(function GcdBasics() {
    return (
        <ArticleLayout
            breadcrumbLabel="最大公約数とは"
            eyebrow="Greatest Common Divisor"
            title="最大公約数とは？意味・求め方・使い道までやさしく完全解説"
            subtitle="中学数学の基礎をやさしく整理"
            description="最大公約数の意味、求め方、使い道をわかりやすく解説します。"
            tags={['最大公約数', '中学数学', '求め方']}
        >
            <ArticleSection title="最大公約数とは何か分からず困っていませんか？">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>最大公約数って言葉の意味があいまい</li>
                    <li>求め方は習ったけど、なぜそうなるのか分からない</li>
                    <li>問題になると、最大公約数か最小公倍数か迷う</li>
                </ul>
                <p>
                    これは、とてもよくある悩みです。最大公約数は、<strong>中学数学の中でも最初につまずきやすい用語のひとつ</strong>です。
                </p>
                <p>
                    でも安心してください。最大公約数が分からない原因は、<strong>才能ではなく考え方の整理不足</strong>にあります。
                </p>
            </ArticleSection>

            <ArticleSection title="最大公約数とは？一言で説明すると">
                <p>
                    最大公約数とは、<strong>2つ以上の数に共通する約数の中で、いちばん大きい数</strong>のことです。
                </p>
                <p>ポイントは、公約数=共通している約数、最大=その中でいちばん大きい、という意味です。</p>
            </ArticleSection>

            <ArticleSection title="まず「約数」とは何かを確認しよう">
                <p>
                    最大公約数を理解するには、まず<strong>約数</strong>をはっきりさせる必要があります。
                </p>
                <p>約数とは、<strong>割り切れる数</strong>のことです。</p>
                <p>たとえば、12 の約数は 1、2、3、4、6、12 です。</p>
            </ArticleSection>

            <ArticleSection title="最大公約数の具体例">
                <p>12 と 18 の最大公約数を考えてみましょう。</p>
                <ArticleSubsection title="① それぞれの約数を書き出す">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>12 の約数：1、2、3、4、6、12</li>
                        <li>18 の約数：1、2、3、6、9、18</li>
                    </ul>
                </ArticleSubsection>
                <ArticleSubsection title="② 共通している約数を探す">
                    <p>共通しているのは 1、2、3、6 です。</p>
                </ArticleSubsection>
                <ArticleSubsection title="③ その中で一番大きいものを選ぶ">
                    <p>
                        最大公約数は<strong>6</strong>です。
                    </p>
                </ArticleSubsection>
            </ArticleSection>

            <ArticleSection title="素因数分解を使った最大公約数の求め方">
                <p>約数を書き出す方法が大変なときは、<strong>素因数分解</strong>を使うと楽になります。</p>
                <ArticleSubsection title="例：12 と 18">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>12 = 2 × 2 × 3</li>
                        <li>18 = 2 × 3 × 3</li>
                    </ul>
                </ArticleSubsection>
                <ArticleSubsection title="共通している部分を見る">
                    <p>両方にあるのは 2 と 3 なので、最大公約数は 2 × 3 = 6 です。</p>
                    <p>
                        <strong>共通している部分だけ取り出す</strong>、これが最大公約数の考え方です。
                    </p>
                </ArticleSubsection>
            </ArticleSection>

            <ArticleSection title="なぜ最大公約数を求めるのか">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>ものを同じ大きさに分ける</li>
                    <li>余りなく配る</li>
                    <li>分数を約分する</li>
                </ul>
                <p>
                    分数の約分では<strong>最大公約数で割る</strong>ことで、分数を一番簡単な形にできます。
                </p>
            </ArticleSection>

            <ArticleSection title="最大公約数を使う問題の特徴">
                <p>問題文に次のような言葉があったら、最大公約数を疑ってください。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>同じ大きさに分ける</li>
                    <li>余りなく分ける</li>
                    <li>共通する数を求める</li>
                </ul>
                <p>
                    <strong>「分ける」「共通」= 最大公約数</strong>
                </p>
            </ArticleSection>

            <ArticleSection title="なぜ最大公約数が苦手になるのか">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>手順だけを暗記している</li>
                    <li>意味を考えずに計算している</li>
                    <li>最小公倍数との違いがあいまい</li>
                </ul>
                <p>
                    これは理解力の問題ではありません。<strong>考え方の整理不足</strong>です。
                </p>
            </ArticleSection>

            <ArticleSection title="最大公約数の勉強法">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>まず素因数分解する</li>
                    <li>共通している部分を探す</li>
                    <li>1回3〜5分、毎日反復する</li>
                </ul>
                <p>流れを何度も繰り返すことで、自然に判断できるようになります。</p>
            </ArticleSection>

            <ArticleSection title="最大公約数の勉強にはアプリ学習が向いている理由">
                <p>最大公約数は、反復練習が必要・判断を素早くする必要があるという特徴があります。</p>
                <p>
                    そのため、すぐ問題に取りかかれる・短時間で何度も練習できる<strong>アプリ学習との相性がとても良い</strong>単元です。
                </p>
            </ArticleSection>

            <ArticleSection title="ひたすら数学は最大公約数の勉強にどう使う？">
                <p>
                    ひたすら数学では、素因数分解・最大公約数・分数の約分を<strong>同じ考え方でテンポよく練習</strong>できます。
                </p>
                <p>
                    目的は、<strong>問題を見た瞬間に最大公約数だと判断できる状態を作ること</strong>です。
                </p>
            </ArticleSection>

            <ArticleSection title="まとめ｜最大公約数で一番大切なこと">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>最大公約数は共通する約数の中で最大</li>
                    <li>素因数分解を使うと分かりやすい</li>
                    <li>「分ける」「共通」がキーワード</li>
                    <li>暗記より考え方</li>
                    <li>反復が近道</li>
                </ul>
            </ArticleSection>

            <ArticleSection title="最後に">
                <p>
                    もし今、最大公約数の意味があいまい・問題を見ると迷ってしまうと感じているなら、必要なのは新しい公式ではなく
                    <strong>考え方の反復</strong>です。
                </p>
                <p>まずは軽く、短く、最大公約数をひたすら求める練習から始めてみてください。</p>
            </ArticleSection>

            <ArticleCta
                eyebrow="GCD App"
                title="最大公約数を、アプリで身につけよう"
                description="最大公約数は現在開発中です（COMING SOON）。短時間で反復できる学習体験を準備しています。"
            />
        </ArticleLayout>
    )
})

export default GcdBasics
