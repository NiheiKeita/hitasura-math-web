import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const IntegrationStudy = React.memo(function IntegrationStudy() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'How to Study Integration' : '積分の勉強法'}
            eyebrow="Integration Study Guide"
            title={isEn ? 'How to Study Integration' : '積分の勉強法まとめ'}
            subtitle={
                isEn ? 'A complete guide to overcoming weak points with app practice' : 'アプリ学習で苦手を克服する完全ガイド'
            }
            description={
                isEn
                    ? 'Clear meaning, common stumbling points, and how to build speed with short daily repetition.'
                    : '積分の意味とつまずきポイントを整理。積分 アプリ学習で反復するメリットも解説。'
            }
            tags={isEn ? ['integration study', 'integration app', 'high school math'] : ['積分 勉強', '積分 アプリ', '高校数学']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Stuck on integration?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>I don’t understand what it means</li>
                            <li>I can’t remember the formulas</li>
                            <li>I get lost in longer problems</li>
                        </ul>
                        <p>Integration is one of the most common stumbling points in high school math.</p>
                        <p>The issue isn’t talent — it’s clarity and practice.</p>
                    </ArticleSection>

                    <ArticleSection title="What is integration?">
                        <p>
                            Integration measures <strong>accumulated change</strong>.
                        </p>
                        <p>It answers: “How much has changed overall?”</p>
                    </ArticleSection>

                    <ArticleSection title="Why study integration?">
                        <ArticleSubsection title="To find totals">
                            <p>Areas, distances, totals over time — integration is the tool behind them.</p>
                        </ArticleSubsection>
                        <ArticleSubsection title="To undo differentiation">
                            <p>Integration is the inverse of differentiation.</p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="Common stumbling points">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Not understanding the meaning, only memorizing rules</li>
                            <li>Mixing up formulas</li>
                            <li>Making small calculation errors in longer expressions</li>
                        </ul>
                        <p>Most issues come from lack of repetition with the basics.</p>
                    </ArticleSection>

                    <ArticleSection title="How to study integration">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Start with the meaning (total change/area)</li>
                            <li>Memorize core rules only after understanding</li>
                            <li>Do short daily drills to build speed</li>
                        </ul>
                        <p>Consistency matters more than long sessions.</p>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works well">
                        <p>Integration is skill-heavy and repetition-driven.</p>
                        <p>
                            That’s why <strong>app practice is a perfect fit</strong>: short, frequent problems build speed and accuracy.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to use Hitasura Math">
                        <p>
                            Hitasura Math lets you repeat integration in short bursts to make the rules automatic.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Summary">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Integration measures accumulated change</li>
                            <li>Meaning first, formulas second</li>
                            <li>Short daily repetition builds speed</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Calculus App"
                        title="Build integration with the app"
                        description="Integration practice is currently in development (COMING SOON). We’re building a fast, repeatable learning experience."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="積分の勉強でつまずいていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>積分の意味がよく分からない</li>
                            <li>公式を覚えきれない</li>
                            <li>問題が長くなると途端に解けない</li>
                        </ul>
                        <p>
                            これはあなただけではありません。積分は高校数学の中でもつまずきやすい単元のひとつです。
                        </p>
                        <p>
                            でも安心してください。積分が苦手な原因は才能ではなく、考え方の整理不足にあります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分とは？まずは意味を理解しよう">
                        <p>
                            積分とは、<strong>変化の積み重ねを測る考え方</strong>です。
                        </p>
                        <p>「全部でどれだけ増えたのか？」を調べる道具だと考えると理解しやすくなります。</p>
                    </ArticleSection>

                    <ArticleSection title="なぜ積分を勉強するのか">
                        <ArticleSubsection title="面積や距離を求めるため">
                            <p>
                                面積、移動距離、累積量。これらは積分で理解できます。
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="微分の逆として使う">
                            <p>
                                積分は微分の逆の考え方です。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="積分でつまずく理由">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>意味を理解せずに公式だけ暗記する</li>
                            <li>公式がごちゃごちゃになる</li>
                            <li>計算ミスが多くなる</li>
                        </ul>
                        <p>
                            これは理解力の問題ではありません。反復不足が原因です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分の勉強法">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>まず意味を理解する</li>
                            <li>公式は最低限をしっかり覚える</li>
                            <li>短時間で毎日反復する</li>
                        </ul>
                        <p>少しずつでも反復すると、自然に手が動くようになります。</p>
                    </ArticleSection>

                    <ArticleSection title="積分の勉強にはアプリ学習が向いている理由">
                        <p>
                            積分は、公式を覚えて終わりではなく、スピードと正確さが必要な分野です。
                        </p>
                        <p>
                            そのため、すぐ問題に取りかかれる・短時間で繰り返せる<strong>アプリ学習との相性がとても良い</strong>単元です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="ひたすら数学は積分の勉強にどう使う？">
                        <p>
                            ひたすら数学では、積分をテンポよく反復できるように設計しています。
                        </p>
                        <p>
                            目的は、<strong>問題を見た瞬間に自然に積分できる状態を作ること</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜積分で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>積分は変化の積み重ね</li>
                            <li>意味理解が最優先</li>
                            <li>反復が最大の近道</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Calculus App"
                        title="積分を、アプリで反復しよう"
                        description="積分は現在開発中です（COMING SOON）。短時間で反復できる学習体験を準備しています。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default IntegrationStudy
