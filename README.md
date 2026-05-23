# 股神修練院 — 宣傳官網

「股神修練院」的獨立宣傳 Landing Page。一款**奇幻股票學習放置 RPG**手機遊戲的行銷網站。

> 本遊戲內容僅供學習與娛樂，不構成任何投資建議，也不會進行真實下單。

純靜態網站：HTML / CSS / vanilla JS，無建置流程、無套件管理、無分析、無遠端請求。
與遊戲本體專案**完全獨立**，未來會成為單獨的 GitHub repository。

---

## 專案用途

向台灣玩家（股市新手、休閒手遊玩家）介紹遊戲核心、特色、玩法流程，並導流到封閉測試報名。

設計方向：暗黑奇幻金融學院 — 深藍／炭黑底、黃銅金點綴、羊皮紙面板、精品日式 RPG 手遊氛圍。
設計決策參考 UI/UX Pro Max 設計知識庫（Modern Dark Cinema + Luxury/Premium + App-Store Landing），僅作為設計推理依據，未複製其原始碼或受版權資產。

---

## 資料夾結構

```
stock-god-academy-landing
├─ index.html          # 首頁，含九大區塊
├─ privacy.html        # 隱私權政策（改寫自遊戲內法律聲明）
├─ terms.html          # 使用條款（改寫自遊戲內法律聲明）
├─ contact.html        # 封測聯絡與意見回饋
├─ styles.css          # 設計 token、RWD、動效、a11y、法律頁樣式
├─ script.js           # 行動選單、FAQ accordion、reduced-motion、beta 防呆
├─ README.md
├─ assets
│  ├─ images
│  │  ├─ favicon.svg   # 站台 favicon（已接線於四頁）
│  │  ├─ og-image.svg  # OG 分享圖「設計原稿」
│  │  ├─ og-image.png  # ✅ 正式 OG 分享圖 1731×909（≈1.91:1），四頁已接線
│  │  ├─ hero          # 首頁 hero 主視覺
│  │  │  └─ hero-banner.png        # 1794×876，整張主視覺 banner（無 CTA）
│  │  └─ features      # 六大特色卡「可選」實圖落點（預設純 CSS，見下方）
│  └─ screenshots      # 正式遊戲截圖（已加入，見下方說明）
└─ docs
   └─ handoff.md        # 設計交接文件
```

## 目前狀態

- ✅ 封測報名網址已設定：`https://forms.gle/QdE8Z8xVG24DybPx6`（所有 `[data-beta-cta]` 按鈕，新分頁開啟）
- ✅ 法律／聯絡頁已建立：`privacy.html`、`terms.html`、`contact.html`，footer 已串接
- ✅ 隱私／條款內容改寫自遊戲專案內既有「法律聲明與隱私權政策」（內容一致）
- ✅ 官方截圖已接線：`battle/market/record/ladder.png`（1080×1920），首頁 showcase 以實機畫面呈現
- ✅ OG 分享圖已接線：`assets/images/og-image.png`（1731×909），index 及三個子頁一致
- ✅ 整站背景升級為「黑夜書院金色修練氛圍」；六大特色卡各有獨立 CSS 藝術背景
- ✅ favicon 已接線（`assets/images/favicon.svg`，四頁一致）
- ✅ 首頁 hero 為單張主視覺 banner（純展示，CTA 由導覽列與底部按鈕承擔）

---

## 首頁 Hero（純展示 banner）

Hero 區為單張主視覺 banner `assets/images/hero/hero-banner.png`（1794×876）。
**圖內已包含標題、副標、英雄群像與遊戲實機畫面**，無 CTA 按鈕；轉換點由
導覽列「參加封測」與頁面底部「準備好了，前往封測」按鈕承擔。

**日後更換 hero 圖**：覆蓋 `assets/images/hero/hero-banner.png` 即可。
- 同步更新 [`index.html`](index.html) 內 `<img>` 的 `width` / `height` 屬性
  為新圖實際尺寸（防 CLS）。
- 建議維持近似長寬比（約 2:1），保持頁面整體節奏一致。
- ✅ OG 圖已完成：`og-image.png`（1731×909）已接線於 index 及三子頁

---

## 分享資產（favicon / OG 圖）

**favicon** — `assets/images/favicon.svg`（暗底金色燭線徽記，小尺寸可辨）。
`index.html / privacy.html / terms.html / contact.html` 皆以
`<link rel="icon" type="image/svg+xml">` + `apple-touch-icon` 接線。
更換：直接覆蓋同名檔即可；如要相容很舊的瀏覽器，可另匯出 32×32
`favicon.png` 並在各頁加一行 `<link rel="icon" sizes="32x32" href="...">`。

