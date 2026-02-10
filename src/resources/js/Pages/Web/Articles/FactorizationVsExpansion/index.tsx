import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const FactorizationVsExpansion = React.memo(function FactorizationVsExpansion() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'Factorization vs Expansion' : '因数分解と式の展開の違い'}
            eyebrow="Factorization vs Expansion"
            title={
                isEn
                    ? 'Factorization vs Expansion: A Clear Explanation'
                    : '因数分解と式の展開の違いを完全解説'
            }
            subtitle={isEn ? 'How to avoid confusion in junior high math' : '中学数学で迷わなくなる考え方'}
            description={
                isEn
                    ? 'A one-sentence difference, how to tell them apart, and how to choose the right one.'
                    : '因数分解と式の展開の違いを一言で整理し、使い分けのポイントを解説。迷いやすい人向けの基礎ガイド。'
            }
            tags={isEn ? ['factorization vs expansion', 'junior high math', 'how to choose'] : ['因数分解 展開 違い', '中学数学', '使い分け']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Confused about factorization vs expansion?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>The names blur together</li>
                            <li>I’m not sure which one a problem wants</li>
                            <li>I memorized steps but not the meaning</li>
                        </ul>
                        <p>It’s common. The fix is to organize the purpose.</p>
                    </ArticleSection>

                    <ArticleSection title="The one-sentence difference">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>Factorization: turn a sum into a product</strong>
                            </li>
                            <li>
                                <strong>Expansion: turn a product into a sum</strong>
                            </li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Factorization example">
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            x<sup>2</sup> + 5x = x(x + 5)
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Expansion example">
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            (x + 2)(x + 3) = x<sup>2</sup> + 5x + 6
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to decide in problems">
                        <ArticleSubsection title="If the expression is already a product">
                            <p>You likely need expansion.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="If the expression is a sum">
                            <p>You likely need factorization.</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Why people get confused">
                        <p>Most confusion comes from memorizing steps without the direction of the operation.</p>
                    </ArticleSection>

                    <ArticleSection title="Summary">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Factorization: sum → product</li>
                            <li>Expansion: product → sum</li>
                            <li>Decide by the form you see</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Factorization App"
                        title="Learn the difference with the app"
                        description="Factorization and expansion practice are currently in development (COMING SOON)."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="因数分解と式の展開で迷っていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>名前が似ていてごちゃごちゃになる</li>
                            <li>問題を見るたびにどっちを使うか迷う</li>
                            <li>手順は覚えたけど意味が分からない</li>
                        </ul>
                        <p>
                            これはとてもよくある悩みです。因数分解と式の展開は中学数学で必ず混乱しやすい組み合わせです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="因数分解と式の展開の違いを一言で言うと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>因数分解：足し算の式をかけ算に戻す</strong>
                            </li>
                            <li>
                                <strong>展開：かけ算の式を足し算に広げる</strong>
                            </li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="因数分解の例">
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            x<sup>2</sup> + 5x = x(x + 5)
                        </p>
                    </ArticleSection>

                    <ArticleSection title="展開の例">
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            (x + 2)(x + 3) = x<sup>2</sup> + 5x + 6
                        </p>
                    </ArticleSection>

                    <ArticleSection title="問題を見たときの見分け方">
                        <ArticleSubsection title="すでにかけ算の形なら">
                            <p>展開です。</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="足し算の形なら">
                            <p>因数分解です。</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="なぜ混乱するのか">
                        <p>
                            方向を意識せずに暗記している人が多いからです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜因数分解と展開で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>因数分解は足し算→かけ算</li>
                            <li>展開はかけ算→足し算</li>
                            <li>式の形で判断する</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Factorization App"
                        title="因数分解と展開を、アプリで整理しよう"
                        description="因数分解と展開は現在開発中です（COMING SOON）。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default FactorizationVsExpansion
