# Vue.js 02



### Vue CLI

- 컴포넌트
  - 기본 html 엘리먼트를 확장하여 재사용 가능한 코드를 캡슐화하는데 도움을 줌
  - 유지보수를 쉽게 만들어줄 뿐만 아니라 재사용성의 측면에서도 매우 강력한 기능을 제공
  - Vue 컴포넌트 === Vue 인스턴스
- SFC (Single File Component)
  - Vue의 컴포넌트 기반 개발의 핵심 특징
  - 하나의 컴포넌트는 .vue 확장자를 가진 하나의 파일 안에서 작성되는 코드의 결과물
  - 화면의 특정 영역에 대한 html, css, javascript 코드를 하나의 파일(.vue)에서 관리
  - Vue 컴포넌트 === Vue 인스턴스 === .vue 파일
  - 한 화면 안에서도 기능별로 다른 컴포넌트가 존재
    - 하나의 컴포넌트는 여러개의 하위 컴포넌트를 가질 수 있음
    - Vue는 컴포넌트 기반의 개발환경 제공
  - Vue 컴포넌트는 ```const app = new Vue({...})```의 app을 의마하며 이는 Vue인스턴스
    - 컴포넌트 기반의 개발이 반드시 파일 단위로 구분되어야 하는 것은 아님
    - 단일 .html 파일 안에서도 여러개의 컴포넌트를 만들어 개발 가능
- Node.js
  - 자바스크립트를 브라우저가 아닌 환경에서도 구동할 수 있도록 하는 자바스크립트 런타임 환경
- NPM 
  - 자바스크립트 언어를 위한 패키지 관리자
    - Python에 pip가 있다면 Node.js에는 NPM
    - 다양한 의존성 패키지를 관리
    - Node.js 설치 시 함께 설치됨

```js
# 설치
$ npm install -g @vue/cli

#버전 확인
$ vue --version

#프로젝트 생성
$ vue create my-first-app

#vue 버전 선택 : Vue2 DEFAULT

#프로젝트 디렉토리 이동
$ cd my-first-app

#서버 실행
$ npm run serve
```



- Babel 
  - Javascript Compiler
  - 자바스크립트의 최신 코드를 이전 버전으로 번역/변환해주는 도구
- Webpack
  - static module bundler
    - 모듈은 단지 파일 하나를 의미
  - 모듈 간의 의존성 문제를 해결하기 위한 도구
    - 모듈의 수가 많아지고 라이브러리 혹은 모듈 간의 의존성이 깊어지면서 특정한 곳에서 발생한 문제가 어떤 모듈 간의 문제인지 파악하기 어려움
  - 프로젝트에 필요한 모든 모듈을 매핑하고 내부적으로 종속성 그래프를 빌드함



### Vue 프로젝트 구조

- my-first-app
  - public/index.html
    - Vue 앱의 뼈대가 되는 파일
    - 실제 제공되는 단일 html 파일
  - src/components
    - 하위 컴포넌트들이 위치
  - src/App.vue
    - 최상위 컴포넌트
  - src/main.js
    - webpack이 빌드를 시작할 때 가장 먼저 불러오는 entry point
    - 실제 단일 파일에서 DOM과 data를 연결했던 것과 동일한 작업이 이루어지는 곳
    - Vue 전역에서 활용할 모듈을 등록할 수 있는 파일



### pass Props & emit Events

- 컴포넌트 작성

  - Vue app은 자연스럽게 중첩된 컴포넌트 트리로 구성됨
  - 컴포넌트 간 부모-자식 관계가 구성되며 이들 사이에 필연적으로 의사소통이 필요함
    - 부모는 자식에게 데이터를 전달 (pass props)하며, 자식은 자신에게 일어난 일을 부모에게 알림 (emit event)
    - 부모는 props를 자식에게 데이터를 전달하고, 자식은 events를 통해 부모에게 메시지를 보냄

