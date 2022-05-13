## web



### HTML(Hyper Text Markup Language)

- 웹 페이지를 작성(구조화)하기 위한 언어

- HTML 문서의 기본구조(!+tab)

  ```
  html : 문서의 최상위 요소
  head : 문서 메타데이터 요소 (문서 제목, 인코딩, 스타일, 외부 파일 로릳)
  -> title, meta, link, script, style
  body : 문서 본문 요소 (실제 화면 구성과 관련된 내용)
  ```

  

  

- 시맨틱 태그 : 콘텐츠의 의미를 명확하게 하기 위해 이름에 의미를 붙이자.  가독성을 높이고 유지보수 쉬워짐

  ```
  header, section, footer, form, nav, aside, article
  ```

- DOM

  -> 텍스트 파일인 HTML 문서를 브라우저에서 렌더링 하기 위한 구조. HTML 문서 내의 각 요소에 접근

- 주요 태그와 속성
  
  - ```
    <html>
    <head> : 헤드
    <title> : 타이틀 - 헤드 안에 속한다.
    <body> : 문서의 본문  - 헤드와 바디 사이에는 아무것도 들어갈 수 없다. 
    <h1> ~ <h6> : 제목
    <p> : 단락
    <hr> : 수평줄 삽입
    <br> : 줄 바꾸기 - <br> 태그는 다른 글자 태그 내부에 삽입이 가능하나 <hr> 태그는 불가능하다. 
    <b> : 진하게
    <strong> : 중요한
    <em> : 강조
    <i> : 이탤릭으로 강조
    <div> : 블록 형식으로 공간 분할 - 블록 전체에 동일한 CSS 스타일 적용 또는 자바스트립트로 블록을 하나의 단위처럼 다루고자 할 때 사용 
    <span> : 인라인 형식으로 공간 분할 - 텍스트 일부분에 특별한 모양 적용 또는 자바스크립트 코드로 텍스트 일부분을 제어할 때 사용 
    <a> : 하이퍼링크 - 현재 HTML 페이지에서 다른 HTML 연결하는 링크를 만들고자 할 때 사용 (href 속성 활용)
    <style> : CSS 스타일 시트를 담는 태그 
    <ol> : 순서 있는 리스트 
    <ul> : 순서 없는 리스트
    <li> : 리스트의 아이템 
    ```
  

### css

- 단위 (크기, 속성)

  ```
  display 속성의 값으로 사용할 수 있는 키워드는 block , inline , inline-block, none
  대표적인 크기 단위는 px(절대값), em(상대값), %(상대값), rem(최상위 요소의 사이즈를 기준으로 삼음, 상대값),vw,vh,vmin,vmax(view포트 상대값)
  ```

  

- 선택자 및 우선순위 : 

  ```html
  !important -> Inline style -> id 선택자 -> class 선택자 -> 요소 선택자 -> 소스 순서
  
  text관련 요소만 부모로부터 자식에게 상속 가능
  
  <div id="ssafy">
      <h2>어떻게 선택 될까?</h2>
      <p>첫번째 단락</p>
      <p>두번째 단락</p>
      <p>세번째 단락</p>
      <p>네번째 단락</p>
  </div>
  
  #ssafy > p:nth-child(2) {
  color: red;
  }
  
  -> '첫번째 단락' 문자열이 빨간색으로 변한다.
  
  #ssafy > p:nth-of-type(2) {
  color: blue;
  }
  
  -> '두번째 단락' 문자열이 파란색으로 변한다.
  
  nth-child(n) : 부모 엘리먼트의 모든 자식 엘리먼트 중 n번째
  nth-of-type(n) : 부모 엘리먼트의 특정 자식 엘리먼트 중 n번째
  
  
  자손은 Selector 하위의 모든 selector. 자식, 손자, 그리고 이후에 후손을 모두 포함
  
  자식은 Selector 바로 아래의 selector. 요소의 자식에만 지정한다.
  ```

