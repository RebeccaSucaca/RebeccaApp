# RebeccaSu's First App


## 本次目標：

> - React Native Cli
> - Drawer Navigator
> - Bottom Tabs Navigator
> - Stack Navigator
> - FetchApi
> - README.md撰寫
> - 說明IOS、Android的上架流程與注意事項

* ##### 額外完成 : Stack Navigator、Todolist

## 影片展示
---

#### [► 點我觀看](https://www.canva.com/design/DAFDKuhwv0Y/00SdrgbkVDhrLK5KC5z-JQ/watch?utm_content=DAFDKuhwv0Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)



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


Step1. 環境建置(使用ReactNative-Cli) [ 10hr ]
- 環境架設（包含Xcode、Android Studio）
- 包含瀏覽ReactNative相關文章，包含：
    
    React Native Cli & Expo Cli差別

    ithelp.ithome教學文章(後續使用以React Native官方文件文主）

Step2. Navigation設定

- 環境設置（Drawer Navigation部分）[ 3hr ]
- 實際操作&配置 [ 1hr ]
- ios&android icon處理（環境設置）[ 2hr ]

 ------共 13 hrs

Step3. 版面風格配置

- 共用組件風格&色彩設定 [ 1.5hr ]


Step4. Api串接

- Home:json格式內容設計＋fetch+版面[ 3hr ]
- Home:json格式內容設計＋fetch+版面（包含detail頁面）[ 4hr ]
:::


Step5. 程式架構&README撰寫

- 程式架構說明 [ 30min ]
- README.md撰寫（格式與內容處理） [ 5hr ]

## 項目展示
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



## 其他：踩坑微紀錄
---
- 各式環境打包、路徑、版本問題
- 專案位置問題（勿放在同步資料夾）
- Xcode＆Android讀取icon個別問題
- Xcode＆Android打包個別問題
- Xcode安裝套件要在ios資料夾pod install


## 補充：針對目前進度自評還可改進與思考部分
---
- PortfolioScreen & PortfolioScreenDetail中ftech的是同一個api文件，可在/src目錄中新增/hook資料夾並新增usePortfolioApi當作一個hook使用
- 增加設定主題色彩功能
- 若有登入功能的導覽頁面配置


## IOS、Android的上架流程與注意事項
---
> ios流程

* Step.1：準備已付費的開發者賬號
    * 蘋果開發者中心 >「 Account 」> 登入
* Step.2：生成發佈證書
    * 生成證書
    * 選擇生産證書（選擇App Store and Ad Hoc）>「 Continue 」
        * 上傳CSR文件（獲取證書用：回本機電腦操作）
        * 回到瀏覽器，選擇CertificateSigningRequest.certSigningRequest 文件 
    * 下載生成的證書（cer字尾的文件）
        * ！！！註意：證書只能下載一次。點選下載後，若關閉頁麵就不能再回到下載頁面了。
* Step.3：建立App IDs和綁定App的Bundle Identifier
    * 注意！Bundle Identifier（不能有符號，只能英文加數字）
* Step.4：生成描述文件（把證書和Bundle Identifier關聯起來）
    * 到Provisioning Profiles（iOS, tvOS, watchOS）添加證書
        * App ID使用剛剛建立的
        * Profile Name輸入
* Step.5：在App Store開闢空間
    * 名稱不要太大眾化，不容易審核通過
    * 價格只能暫時免費（開發者帳號有納稅契約）
    * APP各尺寸截圖
    * 填寫各式內容
* Step.6：在Xcode中打包專案

注意事項：
確認Xcode＆ MacOS系統是否為正版（beta版本不行）
蘋果一個開發者賬號只能有1-2個開發（測試）證書，2-3個生産（PO）證書）

---
> Android流程

* Step.1：設定App Signing（應用程式簽署金鑰）
    * 憑證(Certificates) and Keystores
    * Google Play App Signing
    * 如何設定Google Play App Signing
* Step.2：建立Keystore（保存未來要上架用的upload key）
* Step.3：設定Release Config（Gradle設定）
    * 設定Gradle參數
    * 在Gradle Config中新增Signing Config
* Step.4：產生簽署過的APK檔
    * 編輯app/build.gradle、applicationId、versionCode及versionName
    * 執行build script
* Step.5：上傳APK至Google Play Console
    * 到Google Play Console >「 版本管理 」>「 應用程式版本 」
    * 選擇群組 >「 管理 」
        * 測試階段，選「內部測試群組」
        * 若要正式上架，選「正式版測試群組」
    * 選擇「建立新版本」：
    * 填寫Release Note >「 審核 」


##### 上傳完成，upload key資訊出現在Console裡，表示upload key設定一併設定完成


#### 參考：
#### https://reurl.cc/M0GOvX
#### https://robby570.tw/backup-react-native-deploy-to-store/
#### https://www.twblogs.net/a/5b7c072b2b71770a43d8f1fd