- 컴포넌트 구조

  - 템플릿(HTML)
    - 각 컴포넌트를 작성
  - 스크립트(JS)
    - 컴포넌트 정보, 데이터, 메서드 등 VUE 인스턴스를 구성하는 대부분이 작성됨
  - 스타일(css)
    - 컴포넌트의 스타일을 담당

- 컴포넌트 등록 3단계

  - 불러오기(import)
  - 등록하기(register)
  - 보여주기(print)

- static props 작성

  - 자식 컴포넌트에 보낼 prop 데이터 선언

    - 작성법 : ```prop-data-name="value"```
    - 이름 컨벤션 : 선언 시 - CamelCase, in template(HTML) - kebab-case
    - 단방향 바인딩 ( 부모 -> 자식 )

    ```html
    <about my-message="This is prop data"></about>
    ```

  - 수신할 prop 데이터를 명시적으로 선언 후 사용

  ```javascript
  // About.vue
  <template>
  	<div>
  	<h1> About </h1>
  	<h2> {{ myMessage }} </h2>
  	</div>
  	</template>
  	
  	<script>
  	export default {
  	name: 'About',
  	props: {
  	myMessage: String,
  	}
  	}
  	</script>
  ```

  - v-bind directive를 사용해 부모의 데이터의 props를 동적으로 바인딩

    - 부모에서 데이터가 업데이트 될 때마다 자식 데이터로도 전달됨

    ```javascript
    //App,vue
    <template>
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
    		<about :my-message="parentData"></about> #v-bind 사용
    		</div>
    		</template>
    		
    <script>
    // 1. 불러오기
    import TheAbout from './components/TheAbout.vue'
    export default {
      name: 'App',
      //2. 등록하기
      components: {
        About,
      },
      data: function() { //컴포넌트의 data는 반드시 함수여야 함
        return {
          parentData: "This is parent data to child component"
        }
      },
      }
      </script>
      
    //About.vue
    <template>
    	<div>
    	<h1> About</h1>
    	<h2> {{ myMessage}} </h2>
    	<h2>{{ parentData}} </h2>
    	</div>
    	</template>
    	
    	<script>
    	export default {
    	name: 'About',
    	props: {
    	myMessage: String,
    	parentData: String,
    	}
    	}
    	</script>
    	
    
    ```

- emit evevnt

  - $emit 
    - 현재 인스턴스에서 이벤트를 트리거
    - 추가 인자는 리스너의 콜백 함수로 전달
    - 부모 컴포넌트는 자식 컴포넌트가 사용되는 템플릿에서 v-on을 사용하여 자식 컴포넌트가 보낸 이벤트를 청취 (v-on을 이용한 사용자 지정 이벤트)
    - 이벤트 이름에는 항상 kebab-case를 사용하는 것을 권장

  ```javascript
  // About.vue
  <template>
  <!-- template 안에는 반드시 하나의 element만 있어야 한다. -->
    <div>
      <h1>About</h1>
    <h1>{{myMessage}}</h1>
    <p>아하! div는 하나구나</p>
    <input type="text"
    v-model="childInputData" 
    @keyup.enter="childInputChange">
    </div>
  </template>
  
  <script>
  export default {
    name:'TheAbout',
    props: { //부모가 전달해주는 내용
      myMessage : String,
    },
    data: function() {
      return {
        childInputData: '',
      }
    },
    methods:{
      childInputChange: function(){
        console.log('Enter', this.childInputData)
        this.$emit('child-input-change', this.childInputData) //트리거
      }
    }
  }
  
  </script>
  
  <style>
  
  </style>
  
  
  //App.vue
  <template>
    <div id="app">
    <!-- 3. 보여주기 -->
    <the-about 
      :parent-data="parentData" 
  	@childInputChange="parentGetChange"></the-about>
    </div>
  </template>
  
  <script>
  // 1. 불러오기
  import TheAbout from './components/TheAbout.vue'
  export default {
    name: 'App',
    //2. 등록하기
    components: {
      TheAbout,
    },
    data: function() {
      return {
        parentData: "This is parent data to child component"
      }
    },
    methods:{
      parentGetChange: function(inputData){
        console.log(`About으로부터 ${inputData}를 받음`)
        console.log("들리는군...")
      }
    } 
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  
  ```
  
  

