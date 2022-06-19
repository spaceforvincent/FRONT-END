<template>

<div>
    <!-- 옵션을 바꿀때마다 change이벤트 발생 -->
<select v-model="selectedValue" @change="changeSelect"> 
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
</select>
</div>
</template>
<script>
export default {

    name: 'EventChange',

    components:{}, 

    data() {

        return {

            selectedValue: ''

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {
        changeSelect () {
            alert(this.selectedValue);
        }
    }
}

</script>