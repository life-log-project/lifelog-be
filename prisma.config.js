import "dotenv/config";

// 2. Prisma 설정에 필요한 변수를 정의합니다.
const LOCAL_DB_URL_VAR = "LOCAL_DATABASE_URL";

// 3. CommonJS 방식으로 모듈을 내보냅니다.
module.exports = {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  // 4. 환경 변수에서 URL을 직접 가져옵니다 (process.env 사용)
  datasource: {
    url: process.env[LOCAL_DB_URL_VAR],
  },
};
