# fuyuki-tokuda.github.io

徳田冬樹の個人ページです。GitHub Pages で `main` ブランチをそのまま公開しています（ビルド工程なし）。
`main` に push すると、1〜2分で https://fuyuki-tokuda.github.io/ に反映されます。

## ファイル構成

```
index.html              トップ（日本語）
research.html           研究一覧
publications.html       研究業績
about.html              略歴
research/*.html         各研究の詳細ページ
en/                     英語版（上と同じ構成）
style.css               全ページ共通のスタイル
assets/                 写真・図・業績一覧PDF
favicon.svg ほか         ブラウザのタブ・ホーム画面用アイコン
sitemap.xml, robots.txt 検索エンジン用
```

日本語版と英語版は別ファイルです。内容を変えるときは、`xxx.html` と `en/xxx.html` の両方を直してください。

## よくある更新

### お知らせを追加する

`index.html` と `en/index.html` の `<ul class="news">` の先頭に1行足します。新しいものが上です。

```html
<li><time>2026.11</time><p>（内容）<a href="https://doi.org/...">論文名</a>が IEEE ○○ に掲載されました。</p></li>
```

### 論文を追加する

`publications.html` と `en/publications.html` の該当する一覧（論文誌は `[J..]`、国際会議は `[C..]`）の先頭に足します。
番号は既存の最大値 +1 を付けます（既存の番号を振り直す必要はありません）。自分の名前は `<b>F. Tokuda</b>` で太字にします。

```html
<li><span class="num">[J19]</span>
  <span>A. Author, <b>F. Tokuda</b> and K. Kosuge, “<a href="https://doi.org/...">Title</a>,” IEEE Journal, vol. 1, pp. 1-10, 2026.</span></li>
```

受賞などの注記は、末尾に `<span class="award">［Best Paper Award］</span>` を付けます。
`assets/publications.pdf`（全項目の一覧）は別途差し替えてください。

### 研究を追加する

1. `research/` に詳細ページを作ります。既存のページ（例：`research/fixture-free-sewing.html`）をコピーして書き換えるのが簡単です。英語版も `en/research/` に作ります。
2. `research.html` の `<div class="project-grid">` に、既存と同じ形のカード（`<article class="card project-card has-img">`）を足します。
3. トップの「研究テーマ」に載せる場合は、`index.html` の `<ul class="topics">` に1行足します。
4. `sitemap.xml` に新しいページのURLを足します。

### 写真を足す・差し替える

`assets/` に置きます。横幅 1000〜1600px 程度の JPEG にすると表示が軽くなります。
一覧のサムネイルは3:2の枠に全体が収まるように表示されます。大きな図から一部だけ使いたい場合は、切り出した画像を `xxx-thumb.jpg` として別に置きます。

## 表示の確認

ブラウザで HTML ファイルを直接開けば、手元で確認できます（Google Fonts と動画はオンライン時のみ）。