**OG 分享圖** — ✅ 已接線。正式圖 `assets/images/og-image.png`
（**1731×909，≈1.91:1**，PNG，約 2.38 MB，符合 OG 規格、在爬蟲大小上限內）；
設計原稿保留於 `assets/images/og-image.svg`。
- 已接線頁面：`index.html`、`privacy.html`、`terms.html`、`contact.html`
  （`og:image` + `twitter:image`，並附 `og:image:type/width/height/alt`）。
- ✅ `og:image` / `twitter:image` 已使用**絕對網址**
  `https://would2000.github.io/stock-god-academy-landing/assets/images/og-image.png`
  （爬蟲支援度最佳；`TODO(og-abs-url)` 已完成）。如日後改網域，需同步更新四頁此網址。
- 更換分享圖：覆蓋 `og-image.png` 同名檔；若尺寸改變，記得同步更新四頁的
  `og:image:width` / `og:image:height`。可由 `og-image.svg` 重新匯出。
- ⏳ 仍待補：正式對外聯絡管道、footer 版權字、上線前法律複審
  （可選：favicon 舊瀏覽器 32×32 後援）

---

## 視覺：整站背景與六大特色卡背景

**整站背景**（`styles.css` 的 `body`）：暗色為底，疊加三層低透明度金／古銅
徑向光暈（右上暖光、左中銅霧、下方光綻）+ 深藍→暖銅垂直漸層。全部為**靜態
gradient**（無動畫 → reduced-motion 安全、輕量），金色 alpha 皆 ≤ 0.10，
維持文字可讀、不偏黃不刺眼。`.section-alt`（特色區所在）另加極淡金色暈染。

**六大特色卡**：每張卡用一個 modifier class 套不同的藝術導向 CSS 背景，
四層結構：

| 層 | 來源 | 作用 |
|---|---|---|
| z0 | 卡片 `background-image` | 各卡專屬藝術 gradient（深色基調） |
| z1 | `.feature-card::after` | 深色→金 readability scrim（保證對比） |
| z2 | 內容（icon / h3 / p） | 永遠在 scrim 之上，高對比 |
| z3 | `.feature-card::before` | 頂層金色描邊 |

**每張卡是對應遊戲畫面的「風格化迷你 UI」**（非截圖、非隨機插畫）。
配色與構圖參考遊戲專案下列檔案（**唯讀**，未修改、未複製程式碼）：

| class | 網站系統 | 對應遊戲畫面 | 唯讀參考檔 | 迷你 UI 線索 |
|---|---|---|---|---|
| `.feature-card--hero` | 英雄選股 | 股市分頁 | `app/lib/screens/tabs/market_tab.dart` | 石墨/藏青 4 段底、黃銅鑲邊、燭線+細金網格、價格銘牌光 |
| `.feature-card--battle` | 放置戰鬥 | 掛機畫面 | `app/lib/screens/tabs/idle_tab.dart`、`widgets/battle_hud_theme.dart` | 深靛底、青色 HUD 條、金幣點、DPS 條、戰鬥日誌列、關卡徽光 |
| `.feature-card--ladder` | 股神天梯 | 天梯排行榜 | `app/lib/widgets/leaderboard_dialog.dart` | 胡桃木底、左側金/銀/銅獎牌徽、橫向名次列+黃銅分隔線 |
| `.feature-card--knowledge` | 股票知識 | 知識分頁 | `app/lib/screens/tabs/knowledge_tab.dart`、`widgets/antique_styles.dart` | 胡桃/咖啡底、右上檯燈暈、書架直紋、分類膠囊列、書脊橫軌 |
| `.feature-card--wallpaper` | 壁紙收藏 | 壁紙分頁 | `app/lib/screens/tabs/wallpaper_tab.dart` | 桃花心木底、頂部聚光、畫廊網格、酒紅書脊帶、金邊框 |
| `.feature-card--cloud` | 雲端存檔 | 設定頁 | `app/lib/screens/tabs/settings_tab.dart` | **刻意銀色機械風**：拉絲鋼板、青 LED 開關、琥珀隱私標記 |

共用樣式參考：`app/lib/config/app_theme.dart`、`app/lib/widgets/antique_styles.dart`、
`app/lib/widgets/battle_hud_theme.dart`。色票均改寫為網站 CSS gradient，
未直接引用遊戲資產。各卡另加一條 modifier 專屬 `inset` 髮絲邊（黃銅/青/鋼）。

