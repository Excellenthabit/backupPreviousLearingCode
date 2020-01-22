<template>
    <div>
        <h1>这是Account组件</h1>
        <router-link to="/login">login</router-link>
        <router-link to="/register">register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>  

<style lang='less' scoped>
    div{
        color:aqua;
        h1{
            color:orange;
        }
    }
</style>
