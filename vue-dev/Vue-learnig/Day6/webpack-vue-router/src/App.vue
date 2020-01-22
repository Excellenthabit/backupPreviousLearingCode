<template>
    <div>
        <h1>This is app component</h1>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>   

<style scoped>
/* scoped作用域 */
/* 样式的scoped是通过css的属性选择器实现的 */
    div{
        color:red;
    }
</style>
