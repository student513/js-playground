# 자바스크립트 플레이그라운드

자바스크립트 함수를 실행할 수 있는 간단한 환경입니다.

## 설치 및 실행

### 1. Node.js 확인

```bash
node --version
npm --version
```

### 2. 프로젝트 실행

```bash
# 기본 실행
npm start

# 또는 직접 실행
node index.js

# 개발 모드 (파일 변경 시 자동 재실행)
npm run dev
```

## 파일 구조

```
js-playground/
├── index.js          # 메인 자바스크립트 파일
├── package.json      # 프로젝트 설정
└── README.md         # 이 파일
```

## 예제 함수들

- **기본 함수**: `greet(name)` - 인사말 출력
- **화살표 함수**: `add(a, b)` - 두 숫자 더하기
- **콜백 함수**: 배열 메서드 사용 예제
- **비동기 함수**: `fetchData()` - Promise 기반 비동기 처리
- **즉시 실행 함수**: IIFE 패턴 예제

## 추가 파일 생성

새로운 자바스크립트 파일을 만들고 싶다면:

```bash
# 새 파일 생성
touch my-function.js

# 실행
node my-function.js
```

## Node.js REPL 사용

대화형 자바스크립트 환경을 사용하려면:

```bash
node
```

REPL에서 직접 자바스크립트 코드를 입력하고 실행할 수 있습니다.
