import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const LcmBasics = React.memo(function LcmBasics() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'What Is the LCM?' : '最小公倍数とは'}
            eyebrow="Least Common Multiple"
            title={
                isEn
                    ? 'What Is the LCM? Meaning, How to Find It, and Uses'
                    : '最小公倍数とは？意味・求め方・使い道までやさしく完全解説'
            }
            subtitle={isEn ? 'Clear basics for junior high math' : '中学数学の基礎をやさしく整理'}
            description={
                isEn
                    ? 'A clear explanation of what the LCM is, how to find it, and where it is used.'
                    : '最小公倍数の意味、求め方、使い道をわかりやすく解説します。'
            }
            tags={isEn ? ['LCM', 'Junior high math', 'How to find it'] : ['最小公倍数', '中学数学', '求め方']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Stuck on what the LCM is?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>The term feels vague</li>
                            <li>I memorized the steps, but not the reason</li>
                            <li>The difference from the GCD gets mixed up</li>
                        </ul>
                        <p>
                            This is very common. The LCM is <strong>often memorized without understanding</strong> in junior
                            high math.
                        </p>
                        <p>
                            But don’t worry. The issue isn’t talent — it’s simply <strong>not organizing the idea</strong>
                            clearly.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="What is the LCM? In one sentence">
                        <p>
                            The LCM is <strong>the smallest number that is a multiple of all the given numbers</strong>.
                        </p>
                        <p>
                            “Common multiple” means a multiple shared by the numbers, and “least” means the smallest of
                            those.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="First, what is a multiple?">
                        <p>
                            To understand the LCM, you need to be clear about <strong>multiples</strong>.
                        </p>
                        <p>A multiple is a number made by multiplying by an integer.</p>
                        <p>For example, multiples of 6 are 6, 12, 18, 24, 30, and so on.</p>
                    </ArticleSection>

                    <ArticleSection title="A concrete example">
                        <p>Let’s find the LCM of 12 and 18.</p>
                        <ArticleSubsection title="1) List the multiples">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>Multiples of 12: 12, 24, 36, 48…</li>
                                <li>Multiples of 18: 18, 36, 54…</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="2) Find the common multiples">
                            <p>Common multiples include 36, 72, and so on.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="3) Pick the least">
                            <p>
                                The LCM is <strong>36</strong>.
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Using prime factorization to find the LCM">
                        <p>
                            Listing multiples can be tedious, so <strong>prime factorization</strong> is often easier.
                        </p>
                        <ArticleSubsection title="Example: 12 and 18">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>12 = 2 × 2 × 3</li>
                                <li>18 = 2 × 3 × 3</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="Collect all required prime factors">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>Two 2s</li>
                                <li>Two 3s</li>
                            </ul>
                            <p>So the LCM is 2 × 2 × 3 × 3 = 36.</p>
                            <p>
                                <strong>Gather everything you need, including the extras</strong> — that’s the key idea of
                                the LCM.
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Why do we find the LCM?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Find when cycles line up</li>
                            <li>Find a common denominator</li>
                            <li>Count how often events coincide</li>
                        </ul>
                        <p>
                            Especially in fraction calculations, you use the LCM to <strong>match denominators</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Clues that a problem uses the LCM">
                        <p>If the problem says things like these, think “LCM.”</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>At the same time</li>
                            <li>When they line up</li>
                            <li>Cycle/period</li>
                            <li>Match denominators</li>
                        </ul>
                        <p>
                            <strong>“Line up” or “match” = LCM.</strong>
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Why the LCM feels difficult">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Memorizing steps without meaning</li>
                            <li>Not clear on the difference from the GCD</li>
                            <li>Calculating without a purpose</li>
                        </ul>
                        <p>This isn’t about ability. It’s about <strong>organizing the idea</strong>.</p>
                    </ArticleSection>

                    <ArticleSection title="How to study the LCM">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Start with prime factorization</li>
                            <li>Collect all necessary factors</li>
                            <li>Repeat for 3–5 minutes a day</li>
                        </ul>
                        <p>Repeating the flow makes it automatic.</p>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works well">
                        <p>The LCM is easy to misjudge and needs repetition.</p>
                        <p>
                            That’s why <strong>app practice is a perfect fit</strong>: you can jump in fast and repeat often
                            in short bursts.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to use Hitasura Math for the LCM">
                        <p>
                            Hitasura Math lets you practice prime factorization, the LCM, and common denominators
                            <strong>with the same core idea and a steady rhythm</strong>.
                        </p>
                        <p>
                            The goal is to <strong>recognize “this is an LCM problem” at a glance</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Summary: the most important points">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>The LCM is the least shared multiple</li>
                            <li>Prime factorization makes it easier</li>
                            <li>“Line up” and “match” are key clues</li>
                            <li>Understanding beats memorization</li>
                            <li>Repetition is the shortcut</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Final note">
                        <p>
                            If the LCM still feels fuzzy or you hesitate in problems, you don’t need a new formula — you
                            need <strong>repetition of the idea</strong>.
                        </p>
                        <p>Start small and practice short, focused LCM problems daily.</p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="LCM App"
                        title="Learn the LCM with the app"
                        description="LCM practice is currently in development (COMING SOON). We’re building a fast, repeatable learning experience."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="最小公倍数とは何か分からず困っていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>最小公倍数って言葉の意味があいまい</li>
                            <li>求め方は覚えたけど、なぜそうなるのか分からない</li>
                            <li>最大公約数との違いがごちゃごちゃになる</li>
                        </ul>
                        <p>
                            これは、とてもよくある悩みです。最小公倍数は、<strong>中学数学の中でも意味を理解しないまま暗記されがちな単元</strong>です。
                        </p>
                        <p>
                            でも安心してください。最小公倍数が分からない原因は、<strong>才能ではなく考え方の整理不足</strong>にあります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="最小公倍数とは？一言で説明すると">
                        <p>
                            最小公倍数とは、<strong>2つ以上の数の公倍数の中で、いちばん小さい数</strong>のことです。
                        </p>
                        <p>ポイントは、公倍数=両方の数の倍数、最小=その中でいちばん小さい、という意味です。</p>
                    </ArticleSection>

                    <ArticleSection title="まず「倍数」とは何かを確認しよう">
                        <p>
                            最小公倍数を理解するには、まず<strong>倍数</strong>をはっきりさせる必要があります。
                        </p>
                        <p>倍数とは、<strong>ある数に整数をかけてできる数</strong>です。</p>
                        <p>たとえば、6 の倍数は 6、12、18、24、30… となります。</p>
                    </ArticleSection>

                    <ArticleSection title="最小公倍数の具体例">
                        <p>12 と 18 の最小公倍数を考えてみましょう。</p>
                        <ArticleSubsection title="① それぞれの倍数を書き出す">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>12 の倍数：12、24、36、48…</li>
                                <li>18 の倍数：18、36、54…</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="② 共通している倍数を探す">
                            <p>共通しているのは 36、72… です。</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="③ その中で一番小さいものを選ぶ">
                            <p>
                                最小公倍数は<strong>36</strong>です。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="素因数分解を使った最小公倍数の求め方">
                        <p>倍数を書き出すのが大変なときは、<strong>素因数分解</strong>を使うと楽になります。</p>
                        <ArticleSubsection title="例：12 と 18">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>12 = 2 × 2 × 3</li>
                                <li>18 = 2 × 3 × 3</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="必要な素因数をすべてそろえる">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>2 は 2個</li>
                                <li>3 は 3個</li>
                            </ul>
                            <p>そろえると、最小公倍数は 2 × 2 × 3 × 3 = 36 です。</p>
                            <p>
                                <strong>足りない分を補って全部集める</strong>、これが最小公倍数の考え方です。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="なぜ最小公倍数を求めるのか">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>周期がそろうタイミングを求める</li>
                            <li>分数の通分</li>
                            <li>同時に起こる回数を考える</li>
                        </ul>
                        <p>
                            特に分数の計算では、<strong>分母をそろえるために最小公倍数</strong>を使います。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="最小公倍数を使う問題の特徴">
                        <p>問題文に次のような言葉があったら、最小公倍数を疑ってください。</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>同時に</li>
                            <li>何回目でそろう</li>
                            <li>周期</li>
                            <li>分母をそろえる</li>
                        </ul>
                        <p>
                            <strong>「そろえる」「合わせる」= 最小公倍数</strong>
                        </p>
                    </ArticleSection>

                    <ArticleSection title="なぜ最小公倍数が苦手になるのか">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>手順だけを暗記している</li>
                            <li>最大公約数との違いがあいまい</li>
                            <li>目的を考えずに計算している</li>
                        </ul>
                        <p>
                            これは理解力の問題ではありません。<strong>考え方の整理不足</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="最小公倍数の勉強法">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>まず素因数分解する</li>
                            <li>必要な素因数をすべてそろえる</li>
                            <li>1回3〜5分、毎日反復する</li>
                        </ul>
                        <p>流れを何度も繰り返すことで、自然に判断できるようになります。</p>
                    </ArticleSection>

                    <ArticleSection title="最小公倍数の勉強にはアプリ学習が向いている理由">
                        <p>最小公倍数は、判断ミスが起きやすい・反復練習が必要という特徴があります。</p>
                        <p>
                            そのため、すぐ問題に取りかかれる・短時間で何度も練習できる<strong>アプリ学習との相性がとても良い</strong>単元です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="ひたすら数学は最小公倍数の勉強にどう使う？">
                        <p>
                            ひたすら数学では、素因数分解・最小公倍数・分数の通分を<strong>同じ考え方でテンポよく練習</strong>できます。
                        </p>
                        <p>
                            目的は、<strong>問題を見た瞬間に最小公倍数だと判断できる状態を作ること</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜最小公倍数で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>最小公倍数は公倍数の中で最小</li>
                            <li>素因数分解で考えると分かりやすい</li>
                            <li>「そろえる」「合わせる」がキーワード</li>
                            <li>暗記より考え方</li>
                            <li>反復が近道</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="最後に">
                        <p>
                            もし今、最小公倍数の意味があいまい・問題を見ると迷ってしまうと感じているなら、必要なのは新しい公式ではなく
                            <strong>考え方の反復</strong>です。
                        </p>
                        <p>まずは軽く、短く、最小公倍数をひたすら求める練習から始めてみてください。</p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="LCM App"
                        title="最小公倍数を、アプリで身につけよう"
                        description="最小公倍数は現在開発中です（COMING SOON）。短時間で反復できる学習体験を準備しています。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default LcmBasics
