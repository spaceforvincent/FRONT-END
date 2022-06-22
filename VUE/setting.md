1. vue create 프로젝트 이름
2. cd 프로젝트 이름
3. vue add router // 라우팅 설정
4. vue install vuex@next --save
5. npm run serve
6. Vue.config.js(Lazy Load 적용하기)
   - 리소스를 컴포넌트 단위로 분리하여 컴포넌트 혹은 라우터 단위로 필요한 것들만 그때 그때 다운받을 수 있게 하는 방법

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugins.delete('prefetch'); //prefetch 기능 끄기
  }
})
```

7. 기본 코드 구조 snippet에 등록하여 사용

```vue
<template>
	<div><div>
</template>
<script>
	export default {
    name: '', //컴포넌트 이름
    components: {}, //다른 컴포넌트 사용 시 컴포넌트를 import하고 배열로 저장
    data() { //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
      return {
        sampleData: ''
      };
    },
    setup() {}, //컴포지션 API
    created() {}, //컴포넌트가 생성되면 실행
    mounted() {}, //템플릿에 작성한 html코드가 렌더링 된 후 실행
    unmounted() {} //컴포넌트를 빠져나갈 때 실행
    methods: {} //이곳에 작성된 메소드는 this를 통해서 접근해야 함
  }
```

- Code -> preference -> user snippets -> vue 입력 후 선택

```json
{
	"Generate Basic Vue Code" : {
		"prefix" : "vue-start",
		"body" : [
			"<template></template>",
			"<script>",
			"export default {\n",
			"\tname: '',\n",
			"\tcomponents:{}, \n",
			"\tdata() {",
			"\n\t\treturn {",
			"\n\t\t\tsampleData: ''\n",
			"\t\t",
					"\n\t};","\n},", "\n\tbeforeCreate() {}, ","\n\tcreated() {}, ","\n\tbeforeMount() {},",
					"\n\tmounted() {}, ","\n\tbeforeUpdate() {}, ","\n\tupdated() {}, ","\n\tbeforeUnmount() {},",
					"\n\tunmounted() {}, ","\n\tmethods: {}\n}","\n</script>"
		],
		"description": "Generate Basic Vue Code"
	}
}
```