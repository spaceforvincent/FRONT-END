<template>

<div>
<div class="modal-container">
    <header>
        <slot name="header"></slot>
    </header>    
    <main>
        <slot></slot>
    </main>    
    <footer>
        <slot name="footer"></slot>
    </footer>    
</div>
</div>
</template>
<script>
export default {

    name: '',

    components:{}, 

    data() {

        return {

            sampleData: ''

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>