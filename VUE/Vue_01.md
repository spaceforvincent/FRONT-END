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





### Basic syntax of Vue.js

- Vue instance

  - 모든 Vue 앱은 Vue 함수로 새 인스턴스를 만드는 것부터 시작
  - Vue 인스턴스를 생성할 때는 Options 객체를 전달해야 함
  - 여러 Options들을 사용하여 원하는 동작을 구현
    - el : css 선택자 문자열 혹은 html 엘리먼트로 작성, new를 이요한 인스턴스 생성때만 사용
    - data : Vue 인스턴스의 데이터 객체, 상태 데이터를 정의하는 곳, interpolation을 통해 접근 가능, v-bind, v-on과 같은 directive에서도 사용 가능, vue 객체 내 다른 함수에서 this 키워드를 통해 접근 가능
    - methods : Vue 인스턴스에 추가할 메서드. interpolation을 통해 접근 가능, directive에서도 사용 가능, Vue 객체 내 다른 함수에서 this 키워드 통해 접근 가능. 화살표 함수를 메서드를 정의하는 데 사용하면 안됨. 화살표 함수가 부모 컨텍스트를 바인딩하기 때문에 this는 Vue 인스턴스가 아님.

  *화살표 함수를 사용하면 안되는 경우 : data, method 정의

  - Vue instance === Vue Component



### Template Syntax

- 렌더링 된 DOM을 기본 Vue 인스턴스의 데이터에 선언적으로 바인딩 할 수 있는 html 기반 템플릿 구문을 사용

  - Interpolation(보간법)

    - Text 

    ```<span>메시지: {{ msg }}</span>```
  
    - Raw HTML
  
    ```<span v-html="rawHtml"></span>```
  
    - Attributes
  
    ```<div v-bind:id="dynamicId"></div>```
  
    - JS 표현식
  
    ```{{ number + 1 }}```
  
    ```{{ message.split('').reverse().join('') }}```
  
  - Directive
  
    - v-접두사가 있는 특수 속성
    - 속성 값은 단일 JS 표현식이 됨
    - 표현식의 값이 변경될 때 반응적으로 DOM에 적용하는 역할을 함
    - v-for : 사용 시 반드시 key 속성을 각 요소에 작성. v-if와 함께 사용하는 경우 v-for가 우선순위가 더 높음 (단, 가능하면 v-if 와 v-for을 동시에 사용하지 말 것)
    - v-if : 조건을 만족하면 그 순간에 html 블록이 생성, 조건에 만족하지 않으면 html블록은 삭제
    - v-show : 조건 만족 여부에 상관없이 무조건 html 블록이 생성되며, 조건을 만족하면 css의 display를 이용해서 화면에 보이게 되고, 조건을 만족하지 않으면 화면에서 숨기도록 처리가 됨 (조건의 만족여부에 상관없이 무조건 렌더링 됨)
    
    ```
    v-if와 v-show를 사용할 때는 해당 html 블록이 화면 내에서 자주 toggle이 일어나면 v-show를 사용하고, toggle이 일어나는 빈도가 작다면 v-if를 사용하는 것이 좋음
    * toggle : 하나의 값으로부터 다른 값으로 전환하는 행위
    ```
  
    - v-on : 엘리먼트에 이벤트 리스너를 연결. 약어 : '@'
    
    - v-bind : HTML 요소의 속성에 Vue의 상태 데이터를 값으로 할당. 약어 : ':'
    
    - v-model : HTML form 요소의 값과 data를 양방향 바인딩
    
    - computed : 정의된 데이터 값을 바탕으로 새로운 데이터 값 생성하고, 새로운 데이터 값에서 참조하고 있는 기존 데이터 값의 변경을 감지한다. 그리고 참조하고 있는 데이터의 값의 변경과 상관 없이 최초에 computed에 정의된 데이터 함수를 실행한다.
    
      - 특정 값이 변동하면 해당 값을 다시 계산해서 보여준다. 계산해야 하는 목표 데이터를 정의'(선언형)
      - 함수의 형태로 정의하지만 함수가 아닌 함수의 반환값이 바인딩 됨
    
      ```vue
      <template>
      
      <div>
      <h1>Full Name : {{fullName}}</h1>
      </div>
      </template>
      <script>
      export default {
      
          name: 'ComputedPractice',
      
      
          data() {
      
              return {
      
                  firstName: 'Hyeokju',
                  lastName: 'Choi'
      
          };
      
      },
          computed: {
              fullName() {
                  return this.firstName + ' ' + this.lastName
              }
          },
      
      }
      
      </script>
      ```
    
      - watch : 초기에 할당된 값에서 변경이 일어나야 watch에 정의한 함수를 실행한다.
        - 특정 값이 변동하면 다른 '작업'을 한다.(특정 대상이 변경되었을 때 콜백 함수를 실행시키기 위한 트리거. 명령형)
    
      ```vue
      <template>
      
      <div>
      <h1>Full Name : {{fullName}}</h1>
      <button type="button" @click="changeName">변경</button>
      </div>
      </template>
      <script>
      export default {
      
          name: 'WatchPractice',
      
          components:{}, 
      
          data() {
      
              return {
      
                  firstName: 'Hyeokju',
                  lastName: 'Choi',
                  fullName: ''
      
          };
      
      },
          watch: {
              firstName() {
                  this.fullName = this.firstName + ' ' + this.lastName
              },
              lastName() {
                  this.fullName = this.firstName + ' ' + this.lastName
              }
          },
      
          methods: {
              changeName (){
                  this.firstName = 'Eunsol'
              }
          }
      }
      
      </script>
      ```
    
    - filter : 텍스트 형식화를 적용할 수 있는 필터. interpolation 혹은 v-bind를 이용할 때 사용 가능. 마지막에 파이프("|")와 함께 추가되어야 함



### Lifecycle Hooks

- created : vue 컴포넌트가 생성된 후 호출. 애플리케이션의 초기 데이터를 API요청을 통해 불러올 수 있음
- mounted : DOM(HTML)에 접근.

