# hitasura-math-web

## 環境変数

`.env` に以下を設定してください。

- `APP_URL`
- `APP_EMAIL` (問い合わせ通知の送信先)
- `DB_CONNECTION` / `DB_DATABASE` / `DB_USERNAME` / `DB_PASSWORD`
- `ADMIN_ID` / `ADMIN_PASS` (管理画面ログイン用の簡易ID/パスワード)

## DB初期化

```
cd src
php artisan migrate
```

## 開発起動方法

```
docker compose up -d
cd src
composer install
php artisan key:generate
npm ci
npm run dev
```
 
