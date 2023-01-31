# Next.js

- pages의 파일 이름대로 라우팅 됨 (안의 컴포넌트 이름은 상관없음)
  - url의 이름이 파일명이 됨
  - 예외) index.js
- 404 페이지 제공
- 실행 :  npm run dev
- import React from 'react'; 를 하지 않고도 jsx 사용 가능 
- 앱에 있는 페이지들이 미리 렌더링 됨(SSR)
  - Create-react-app : CSR

1. npx create-next-app@latest

2. pages 안의 내용 전부 삭제



- Styled.jsx

```javascript
//_app.js : base.html같은 느낌?
import Layout from "../components/Layout"
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
      <Component {...pageProps} />
      </Layout> 
      <span>hello</span>
      <style jsx global>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </div>
  );
}

```

