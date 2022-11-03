# 원티드 프리온보딩 7차 3차 과제

## 과제 설명

> Assignment 3 주제 : B2C 차량대여 서비스

- 진행 기간 : 2022-11-02 ~ 2022-11-04

<br />

## 데모 링크

[🚀 GO TO DEMO]()

<br />

## 실행 방법

### Local

```bash
# Clone Repo
git clone

# Install Dependency
yarn run install

# Run Project
yarn run dev

# Build Project
yarn run build
```

<br />

## 12팀 소개

| <img src="https://avatars.githubusercontent.com/u/40523487?v=4"/> | <img src="https://avatars.githubusercontent.com/u/50790145?v=4"/> | <img src="https://avatars.githubusercontent.com/u/108744804?v=4"> | <img src="https://avatars.githubusercontent.com/u/97100045?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92246102?v=4"> | <img src="https://avatars.githubusercontent.com/u/96763714?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/od-log">[팀장] 오다영</a>             | <a href="https://github.com/youngminss">[부팀장] 위영민</a>       | <a href="https://github.com/jong6598">김종현</a>                  | <a href="https://github.com/hopak-e">박상호</a>                   | <a href="https://github.com/forest-6">임승민</a>                 | <a href="https://github.com/kyunghee47">피경희</a>               |

<br/>

## 12팀이 동료학습으로 협업하는 방식

1. [Convention Rule]() 을 정하고, 모든 팀원이 실천합니다.

2. 게더 타운에서 만나요~

- 1시부터 6시까지는 12팀이 집중해서 작업하는 코어 시간입니다. 멀리 떨어져 있지만 옆에 있는 것처럼 화면을 공유하고 서로 자유롭게 의견을 나누면서 과제를 해결하기 위해 협업합니다.

3. gitflow

- 12팀은 git flow 방식으로 개발하고 있습니다. devlop branch에 자신이 작업한 branch를 merge하려면 최소 두 명 이상의 팀원이 리뷰를 하고, 요청을 수락해야 합니다. 그래서 12팀은 pull request 요청이 오는 즉시 12팀의 디스코드에 알람으로, 메일로 각 팀원들에게 전달되어 빠르게 피드백이 가능하면서도 작업하는 branch의 변경사항을 공유할 수 있는 환경을 구성했습니다.

4. 피그잼 & 피그마

- 피그잼에 모여서 UI를 고민하는 팀과 데이터를 고민하는 팀으로 나누어서 계획을 짜고, 다시 모여서 함께 짧은 시간동안 완성해야하는 작업을 나눴습니다. 피그잼과 피그마로 함께 만들 소프트웨어를 기획했습니다. 작업을 시작했습니다~

[피그잼에서 고민한 내용 보러가기](https://www.figma.com/file/imDU0VKds37F3eM4tdbgjc/Assignment-3---%EC%95%8C%ED%8B%B0%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0?node-id=23%3A234)  
[피그마에서 기획한 내용 보러가기](https://www.figma.com/file/c91jQRLuanBMFRE9ztbXcz/Assignment-3---%EC%95%8C%ED%8B%B0%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0?node-id=0%3A1)

<br />

## 과제 달성 사항 및 해결 방법

### 필수 요구 사항

- [x] 이슈 목록 및 상세 화면 기능 구현

<br />

## 레포지토리 구조(src)

```jsx
📦src
 ┣ 📂apis
 ┃ ┣ 📜car.ts
 ┃ ┗ 📜requester.ts
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┗ 📜back_icon.svg
 ┣ 📂components
 ┃ ┣ 📂feature
 ┃ ┃ ┣ 📂CarListItem
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂DetailForm
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂FormBody
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂FormHeader
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂Nav
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┗ 📂VehicleItem
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂Chip
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂Image
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂SEOMetaTag
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂StatusContent
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜attributeDummyData.ts
 ┃ ┗ 📜car.ts
 ┣ 📂hooks
 ┃ ┣ 📜useCar.ts
 ┃ ┗ 📜useCars.ts
 ┣ 📂pages
 ┃ ┣ 📂CarDetail
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂CarList
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂ErrorPage
 ┃ ┃ ┣ 📜ErrorBoundary.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┗ 📜index.ts
 ┣ 📂recoil
 ┃ ┗ 📂atoms
 ┃ ┃ ┗ 📜ChipAtom.tsx
 ┣ 📂router
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜routePath.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┗ 📜car.ts
 ┣ 📂utils
 ┃ ┣ 📜ArrayUtils.ts
 ┃ ┣ 📜DateUtils.ts
 ┃ ┗ 📜StringUtils.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜vite-env.d.ts
```

## 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react query&logoColor=white">
<img src="https://img.shields.io/badge/react-router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white"> <img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white">
<br /><img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><br />
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
<img src="https://img.shields.io/badge/eslint-181717?style=for-the-badge&logo=eslint&logoColor=white">
