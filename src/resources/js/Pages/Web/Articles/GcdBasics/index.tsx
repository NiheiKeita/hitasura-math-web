import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const GcdBasics = React.memo(function GcdBasics() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'What Is the GCD?' : '最大公約数とは'}
            eyebrow="Greatest Common Divisor"
            title={
                isEn
                    ? 'What Is the GCD? Meaning, How to Find It, and Uses'
                    : '最大公約数とは？意味・求め方・使い道までやさしく完全解説'
            }
            subtitle={isEn ? 'Clear basics for junior high math' : '中学数学の基礎をやさしく整理'}
            description={
                isEn
                    ? 'A clear explanation of what the GCD is, how to find it, and where it is used.'
                    : '最大公約数の意味、求め方、使い道をわかりやすく解説します。'
            }
            tags={isEn ? ['GCD', 'Junior high math', 'How to find it'] : ['最大公約数', '中学数学', '求め方']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Stuck on what the GCD is?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>The term feels vague</li>
                            <li>I learned the steps, but I don’t know why they work</li>
                            <li>I hesitate between GCD and LCM in word problems</li>
                        </ul>
                        <p>
                            This is very common. The GCD is <strong>one of the first terms students stumble on</strong> in
                            junior high math.
                        </p>
                        <p>
                            But don’t worry. The problem isn’t talent — it’s simply <strong>not organizing the idea</strong>
                            clearly.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="What is the GCD? In one sentence">
                        <p>
                            The GCD is <strong>the largest number that divides all the given numbers</strong>.
                        </p>
                        <p>
                            “Common divisor” means a divisor shared by the numbers, and “greatest” means the largest of
                            those.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="First, what is a divisor?">
                        <p>
                            To understand the GCD, you need to be clear about <strong>divisors</strong>.
                        </p>
                        <p>A divisor is a number that divides evenly.</p>
                        <p>For example, the divisors of 12 are 1, 2, 3, 4, 6, and 12.</p>
                    </ArticleSection>

                    <ArticleSection title="A concrete example">
                        <p>Let’s find the GCD of 12 and 18.</p>
                        <ArticleSubsection title="1) List the divisors">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>Divisors of 12: 1, 2, 3, 4, 6, 12</li>
                                <li>Divisors of 18: 1, 2, 3, 6, 9, 18</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="2) Find the common divisors">
                            <p>The common divisors are 1, 2, 3, and 6.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="3) Pick the greatest">
                            <p>
                                The GCD is <strong>6</strong>.
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Using prime factorization to find the GCD">
                        <p>
                            Listing all divisors can be tedious, so <strong>prime factorization</strong> is often easier.
                        </p>
                        <ArticleSubsection title="Example: 12 and 18">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>12 = 2 × 2 × 3</li>
                                <li>18 = 2 × 3 × 3</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="Take only the common factors">
                            <p>They share 2 and 3, so the GCD is 2 × 3 = 6.</p>
                            <p>
                                <strong>Keep only what they have in common</strong> — that’s the key idea of the GCD.
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Why do we find the GCD?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Split items into equal sizes</li>
                            <li>Distribute without leftovers</li>
                            <li>Reduce fractions</li>
                        </ul>
                        <p>
                            When reducing fractions, you <strong>divide by the GCD</strong> to get the simplest form.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Clues that a problem uses the GCD">
                        <p>If you see words like these, think “GCD.”</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Split into the same size</li>
                            <li>Divide with no remainder</li>
                            <li>Find a common number</li>
                        </ul>
                        <p>
                            <strong>“Split” or “common” = GCD.</strong>
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Why the GCD feels difficult">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Memorizing steps without meaning</li>
                            <li>Calculating without understanding</li>
                            <li>Not being clear about the difference from LCM</li>
                        </ul>
                        <p>This isn’t about ability. It’s about <strong>organizing the idea</strong>.</p>
                    </ArticleSection>

                    <ArticleSection title="How to study the GCD">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Start with prime factorization</li>
                            <li>Look for only the common factors</li>
                            <li>Repeat for 3–5 minutes a day</li>
                        </ul>
                        <p>Repeating the flow makes it automatic.</p>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works well">
                        <p>The GCD needs quick judgment and repetition.</p>
                        <p>
                            That’s why <strong>app practice is a perfect fit</strong>: you can jump in fast and repeat often
                            in short bursts.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to use Hitasura Math for the GCD">
                        <p>
                            Hitasura Math lets you practice prime factorization, the GCD, and fraction reduction
                            <strong>with the same core idea and a steady rhythm</strong>.
                        </p>
                        <p>
                            The goal is to <strong>recognize “this is a GCD problem” at a glance</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Summary: the most important points">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>The GCD is the greatest shared divisor</li>
                            <li>Prime factorization makes it easier</li>
                            <li>“Split” and “common” are key clues</li>
                            <li>Understanding beats memorization</li>
                            <li>Repetition is the shortcut</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Final note">
                        <p>
                            If the GCD still feels fuzzy or you hesitate in problems, you don’t need a new formula — you
                            need <strong>repetition of the idea</strong>.
                        </p>
                        <p>Start small and practice short, focused GCD problems daily.</p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="GCD App"
                        title="Learn the GCD with the app"
                        description="GCD practice is currently in development (COMING SOON). We’re building a fast, repeatable learning experience."
                    />
                </>
            ) : (
                <>
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
                </>
            )}
        </ArticleLayout>
    )
})

export default GcdBasics
