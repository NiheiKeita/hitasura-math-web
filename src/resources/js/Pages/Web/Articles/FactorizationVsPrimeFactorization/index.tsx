import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const FactorizationVsPrimeFactorization = React.memo(function FactorizationVsPrimeFactorization() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'Factorization vs Prime Factorization' : '因数分解と素因数分解の違い'}
            eyebrow="Factorization vs Prime Factorization"
            title={
                isEn
                    ? 'Factorization vs Prime Factorization: A Clear Explanation'
                    : '因数分解と素因数分解の違いを完全解説'
            }
            subtitle={isEn ? 'How to avoid confusion in junior high math' : '中学数学で混乱しないための整理'}
            description={
                isEn
                    ? 'A one-sentence difference, how to tell them apart, and how to choose the right one.'
                    : '因数分解と素因数分解の違いを一言で整理し、見分け方や使い分けを解説。混乱しやすい人向けの基礎ガイド。'
            }
            tags={isEn ? ['factorization vs prime factorization', 'junior high math', 'how to choose'] : ['因数分解 素因数分解 違い', '中学数学', '使い分け']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Confused about factorization vs prime factorization?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>The names are similar and easy to mix up</li>
                            <li>I’m not sure which one a problem is asking for</li>
                            <li>I memorized the steps but not the meaning</li>
                        </ul>
                        <p>It’s common. The fix is to organize the purpose.</p>
                    </ArticleSection>

                    <ArticleSection title="The one-sentence difference">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>Factorization: rewrite an expression as a product</strong>
                            </li>
                            <li>
                                <strong>Prime factorization: rewrite a number as primes only</strong>
                            </li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Factorization in a nutshell">
                        <p>
                            Factorization turns sums/differences into multiplication form.
                        </p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            x<sup>2</sup> + 5x = x(x + 5)
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Prime factorization in a nutshell">
                        <p>
                            Prime factorization expresses a number as primes only.
                        </p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">60 = 2 × 2 × 3 × 5</p>
                    </ArticleSection>

                    <ArticleSection title="How to decide in problems">
                        <ArticleSubsection title="If it’s an expression with x">
                            <p>That’s factorization.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="If it’s a single number">
                            <p>That’s prime factorization.</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Why people get confused">
                        <p>Most confusion comes from memorizing names instead of meaning.</p>
                    </ArticleSection>

                    <ArticleSection title="Summary">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Factorization: expression → product</li>
                            <li>Prime factorization: number → primes</li>
                            <li>Decide by what is given (expression vs number)</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Factorization App"
                        title="Learn the difference with the app"
                        description="Factorization and prime factorization practice are currently in development (COMING SOON)."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="因数分解と素因数分解の違いで混乱していませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>名前が似ていてごちゃごちゃになる</li>
                            <li>問題を見るたびにどっちなのか迷う</li>
                            <li>手順は覚えたけど意味が分からない</li>
                        </ul>
                        <p>
                            これはとてもよくある悩みです。因数分解と素因数分解は中学数学で必ず混乱しやすい組み合わせです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="因数分解と素因数分解の違いを一言で言うと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>
                                <strong>因数分解：式をかけ算の形に戻す</strong>
                            </li>
                            <li>
                                <strong>素因数分解：数を素数のかけ算だけで表す</strong>
                            </li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="因数分解とは何かを簡単に説明すると">
                        <p>
                            因数分解は、足し算や引き算で書かれた式を「かけ算の形」に戻すことです。
                        </p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            x<sup>2</sup> + 5x = x(x + 5)
                        </p>
                    </ArticleSection>

                    <ArticleSection title="素因数分解とは何かを簡単に説明すると">
                        <p>
                            素因数分解は、ある数を素数だけのかけ算で表すことです。
                        </p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            60 = 2 × 2 × 3 × 5
                        </p>
                    </ArticleSection>

                    <ArticleSection title="問題を見たときの見分け方">
                        <ArticleSubsection title="式が出てきたら">
                            <p>それは因数分解です。</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="数字だけが出てきたら">
                            <p>それは素因数分解です。</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="なぜ混乱するのか">
                        <p>
                            名前だけで覚えている・使う目的が整理できていない人が多いからです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜因数分解と素因数分解で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>因数分解は「式」をかけ算にする</li>
                            <li>素因数分解は「数」を素数の積にする</li>
                            <li>式か数かで判断する</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Factorization App"
                        title="因数分解と素因数分解を、アプリで整理しよう"
                        description="因数分解と素因数分解は現在開発中です（COMING SOON）。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default FactorizationVsPrimeFactorization
