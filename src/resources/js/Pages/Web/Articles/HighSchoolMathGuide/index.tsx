import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'

export const HighSchoolMathGuide = React.memo(function HighSchoolMathGuide() {
    return (
        <ArticleLayout
            breadcrumbLabel="高校数学の勉強法まとめ"
            eyebrow="High School Math Guide"
            title="高校数学の勉強法まとめ"
            subtitle="微分・積分から始める苦手克服ガイド"
            description="高校数学の勉強法と主要単元のポイントを整理し、関連記事への導線をまとめたガイドです。"
            tags={['高校数学 勉強法', '微分 積分', '数学 アプリ']}
        >
            <ArticleSection title="高校数学の勉強でつまずいていませんか？">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>高校に入ってから急に数学が分からなくなった</li>
                    <li>微分や積分で何をやっているのか分からない</li>
                    <li>公式は覚えたけど、問題になると手が止まる</li>
                </ul>
                <p>
                    これは、とてもよくある悩みです。高校数学は、中学数学と比べて<strong>考え方の抽象度が一気に上がる</strong>ため、
                    多くの人がここでつまずきます。
                </p>
                <p>
                    でも安心してください。高校数学が苦手になる原因は、<strong>才能ではなく勉強のやり方</strong>にあります。
                </p>
            </ArticleSection>

            <ArticleSection title="高校数学が難しく感じる本当の理由">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>公式の意味を考えないまま使っている</li>
                    <li>計算と考え方が結びついていない</li>
                    <li>問題数が圧倒的に足りない</li>
                </ul>
                <p>
                    高校数学は<strong>理解 → 反復 → 定着</strong>の流れができていないと、確実に止まります。
                </p>
            </ArticleSection>

            <ArticleSection title="高校数学の勉強法を一言で言うと">
                <p>
                    <strong>高校数学は「意味をざっくり理解して、反復で固める」が正解です。</strong>
                </p>
                <p>最初から完璧に理解しようとすると、ほぼ確実に止まります。</p>
            </ArticleSection>

            <ArticleSection title="高校数学の正しい勉強ステップ">
                <ArticleSubsection title="① 何を求めている分野なのかを知る">
                    <p>
                        高校数学は「何を調べるための数学か」を知るだけで、理解しやすさが大きく変わります。
                    </p>
                    <p>例：</p>
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>微分 → 変化のしかた</li>
                        <li>積分 → 全体の量</li>
                    </ul>
                </ArticleSubsection>
                <ArticleSubsection title="② 基本問題を短時間で反復する">
                    <ul className="list-inside list-disc space-y-2 text-[#475569]">
                        <li>同じ形の問題を何度も解く</li>
                        <li>手が止まらなくなるまで繰り返す</li>
                    </ul>
                    <p>正解率は気にしなくて大丈夫です。</p>
                </ArticleSubsection>
                <ArticleSubsection title="③ 間違いを前提にする">
                    <p>高校数学は<strong>間違えながら慣れる教科</strong>です。</p>
                    <p>最初からスムーズに解ける人はいません。</p>
                </ArticleSubsection>
            </ArticleSection>

            <ArticleSection title="高校数学の勉強にアプリ学習が向いている理由">
                <p>高校数学は、アプリ学習との相性がとても良い分野です。理由は次の通りです。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>問題を探す時間がいらない</li>
                    <li>短時間で勉強を始められる</li>
                    <li>同じタイプの問題を何度も解ける</li>
                    <li>途中でやめても再開しやすい</li>
                </ul>
                <p>
                    特に、数学が苦手・勉強が続かないという人ほど、アプリ学習の効果を実感しやすくなります。
                </p>
            </ArticleSection>

            <ArticleSection title="高校数学の主要単元と勉強のポイント">
                <p>ここでは、現時点で扱っている単元を中心に紹介します。</p>
            </ArticleSection>

            <ArticleSection title="微分（高校数学の入口）">
                <p>高校数学で最初に大きくつまずきやすい単元です。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>変化のしかたを見る</li>
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

            <ArticleSection title="積分（微分とセットで理解する）">
                <p>
                    積分は、微分と正反対の操作ですが、<strong>セットで理解することで一気に分かりやすくなります。</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>面積</li>
                    <li>全体量</li>
                </ul>
                <p>関連記事：</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/integration-study">
                            積分の勉強法まとめ
                        </a>
                    </li>
                    <li>
                        <a className="text-[#1E3A8A] hover:opacity-70" href="/articles/differential-vs-integration">
                            微分と積分の違い
                        </a>
                    </li>
                </ul>
            </ArticleSection>

            <ArticleSection title="これから単元が増えても大丈夫">
                <p>
                    現時点で、微分・積分しかなくても、まったく問題ありません。このページは<strong>高校数学全体のハブ</strong>として機能します。
                </p>
                <p>
                    今後、二次関数・三角関数・数列などの記事が増えたら、このページに追加していくだけでOKです。
                </p>
            </ArticleSection>

            <ArticleSection title="ひたすら数学は高校数学の勉強にどう使う？">
                <p>
                    ひたすら数学は、高校数学の基本問題をテンポよく短時間で反復できるように作られています。
                </p>
                <p>
                    目的は、<strong>「考える前に手が動く状態」を作ること</strong>です。
                </p>
            </ArticleSection>

            <ArticleSection title="高校数学が苦手でも大丈夫">
                <p>高校数学ができる人とできない人の差は、才能ではありません。</p>
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>見た回数</li>
                    <li>解いた回数</li>
                </ul>
                <p>この2つだけです。</p>
            </ArticleSection>

            <ArticleSection title="まとめ｜高校数学の勉強で一番大切なこと">
                <ul className="list-inside list-disc space-y-2 text-[#475569]">
                    <li>高校数学は急に難しく感じやすい</li>
                    <li>勉強法は意味理解＋反復</li>
                    <li>正解率より回数</li>
                    <li>微分・積分から始めてOK</li>
                    <li>アプリ学習と相性がいい</li>
                </ul>
            </ArticleSection>

            <ArticleSection title="最後に">
                <p>
                    もし今、高校数学が苦手・何から勉強すればいいか分からないと感じているなら、必要なのは新しい参考書ではなく
                    <strong>勉強の仕方</strong>です。
                </p>
                <p>まずは軽く、短く、微分・積分をひたすら解くところから始めてみてください。</p>
            </ArticleSection>

            <ArticleCta
                eyebrow="High School Math App"
                title="高校数学の勉強を、アプリで続けよう"
                description="ひたすら数学なら、高校数学の基本問題をテンポよく反復できます。短時間で取り組めるので、毎日の学習習慣にもぴったりです。"
            />
        </ArticleLayout>
    )
})

export default HighSchoolMathGuide
