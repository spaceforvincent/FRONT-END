<template>

<div>
<h1>Full Name : {{fullName}}</h1>
</div>
</template>
<script>
export default {

    name: 'ComputedPractice',


    data() {

        return {

            firstName: 'Hyeokju',
            lastName: 'Choi'

    };

},
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    },

}

</script>