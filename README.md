# Portfolio Website

Next.js で構築されたモダンでレスポンシブなポートフォリオサイトです。フロントエンドエンジニアとしての作品、スキル、経験を紹介しています。

## 特徴

- **モダンなデザイン**: 滑らかなアニメーションを備えたクリーンでミニマルなデザイン
- **レスポンシブ対応**: あらゆるデバイスで動作する完全レスポンシブデザイン
- **ダークモード**: システム設定に連動するダークモード対応（スムーズなトランジション付き）
- **お問い合わせフォーム**: EmailJS 統合による機能的なお問い合わせフォーム
- **パフォーマンス最適化**: 高速な読み込みのための静的サイト生成（SSG）
- **型安全性**: より良い開発体験のための TypeScript 使用
- **アクセシビリティ**: 適切なセマンティック HTML と ARIA ラベルによる WCAG 準拠

## 技術スタック

### コア技術

- **[Next.js 16](https://nextjs.org/)** - App Router を備えた React フレームワーク
- **[React 19](https://react.dev/)** - UI ライブラリ
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全性

### スタイリング & UI

- **[Tailwind CSS v4](https://tailwindcss.com/)** - ユーティリティファーストの CSS フレームワーク
- **[Shadcn UI](https://ui.shadcn.com/)** - 高品質なコンポーネントライブラリ
- **[Framer Motion](https://www.framer.com/motion/)** - アニメーションライブラリ
- **[Lucide React](https://lucide.dev/)** - アイコンライブラリ

### フォーム & メール

- **[React Hook Form](https://react-hook-form.com/)** - フォーム状態管理
- **[EmailJS](https://www.emailjs.com/)** - クライアントサイドメールサービス

### その他

- **[next-themes](https://github.com/pacocoursey/next-themes)** - テーマ管理
- **[Geist Font](https://vercel.com/font)** - モダンなタイプフェース

## セットアップ

### 必要な環境

- Node.js 18 以上と npm/yarn/pnpm

### インストール手順

1. リポジトリをクローン

```bash
git clone <your-repo-url>
cd my-portfolio
```

2. 依存関係をインストール

```bash
npm install
```

3. 環境変数を設定

プロジェクトルートに `.env.local` ファイルを作成してください：

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**EmailJS の設定方法：**

1. [EmailJS](https://www.emailjs.com/)でアカウントを作成
2. Email Service（Gmail、Outlook など）を作成
3. 以下の変数を含む Email Template を作成：
   - `{{from_name}}` - 送信者名
   - `{{from_email}}` - 送信者メールアドレス
   - `{{message}}` - メッセージ内容
4. EmailJS ダッシュボードから認証情報を取得

5. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📦 ビルド & デプロイ

### 本番用ビルド

```bash
npm run build
```

これにより、`out` ディレクトリに静的エクスポートが生成され、任意の静的ホスティングサービスにデプロイ可能な状態になります。

### デプロイ

このプロジェクトは静的エクスポート用に設定されており、以下のサービスにデプロイできます：

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- その他の静的ホスティングサービス

#### Vercel へのデプロイ

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

または、Vercel CLI を使用：

```bash
npm i -g vercel
vercel
```

## プロジェクト構成

```
my-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── sections/         # ページセクション
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   └── contact.tsx
│   └── ui/               # Shadcn UIコンポーネント
├── lib/                  # ユーティリティ関数
└── public/               # 静的アセット
```
