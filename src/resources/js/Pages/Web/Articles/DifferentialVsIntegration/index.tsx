import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const DifferentialVsIntegration = React.memo(function DifferentialVsIntegration() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'Differentiation vs Integration' : '微分と積分の違い'}
            eyebrow="Differentiation vs Integration"
            title={
                isEn
                    ? 'Differentiation vs Integration: A Clear Explanation'
                    : '微分と積分の違いを完全解説'
            }
            subtitle={isEn ? 'How to avoid confusion in high school math' : '高校数学でつまずかないための考え方'}
            description={
                isEn
                    ? 'A one-sentence difference, plus how to choose the right tool in problems.'
                    : '微分と積分の違いを一言で整理し、使い分けのポイントを解説。判断に迷う人向けの基礎ガイド。'
            }
            tags={isEn ? ['differentiation vs integration', 'high school math', 'how to choose'] : ['微分 積分 違い', '高校数学', '使い分け']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Confused about differentiation vs integration?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>The names sound similar and blur together</li>
                            <li>I hesitate about which one to use</li>
                            <li>I memorized formulas but don’t get the meaning</li>
                        </ul>
                        <p>This confusion is common. The fix is to organize the purpose.</p>
                    </ArticleSection>

                    <ArticleSection title="The one-sentence difference">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>Differentiation: how fast it changes (instant change)</strong>
                            </li>
                            <li>
                                <strong>Integration: total change (accumulation)</strong>
                            </li>
                        </ul>
                        <p>The key is whether you’re measuring a moment or a total.</p>
                    </ArticleSection>

                    <ArticleSection title="Differentiation in a nutshell">
                        <p>Differentiation tells you the slope or rate at a specific point.</p>
                    </ArticleSection>

                    <ArticleSection title="Integration in a nutshell">
                        <p>Integration tells you the total over an interval (like area or distance).</p>
                    </ArticleSection>

                    <ArticleSection title="How to decide in problems">
                        <ArticleSubsection title="Use differentiation when…">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>You want a slope or rate</li>
                                <li>You want max/min points</li>
                                <li>You need instantaneous change</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="Use integration when…">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>You want total amount</li>
                                <li>You want area or distance</li>
                                <li>You need accumulated change</li>
                            </ul>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Why people get confused">
                        <p>Most confusion comes from memorizing formulas without understanding the purpose.</p>
                    </ArticleSection>

                    <ArticleSection title="How to study them">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Understand the meaning first</li>
                            <li>Memorize the minimal rules</li>
                            <li>Repeat short drills daily</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Calculus App"
                        title="Build calculus intuition with the app"
                        description="Differentiation and integration practice are currently in development (COMING SOON)."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="微分と積分の違いが分からず迷っていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>名前が似ていてごちゃごちゃになる</li>
                            <li>問題を見るたびにどっちを使うか迷う</li>
                            <li>公式は覚えたけど意味が分からない</li>
                        </ul>
                        <p>
                            これはとてもよくある悩みです。微分と積分は高校数学で必ず混乱しやすい組み合わせです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="微分と積分の違いを一言で言うと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>微分：今この瞬間の変化の速さ</strong>
                            </li>
                            <li>
                                <strong>積分：変化の積み重ね</strong>
                            </li>
                        </ul>
                        <p>
                            「瞬間を見るのか」「全体を足し合わせるのか」この違いがポイントです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="微分とは何かを簡単に説明すると">
                        <p>
                            微分は、グラフの傾きや変化の速さを求める考え方です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分とは何かを簡単に説明すると">
                        <p>
                            積分は、面積や移動距離など「積み重ねた量」を求める考え方です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="問題を見たときの使い分け">
                        <ArticleSubsection title="微分を使う問題の特徴">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>グラフの傾き</li>
                                <li>速度や変化の速さ</li>
                                <li>最大値・最小値</li>
                            </ul>
                        </ArticleSubsection>
                        <ArticleSubsection title="積分を使う問題の特徴">
                            <ul className="list-inside list-disc space-y-2 text-[#475569]">
                                <li>面積</li>
                                <li>移動距離</li>
                                <li>累積量</li>
                            </ul>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="なぜ混乱するのか">
                        <p>
                            多くの人は公式だけ暗記しているため、意味や目的が整理されていません。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="勉強法">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>まず意味を理解する</li>
                            <li>最小限の公式を覚える</li>
                            <li>短時間で毎日反復する</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Calculus App"
                        title="微分と積分を、アプリで整理しよう"
                        description="微分と積分は現在開発中です（COMING SOON）。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default DifferentialVsIntegration
