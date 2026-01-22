import React from 'react'
import ArticleLayout from '@/Components/ArticleLayout'
import ArticleCta from '@/Components/ArticleCta'
import ArticleSection, { ArticleSubsection } from '@/Components/ArticleSection'

export const IntegrationStudy = React.memo(function IntegrationStudy() {
    return (
        <ArticleLayout
            breadcrumbLabel="積分の勉強法"
            eyebrow="Integration Study Guide"
            title="積分の勉強法まとめ"
            subtitle="アプリ学習で苦手を克服する完全ガイド"
            description="積分の基礎理解からつまずきポイントまでを整理。積分アプリで反復学習するメリットもまとめています。"
            tags={['積分 勉強', '積分 アプリ', '高校数学']}
        >
                    <ArticleSection title="積分の勉強でつまずいていませんか？">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分はなんとなく分かるのに、積分になると手が止まる</li>
                            <li>公式は覚えたはずなのに使い分けができない</li>
                            <li>何を求めている計算なのか分からない</li>
                        </ul>
                        <p>
                            これは、あなただけではありません。積分は、高校数学の中でも
                            <strong>「急に難しくなった」と感じやすい単元</strong>です。
                        </p>
                        <p>
                            でも安心してください。積分が苦手になる原因は、<strong>才能ではなく勉強の進め方</strong>にあります。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分とは？まずは意味を正しく理解しよう">
                        <p>
                            積分とは、<strong>微分の逆の操作</strong>です。
                        </p>
                        <p>
                            もう少し噛み砕くと、<strong>変化のしかた（微分）から、元の形を復元する考え方</strong>です。
                        </p>
                        <p>たとえば、y = 2x という関数を微分すると、傾きは一定になります。</p>
                        <p>
                            積分では、この逆に<strong>「傾きが分かっている状態から、元の関数を求める」</strong>ことを行います。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="なぜ積分を勉強するのか（ここが一番大事）">
                        <p>「これ、何に使うの？」そう思われがちですが、積分にははっきりした役割があります。</p>
                        <ArticleSubsection title="面積を求めるため">
                            <p>
                                積分を使うと、グラフとx軸に囲まれた部分の<strong>面積</strong>を求めることができます。
                            </p>
                            <p>
                                これは、物理（移動距離）・経済（累積量）・工学など、さまざまな分野につながります。
                            </p>
                        </ArticleSubsection>
                        <ArticleSubsection title="微分とセットで使うため">
                            <p>
                                高校数学では、微分で「変化」を見る・積分で「全体量」を見るというセットで使われます。
                            </p>
                        </ArticleSubsection>
                    </ArticleSection>

                    <ArticleSection title="積分で最初につまずきやすいポイント">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>微分との関係があいまい</li>
                            <li>定数Cの意味が分からない</li>
                            <li>計算手順を暗記しているだけ</li>
                        </ul>
                        <p>
                            これらはすべて、<strong>理解不足ではなく慣れ不足</strong>です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分は「意味」と「計算」を分けて考える">
                        <p>
                            積分を勉強するときは、積分が何を表しているのか・計算としてどう解くのか、この2つを分けて考えるのがコツです。
                        </p>
                        <p>
                            最初は、正しい形に積分できているかだけを確認すれば十分です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分の勉強法｜一番効果が出るやり方">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>1回3〜5分</li>
                            <li>毎日</li>
                            <li>正解率は気にしない</li>
                        </ul>
                        <p>
                            積分は計算量が多くなりがちなので、<strong>短時間で区切って反復する</strong>ことがとても重要です。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分の勉強にはアプリ学習が向いている理由">
                        <p>
                            積分の勉強には、問題集よりも<strong>アプリ学習</strong>が向いています。理由は次の通りです。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>問題を探す時間がいらない</li>
                            <li>途中計算の確認がしやすい</li>
                            <li>同じタイプの問題を何度も解ける</li>
                            <li>ミスしてもすぐやり直せる</li>
                        </ul>
                        <p>
                            積分は「理解」と「計算練習」を同時に進める必要があるため、<strong>積分アプリの方が学習効率が高くなりやすい</strong>のです。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="ひたすら数学は積分の勉強にどう使う？">
                        <p>
                            ひたすら数学は、基本的な積分問題をテンポよく繰り返し解けるように作られています。
                        </p>
                        <p>
                            目的は、<strong>「積分の形を見た瞬間に手が動く状態」を作ること</strong>です。
                        </p>
                        <p>
                            積分に苦手意識がある人ほど、無理なく続けやすい設計になっています。
                        </p>
                    </ArticleSection>

                    <ArticleSection title="積分は才能じゃない">
                        <p>
                            積分が得意な人は、最初から理解できていたわけではありません。<strong>問題を解いた回数が多いだけ</strong>です。
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>反復した人 → 慣れる</li>
                            <li>反復していない人 → 手が止まる</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="まとめ｜積分の勉強で一番大切なこと">
                        <ul className="list-inside list-disc space-y-2 text-[#475569]">
                            <li>積分は微分の逆</li>
                            <li>面積や全体量を求める考え方</li>
                            <li>つまずく原因は練習不足</li>
                            <li>勉強法は短時間×反復</li>
                            <li>アプリ学習と相性がいい</li>
                        </ul>
                    </ArticleSection>

                    <ArticleSection title="最後に">
                        <p>
                            もし今、積分が苦手・何から勉強すればいいか分からないと感じているなら、必要なのは新しい説明ではなく「解く回数」です。
                        </p>
                        <p>
                            まずは軽く、短く、積分の問題をひたすら解くところから始めてみてください。
                        </p>
                    </ArticleSection>

                    <ArticleCta
                        eyebrow="Integration App"
                        title="積分アプリで、毎日の勉強を続けよう"
                        description="ひたすら数学なら、積分の問題をテンポよく反復できます。短時間で取り組めるので、毎日の学習習慣にもぴったりです。"
                    />
        </ArticleLayout>
    )
})

export default IntegrationStudy
