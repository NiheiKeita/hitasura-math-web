<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FeedbackStoreRequest;
use App\Models\Feedback;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class FeedbackController extends Controller
{
    public function store(FeedbackStoreRequest $request): JsonResponse
    {
        $data = $request->validated();
        $ipKey = $request->ip() ?: 'unknown';
        $rateKey = 'feedback:cooldown:' . $ipKey;

        if (! Cache::add($rateKey, true, now()->addSeconds(30))) {
            return response()->json([
                'success' => false,
                'message' => '送信頻度が高すぎます。30秒ほど空けて再度お試しください。',
            ], 429);
        }

        $feedback = Feedback::create([
            'category' => $data['category'],
            'message' => $data['message'],
            'email' => $data['email'] ?? null,
            'platform' => $data['platform'] ?? null,
            'app_version' => $data['appVersion'] ?? null,
            'device_os' => $data['deviceOs'] ?? null,
            'status' => 'new',
            'user_agent' => $request->userAgent(),
            'ip_hash' => $request->ip() ? hash('sha256', $request->ip()) : null,
        ]);

        $recipient = config('app.email') ?: config('app.admin_email');
        if ($recipient) {
            $subject = 'ひたすら数学 お問い合わせ';
            $lines = [
                'カテゴリ: ' . $feedback->category,
                '内容:',
                $feedback->message,
                '',
                'メール: ' . ($feedback->email ?? '-'),
                'プラットフォーム: ' . ($feedback->platform ?? '-'),
                'アプリバージョン: ' . ($feedback->app_version ?? '-'),
                'OS/端末: ' . ($feedback->device_os ?? '-'),
                'UserAgent: ' . ($feedback->user_agent ?? '-'),
                'IP Hash: ' . ($feedback->ip_hash ?? '-'),
                'ID: ' . $feedback->id,
                '日時: ' . $feedback->created_at?->toDateTimeString(),
            ];

            try {
                $mailer = config('mail.default', 'smtp');
                if ($mailer === 'smtp' && ! config('mail.mailers.smtp.username')) {
                    $mailer = 'log';
                }

                Mail::mailer($mailer)->raw(implode("\n", $lines), function ($message) use ($recipient, $subject) {
                    $message->to($recipient)->subject($subject);
                });
            } catch (\Throwable $exception) {
                Log::warning('Feedback mail failed.', [
                    'error' => $exception->getMessage(),
                ]);
            }
        }

        return response()->json([
            'success' => true,
            'id' => $feedback->id,
        ]);
    }
}
