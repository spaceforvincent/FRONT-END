<template>

<div>

</div>
</template>
<script>
import ApiMixin from '../api.js'
export default {
    mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록

    data() {

        return {

            productList: []

        

    };

},

    created() {}, 

    async mounted() {
        this.productList = await this.$callAPI("https://00661f50-4d2a-4aae-900a-6a228a306fde.mock.pstmn.io/list", "get")
        console.log(this.productList)
    }, 

    unmounted() {}, 

    methods: {}
}

</script>