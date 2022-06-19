<template>

<div>
    <child-component-fourth @send-message="sendMessage" /> 
</div>
</template>
<script>
import ChildComponentFourth from './ChildComponent4.vue'
export default {

    name: 'ParentComponentFourth',

    components:{ChildComponentFourth}, 

    methods: {
        sendMessage(data) {
            console.log(data)
        }
    }
}

</script>