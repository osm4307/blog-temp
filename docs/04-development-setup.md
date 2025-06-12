# 개발 환경 설정 가이드

## 1. 필수 요구사항
### 1.1 시스템 요구사항
- Node.js 18.17.0 이상
- npm 9.6.7 이상
- Git 2.40.0 이상
- Cursor (권장)

### 1.2 Cursor 확장 프로그램
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- GitLens
- Error Lens

## 2. 프로젝트 설정
### 2.1 저장소 클론
```bash
git clone [repository-url]
cd blog
```

### 2.2 의존성 설치
```bash
npm install
```

### 2.3 환경 변수 설정
```bash
cp .env.example .env.local
```
필요한 환경 변수:
- DATABASE_URL
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_GA_ID
- NEXT_PUBLIC_DISCORD_URL

## 3. 개발 서버 실행
### 3.1 개발 모드
```bash
npm run dev
```

### 3.2 프로덕션 빌드
```bash
npm run build
npm start
```

## 4. 코드 품질 도구
### 4.1 린트
```bash
npm run lint
```

### 4.2 타입 체크
```bash
npm run type-check
```

### 4.3 테스트
```bash
npm run test
npm run test:e2e
```

## 5. Git 워크플로우
### 5.1 브랜치 전략
- main: 프로덕션 브랜치
- develop: 개발 브랜치
- feature/*: 기능 개발
- bugfix/*: 버그 수정
- release/*: 릴리즈 준비

### 5.2 커밋 메시지 규칙
```
<type>(<scope>): <subject>

<body>

<footer>
```
타입:
- feat: 새로운 기능
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 코드
- chore: 빌드 업무 수정

## 6. 배포
### 6.1 Vercel 배포
1. Vercel CLI 설치
```bash
npm i -g vercel
```

2. 배포
```bash
vercel
```

### 6.2 수동 배포
```bash
npm run build
npm run start
```

## 7. 모니터링
### 7.1 로깅
- 에러 로깅
- 성능 메트릭
- 사용자 행동 분석

### 7.2 알림
- 에러 알림
- 성능 저하 알림
- 보안 이슈 알림 