<template>

<div>
<button type="button" @click="increaseCounter">Add 1</button>
<button type="button" @click="setCount(7)">set 7</button>
<button type="button" @click="one(),two()">Click</button>
<p>The counter is : {{counter}}</p>
</div>
</template>
<script>
export default {

    name: 'EventClick',

    components:{}, 

    data() {

        return {

            counter: 0

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {
        increaseCounter() {
            this.counter = this.counter + 1
        },
        setCount(counter) {
            this.counter = counter
        },
        one() {
            alert('One')
        },
        two() {
            alert('Two')
        }
    }
}

</script>