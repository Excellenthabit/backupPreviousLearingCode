<template>
    <div>
        <h1>This is app component</h1>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
        <router-view></router-view>
        <br>
        <mt-button type="danger" @click='show' icon='more'>default</mt-button>
         <br>
        <mt-button type="default" size='large' plain>default</mt-button>
        <br>
        <mt-button type="default" size='small' disabled>default</mt-button>
        <button type='button' class='mui-btn mui-btn-royal'>Purple</button>
        
        <!-- <mybtn type='primary'>12345</mybtn> -->

    </div>
</template>

<script>
// 按需导入Toast组件
import { Toast } from 'mint-ui';

export default {
    data(){
        return{
            toastInstance: null
        }
    },

    created(){
        this.getList();
    },

    methods:{
        getList(){
            // 模拟获取列表的一个Ajax方法
            // 在获取数据之前，立即弹出Toast提示用户，正在加载数据
            this.show();
            setTimeout( () => {
                // 当3s之后，数据回来了，要把Toast移除
                this.toastInstance.close()
            }, 3000);
        },

        show(){
            // Toast('提示消息')
            this.toastInstance = Toast({
                message:'test',  //弹窗信息
                position:'top',  // 弹窗位置
                duration:-1,    // 弹窗时间，如果为-1，则永远则一直展示
                iconClass:'glyphicon glyphicon-heart' ,    // 设置图标的类，需要自行准备。。。
                className: 'mytoast'
            })  
        }
    }
}
</script>   

<style scoped>
/* scoped作用域 */
/* 样式的scoped是通过css的属性选择器实现的 */
    div{
        color:red;
    }
</style>
