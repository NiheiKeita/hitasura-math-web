import React from 'react'

type Props = {
    title: React.ReactNode
    children: React.ReactNode
}

export const ArticleSection = React.memo<Props>(function ArticleSection({ title, children }) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0F172A]">{title}</h2>
            {children}
        </section>
    )
})

export const ArticleSubsection = React.memo<Props>(function ArticleSubsection({
    title,
    children,
}) {
    return (
        <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[#0F172A]">{title}</h3>
            {children}
        </div>
    )
})

export default ArticleSection
