# 통계 데이터 자동 병합기 (Vercel 배포용)

## 프로젝트 구조
- `index.html`: 프론트엔드 메인 웹 애플리케이션 (인증키 없이 17개 광역시도별 통계 데이터 즉시 병합)
- `api/generate.js`: Gemini API 연동 Vercel 서버리스 함수
- `vercel.json`: Vercel 라우팅 설정
- `package.json`: 프로젝트 매니페스트

## Vercel 배포 방법
1. GitHub 등에 프로젝트 업로드 후 Vercel 연결
2. Environment Variables에 `GEMINI_API_KEY` 설정 (선택 사항)
3. Deploy 완료!
