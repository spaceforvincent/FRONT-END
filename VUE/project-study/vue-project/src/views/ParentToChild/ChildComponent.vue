<template>
<div>
    <button type="button" @click="childFunc" ref="btn">click</button> 
</div>
</template>
<script>
export default {

    methods: {
        childFunc() {
            console.log("부모 컴포넌트에서 직접 발생시킨 이벤트")
        }
        }
}
//html태그에 ref="id"를 지정하면 vue 컴포넌트의 함수에서 this.$refs를 통해 접근이 가능하게 됨. 
//ref 속성은 HTML태그에서 사용되는 id와 비슷한 기능을 한다고 생각하면 됨. 
</script>