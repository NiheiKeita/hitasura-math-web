import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'
import { useI18n } from '@/i18n'

export const PrimeFactorizationStudy = React.memo(function PrimeFactorizationStudy() {
    const { locale } = useI18n()
    const isEn = locale === 'en'

    return (
        <ArticleLayout
            breadcrumbLabel={isEn ? 'How to Study Prime Factorization' : '素因数分解の勉強法'}
            eyebrow="Prime Factorization Study Guide"
            title={isEn ? 'How to Study Prime Factorization' : '素因数分解の勉強法まとめ'}
            subtitle={
                isEn
                    ? 'A complete guide to building the basics with app practice'
                    : 'アプリ学習で基礎を固める完全ガイド'
            }
            description={
                isEn
                    ? 'Why prime factorization is hard, how to practice efficiently, and why app repetition helps.'
                    : '素因数分解の勉強でつまずく原因と、短時間で繰り返し練習する方法を整理。素因数分解アプリを使った反復学習の効果もまとめました。'
            }
            tags={isEn ? ['prime factorization study', 'prime factorization app', 'junior high math'] : ['素因数分解 勉強', '素因数分解 アプリ', '中学数学']}
        >
            {isEn ? (
                <>
                    <ArticleSection title="Stuck on prime factorization?">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>I don’t know where to start dividing</li>
                            <li>I make a mistake halfway and the answer is wrong</li>
                            <li>It takes too long</li>
                        </ul>
                        <p>
                            It’s not just you. Prime factorization is one of the first places students stumble.
                        </p>
                        <p>
                            The issue isn’t talent — it’s the study method.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="What is prime factorization?">
                        <p>
                            Prime factorization means expressing a number as a product of <strong>prime numbers only</strong>.
                        </p>
                        <p>For example, 60 becomes:</p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">60 = 2 × 2 × 3 × 5</p>
                        <p>
                            The key is to use only primes like 2, 3, 5 — <strong>not 1 or composite numbers</strong>.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Why study prime factorization (this matters most)">
                        <p>“What is this used for?” It has real purposes.</p>
                        <ArticleSubsection title="It leads directly to GCD and LCM">
                            <p>
                                You can’t truly understand the GCD and LCM without prime factorization.
                            </p>
                            <p>
                                Prime factorization is the <strong>foundation of junior high number theory</strong>.
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="It makes fraction work easier">
                            <p>
                                When you reduce fractions, you’re essentially doing prime factorization in your head.
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="The basic method">
                        <p>The flow is simple:</p>
                        <ol className="list-inside list-decimal space-y-2 text-[#475569]">
                            <li>Divide by small primes first</li>
                            <li>If it no longer divides, move to the next prime</li>
                            <li>Stop when the remaining number is prime</li>
                        </ol>
                        <p>Example: 60</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>60 is even → divide by 2</li>
                            <li>30 is even → divide by 2</li>
                            <li>15 is divisible by 3</li>
                            <li>5 is prime</li>
                        </ul>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">60 = 2 × 2 × 3 × 5</p>
                    </ArticleSection>

                    <ArticleSection title="Why it often doesn’t go well">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Forgetting small primes</li>
                            <li>Not checking divisibility carefully</li>
                            <li>Rushing without a consistent routine</li>
                        </ul>
                        <p>It’s a method problem, not an ability problem.</p>
                    </ArticleSection>

                    <ArticleSection title="How to study prime factorization">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Always start with 2, then 3, then 5</li>
                            <li>Say the steps out loud as you divide</li>
                            <li>Repeat short sessions daily</li>
                        </ul>
                        <p>Short, consistent repetition builds speed and accuracy.</p>
                    </ArticleSection>

                    <ArticleSection title="Why app practice works well">
                        <p>Prime factorization improves with repetition.</p>
                        <p>
                            That’s why <strong>app practice is a perfect fit</strong>: you can do many short problems with
                            instant feedback.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="How to use Hitasura Math">
                        <p>
                            Hitasura Math lets you practice prime factorization in short bursts so the steps become
                            automatic.
                        </p>
                    </ArticleSection>

                    <ArticleSection title="Summary">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>Prime factorization uses only primes</li>
                            <li>Start small, move up by primes</li>
                            <li>Repetition builds speed</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Prime Factorization App"
                        title="Build prime factorization with the app"
                        description="Prime factorization practice is currently in development (COMING SOON). We’re building a fast, repeatable learning experience."
                    />
                </>
            ) : (
                <>
                    <ArticleSection title="素因数分解の勉強でつまずいていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>どこから割ればいいかわからない</li>
                            <li>途中でミスして答えが合わない</li>
                            <li>計算に時間がかかりすぎる</li>
                        </ul>
                        <p>
                            これは、あなただけではありません。素因数分解は、中学数学の中でも「最初につまずきやすい単元」です。
                        </p>
                        <p>
                            でも安心してください。素因数分解が苦手な原因は、<strong>才能ではなく勉強のやり方</strong>にあります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="素因数分解とは？まずは意味を正しく理解しよう">
                        <p>
                            素因数分解とは、<strong>ある数を素数だけのかけ算で表すこと</strong>です。
                        </p>
                        <p>例として、60を考えてみましょう。</p>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            60 = 2 × 2 × 3 × 5
                        </p>
                        <p>
                            このように、<strong>2・3・5 といった素数だけで表すこと</strong>が素因数分解です。
                        </p>
                        <p>
                            ポイントは、<strong>1や合成数は使わない</strong>ということです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="なぜ素因数分解を勉強するのか（ここが一番大事）">
                        <p>「正直、これ何に使うの？」そう感じる人も多いですが、素因数分解はとても重要です。</p>
                        <ArticleSubsection title="最大公約数・最小公倍数につながる">
                            <p>
                                最大公約数や最小公倍数は、素因数分解ができないと理解できません。
                            </p>
                            <p>
                                素因数分解は、<strong>中学数学の計算分野すべての土台</strong>になっています。
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="分数の計算が楽になる">
                            <p>
                                分数を約分するときも、実は頭の中で素因数分解をしています。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="素因数分解の基本的なやり方">
                        <p>基本の流れは、とてもシンプルです。</p>
                        <ol className="list-inside list-decimal space-y-2 text-[#475569]">
                            <li>小さい素数から割る</li>
                            <li>割れなくなったら次の素数</li>
                            <li>最後まで素数になったら終了</li>
                        </ol>
                        <p>例：60 の場合</p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>60 は偶数 → 2で割る</li>
                            <li>30 も偶数 → 2で割る</li>
                            <li>15 は 3 で割れる</li>
                            <li>5 は素数</li>
                        </ul>
                        <p className="rounded-2xl bg-slate-50 p-5 font-mono text-sm text-[#0F172A]">
                            60 = 2 × 2 × 3 × 5
                        </p>
                    </ArticleSection>

                    <ArticleSection title="素因数分解の勉強がうまくいかない理由">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>どの素数で割るか迷ってしまう</li>
                            <li>計算ミスに気づけない</li>
                            <li>パターンを覚えようとしてしまう</li>
                        </ul>
                        <p>
                            これは理解力の問題ではありません。<strong>勉強法の問題</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="素因数分解の勉強法">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>2・3・5 の順に必ず割ってみる</li>
                            <li>計算の流れを声に出す</li>
                            <li>1回3〜5分、毎日反復する</li>
                        </ul>
                        <p>短時間でも毎日やると、判断が速くなります。</p>
                    </ArticleSection>

                    <ArticleSection title="素因数分解の勉強にはアプリ学習が向いている理由">
                        <p>素因数分解は、反復練習を積み重ねることで確実に速くなります。</p>
                        <p>
                            そのため、すぐ問題に取りかかれる・短時間で何度も練習できる<strong>アプリ学習との相性がとても良い</strong>単元です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="ひたすら数学は素因数分解の勉強にどう使う？">
                        <p>
                            ひたすら数学では、素因数分解を「短い問題」でテンポよく反復できます。
                        </p>
                        <p>
                            目的は、<strong>素因数分解の流れを自動化すること</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜素因数分解の勉強で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>素因数分解は「素数だけで表す」こと</li>
                            <li>2・3・5 の順に割る</li>
                            <li>反復が最大の近道</li>
                        </ul>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Prime Factorization App"
                        title="素因数分解を、アプリで反復しよう"
                        description="素因数分解は現在開発中です（COMING SOON）。短時間で反復できる学習体験を準備しています。"
                    />
                </>
            )}
        </ArticleLayout>
    )
})

export default PrimeFactorizationStudy