### Vue Router

- 컴포넌트를 매핑한 후 어떤 주소에서 렌더링 할 지 알려줌

```
#프로젝트 생성 및 이동
$ vue create my-router-app
$ cd my-router-app

#Vue Router plugin설치
$vue add router

#commit여부 (yes)
#history mode 사용 여부 (yes)
```

- index.js
  - 라우트에 관련된 정보 및 설정이 작성되는 곳
  - {path : '/', name: 'Home', component: Homeview}
    - path : 브라우저에서 접속하는 url 주소
    - component : 지정된 path로 들어왔을 때 보여줄 vue 컴포넌트
- App.vue
  - router-link 
    - 사용자 네비게이션을 가능하게 하는 컴포넌트
    - 목표 경로는 'to' prop으로 지정됨
    - 클릭 이벤트를 차단하여 브라우저가 페이지를 다시 로드하지 않도록 함
    - a 태그지만 기본 get 요청을 보내는 이벤트를 제거한 형태로 구성
  - router-view
    - 주어진 라우트에 대해 일치하는 컴포넌트를 렌더링하는 컴포넌트
    - 실제 component가 DOM에 부착되어 보이는 자리를 의미
- History mode
  - 브라우저의 히스토리는 남기지만 실제 페이지는 이동하지 않는 기능을 지원
  - 페이지를 다시 로드하지 않고 URL을 탐색할 수 있음

- 일반적인 작성 순서
  - .vue
  - Router -> index.js 등록
  - App.vue에 router-link 등록

- 404

```vue
// @/views/NotFound404.vue
<template>
<div>
<h1>404 Not Found</h1>
</div>
</template>

<script>
export default {
	name: 'NotFound404',
}
</script>

// @/router/index.js
const routes = [
...
{
path:'/404',
name: 'NotFound404'
component: NotFound404
}
{
path: '*', #등록되지 않은 모든 URL은 /404로 redirection
redirect: '/404'
}
]
```







- Named Routes

```javascript
//index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

//App.vue
<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>


```



- 프로그래밍 방식 네비게이션

  - router-link가 선언적 방식이라면 ```$router.push(...)```은 프로그래밍 방식
  - <router-link :to="...">를 클릭하면 router.push(...)를 호출하는 것과 같음

  ```javascript
  //AboutView.vue
  <template>
    <div class="about">
      <h1>This is an about page</h1>
      <button @click="moveToHome">Home으로 이동</button>
    </div>
  </template>
  <script>
  
  export default {
   name:'AboutView',
   methods: {
     moveToHome: function(){
       this.$router.push({name: 'home'})
     }
   } 
  }
  </script>
  
  ```

  

- Dynamic Route Matching (variable routing과 비슷)

```
const routes = [
  {
    path: 'user/:userId', #동적인자는 콜론으로 시작
    name: 'User',
    component: User
  }
]
```



- components와 views
  - views/
    - router(index.js)에 매핑되는 컴포넌트를 모아두는 폴더(페이지 화면)
    - ex) AboutView, HomeView
  - components/
    - router에 매핑된 컴포넌트(view) 내부에 작성하는 컴포넌트를 모아두는 폴더
    - ex) Home 컴포넌트 내부에 HelloWorld 컴포넌트 등록

- Vue Router가 필요한 이유
  - SPA 등장 이전
    - 서버가 모든 라우팅을 통제
    - 요청 경로에 맞는 HTML를 제공
  - SPA 등장 이후
    - 서버는 index.html 하나만 제공
    - 이후 모든 처리는 html 위에서 js 코드를 활용해 진행
    - 즉, 요청에 대한 처리를 더이상 서버가 하지 않음.(할 필요가 없어짐)
  - 라우팅 처리 차이(SSR -> CSR)
    - 라우팅의 결정권을 가진 vue.js에서 라우팅을 편리하게 할 수 있는 Tool을 제공해주는 라이브러리가 Vue Router