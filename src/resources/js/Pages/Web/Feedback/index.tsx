import React, { FormEvent, useMemo, useState } from 'react'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import TextArea from '@/Components/TextArea'
import InputError from '@/Components/InputError'
import SiteHeader from '@/Components/SiteHeader'
import WebFooter from '@/Components/WebFooter'

type Props = {
    categories: string[]
    platforms: string[]
}

type FormState = {
    category: string
    message: string
    email: string
    platform: string
    appVersion: string
    deviceOs: string
}

const defaultForm: FormState = {
    category: '',
    message: '',
    email: '',
    platform: '',
    appVersion: '',
    deviceOs: '',
}

export const Feedback = React.memo<Props>(function Feedback({ categories, platforms }) {
    const APP_STORE_URL = 'https://apps.apple.com/jp/app/%E3%81%B2%E3%81%9F%E3%81%99%E3%82%89%E6%95%B0%E5%AD%A6/id6757374941'
    const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.qboad.hitasura_math'

    const [form, setForm] = useState<FormState>(defaultForm)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [apiError, setApiError] = useState('')

    const categoryOptions = useMemo(
        () =>
            categories?.length
                ? categories
                : ['improvement', 'feature', 'bug', 'feedback', 'other'],
        [categories]
    )
    const platformOptions = useMemo(
        () => (platforms?.length ? platforms : ['ios', 'android', 'web', 'unknown']),
        [platforms]
    )

    const validate = (): Record<string, string> => {
        const nextErrors: Record<string, string> = {}
        if (!form.category) {
            nextErrors.category = 'カテゴリを選択してください。'
        }
        if (!form.message.trim()) {
            nextErrors.message = '内容を入力してください。'
        } else if (form.message.length > 2000) {
            nextErrors.message = '2000文字以内で入力してください。'
        }
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            nextErrors.email = 'メールアドレスの形式を確認してください。'
        }
        return nextErrors
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isSubmitting) return

        setSuccess(false)
        setApiError('')

        const nextErrors = validate()
        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors)
            return
        }

        setErrors({})
        setIsSubmitting(true)

        try {
            const requestBody = {
                category: form.category,
                message: form.message,
                ...(form.email ? { email: form.email } : {}),
                ...(form.platform ? { platform: form.platform } : {}),
                ...(form.appVersion ? { appVersion: form.appVersion } : {}),
                ...(form.deviceOs ? { deviceOs: form.deviceOs } : {}),
            }

            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(requestBody),
            })

            const responseBody: { errors?: Record<string, string[]>; message?: string } | null =
                await response.json().catch(() => null)

            if (!response.ok) {
                if (response.status === 429) {
                    setApiError('送信頻度が高すぎます。1分ほど空けて再度お試しください。')
                } else if (responseBody?.errors) {
                    const serverErrors: Record<string, string> = {}
                    Object.entries(responseBody.errors).forEach(([key, messages]) => {
                        if (Array.isArray(messages) && messages.length > 0) {
                            serverErrors[key] = messages[0]
                        }
                    })
                    setErrors(serverErrors)
                    setApiError(responseBody?.message ?? '入力内容を確認してください。')
                } else {
                    setApiError('送信に失敗しました。時間をおいて再度お試しください。')
                }
                return
            }

            setSuccess(true)
            setForm(defaultForm)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div
            className="min-h-screen bg-white text-[#64748B]"
            style={{ fontFamily: '"Zen Kaku Gothic New", "Yu Gothic", sans-serif' }}
        >
            <SiteHeader appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />
            <main className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 top-20 h-52 w-52 rounded-full bg-[#1E3A8A]/5" />
                    <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-[#2DD4BF]/20" />
                    <div className="absolute right-0 top-40 h-40 w-40 rounded-full bg-[#1E3A8A]/5" />
                </div>
                <div className="relative mx-auto max-w-4xl px-5 py-16 md:px-10">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-[#1E3A8A]/5 md:p-10">
                        <div className="space-y-3">
                            <p className="text-xs font-semibold tracking-[0.3em] text-[#64748B]">
                                CONTACT
                            </p>
                            <h1 className="text-3xl font-extrabold text-[#1E3A8A] md:text-4xl">
                                お問い合わせ
                            </h1>
                            <p className="text-sm text-[#64748B] md:text-base">
                                改善点やバグ報告、感想などをお寄せください。返信をご希望の場合のみメールアドレスを入力してください。
                            </p>
                        </div>

                        {success && (
                            <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                                送信ありがとうございました。内容を確認のうえ対応いたします。
                            </div>
                        )}
                        {apiError && (
                            <div className="mt-6 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                                {apiError}
                            </div>
                        )}

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <InputLabel htmlFor="category" value="カテゴリ（必須）" />
                                <select
                                    id="category"
                                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-theme"
                                    value={form.category}
                                    onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                                    required
                                >
                                    <option value="">選択してください</option>
                                    {categoryOptions.map((category) => (
                                        <option key={category} value={category}>
                                            {category === 'improvement'
                                                ? '改善点'
                                                : category === 'feature'
                                                  ? '追加機能'
                                                  : category === 'bug'
                                                    ? 'バグ報告'
                                                    : category === 'feedback'
                                                      ? '感想'
                                                      : 'その他'}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.category} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="message" value="内容（必須）" />
                                <TextArea
                                    id="message"
                                    name="message"
                                    className="mt-1 block w-full"
                                    rows={8}
                                    value={form.message}
                                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                                    maxLength={2000}
                                    required
                                />
                                <div className="mt-1 text-xs text-slate-500">
                                    {form.message.length}/2000
                                </div>
                                <InputError message={errors.message} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="メールアドレス（任意）" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full"
                                    value={form.email}
                                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <InputLabel htmlFor="platform" value="プラットフォーム（任意）" />
                                    <select
                                        id="platform"
                                        className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-theme"
                                        value={form.platform}
                                        onChange={(e) =>
                                            setForm((prev) => ({ ...prev, platform: e.target.value }))
                                        }
                                    >
                                        <option value="">選択なし</option>
                                        {platformOptions.map((platform) => (
                                            <option key={platform} value={platform}>
                                                {platform === 'ios'
                                                    ? 'iOS'
                                                    : platform === 'android'
                                                      ? 'Android'
                                                      : platform === 'web'
                                                        ? 'Web'
                                                        : '不明'}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.platform} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="appVersion" value="アプリバージョン（任意）" />
                                    <TextInput
                                        id="appVersion"
                                        name="appVersion"
                                        className="mt-1 block w-full"
                                        value={form.appVersion}
                                        onChange={(e) =>
                                            setForm((prev) => ({ ...prev, appVersion: e.target.value }))
                                        }
                                    />
                                    <InputError message={errors.appVersion} className="mt-2" />
                                </div>
                            </div>

                            <div>
                                <InputLabel htmlFor="deviceOs" value="OS / 端末（任意）" />
                                <TextInput
                                    id="deviceOs"
                                    name="deviceOs"
                                    className="mt-1 block w-full"
                                    value={form.deviceOs}
                                    onChange={(e) =>
                                        setForm((prev) => ({ ...prev, deviceOs: e.target.value }))
                                    }
                                />
                                <InputError message={errors.deviceOs} className="mt-2" />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2DD4BF]/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? '送信中...' : '送信する'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <WebFooter appStoreUrl={APP_STORE_URL} googlePlayUrl={GOOGLE_PLAY_URL} />
        </div>
    )
})

export default Feedback
