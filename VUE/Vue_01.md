# Vue.js

- 사용자 인터페이스를 만들기 위한 진보적인 자바스크립트 프레임워크
- 현대적인 tool과 다양한 라이브러리를 통해 SPA(Single Page Application)을 완벽하게 지원
  - 현재 페이지를 동적으로 렌더링함으로써 사용자와 소통하는 웹 애플리케이션
  - 서버로부터 최초에만 페이지를 다운로드하고, 이후에는 동적으로 DOM을 구성 (현재 페이지 중 필요한 부분만 동적으로 다시 작성함)
  - 연속되는 페이지 간의 사용자 경험(UX)을 향상
  - 동작원리의 일부가 CSR(Client Side Rendering)의 구조를 따름
    - 서버에서 화면을 구성하는 SSR(Server Side Rendering) 방식과 달리 클라이언트에서 화면을 구성
    - 처음엔 뼈대만 받고 브라우저에서 동적으로 DOM을 그림
    - 서버와 클라이언트 간 트래픽 감소
    - SSR에 비해 전체 페이지 최종 렌더링 시점이 느림 (단점)



### MVVM

- 애플리케이션 로직을 UI로부터 분리하기 위해 설계된 디자인 패턴
  - Model
    - JavaScript Object ({key:value})
    - Vue Instance 내부에서 data라는 이름으로 존재
    - data가 바뀌면 View가 반응
  - View
    - HTML
    - Data의 변화에 따라서 바뀌는 대상
  - View Model
    - 모든 Vue Instance
    - View와 Model 사이에서 Data와 DOM에 관련된 모든 일을 처리
    - "Data가 변화하면 DOM이 변경"
  - 