// server.ts

import express from "express";
// dotenv를 사용하므로, .env 변수 로드를 위해 필요합니다.
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

// 간단한 상태 확인 라우트
app.get("/", (req, res) => {
  res.send("Lifelog Backend is running!");
});

app.listen(PORT, () => {
  console.log(`서버 실행 중 : 포트번호 ${PORT}`);
});
