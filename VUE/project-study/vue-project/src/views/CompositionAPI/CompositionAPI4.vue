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
import {plusCalculator} from '../../common.js'
export default {

    name: 'CalculatorFourth',
    setup() {
        let {num1,num2,result} = plusCalculator()
        return {
            num1,num2,result
        }             
    }
}

</script>