<template>

<div>
    <child-component-second @send-message="sendMessage" ref="child_component2"></child-component-second>
</div>
</template>
<script>
import ChildComponentSecond from "./ChildComponent2";
export default {
    name: 'ParentComponentSecond',

    components:{ChildComponentSecond}, 

    mounted() {
        this.$refs.child_component2.callFromParent();
    }, 

    unmounted() {}, 

    methods: {}
}

</script>