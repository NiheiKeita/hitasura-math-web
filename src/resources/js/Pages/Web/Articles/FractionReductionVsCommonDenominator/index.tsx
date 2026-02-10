import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const FractionReductionVsCommonDenominator = React.memo(function FractionReductionVsCommonDenominator() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'Reducing Fractions vs Common Denominators' : '分数の約分と通分の考え方'}
            eyebrow="Fraction Reduction vs Common Denominator"
            title={
                isEn
                    ? 'Reducing Fractions vs Common Denominators: A Clear Explanation'
                    : '分数の約分と通分の考え方を完全解説'
            }
            subtitle={isEn ? 'Clear fundamentals for junior high math' : '中学数学で迷わなくなる基本整理'}
            description={
                isEn
                    ? 'We organize the difference between reducing and finding common denominators, and how GCD/LCM connects.'
                    : '分数の約分と通分の違いを整理し、最大公約数・最小公倍数との関係も解説します。'
            }
            tags={isEn ? ['reducing fractions', 'common denominators', 'junior high math'] : ['約分 通分 違い', '分数 計算', '中学数学']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Stuck on reducing vs common denominators?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>I don’t know which one to use</li>
                            <li>I can calculate, but the meaning is fuzzy</li>
                            <li>I’m unsure how it connects to GCD/LCM</li>
                        </ul>
                        <p>
                            This is very common. Reducing and finding common denominators are <strong>core hurdles</strong>
                            in junior high fraction math.
                        </p>
                        <p>
                            But don’t worry. The issue isn’t talent — it’s simply <strong>not organizing the ideas</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="The one-sentence difference">
                        <p>Remember this:</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>Reducing: simplify the fraction</strong>
                            </li>
                            <li>
                                <strong>Common denominators: match the fraction forms</strong>
                            </li>
                        </ul>
                        <p>The purpose is completely different.</p>
                    </ArticleSection>

                    <ArticleSection title="What is reducing fractions?">
                        <p>
                            Reducing means <strong>dividing numerator and denominator by the same number</strong> to simplify.
                        </p>
                        <p>For example, 12 / 18 becomes 2 / 3 because 12 ÷ 6 = 2 and 18 ÷ 6 = 3.</p>
                        <p>
                            That 6 is the <strong>GCD</strong> of 12 and 18.
                        </p>
                        <p>
                            Think of reducing as <strong>dividing by the GCD</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Why reduce fractions?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>To make fractions easier to read</li>
                            <li>To reduce calculation mistakes</li>
                            <li>To present the correct final answer</li>
                        </ul>
                        <p>If you don’t reduce, the answer can be marked incorrect even if the value is right.</p>
                    </ArticleSection>

                    <ArticleSection title="What is a common denominator?">
                        <p>
                            Finding a common denominator means <strong>making denominators the same</strong>.
                        </p>
                        <p>For example, to add 1 / 4 and 1 / 6, you can’t add them directly.</p>
                        <p>
                            The <strong>LCM</strong> of 4 and 6 is 12, so 1 / 4 = 3 / 12 and 1 / 6 = 2 / 12.
                        </p>
                        <p>Then you can add: 3 / 12 + 2 / 12 = 5 / 12.</p>
                        <p>
                            Think of common denominators as <strong>using the LCM to match denominators</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="The decisive differences">
                        <ArticleSubsection title="Purpose">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>Reducing: make it smaller and simpler</li>
                                <li>Common denominators: make it match for calculation</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="The number you use">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>Reducing: GCD</li>
                                <li>Common denominators: LCM</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="Direction of the operation">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>Reducing: make it smaller</li>
                                <li>Common denominators: temporarily make it bigger</li>
                            </ul>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Why people get confused">
                        <p>
                            Most confusion comes from memorizing steps, not understanding GCD/LCM, and not thinking about
                            the purpose.
                        </p>
                        <p>
                            It’s not about ability — it’s simply <strong>lack of organization</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to decide when you see a problem">
                        <ArticleSubsection title="Use reducing when…">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>You want the final answer in simplest form</li>
                                <li>You want to make a fraction smaller</li>
                            </ul>
                            <p>
                                <strong>Make it smaller → reduce.</strong>
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="Use common denominators when…">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>You are adding or subtracting fractions</li>
                                <li>The denominators are different</li>
                            </ul>
                            <p>
                                <strong>Make them match → common denominator.</strong>
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="How to study this topic">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Keep GCD and LCM in mind</li>
                            <li>Decide: reduce or match</li>
                            <li>Repeat for 3–5 minutes a day</li>
                        </ul>
                        <p>Repeating the flow makes the decision automatic.</p>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works well">
                        <p>Reducing and matching denominators are error-prone and need repetition.</p>
                        <p>
                            That’s why <strong>app practice is a perfect fit</strong>: you can solve the same patterns
                            quickly and often.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to use Hitasura Math">
                        <p>
                            Hitasura Math lets you practice reducing, common denominators, and fraction calculations
                            <strong>with the same core idea and rhythm</strong>.
                        </p>
                        <p>
                            The goal is to <strong>decide instantly: reduce or match?</strong>
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Summary: the most important points">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Reducing simplifies a fraction</li>
                            <li>Common denominators match denominators</li>
                            <li>Reducing uses the GCD</li>
                            <li>Common denominators use the LCM</li>
                            <li>Understanding beats memorization</li>
                            <li>Repetition is the shortcut</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Final note">
                        <p>
                            If you still mix them up, you don’t need a new formula — you need more <strong>decision reps</strong>.
                        </p>
                        <p>Start small and practice choosing between the two quickly and often.</p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Fractions App"
                        title="Learn reducing and common denominators with the app"
                        description="Reducing and common denominators are currently in development (COMING SOON). We’re building a fast, repeatable learning experience."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="分数の約分と通分でつまずいていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>約分と通分、どっちを使うのか分からなくなる</li>
                            <li>計算はできるけど、意味がよく分からない</li>
                            <li>最大公約数や最小公倍数とどう関係しているのか不安</li>
                        </ul>
                        <p>
                            これは、とてもよくある悩みです。分数の約分と通分は、<strong>中学数学の計算分野で必ず通る壁</strong>です。
                        </p>
                        <p>
                            でも安心してください。分からなくなる原因は、<strong>才能ではなく考え方の整理不足</strong>にあります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="約分と通分の違いを一言で言うと">
                        <p>まずは、これだけ覚えてください。</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>約分：分数を小さく整理する</strong>
                            </li>
                            <li>
                                <strong>通分：分数の形をそろえる</strong>
                            </li>
                        </ul>
                        <p>目的がまったく違います。</p>
                    </ArticleSection>

                    <ArticleSection title="約分とは何かを簡単に説明すると">
                        <p>
                            約分とは、<strong>分子と分母を同じ数で割って、分数を簡単な形にすること</strong>です。
                        </p>
                        <p>たとえば、12 / 18 という分数は、12 ÷ 6 = 2、18 ÷ 6 = 3 なので、2 / 3 になります。</p>
                        <p>
                            このとき使った 6 は、12 と 18 の<strong>最大公約数</strong>です。
                        </p>
                        <p>
                            <strong>約分は最大公約数で割る操作</strong>と考えると分かりやすくなります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="なぜ約分をするのか">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>分数を見やすくするため</li>
                            <li>計算ミスを減らすため</li>
                            <li>正しい答えとして整理するため</li>
                        </ul>
                        <p>約分しないと、答えが正しくても「不正解」になることがあります。</p>
                    </ArticleSection>

                    <ArticleSection title="通分とは何かを簡単に説明すると">
                        <p>
                            通分とは、<strong>分母が違う分数の分母をそろえること</strong>です。
                        </p>
                        <p>たとえば、1 / 4 と 1 / 6 を足したいとき、そのままでは計算できません。</p>
                        <p>4 と 6 の<strong>最小公倍数</strong>は 12 なので、1 / 4 = 3 / 12、1 / 6 = 2 / 12 となります。</p>
                        <p>これで 3 / 12 + 2 / 12 = 5 / 12 と計算できます。</p>
                        <p>
                            <strong>通分は最小公倍数を使って分母をそろえる操作</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="約分と通分の決定的な違い">
                        <ArticleSubsection title="目的の違い">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>約分：小さく、シンプルにする</li>
                                <li>通分：形をそろえて計算できるようにする</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="使う数の違い">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>約分：最大公約数</li>
                                <li>通分：最小公倍数</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="操作の方向">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>約分：小さくする</li>
                                <li>通分：一時的に大きくする</li>
                            </ul>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="なぜ約分と通分で混乱するのか">
                        <p>
                            混乱する人の多くは、手順だけを暗記している・最大公約数/最小公倍数との関係を理解していない・「何のためにやっているか」を考えていないという状態です。
                        </p>
                        <p>
                            これは理解力の問題ではありません。<strong>整理不足なだけ</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="問題を見たときの判断方法">
                        <ArticleSubsection title="約分を使う場面">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>答えを整理するとき</li>
                                <li>分数を簡単にしたいとき</li>
                            </ul>
                            <p>
                                <strong>小さくするなら約分</strong>
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="通分を使う場面">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>分数を足し算・引き算するとき</li>
                                <li>分母がそろっていないとき</li>
                            </ul>
                            <p>
                                <strong>そろえるなら通分</strong>
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="分数の約分・通分の勉強法">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>まず最大公約数・最小公倍数を意識する</li>
                            <li>約分か通分かを判断する</li>
                            <li>1回3〜5分、毎日反復する</li>
                        </ul>
                        <p>流れを何度も確認することで、自然に判断できるようになります。</p>
                    </ArticleSection>

                    <ArticleSection title="分数の計算にはアプリ学習が向いている理由">
                        <p>分数の約分と通分は、ミスが起きやすい・反復練習が必要という特徴があります。</p>
                        <p>
                            そのため、すぐ問題に取りかかれる・同じパターンを何度も解ける<strong>アプリ学習との相性がとても良い</strong>分野です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="ひたすら数学は分数の約分・通分にどう使う？">
                        <p>
                            ひたすら数学では、約分・通分・分数の計算を<strong>同じ考え方でテンポよく練習</strong>できます。
                        </p>
                        <p>
                            目的は、<strong>問題を見た瞬間に「約分か通分か」を迷わず判断できる状態を作ること</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜分数の約分と通分で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>約分は分数を小さく整理する</li>
                            <li>通分は分母をそろえる</li>
                            <li>約分は最大公約数</li>
                            <li>通分は最小公倍数</li>
                            <li>暗記より考え方</li>
                            <li>反復が近道</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="最後に">
                        <p>
                            もし今、約分と通分がごちゃごちゃになる・分数の計算が苦手と感じているなら、必要なのは新しい公式ではなく
                            <strong>判断の回数</strong>です。
                        </p>
                        <p>
                            まずは軽く、短く、分数の約分と通分をひたすら使い分ける練習から始めてみてください。
                        </p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Fractions App"
                        title="分数の約分と通分を、アプリで身につけよう"
                        description="約分と通分は現在開発中です（COMING SOON）。短時間で反復できる学習体験を準備しています。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default FractionReductionVsCommonDenominator
