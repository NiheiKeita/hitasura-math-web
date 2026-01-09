<?php

namespace App\Http\Requests;

use App\Models\Feedback;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class FeedbackStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, array<int, string>>
     */
    public function rules(): array
    {
        return [
            'category' => ['required', 'string', 'in:' . implode(',', Feedback::CATEGORIES)],
            'message' => ['required', 'string', 'min:1', 'max:2000'],
            'email' => ['nullable', 'string', 'email', 'max:255'],
            'platform' => ['nullable', 'string', 'in:' . implode(',', Feedback::PLATFORMS)],
            'appVersion' => ['nullable', 'string', 'max:50'],
            'deviceOs' => ['nullable', 'string', 'max:50'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            $message = strtolower((string) $this->input('message', ''));
            if (substr_count($message, 'http') >= 3) {
                $validator->errors()->add('message', 'URLを複数含む内容は送信できません。');
            }
        });
    }
}
