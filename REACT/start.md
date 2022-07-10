1. npx create-react-app 앱 이름
2. cd 앱 이름
3. npm start : 개발용 서버 만들기 
4. Index.js

```react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

5. App.js

```react
function App() {
  return <div> welcome back! </div>;
}

export default App;

```

6. app.css, index.css, logo.svg, app.test.js, reportwebvital,  setuptests.js 삭제

   (App.js, index.js 빼고 모두 삭제)

7. npm install prop-types