- 박스 모델(콘텐트, 패딩, 보더, 마진)

  ![css box model](http://www.tcpschool.com/lectures/img_css_boxmodel.png)

  ```
  1. 내용(content) : 텍스트나 이미지가 들어있는 박스의 실질적인 내용 부분입니다.
  
  2. 패딩(padding) : 내용과 테두리 사이의 간격입니다. 패딩은 눈에 보이지 않습니다.
  
  3. 테두리(border) : 내용와 패딩 주변을 감싸는 테두리입니다.
  
  4. 마진(margin) : 테두리와 이웃하는 요소 사이의 간격입니다. 마진은 눈에 보이지 않습니다.
  ```

  

- 마진 선언 숏핸드(상하좌우 시계방향)

  ```
  한 개의 값은 모든 네 면의 여백을 설정합니다.
  ex) margin: 1em;
  두 개의 값을 지정하면 첫 번째는 위와 아래, 두 번째는 왼쪽과 오른쪽 여백을 설정합니다.
  ex) margin: 5% auto;
  세 개의 값을 지정하면 첫 번째는 위, 두 번째는 왼쪽과 오른쪽, 세 번째 값은 아래 여백을 설정합니다.
  ex) margin: 1em auto 2em;
  네 개의 값을 지정하면 각각 상, 우, 하, 좌 순서로 여백을 지정합니다. (시계방향)
  ex) margin: 2px 1em 0 auto;
  ```

- 인라인 블록 요소 특징

  ```
  display 속성이 inline-block으로 지정된 엘리먼트는 기본적으로 inline 엘리먼트처럼 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치됩니다. 하지만 inline 엘리먼트에서 불가능하던 width와 height 속성 지정 및 margin과 padding 속성의 상하 간격 지정이 가능해집니다.
  
  대표적인 inline-block 엘리먼트로 <button>이나 <input>, <select> 태그 등을 들 수 있습니다.
  대표적인 block element : div, ul, ol,li,p, hr, form
  대표적인 inline element : span, a, img, input, label, b, em, i, strong
  ```

  

- 포지션
  - static : 자기가 원래 위치해야 하는 그 곳에 정적으로 위치하게 됨. position 속성값이 static으로 설정된 요소는 top, right, bottom, left 속성값에 영향을 받지 않음.  단순히 웹 페이지의 흐름에 따라 차례대로 요소들을 위치시키는 방식
  - relative : 자기가 원래 위치해야 하는 위치를 기준, 즉 자기 자신을 기준으로(static) 상대적인 offset 거리만큼 이동. 요소를 일반적인 문서 흐름에 따라 배치
  - absolute (out of flow) : 위치가 설정된 부모, 조상(ancestor) 요소를 기준으로 위치를 설정. 조상(ancestor) 요소를 가지지 않는다면, HTML 문서의 body 요소를 기준으로 위치를 설정. 요소를 일반적인 문서 흐름에서 제거
  - fixed (out of flow) : 뷰포트(viewport)를 기준으로 위치를 설정하는 방식, 웹 페이지가 스크롤 되어도 고정 위치로 지정된 요소는 항상 같은 곳에 위치
  - sticky : "static + fixed." 요소를 일반적인 문서 흐름에 따라 배치. 평소에는 상대 위치 지정 요소로 처리하지만, [컨테이닝 블록](https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block)이 자신의 플로우 루트(또는, 스크롤 컨테이너)에서 지정한 임계값([`top` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/top) 등으로 지정)을 넘으면 마치 `fixed`처럼 화면에 고정합니다.
  
- flex
  - axis
  
    ```
    flex-direction : row (bootstrap에서는 flex-row)
    flex-direction : row-reverse (bootstrap에서는 flex-row-reverse)
    flex-direction : column (bootstrap에서는 flex-column)
    flex-direction : column-reverse (bootstrap에서는 flex-column-reverse)
    ```
  
  - container - item
  
    ```
    flex-wrap : nowrap (flex-item 요소들을 강제로 한줄에 배치되게 함. 즉 flex line이 하나)
    flex-wrap : wrap(flex-item 요소들을 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현)
    
    flex-flow : flex-direction, flex-wrap 요소의 축약형
    
    # 주 축에 있는 모든 항목의 정렬 제어
    justify-content : flex-start
    justify-content : flex-end
    justify-content : center
    justify-content : space-between
    justify-content : space-around
    justify-content : space-evenly
    
    # 교차 축에서 모든 항목 정렬 제어
    align-items : flex-start (컨테이너의 세로 축의 최상단으로 정렬)
    align-items : flex-end (컨테이너의 세로 축의 최하단으로 정렬)
    align-items : center (컨테이너의 세로 축의 중앙으로 정렬) 
    align-items : stretch (컨테이너에 맞게 아이템을 늘림)
    align-items : baseline (컨테이너의 )
    
    
    align-self : 교차 축에서 개별 플렉스 항목의 정렬 제어
    align-content: flex-line을 정렬 
    ```

### 반응형 웹

- Bootstrap
  - Grid System
  
    ```html
    <div class="container">
      <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
      </div>
    </div>
    ```
  
    
  
  - Breakpoint
  
    ```
    xs : 576px 미만
    sm : 576px 이상 768px 미만
    md : 768px 이상 992px 미만
    lg : 992px 이상 1200px 미만
    xl : 1200px 이상 1400px 미만
    xxl : 1400px 이상
    ```
  
    