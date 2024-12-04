<div align="center">
<img src="/public/reviewinREADME.png" width="300">

  # REVIEW IN CLASS

 『DUKSUNG UMC MINI PROJECT WEB TEAM 2 』
</div>

## REVIEW IN CLASS
다양한 강의 리뷰를 찾아보고, 직접 리뷰를 등록할 수 있는 데스크탑 웹입니다.
## WEB Developer
| <center>김진효</center>| <center>박효진</center>| <center>한수정</center>| 
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | 
| <center> <img width="150px" src="https://avatars.githubusercontent.com/u/150879545?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/139054208?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/90364839?v=4" /></center> |
| [@jinhyo0](https://github.com/jinhyo0) | [@phjlia2430](https://github.com/phjlia2430)| [@hansoojeongsj](https://github.com/hansoojeongsj) |


## 역할 분담

### 초기 세팅
- router 세팅, 글꼴 세팅 **`효진`**
- theme + globalStyle 기본 스타일 세팅 **`수정`**
- 리뷰어 어푸 설정, pr 템플릿, 이슈 템플릿 등 협업 세팅 **`수정`**

### 공통 컴포넌트
- 헤더 & 푸터 **`진효`**
- 커스텀 드롭다운 **`수정`**
- 별점 **`효진`**

### 페이지
- 홈 화면 **`수정`**
- 리뷰 목록 뷰 **`수정`**
- 리뷰 작성 뷰 **`효진`**
- 강의 리뷰 뷰 **`진효`**

### API
- 홈 추천 리뷰 GET **`수정`**
- 홈 최신 리뷰 GET **`수정`**
- 전체 리뷰 GET **`수정`**
- 강의 리뷰 작성 POST **`효진`**
- 강의 명으로 리뷰 검색 GET **`효진`**
- 강의 정보 작성 POST **`효진`**
- 전체 강의 조회 GET **`진효`**
- 강의명으로 검색해서 리뷰 조회 GET **`진효`**
- 특정 강의 리뷰 목록 조회 GET **`진효`**

## 컨벤션 및 브랜치 전략

### 커밋컨벤션

| 커밋 유형  | 의미                                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| `init`     | 초기 세팅시에만 사용                             |
| `feat`     | 새로운 기능 추가                             |
| `fix`      | 버그 수정                   |
| `docs`     | 문서 추가, 수정, 삭제                                                          |
| `style`    | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| `refactor` | 코드 리팩토링       |
| `test`     | 테스트 코드, 리팩토링 테스트 코드 추가                                                |
| `chore`    | 패키지 매니저 수정, 그 외 기타 수정 ex).gitignore                    |
| `design`   | CSS 등 사용자 UI 디자인 변경                                                          |
| `comment`  | 필요한 주석 추가 및 변경                                                              |
| `deploy`   | 배포 관련 |
| `setting`   | 개발 환경 세팅                                                         |

### 폴더 구조

```plaintext
|-- 📁 node_modules
|-- 📁 public
    |-- 📁 svg
|-- 📁 src
    |-- 📁 asset
	      |-- 📁 svgs
	      |-- 📁 images
    |-- 📁 components
          |-- 📁 Home (예시)
              |-- Components.jsx
              |-- Components.style.js
          |-- 📁 Button (예시 컴포넌트)
              |-- Button.jsx
              |-- Button.style.js
    |-- 📁 pages
   	    |-- 📁onboarding
            |-- 📁types
            |-- 📁hooks
            |-- Onboarding.jsx
            |-- Onboarding.style.js
   |-- 📁 hooks (커스텀 훅을 담아두는 폴더)
   |-- 📁 styles ( GlobalStyles , theme.js )
   |-- 📁 utils ( 재사용이 높은 함수모음 폴더 )
       |-- 📁 constants
       |-- 📁 mocks
   |-- 📁 apis
   |-- 📁 routes
       |-- 📁 routePath
		       |-- index.js
       |-- homeRoutes.jsx
       |-- adminRoutes.jsx
       |-- index.js
|-- App.jsx
|-- main.jsx
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- README.md
|-- package.json
|-- tsconfig.json
|-- yarn.lock
```

### 브랜치 전략
기능 단위로 브랜치를 생성하고, develop 브랜치를 기준으로 `feature/이슈번호/기능설명`, `chore/이슈번호/기능설명` 등의 네이밍 규칙을 사용해 작업을 진행합니다.


## 기술 스택
[![My Skills](https://skillicons.dev/icons?i=html,css,react,js,styled-components)](https://skillicons.dev)
