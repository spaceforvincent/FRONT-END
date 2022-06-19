<template>

<div>
    <child-component-third @send-message="sendMessage" ref="child_component3" />
    <button type="button" @click="changeChildData">Change Child Data</button>
</div>
</template>
<script>
import ChildComponentThird from './ChildComponent3.vue'
export default {
    name: 'ParentComponentThird',
    components:{ChildComponentThird}, 

    methods: {
        changeChildData(){
            this.$refs.child_component3.msg = "부모 컴포넌트가 변경한 데이터"
    }}
}

</script>