<template>
    <div id="updatePwd">
        <h3>修改密码</h3>    
        <ul>
            <li>
                <label for="">用户名</label>
                <input type="text">
            </li>
            <li>
                <label for="">新密码</label>
                <input type="password">
            </li>
            <button>修改密码</button>
        </ul>    
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    #updatePwd{
        h3{
            text-align: center;
        }
        ul{
            list-style: none;
        }
    }
</style>