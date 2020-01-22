<template>
    <div>
        <h1>message</h1>
        <ul>
            <li v-for="item in jsonArr" :key='item.id'>
                {{ item.name }}
            </li>
        </ul>
        <hr>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jsonArr:[]
        }
    },
    created(){
        // this.getJson()
        for(let item of this.jsonArr){
            console.log(item.key)
        }
    },

    methods:{
        getJson(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(result =>{
                // console.log(result.body)
                this.jsonArr = result.body
            })
        },
    }
 }
</script>

<style lang="scss" scoped>
    
</style>