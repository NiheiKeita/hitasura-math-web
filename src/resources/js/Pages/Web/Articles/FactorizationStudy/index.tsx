import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const FactorizationStudy = React.memo(function FactorizationStudy() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'How to Study Factorization' : '因数分解の勉強法'}
            eyebrow="Factorization Study Guide"
            title={isEn ? 'How to Study Factorization' : '因数分解の勉強法まとめ'}
            subtitle={
                isEn
                    ? 'A complete guide to overcoming weak points with app practice'
                    : 'アプリ学習で苦手を克服する完全ガイド'
            }
            description={
                isEn
                    ? 'For junior high students struggling with factorization, this guide covers why it feels hard, how to study, and why app repetition helps.'
                    : '因数分解の勉強に悩む中学生向けに、つまずきの原因から具体的な勉強法までを整理。因数分解アプリを使った反復学習のメリットも解説します。'
            }
            tags={isEn ? ['factorization study', 'factorization app', 'junior high math'] : ['因数分解 勉強', '因数分解 アプリ', '中学数学']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Stuck on factorization?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>I learned the method, but I still can’t solve problems</li>
                            <li>I don’t know where to start</li>
                            <li>I run out of time on tests</li>
                        </ul>
                        <p>It’s not just you. Factorization is one of the most common stumbling points in junior high.</p>
                        <p>The issue isn’t talent — it’s the study method.</p>
                    </ArticleSection>

                    <ArticleSection title="What is factorization?">
                        <p>
                            Factorization is turning a sum or difference back into a <strong>multiplication form</strong>.
                        </p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            x<sup>2</sup> + 5x
                            <br />
                            x × x + x × 5
                            <br />
                            x(x + 5)
                        </p>
                        <p>
                            You’re not doing something new — you’re <strong>reversing the expansion</strong>. That intuition
                            matters.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Why study factorization (this matters most)">
                        <p>It’s not just for tests. Factorization has clear purposes.</p>
                        <ArticleSubsection title="To solve equations">
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> + 5x = 0
                                <br />
                                x(x + 5) = 0
                                <br />
                                x = 0 / x = -5
                            </p>
                            <p>In high school math, many topics depend on being able to factor.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="To understand graphs">
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                y = x(x - 2)
                                <br />
                                x = 0 / x = 2
                            </p>
                            <p>Factored form lets you see x-intercepts immediately.</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Factorization patterns to learn first">
                        <p>Don’t try to memorize everything at once. Order matters.</p>
                        <ArticleSubsection title="1) Factor out a common factor (most important)">
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                2x + 4
                                <br />
                                2(x + 2)
                            </p>
                            <p>When you’re stuck, first ask: “Can I factor something out?”</p>
                        </ArticleSubsection>
                        <ArticleSubsection title={<span>x<sup>2</sup> + ax + b form</span>}>
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> + 5x + 6
                                <br />
                                (x + 2)(x + 3)
                            </p>
                            <p>Find two numbers that add to 5 and multiply to 6.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="3) Formulas (difference of squares, etc.)">
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> - 9
                                <br />
                                (x + 3)(x - 3)
                            </p>
                            <p>Requires memorization, but shows up less often than the first two.</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Why factorization study often fails">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Overthinking every problem</li>
                            <li>Trying to memorize formulas without practice</li>
                            <li>Not enough problems solved</li>
                        </ul>
                        <p>This is not about ability — it’s about volume and method.</p>
                    </ArticleSection>

                    <ArticleSection title="Understanding vs. being able to do it">
                        <p>
                            “I get it” and “I can solve it quickly” are different. You need repetition to turn
                            understanding into speed.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to study factorization effectively">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Start by checking for a common factor</li>
                            <li>Then check the x<sup>2</sup> + ax + b pattern</li>
                            <li>Only then use formulas</li>
                            <li>Repeat short sessions daily</li>
                        </ul>
                        <p>Short, daily repetition beats long, infrequent study sessions.</p>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works well">
                        <p>Factorization needs pattern recognition and repetition.</p>
                        <p>
                            That’s why <strong>app practice is a perfect fit</strong>: you can solve many short problems and
                            reinforce the same patterns quickly.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to use Hitasura Math">
                        <p>
                            Hitasura Math lets you practice factorization in short bursts. The goal is to build the habit
                            of instantly seeing the pattern.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Summary: the most important points">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Factorization is reversing expansion</li>
                            <li>Start with common factors</li>
                            <li>Memorization alone isn’t enough</li>
                            <li>Short repetition builds speed</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Factorization App"
                        title="Make factorization a habit with the app"
                        description="Factorization practice is currently in development (COMING SOON). We’re building a fast, repeatable learning experience."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="因数分解の勉強でつまずいていませんか？">
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
                    </ArticleSection>

                    <ArticleSection title="因数分解とは？まずは意味を正しく理解しよう">
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
                    </ArticleSection>

                    <ArticleSection title="なぜ因数分解を勉強するのか（ここが一番大事）">
                        <p>「正直、テストのためだけじゃないの？」そう思われがちですが、因数分解にははっきりした目的があります。</p>
                        <ArticleSubsection title="方程式を解くため">
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
                        </ArticleSubsection>
                        <ArticleSubsection title="グラフの形を理解するため">
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                y = x(x - 2)
                                <br />
                                x = 0 / x = 2
                            </p>
                            <p>
                                因数分解の形で見れば、グラフがx軸と交わる位置がすぐ判断できます。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="中学生がまず覚えるべき因数分解のパターン">
                        <p>
                            因数分解は、全部を一気に覚えようとすると失敗します。順番がとても大切です。
                        </p>
                        <ArticleSubsection title="共通因数でくくる（最重要）">
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                2x + 4
                                <br />
                                2(x + 2)
                            </p>
                            <p>
                                因数分解で迷ったら、まず「くくれないか」を疑ってください。中学範囲の多くは、この形から始まります。
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title={<span>x<sup>2</sup> + ax + b 型</span>}>
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> + 5x + 6
                                <br />
                                (x + 2)(x + 3)
                            </p>
                            <p>
                                「足して 5」「かけて 6」になる2つの数を探すのがポイントです。
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="公式（平方差など）">
                            <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                                x<sup>2</sup> - 9
                                <br />
                                (x + 3)(x - 3)
                            </p>
                            <p>
                                暗記が必要ですが、使う頻度はそこまで高くありません。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="因数分解の勉強がうまくいかない理由">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>毎回考えすぎてしまう</li>
                            <li>公式を丸暗記しようとする</li>
                            <li>問題数が圧倒的に足りない</li>
                        </ul>
                        <p>
                            これは理解力の問題ではありません。<strong>勉強量と勉強方法の問題</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="「わかる」と「できる」はまったく別">
                        <p>
                            因数分解は「わかる」だけでは意味がありません。「自分で手が動く」状態にすることが大切です。
                        </p>
                        <p>
                            つまり、<strong>反復練習で体に覚えさせる</strong>必要があります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="因数分解の勉強法（具体的な流れ）">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>まず共通因数でくくれるか考える</li>
                            <li>次に x<sup>2</sup> + ax + b 型を疑う</li>
                            <li>最後に公式（平方差など）を使う</li>
                            <li>1回3〜5分、毎日反復する</li>
                        </ul>
                        <p>短い時間でいいので、毎日繰り返すことが最大の近道です。</p>
                    </ArticleSection>

                    <ArticleSection title="因数分解の勉強にはアプリ学習が向いている理由">
                        <p>因数分解は、判断スピードと反復回数が必要な単元です。</p>
                        <p>
                            だからこそ、すぐ取り組める・短時間で何度も解ける<strong>アプリ学習との相性が抜群</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="ひたすら数学は因数分解の勉強にどう使う？">
                        <p>
                            ひたすら数学では、因数分解を「短い問題」でテンポよく反復できます。
                        </p>
                        <p>
                            目的は、<strong>因数分解の流れを自動化すること</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜因数分解の勉強で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>因数分解は「元に戻す」作業</li>
                            <li>まず共通因数でくくる</li>
                            <li>丸暗記より反復</li>
                            <li>短時間でも毎日続ける</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Factorization App"
                        title="因数分解の勉強を、アプリで習慣に"
                        description="因数分解は現在開発中です（COMING SOON）。短時間で反復できる学習体験を準備しています。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default FactorizationStudy
