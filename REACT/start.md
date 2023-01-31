1. npm init react-app 앱 이름 (npx create-react-app 앱 이름)
   - npm vs npx
     - npm은 프로그램을 일반적으로 설치하라는 의미, npx는 임시로 설치해서 한번 실행하고 지우라는 의미
2. cd 앱 이름
3. npm start : 개발용 서버 만들기 
4. Index.js (npm start하는 순간 제일 먼저 실행되는 파일)

```react
import React from 'react'; //jsx를 사용하기 위함
import ReactDOM from 'react-dom/client'; //index.html의 root를 root로 만들어줌
import App from './App'; //App.js를 의미

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

5. App.js (렌더링하여 화면에 보여줄 내용)

```react
function App() {
  return <div> welcome back! </div>;
}

export default App;

```

6. app.css, index.css, logo.svg, app.test.js, reportwebvital,  setuptests.js 삭제

   (App.js, index.js 빼고 모두 삭제)

7. npm install prop-types
8. npm install react-router-dom@6.3.0
9. npm install gh-pages(GitHub.io 배포)

- 배포
  - package.json에 추가

```json
"homepage": "https://[user-name].github.io/[repo-name]"
```

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
```

