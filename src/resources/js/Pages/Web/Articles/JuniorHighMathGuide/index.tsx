import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const JuniorHighMathGuide = React.memo(function JuniorHighMathGuide() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'Junior High Math Study Guide' : '中学数学の勉強法まとめ'}
            eyebrow="Junior High Math Study Guide"
            title={isEn ? 'Junior High Math Study Guide' : '中学数学の勉強法まとめ'}
            subtitle={
                isEn
                    ? 'A complete guide to overcoming weak points with app practice'
                    : 'アプリ学習で苦手を克服する完全ガイド'
            }
            description={
                isEn
                    ? 'Study methods, key units, and how app practice helps you build consistent math habits.'
                    : '中学数学の勉強法と主要単元のポイントを整理。因数分解や素因数分解など関連記事もまとめた記事。'
            }
            tags={isEn ? ['junior high math study', 'math app', 'study methods'] : ['中学数学 勉強法', '数学 アプリ', '勉強法']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="If junior high math feels hard">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>I don’t know where to start</li>
                            <li>I keep making small mistakes</li>
                            <li>I can’t keep up with the pace</li>
                        </ul>
                        <p>These are common. The fix is to build a steady routine.</p>
                    </ArticleSection>

                    <ArticleSection title="Three key habits">
                        <ArticleSubsection title="1) Short daily repetition">
                            <p>Math improves with frequency, not long sessions.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="2) Focus on core patterns">
                            <p>Master the basics before advanced tricks.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="3) Use an app to stay consistent">
                            <p>Apps remove friction and make it easier to repeat daily.</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Recommended topics to start with">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Factorization</li>
                            <li>Prime factorization</li>
                            <li>GCD / LCM</li>
                            <li>Fractions (reducing & common denominators)</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works">
                        <p>Short, repeatable drills build speed and confidence.</p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Math App"
                        title="Build junior high math habits with the app"
                        description="Hitasura Math helps you repeat core topics in short, daily sessions."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="中学数学が苦手だと感じていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>どこから手をつけていいかわからない</li>
                            <li>ミスが多くて点数が伸びない</li>
                            <li>授業についていけない</li>
                        </ul>
                        <p>
                            これはよくある悩みです。中学数学は「勉強の習慣」で大きく変わります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="中学数学の勉強で大事な3つの習慣">
                        <ArticleSubsection title="1. 短時間でも毎日反復する">
                            <p>
                                数学は「短くても毎日」が一番効きます。
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="2. 基本パターンを固める">
                            <p>
                                応用よりもまず基礎。パターンを覚えると一気に楽になります。
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="3. アプリで継続する">
                            <p>
                                アプリは続けやすく、反復の量を自然に増やせます。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="中学数学で最初に取り組むべき単元">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>因数分解</li>
                            <li>素因数分解</li>
                            <li>最大公約数・最小公倍数</li>
                            <li>分数の約分と通分</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="中学数学はアプリ学習と相性がいい">
                        <p>
                            短時間で繰り返すことが必要な単元が多いため、アプリ学習が効果的です。
                        </p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Math App"
                        title="中学数学の勉強を、アプリで習慣に"
                        description="ひたすら数学は、短時間で反復できる学習体験を提供します。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default JuniorHighMathGuide
