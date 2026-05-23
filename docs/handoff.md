# 設計交接文件 — 股神修練院 宣傳官網

## 1. 設計概念

暗黑奇幻金融學院。把「學股票」重新框架為一場在修練院中的修練：選股 → 綁定英雄 →
放置戰鬥 → 累積知識與報酬率。視覺要像精品日式 RPG 手遊行銷頁，而**不是** SaaS、
不是 crypto、不是真實券商交易平台、不是過飽和手遊廣告。

設計推理依據：UI/UX Pro Max 知識庫（唯讀參考，未複製原始碼／資產）：

- **Modern Dark (Cinema Mobile)** — 不用純黑、漸層基底、ambient blob、hairline
  border、radius 16、primary CTA 後方 glow、`cubic-bezier(0.16,1,0.3,1)` easing、
  press scale。
- **Luxury / Premium Brand** — 炭黑基底 + 金色 accent，金色須為 WCAG 校過的色值
  （非生硬亮金）。
- **App Store Style Landing** — Hero + device mockup → 截圖 → 特色 → CTA。
- **Funnel 3-step** — 流程段落後補 mini-CTA + 最終主 CTA。
- 反向教訓：Parallax Storytelling 在效能／無障礙上被標記為差 → 不做重 scroll 動畫、
  必備 `prefers-reduced-motion` fallback。

## 2. 色票（design token，定義於 styles.css `:root`）

| 角色 | 值 | 對比說明 |
|---|---|---|
| `--bg-deep` | `#070b14` | 漸層底端，避免純黑（OLED smear） |
| `--bg-base` | `#0c1322` | 主背景 |
| `--bg-elevated` | `#131c30` | 浮起面板 |
| `--parchment-1/2` | `#1b2236` / `#161d2f` | 羊皮紙卡片漸層 |
| `--gold` | `#e2c079` | 主金色；on `--bg-base` ≈ 9:1（AAA 文字／圖示） |
| `--gold-ink` | `#1c1407` | 金色按鈕上的深色文字（高對比） |
| `--fg` | `#eef1f7` | 主文字 ≈ 15:1 |
| `--fg-muted` | `#aab3c5` | 次文字 ≈ 6.5:1（> 4.5） |
| `--fg-faint` | `#7f8aa1` | 第三層，僅大字／輔助 |
| `--border` | `rgba(226,192,121,.14)` | 金色 hairline |

不使用霓虹綠／紅作漲跌色（crypto tell）；圖表線一律金色。

## 3. 字體方向

- 標題：**Noto Serif TC**（700/900）— 卷軸／學院的古典厚重感。
- 內文：**Noto Sans TC**（400/500/700）— 繁中螢幕可讀性。
- 兩者皆 Google Fonts，`display=swap`（避免 FOIT）。
- 刻意不採用知識庫預設推薦的 Inter（latin-only，對繁中不適用）。

## 4. 章節清單（index.html）

1. Sticky 導覽（行動 hamburger）
2. Hero — 單張主視覺 banner `assets/images/hero/hero-banner.png`
   （1794×876，整張展示用 banner，無 CTA）。轉換點由導覽列「參加封測」
   與底部「準備好了，前往封測」承擔。舊 CSS hero 版型保留但不再渲染。
3. 信任／免責 strip
4. 遊戲核心 — 3 張價值卡
5. 遊戲特色 — 6 張特色卡（每張獨立藝術導向 CSS 背景，見 §4.1）
6. 畫面預覽 — 4 張官方實機截圖（`.shot-frame` 高級外框 + 9:16 不變形）
7. 遊玩流程 — 4 步 + mini-CTA
8. 封測 CTA
9. FAQ — 原生 `<details>`，JS 增強為單開 accordion
10. Footer — 品牌／免責／法務連結（privacy / terms / contact）／版權

### 4.1 整站背景與特色卡背景（視覺升級）

- **整站背景**（`body`）：暗底 + 3 層低透明度金/古銅徑向光暈 + 深藍→暖銅
  垂直漸層；金 alpha ≤ 0.10，純靜態（reduced-motion 安全、輕量）。
  氛圍＝「黑夜書院中的金色修練」，內斂財富感、不偏黃不刺眼。
