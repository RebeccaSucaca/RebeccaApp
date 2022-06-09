# RebeccaSu's First App

## 本次學習內容：

> - React Native Cli
> - Drawer Navigator
> - Bottom Tabs Navigator
> - Stack Navigator
> - FetchApi
> - README文件撰寫
> - 說明IOS、Android的上架流程與注意事項


## 影片演示
---

 - ### DrawerNavigation、TabNavigation

![](https://i.imgur.com/WBGcTJk.gif)

---

 - ### Portfolio：stackNavigation、fetchApi

![](https://i.imgur.com/v2KimWC.gif)

---

 - ### Home：fetchApi

![](https://i.imgur.com/HNVKcdq.gif)

---

 - ### Todo：todoList

![](https://i.imgur.com/fLGT7XV.gif)


## 目錄結構描述
---
```
├── android                     // android相關設定
├── ios                         // ios相關設定
├── src                         
│   ├── components              // 可共用組件區
│   ├── constants               // 開發環境
│   ├── drawer                  // 實驗
│   ├── img                     // 配置控制
│   ├── screen                  // 主要畫面
│       ├── HomeScreen          // HomeScreen使用組件
│       ├── TodoScreen          // TodoScreen使用組件  
│       ├── HomeScreen.js               
│       ├── NotificationsScreen.js         
│       ├── PortfolioScreen.js          
│       ├── PortfolioScreenDetail.js   
│       └── TodoScreen.js              
│   ├── style                   // 色彩設定
│   └── CustomHeader.js         // 所有頁面共用組件(Header)
├── App.js                   
├── babel.config.js             // 編譯
├── index.js                    // 入口文件
├── metro.config.js             // 打包配置文件
├── app.json               
├── logger-service.js           // 啟動日誌配置
├── node_modules                // 模組包
├── package-lock.json           // 模組管理
├── package.json                // 模組管理
└── README.md                   

```


## 專案時間紀錄
---
> ##### 由於操作期間皆為邊找資料邊實作，以下時間為大約估計值


Step1. 環境建置(使用ReactNative-Cli) [ 共10hr ]
- 環境架設（包含Xcode、Android Studio）
- 包含瀏覽ReactNative相關文章，包含：
    
    React Native Cli & Expo Cli差別

    ithelp.ithome教學文章(後續使用以React Native官方文件文主）

Step2. Navigation設定

- 環境設置（DrewNavigation部分）[ 3hr ]
- 實際操作&配置 [ 1hr ]
- ios&androd icon處理（環境設置）[ 2hr ]

 ------共 13 hrs

Step3. 版面風格配置

- 共用組件風格&色彩設定 [ 1.5hr ]


Step4. Api串接

- Home:json格式內容設計＋fetch+版面[ 3hr ]
- Home:json格式內容設計＋fetch+版面（包含detail頁面）[ 4hr ]
:::


Step5. 程式架構&README撰寫

- 程式架構說明 [ 30min ]
- README.md撰寫（格式與內容處理） [ 3hr ]

## 其他：踩坑微紀錄
---
- 各式環境打包、路徑、版本問題
- 專案位置問題（勿放在同步資料夾）
- Xcode＆Android讀取icon個別問題
- Xcode＆Android打包icon個別問題
- Xcode安裝套件要在ios資料夾pod install


## 補充：針對目前進度自評還可改進與思考部分
---
- PortfolioScreen&PortfolioScreenDetail中ftech的是同一個api文件，可在/src目錄中新增/hook資料夾並新增usePortfolioApi當作一個hook使用
- 增加設定主題色彩功能
- 若有登入功能的導覽頁面配置






