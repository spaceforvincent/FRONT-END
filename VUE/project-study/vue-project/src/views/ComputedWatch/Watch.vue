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
    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {
        changeName (){
            this.firstName = 'Eunsol'
        }
    }
}

</script>