- **特色卡**：6 個 modifier class 各為對應遊戲畫面的「風格化迷你 UI」
  （非截圖／非隨機插畫），配色構圖唯讀參考遊戲檔：
  `--hero`→股市分頁 `market_tab.dart`、`--battle`→掛機 `idle_tab.dart`
  +`battle_hud_theme.dart`、`--ladder`→排行榜 `leaderboard_dialog.dart`、
  `--knowledge`→知識 `knowledge_tab.dart`+`antique_styles.dart`、
  `--wallpaper`→壁紙 `wallpaper_tab.dart`、`--cloud`→設定 `settings_tab.dart`
  （刻意銀色機械風,與其餘五卡古董金區隔）。四層堆疊 z0 卡背景 → z1
  `::after` 深→金 scrim（保證可讀）→ z2 內容 → z3 `::before` 金邊；
  各卡另加 modifier 專屬 inset 髮絲邊。純 CSS、無遊戲資產、無動畫、無相依。
  遊戲專案全程唯讀,未修改、未複製 Dart 程式碼。
- **未來實圖（可選）**：`assets/images/features/` + `feature-card--img`
  class + inline `--feat-img` url，scrim 自動沿用。詳見 README
  「視覺：整站背景與六大特色卡背景」。

子頁（共用 header / footer / styles.css / script.js，無新相依）：

- `privacy.html` — 隱私權政策，改寫自遊戲 `data_source_info.dart` 的
  `kLegalSections` §3–§8 + 網站／封測表單段落。
- `terms.html` — 使用條款，改寫自 `kLegalSections` §1、§2、§9–§12
  + 不保證報酬／模擬績效非真實／封測可能變動段落。
- `contact.html` — 封測 CTA（→ reurl）、遊戲內問題回報、回饋面向、
  官方聯絡管道 `TODO(contact-method)`。

子頁版面用 styles.css 新增的 `.page-hero` / `.legal` / `.legal-block`
/ `.legal-callout` / `.contact-card`，沿用既有 token，無新外部相依。

## 5. 已完成 / 上線前 TODO

已完成：

- [x] 封測報名網址設定為 `https://forms.gle/QdE8Z8xVG24DybPx6`（所有 `[data-beta-cta]`，新分頁）
- [x] 隱私／使用條款／聯絡頁建立並串接 footer（全站一致）
- [x] 法律文字改寫自遊戲專案既有「法律聲明與隱私權政策」，內容一致
- [x] 官方截圖去除雙副檔名並接上 showcase（`battle/market/record/ladder.png`，1080×1920）
- [x] favicon 接線：`assets/images/favicon.svg`（暗底金色燭線徽記）四頁一致
- [x] OG 分享圖 `assets/images/og-image.png`（1731×909）已接線 index + 三子頁；原稿 `og-image.svg` 保留

上線前仍待：

- [x] 四頁 `og:image`/`twitter:image` 改為絕對網址（GitHub Pages：`https://would2000.github.io/stock-god-academy-landing/...og-image.png`）
- [ ] （可選）為很舊瀏覽器補 32×32 `favicon.png/.ico` 後援 `TODO(favicon-fallback)`
- [ ] 公布正式對外聯絡管道並更新 `contact.html` `TODO(contact-method)`
- [ ] 確認 footer 版權名稱／年份 `TODO(copyright)`
- [ ] 正式上線前由人複審 privacy / terms 法律文字
- [ ] 真機檢視 Android Chrome / iOS Safari
- [ ] 用 reduced-motion 開啟狀態複檢動效全關
- [ ] Lighthouse a11y / SEO 快檢

## 6. 截圖（已接線，日後更換指引）

已接上 4 張 1080×1920 官方截圖。日後更換：以相同檔名覆蓋
`assets/screenshots/{battle,market,record,ladder}.png` 即可，`.shot-frame`
會自動以 `object-fit: cover` 呈現（建議維持 9:16，壓縮 PNG/WebP，長邊 ≤ 1920px）。
詳見 `README.md`「截圖（已完成接線）」。

## 7. 部署 checklist（GitHub Pages）

- [ ] push 至 GitHub repo
- [ ] Settings → Pages → branch `main` / root
- [ ] 確認所有資源相對路徑可解析（用本機 `python -m http.server` 先驗）
- [ ] 站台無 `_` 開頭目錄 → 暫不需 `.nojekyll`
- [ ] 自訂網域時加根目錄 `CNAME`
- [ ] 公開前再掃一次：無 API key、無 Apps Script URL、無私有路徑、無個資

## 8. 隔離聲明

本網站專案位於遊戲本體之外的獨立資料夾，未修改、未引用遊戲本體執行碼、
Apps Script、報價邏輯、雲端存檔、排行榜邏輯或既有遊戲資產。UI/UX Pro Max
參考 repo 僅 clone 於獨立的 `ai-skills` 路徑作唯讀設計參考，未混入本網站。
