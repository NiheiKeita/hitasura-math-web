<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Tests\TestCase;

class FeedbackApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_feedback_requires_required_fields(): void
    {
        $this->withoutMiddleware(ThrottleRequests::class);

        $response = $this->postJson('/api/feedback', []);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['category', 'message']);
    }

    public function test_feedback_rejects_spammy_message(): void
    {
        $this->withoutMiddleware(ThrottleRequests::class);

        $response = $this->postJson('/api/feedback', [
            'category' => 'feedback',
            'message' => 'http://example.com http://example.com http://example.com',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['message']);
    }
}