**日後換成真實插畫（可選，非必要）**：把圖放進
`assets/images/features/`，於該 `<li>` 加上 `feature-card--img` class 並設
inline 變數，例如：

```html
<li class="feature-card feature-card--hero feature-card--img hover-lift"
    style="--feat-img:url('assets/images/features/hero.webp')">
```

`::after` scrim 會自動疊在實圖上維持可讀性，無需改 CSS。建議圖偏暗、
長邊 ≤ 1280px、WebP；focal point 置中（卡片用 `background-size:cover`、
`background-position:center`）。

---

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。若要更貼近正式環境（正確處理相對路徑），用任一靜態伺服器：

```bash
# Python 3
python -m http.server 8080
# 然後開 http://localhost:8080
```

```bash
# Node（若已安裝）
npx serve .
```

不需要 `npm install`，沒有相依套件。

---

## 截圖（已完成接線）

`assets/screenshots/` 內 4 張官方實機截圖已接上首頁 showcase：

| 檔案 | 對應畫面 | 尺寸 | alt |
|---|---|---|---|
| `battle.png` | 戰鬥畫面 | 1080×1920 | 股神修練院放置戰鬥畫面 |
| `market.png` | 股市畫面 | 1080×1920 | 股神修練院股市選股畫面 |
| `record.png` | 績效紀錄 | 1080×1920 | 股神修練院績效紀錄畫面 |
| `ladder.png` | 股神天梯 | 1080×1920 | 股神修練院股神天梯排行榜畫面 |

呈現方式：`.shot-frame` 高級外框（漸層邊、金色微光、頂部光澤）包住 `<img class="shot-canvas">`，
`aspect-ratio: 9/16` + `object-fit: cover`（與 1080×1920 原比例一致，**不裁切、不變形**），
`width/height` 屬性防 CLS，`loading="lazy"`、`decoding="async"`。

**日後更換截圖**：以相同檔名覆蓋 `assets/screenshots/*.png` 即可；維持 9:16
（或任意比例，框會自動 cover），輸出壓縮 PNG 或 WebP，長邊建議 ≤ 1920px。
Hero 區手機 mockup 仍為 CSS 繪製，作為氛圍保留。

> 請勿從遊戲本體專案搬移檔案；截圖請另行匯出後放入本資料夾。

---

## 待設定連結（上線前）

| 項目 | 位置 | 標記 | 狀態 |
|---|---|---|---|
| 封測報名網址 | 所有 `[data-beta-cta]` `href` | — | ✅ 已設定 `https://forms.gle/QdE8Z8xVG24DybPx6` |
| 隱私／條款／聯絡頁 | footer + `privacy/terms/contact.html` | — | ✅ 已建立並串接 |
| 截圖接線 | `index.html` showcase 區 | — | ✅ 已完成（4 張實機畫面） |
| OG 分享圖 PNG（1731×909） | `assets/images/og-image.png`（四頁已接線） | — | ✅ 已完成 |
| OG/Twitter 絕對網址 | 四頁 `og:image`/`twitter:image` | — | ✅ 已完成（GitHub Pages 網址） |
| favicon | `assets/images/favicon.svg`（四頁已接線） | — | ✅ 已完成 |
| 正式對外聯絡管道 | `contact.html` | `TODO(contact-method)` | ⏳ 待公布 |
| 版權名稱／年份 | 各頁 footer | `TODO(copyright)` | ⏳ 待確認 |
| 上線前法律複審 | privacy / terms | — | ⏳ 建議正式上線前由人複審 |

封測連結已是有效 URL，`script.js` 的防呆守衛現為 no-op，僅在 `href` 退回空值或 `#` 時才會擋下。

---

## GitHub Pages 部署

此為純靜態站，可直接用 GitHub Pages：

1. 建立 GitHub repository，把本資料夾內容 push 上去。
2. Settings → Pages → Source 選 `Deploy from a branch`，分支 `main`、資料夾 `/ (root)`。
3. 等待部署完成，網址形如 `https://<帳號>.github.io/<repo>/`。
4. 站台無 `_` 開頭目錄，**不需要** `.nojekyll`；如日後新增則補上空檔 `.nojekyll`。
5. 若改用自訂網域，在根目錄加 `CNAME` 檔。

無伺服器邏輯、無環境變數、無金鑰，可安全公開。
