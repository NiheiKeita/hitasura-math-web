import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'

export const JuniorHighMathGuide = React.memo(function JuniorHighMathGuide() {
    return (
        <ArticleLayout
            breadcrumbLabel="中学数学の勉強法まとめ"
            eyebrow="Junior High Math Guide"
            title="中学数学の勉強法まとめ"
            subtitle="アプリ学習で苦手を克服する完全ガイド"
            description="中学数学の勉強法と主要単元のポイントを整理し、関連記事への導線をまとめたガイドです。"
            tags={['中学数学 勉強法', '数学 アプリ', '勉強法']}
        >
            <ArticleSection title="中学数学の勉強でつまずいていませんか？">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>どこから勉強すればいいか分からない</li>
                    <li>公式は覚えたのにテストで点が取れない</li>
                    <li>勉強しているのに、できるようになっている実感がない</li>
                </ul>
                <p>
                    これは、あなただけではありません。中学数学は、<strong>積み重ねが強く影響する教科</strong>なので、
                    一度つまずくと「ずっと苦手」になりやすいのです。
                </p>
                <p>
                    でも安心してください。中学数学が苦手になる原因は、<strong>才能ではなく勉強のやり方</strong>にあります。
                </p>
            </ArticleSection>

            <ArticleSection title="中学数学が苦手になる本当の理由">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>単元ごとのつながりを意識していない</li>
                    <li>「わかる」と「できる」を混同している</li>
                    <li>勉強量が足りていない</li>
                </ul>
                <p>
                    中学数学は<strong>理解 → 反復 → 定着</strong>の流れができていないと、確実に止まります。
                </p>
            </ArticleSection>

            <ArticleSection title="中学数学の勉強法を一言で言うと">
                <p>
                    <strong>中学数学は「短時間 × 反復」が最強です。</strong>
                </p>
                <p>
                    長時間まとめて勉強するよりも、毎日少しずつ、同じ形の問題を何度も解く方が圧倒的に成果が出ます。
                </p>
            </ArticleSection>

            <ArticleSection title="中学数学の正しい勉強ステップ">
                <ArticleSubsection title="① 基本を理解する">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>公式の意味</li>
                        <li>何を求めているのか</li>
                    </ul>
                    <p>を、まずは軽く理解します。完璧に理解しようとしなくて大丈夫です。</p>
                </ArticleSubsection>
                <ArticleSubsection title="② 同じタイプの問題を反復する">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>似た問題を何度も解く</li>
                        <li>手が止まらなくなるまで繰り返す</li>
                    </ul>
                    <p>ここが一番重要です。</p>
                </ArticleSubsection>
                <ArticleSubsection title="③ 間違いを気にしすぎない">
                    <p>
                        最初は間違えて当たり前です。<strong>正解率より回数</strong>を優先してください。
                    </p>
                </ArticleSubsection>
            </ArticleSection>

            <ArticleSection title="中学数学の勉強にアプリ学習が向いている理由">
                <p>中学数学は、アプリ学習と非常に相性が良い教科です。理由は次の通りです。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>すぐ勉強を始められる</li>
                    <li>丸付けが不要</li>
                    <li>同じ問題を何度も解ける</li>
                    <li>短時間で区切りやすい</li>
                </ul>
                <p>
                    特に、勉強が続かない・机に向かうのが苦手という人ほど、アプリ学習の効果を実感しやすくなります。
                </p>
            </ArticleSection>

            <ArticleSection title="中学数学の主要単元とおすすめ勉強法">
                <p>
                    ここからは、中学数学の主要単元ごとに<strong>勉強のポイントと関連記事</strong>を紹介します。
                </p>
            </ArticleSection>

            <ArticleSection title="因数分解・式の計算">
                <p>中学数学の計算分野の中心です。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>因数分解</li>
                    <li>式の展開</li>
                    <li>素因数分解</li>
                </ul>
                <p>関連記事：</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/factorization-study">
                            因数分解の勉強法まとめ
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/factorization-vs-expansion">
                            因数分解と式の展開の違い
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/factorization-vs-prime-factorization">
                            因数分解と素因数分解の違い
                        </a>
                    </li>
                </ul>
            </ArticleSection>

            <ArticleSection title="素因数分解・整数の性質">
                <p>整数分野は、<strong>最大公約数・最小公倍数・分数</strong>につながります。</p>
                <p>関連記事：</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/prime-factorization-study">
                            素因数分解の勉強法まとめ
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/gcd-basics">
                            最大公約数とは
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/lcm-basics">
                            最小公倍数とは
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/fraction-reduction-vs-common-denominator">
                            分数の約分と通分の考え方
                        </a>
                    </li>
                </ul>
            </ArticleSection>

            <ArticleSection title="分数・割合">
                <p>計算ミスが出やすい分野ですが、考え方が分かれば安定します。</p>
                <p>関連記事：</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/fraction-reduction-vs-common-denominator">
                            分数の約分と通分
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/gcd-vs-lcm">
                            最大公約数と最小公倍数の違い
                        </a>
                    </li>
                </ul>
            </ArticleSection>

            <ArticleSection title="関数・グラフ（中学後半〜高校への橋渡し）">
                <p>ここから一気に難しく感じる人が増えます。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>変化を見る</li>
                    <li>グラフと式を結びつける</li>
                </ul>
                <p>関連記事：</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/differential-study">
                            微分の勉強法まとめ
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/differential-vs-integration">
                            微分と積分の違い
                        </a>
                    </li>
                </ul>
            </ArticleSection>

            <ArticleSection title="中学数学の勉強でよくある勘違い">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>「理解してから練習しよう」と思っている</li>
                    <li>ノートをきれいにまとめて満足している</li>
                    <li>一度で覚えようとしている</li>
                </ul>
                <p>
                    中学数学は<strong>理解は浅くてOK、反復で深くする</strong>が正解です。
                </p>
            </ArticleSection>

            <ArticleSection title="ひたすら数学は中学数学の勉強にどう使う？">
                <p>
                    ひたすら数学は、中学数学の基礎問題をテンポよく短時間で反復できるように作られています。
                </p>
                <p>
                    目的は、<strong>「考える前に手が動く状態」を作ること</strong>です。
                </p>
            </ArticleSection>

            <ArticleSection title="中学数学が苦手でも大丈夫">
                <p>中学数学ができる人とできない人の差は、才能ではありません。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>見た回数</li>
                    <li>解いた回数</li>
                </ul>
                <p>この2つだけです。</p>
            </ArticleSection>

            <ArticleSection title="まとめ｜中学数学の勉強で一番大切なこと">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>中学数学は積み重ね</li>
                    <li>勉強法は短時間×反復</li>
                    <li>正解率より回数</li>
                    <li>アプリ学習と相性がいい</li>
                    <li>つまずいてもやり直せる</li>
                </ul>
            </ArticleSection>

            <ArticleSection title="最後に">
                <p>
                    もし今、中学数学が苦手・何から勉強すればいいか分からないと感じているなら、必要なのは新しい教材ではなく
                    <strong>勉強の仕方</strong>です。
                </p>
                <p>まずは軽く、短く、中学数学をひたすら解くところから始めてみてください。</p>
            </ArticleSection>

            <ArticleCta
                eyebrow="Junior High Math App"
                title="中学数学の勉強を、アプリで続けよう"
                description="ひたすら数学なら、中学数学の基礎問題をテンポよく反復できます。短時間で取り組めるので、毎日の学習習慣にもぴったりです。"
            />
        </ArticleLayout>
    )
})

export default JuniorHighMathGuide
