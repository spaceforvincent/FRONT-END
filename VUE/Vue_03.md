# Vue.js 03

 

### Vuex

- 상태를 전역 저장소로 관리할 수 있도록 지원하는 라이브러리
  - 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할
- 기존 Pass props & Emit event에서 각 컴포넌트는 독립적으로 데이터를 관리
  - 데이터는 단방향 흐름으로 부모-> 자식간의 전달만 가능하며 반대의 경우 이벤트를 트리거
  - 장점 : 데이터의 흐름을 직관적으로 파악 가능
  - 단점 : 컴포넌트 중첩이 깊어지는 경우 동위 관계의 컴포넌트로의 데이터 전달이 불편해짐



### Vuex 핵심 컨셉

- State : 중앙에서 관리하는 모든 상태 정보.  (Vuex를 사용한다고 해서 store에 모든 상태를 넣어야 하는 것은 아님)

  - Vuex는 single state tree를 사용

  - 모든 애플리케이션 상태를 포함하는 원본소스 역할을 함

  - 각 애플리케이션마다 하나의 저장소만 가짐

  - state가 변화하면 해당 state를 공유하는 여러 컴포넌트의 DOM은 알아서 렌더링

  - 각 컴포넌트는 이제 Vuex Store에서 state 정보를 가져와 사용
  - Mutations에 의해 변경됨

- Mutations : 실제로 state를 변경하는 유일한 방법
  - mutation의 핸들러 함수는 반드시 동기적이어야 함
    - 상수로 작성하는 것을 권장
  - 첫번째 인자로 항상 state를 받음 (state를 변경하는 유일한 방법)
  - Actions에서 commit() 메서드에 의해 호출됨

- Actions : Backend API와 통신하여 Data Fetching 등의 작업 수행
  - mutations와 달리 비동기 작업이 포함될 수 있음
  - context 객체 인자를 받음. context 객체를 통해 index.js 파일 내에 있는 모든 요소의 속성 접근 & 메서드 호출이 가능하지만 state를 직접 변경하지 않음 (명확한 역할 분담을 통해 서비스 규모가 커져도 state를 올바르게 관리하기 위함)
  - 컴포넌트에서 dispatch() 메서드에 의해 호출됨
- Getters : state를 변경하지 않고 활용하여 계산을 수행 (computed 속성과 유사)
  - 종속성이 변경된 경우에만 다시 재계산됨
  - state를 특정한 조건에 따라 구분만 함 (계산된 값을 가져옴)
  - getters 자체가 state를 변경하지는 않음



### 로컬 스토리지

- vuex state를 자동으로 브라우저의 localstorage에 저장해주는 라이브러리
- 페이지가 새로고침 되어도 vuex state를 유지시킴

```npm install vuex-persistedstate```

```javascript
//index.js

import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
plugins: [
    createPersistedState()
]
})
```

