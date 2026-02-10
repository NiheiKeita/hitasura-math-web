import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const HighSchoolMathGuide = React.memo(function HighSchoolMathGuide() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'High School Math Study Guide' : '高校数学の勉強法まとめ'}
            eyebrow="High School Math Study Guide"
            title={isEn ? 'High School Math Study Guide' : '高校数学の勉強法まとめ'}
            subtitle={
                isEn
                    ? 'Start with differentiation and integration'
                    : '微分・積分から始める苦手克服ガイド'
            }
            description={
                isEn
                    ? 'Study methods, key units, and how app practice helps you build consistent math habits.'
                    : '高校数学の勉強法と主要単元のポイントを整理。微分・積分の関連記事へつながる記事。'
            }
            tags={isEn ? ['high school math study', 'differentiation integration', 'math app'] : ['高校数学 勉強法', '微分 積分', '数学 アプリ']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="If high school math feels hard">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>I don’t know where to start</li>
                            <li>I understand in class, but can’t solve alone</li>
                            <li>Problems get long and overwhelming</li>
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
                            <li>Differentiation</li>
                            <li>Integration</li>
                            <li>Differentiation vs Integration</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works">
                        <p>Short, repeatable drills build speed and confidence.</p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Math App"
                        title="Build high school math habits with the app"
                        description="Hitasura Math helps you repeat calculus topics in short, daily sessions."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="高校数学が苦手だと感じていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>どこから手をつけていいかわからない</li>
                            <li>授業では分かるのに問題になると解けない</li>
                            <li>問題が長くなると手が止まる</li>
                        </ul>
                        <p>
                            これはよくある悩みです。高校数学は「勉強の習慣」で大きく変わります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="高校数学の勉強で大事な3つの習慣">
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

                    <ArticleSection title="高校数学で最初に取り組むべき単元">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分</li>
                            <li>積分</li>
                            <li>微分と積分の違い</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="高校数学はアプリ学習と相性がいい">
                        <p>
                            短時間で繰り返すことが必要な単元が多いため、アプリ学習が効果的です。
                        </p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Math App"
                        title="高校数学の勉強を、アプリで習慣に"
                        description="ひたすら数学は、短時間で反復できる学習体験を提供します。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default HighSchoolMathGuide
