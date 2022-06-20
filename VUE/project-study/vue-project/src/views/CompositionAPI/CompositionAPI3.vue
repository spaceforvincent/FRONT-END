<template>
<div>
<h2>calculator</h2>
<div>
    <input type="text" v-model="num1" @keyup="plusNumbers" />
    <span> + </span>
    <input type="text" v-model="num2" @keyup="plusNumbers" />
    <span> = </span>
    <span>{{result}}</span>
</div>
</div>
</template>
<script>
import {reactive,computed, toRefs} from 'vue'
function plusCalculator () {
    let state = reactive({
            num1:0,
            num2:0,
            result: computed(() => parseInt(state.num1) + parseInt(state.num2)) 
            //computed를 이용해서 num1, num2가 변경이 일어나면 즉시 result로 더한 값을 반환
        });
        return toRefs(state) //반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서 toRefs사용
}
export default {

    name: 'CalculatorThird',
    setup() {
        let {num1, num2, result} = plusCalculator();
        return {
            num1,num2,result
        }
    }
}

</script>