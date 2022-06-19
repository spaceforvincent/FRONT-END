<template>

<div>
    <child-component @send-message="sendMessage" ref="child_component" />
</div>
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {

    components:{ChildComponent}, 

    created() {}, 

    mounted() { 
        this.$refs.child_component.$refs.btn.click();
    }, 

    unmounted() {}, 

    methods: {}
}

</script>