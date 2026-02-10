import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleSection from '@/Components/ArticleSection'
import ArticleCta from '@/Components/ArticleCta'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/storeUrls'
import { useI18n } from '@/i18n'

export const AboutHitasuraMath = React.memo(function AboutHitasuraMath() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'What is Hitasura Math?' : 'ひたすら数学とは？'}
            eyebrow="About the App"
            title={isEn ? 'What is Hitasura Math?' : 'ひたすら数学とは？'}
            subtitle={isEn ? 'A math practice app built for people who struggle' : '苦手な人のために作られた数学練習アプリ'}
            description={
                isEn
                    ? 'Why this app was built, who it is for, and what it helps you practice.'
                    : 'ひたすら数学の特徴や作った理由、どんな人に向いているかをまとめた紹介記事。'
            }
            tags={isEn ? ['Hitasura Math', 'math app', 'study methods'] : ['ひたすら数学', '数学アプリ', '勉強法']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Why we built Hitasura Math">
                        <p>
                            Many students can explain the rule, yet freeze in real problems. We built Hitasura Math to
                            turn understanding into <strong>fast, automatic action</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Who it’s for">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>People who know the idea but can’t solve quickly</li>
                            <li>People who want short, daily practice</li>
                            <li>People who want to rebuild confidence step by step</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="What you can practice">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Factorization</li>
                            <li>Prime factorization</li>
                            <li>GCD / LCM</li>
                            <li>Fractions (reducing & common denominators)</li>
                            <li>Differentiation & integration</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works">
                        <p>
                            The app makes repetition easy. Short sessions every day create speed and confidence.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Download the app">
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={APP_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-[#1E3A8A] px-5 py-2 text-xs font-semibold text-white"
                            >
                                App Store
                            </a>
                            <a
                                href={GOOGLE_PLAY_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-[#1E3A8A]/40 px-5 py-2 text-xs font-semibold text-[#1E3A8A]"
                            >
                                Google Play
                            </a>
                        </div>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Math App"
                        title="Practice math in short, daily bursts"
                        description="Hitasura Math helps you build speed and confidence with repeatable practice."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="ひたすら数学を作った理由">
                        <p>
                            「分かったつもり」なのに問題になると手が止まる。そんな人のために、理解を
                            <strong>瞬時に使える力</strong>に変えるアプリを作りました。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="こんな人に向いています">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>理解はしているのに解くのが遅い人</li>
                            <li>短時間で毎日反復したい人</li>
                            <li>苦手を1つずつ取り戻したい人</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="学べる内容">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>因数分解</li>
                            <li>素因数分解</li>
                            <li>最大公約数・最小公倍数</li>
                            <li>分数の約分・通分</li>
                            <li>微分・積分</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="アプリ学習が向いている理由">
                        <p>
                            アプリは「すぐ始められる」「短時間で反復できる」ので、勉強の習慣化にぴったりです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="アプリをダウンロード">
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={APP_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-[#1E3A8A] px-5 py-2 text-xs font-semibold text-white"
                            >
                                App Storeで見る
                            </a>
                            <a
                                href={GOOGLE_PLAY_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-[#1E3A8A]/40 px-5 py-2 text-xs font-semibold text-[#1E3A8A]"
                            >
                                Google Playで見る
                            </a>
                        </div>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Math App"
                        title="数学の反復を、アプリで習慣に"
                        description="ひたすら数学は、短時間で反復できる学習体験を提供します。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default AboutHitasuraMath
