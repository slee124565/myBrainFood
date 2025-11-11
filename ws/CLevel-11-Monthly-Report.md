# AI 輔助 PPT 製作流程嘗試

1. 手動編輯文稿內容【定目標 + 搭骨架 + 填內容】 
2. 透過 AI 依照教學文稿核心，提煉內容與設計 ppt 架構
3. 透過 gamma.app AI 工具產生 PPT & 匯出 Google Slides
4. 透過 Google Slide Web UI 調整畫面完成初稿


**主題：重塑品牌信心，打造安全可信的 Ferqo 智慧家庭產品**
 

## 全球資安法規趨勢與機會
市場殷切的非中國製的產品需求，源自於越來越嚴格的物聯網資訊安全的政府監管，目前我們潛在客戶裡對於資安的要求，收集起來就包含著主要三種：新加坡 CSA 的 Cybersecurity Labelling Schema (CLS)、日本 JC-STAR（Japan Cyber-Security Technical Assessment Requirements）以及全球通用的歐盟 ETSI EN 303 645 消費者物聯網網路安全標準，協助同仁做一個快速的檢視來了解一下這些規範彼此之間的關係

1. **日本 JC-STAR**
- 日本資訊處理推進機構（IPA）推出的物聯網（IoT）產品資安標章制度
- 參考了國際標準如ETSI EN 303 645 與 NISTIR 8425
- 定義了四個階級，實際上只有 STAR-1 有規格文件

2. **新加坡 CSA CLS**
- 新加坡網路安全局 Cybersecurity Labelling Scheme（CLS）
- 設計了四個層級（Level Tier）
- L3/Daikin MG1 要求 CLS Level-2
  - ETSI EN 303 645 
  - SG IMDA 物聯網網路安全指南

3. 歐盟 ETSI EN 303 645
- 全球適用的消費者物聯網網路安全標準，涵蓋所有消費者物聯網設備，同時建立良好的安全基線
- 標準設定13條高級建議，制定了68條規定（包括33條強制性要求和35條建議）。

這些消費者物聯網網路安全標準的核心就是要求設備開發商在開發階段，就需要具備 Security by Design 設計理念，在產品研發初期就需要將網路資訊安全的基本要求功能內涵在產品核心。對此我們有幾個策略正在執行

- Security Design with GenAI Augmentation 
- AI 資安落實更為重要
  * 傳資料前會移除所有可能識別到個人或家庭的資訊（如 IP 位址、設備的自訂名稱）
  * k-匿名 (k-anonymity) 或 差分隱私 (Differential Privacy) 的技術導入

## 研發進度與技術信心

1. **Ferqo MG1X 衝刺計畫**

   * 成立跨職能「產品＋品質」衝刺小組。
   * 目標：月底前推出 **MG1X MVP**，以 HA + MG1 軟體與 RPi 硬體整合方案回應市場。
   * 意義：用行動重建經銷商信任，展現費米品牌韌性。

2. **MFi 合規專案改革**

   * 立即導入 **Apple Business ID 制度**，全面符合法規要求。
   * 設立國際大廠溝通窗口與時程追蹤機制。
   * 強化產品設計初期的合規思維，將「Security by Design」納入研發標準流程。

## 品質驗證與信任重建 

分享要點如下：
- 品質是設計出來的 by 品質管理大師戴明
- 品質應從產品設計和製程設計階段就開始建立，透過系統化的方法來預防問題，而不是僅靠事後檢驗
- 目前正是導入時機
- QA Team Independent Test with CI/CD Prcess
- Weekly Qaulity Review

## 未來 Ferqo AI 發展技術策略

研發團隊針對「Ferqo 智慧管家 v1.0」MVP 多次 Demo 經驗的總結，歸納出了未來版本的新架構
- Hyper Architecture : Generative AI + Predictive AI

設計內涵如下：
```
## **二、低成本異常偵測算法（不用生成式 AI）**

### **✅ 1\. 統計式方法（簡單快速）**

最容易上線的一類方法，不需模型訓練。

`# 假設你有每分鐘的功率數據`  
`# 方法1: Z-score`  
`mean = df['power'].mean()`  
`std = df['power'].std()`  
`df['z'] = (df['power'] - mean) / std`  
`df['is_anomaly'] = df['z'].abs() > 3  # 超過3σ判定異常`

或用 **移動平均 \+ 閾值偵測**

`rolling_mean = df['power'].rolling(30).mean()`  
`df['anomaly'] = (df['power'] - rolling_mean).abs() > 100`

優點：簡單快速  
缺點：對於週期性變化不敏感（例如白天高、晚上低）

---

### **✅ 2\. 時間序列預測 \+ 殘差判斷**

可以使用預測模型預測「下一時刻應該是多少」，再比較實際值與預測值差異。

常見模型：

* **ARIMA / SARIMA**：適合單一裝置、穩定週期  
* **Prophet (Facebook)**：自動處理週期與季節性  
* **LSTM / GRU（深度學習）**：對長期時序有記憶效果（較重）

範例（Prophet）：

`from prophet import Prophet`  
`m = Prophet()`  
`m.fit(df.rename(columns={"timestamp": "ds", "power": "y"}))`  
`future = m.make_future_dataframe(periods=60, freq='min')`  
`forecast = m.predict(future)`

`df['residual'] = df['power'] - forecast['yhat'][:len(df)]`  
`df['is_anomaly'] = abs(df['residual']) > 3 * forecast['yhat_std'][:len(df)]`

優點：對週期性與長期趨勢有較好偵測力  
缺點：每個設備需獨立建模（但仍比生成式 AI 便宜許多）

---

### **✅ 3\. 無監督式學習（不需標籤）**

可用於多裝置、自動化偵測：

* **Isolation Forest**  
* **One-Class SVM**  
* **Autoencoder（自編碼器）**

範例（Isolation Forest）：

`from sklearn.ensemble import IsolationForest`

`X = df[['power']].values`  
`model = IsolationForest(contamination=0.01)`  
`df['anomaly'] = model.fit_predict(X)`

優點：適用多裝置自動學習正常行為  
缺點：需足夠歷史數據（最好至少一週）

---

## **三、預測式 AI（長期應用）**

當收集了充足資料（例如數百用戶 × 每5分鐘數據），可以考慮：

1. **分群（Clustering）**：找出相似用戶群（例如「日夜用電型」、「高峰晚間型」）。  
2. **異常得分模型（Anomaly Score）**：訓練 Autoencoder / Transformer 預測下一步能量，再比較差值。  
3. **行為預測模型**：預測某設備何時會開啟、多久未開關屬於異常。

👉 若資源有限，可先設計一個 **Hybrid 系統：**

* Edge（如 gateway）使用統計式異常偵測 → 即時標示異常  
* Cloud 每日用 Prophet / Isolation Forest 檢查長期異常  
* Dashboard 顯示「異常分數趨勢」
'''

---

