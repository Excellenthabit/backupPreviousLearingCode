<template>
    <div>
        <h1>这是用.vue文件定义出来的登录组件--{{msg}}</h1>
        <h2>hello vue.js</h2>
        <p @click='show'> {{msg }} </p>
    </div>
</template>

<script>
    export default {
        // 注意 组件中的data必须是function
        data(){
            return{
                msg:'hello webpack-vue project'
            }
        },
        methods: {
            show(){
                console.log('调用了login.vue中的show方法')
            }
        },
    }
</script>

<style>
    body{
        background-color:lightgreen;
    }
</style>

