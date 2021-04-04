# PTX-MOTC
1. Open CMD (cd.. to go out of a folder, cd {folder name} to go into a folder, and cd c: or d: to directly change a drive)

2. Choose a document folder

3. git clone https://github.com/davidshen0323/PTX-MOTC.git

4. cd PTX-MOTC

5. npm i

6. npm start 

7. Finished !!

架構:

1. 此網站主要分為首頁、全部景點列表、縣市景點列表、關於我們、聯絡我們。
2. 導覽列在每頁最上方，往下滑會消失，上滑則會出現。
3. 全部景點列表 及 縣市景點列表頁，第一次載入30個景點，使用者滑到頁面底部時再送出請求，載入額外30個景點直到沒有景點。
4. RWD架構，縮小時會變為一列一個景點。

詳細介紹:

首頁上方放大底圖 - 101及信義區，代表台灣的門面、招牌。
下方 "了解更多"按鈕 按了會往下滑，規劃是放最新消息、熱門景點等，目前放的只有全部景點列表及縣市景點列表的Card，點選後分別會跳至"全部景點列表頁"及"預設為台北市的縣市景點列表頁"。

導覽列底色為透明，畫面往下滑時會消失，而往上滑會出現，項目為Home首頁、Spot全部景點列表、City縣市景點列表的下拉式選單，而About及Contact則是一個真正的網站的基本需求，在這邊目前沒有功能。

點選導覽列"Spot"後，跳至全部景點列表頁，一列兩個Card，內容為標題、照片及簡介，一般大眾在看網頁時比較容易受圖像的吸引，所以我多放了圖片，但由於有些景點接api時就沒有圖片，因此格子先空白。

點選導覽列"City"後，會跳出縣市的選單，在選擇後會依照選取的縣市，跳至該縣市的所有景點列表。