<template>

<div>
<button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
<child-component-fifth ref="child_component5" />
</div>
</template>
<script>
import ChildComponentFifth from './ChildComponent5.vue'
export default {

    name: 'ParentComponentFifth',

    components:{ChildComponentFifth}, 

    computed: { //자식 컴포넌트의 msg값 감지
        msg() {
            return this.$refs.child_component5.msg
        }
    },

    methods: {
        checkChild() {
            alert(this.msg)
        }
    }
}

</script>