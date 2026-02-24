# factor-app

因数分解の解法パターンを題材にした、シンプルな4択クイズアプリです。  
問題に回答すると正誤と解説が表示され、最後にスコアを確認できます。

## 主な機能

- 因数分解クイズの出題
- スタート画面で問題数・難易度を選択して開始（難易度は式中の係数・定数の大きさで判定）
- 4択回答（共通因数 / 公式 / たすき掛け / 置換）
- 回答後の解説表示
- スコア表示とリトライ

## 主要ファイル構成

- `app/page.tsx`  
  クイズ進行（現在の問題、回答状態、スコア管理）と画面表示を担当
- `components/QuestionCard.tsx`  
  問題文と選択肢ボタンの表示を担当
- `data/questions.ts`  
  問題データ（問題文、正解インデックス、解説）を管理

## 技術スタック

- Next.js (App Router)
- React / TypeScript
- Tailwind CSS

## 開発手順

```bash
npm ci
npm run dev
```

ブラウザで `http://localhost:3000` を開くと確認できます。

## 補足

このリポジトリの `app/layout.tsx` では `next/font/google` を使用しています。  
オフライン環境や接続制限のある環境では、Google Fonts の取得に失敗して `npm run build` が失敗する場合があります。
