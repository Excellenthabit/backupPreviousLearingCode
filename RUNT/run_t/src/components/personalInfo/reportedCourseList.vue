<template>
    <div id="reportedCourseList">
        <h3>已报名课程列表</h3>
          <table class="table">
            <thead>
              <tr>
                <th>课程ID</th>
                <th>课程名称</th>
                <th>完成时间</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12</td>
                <td>算法与数据结构</td>
                <td>01/04/2012</td>
                <td>从入门到放弃</td>
              </tr>
              <tr class="success">
                <td>1</td>
                <td>计算机网络</td>
                <td>01/04/2012</td>
                <td>404 Not found</td>
              </tr>
              <tr class="error">
                <td>2</td>
                <td>Linux</td>
                <td>02/04/2012</td>
                <td>真好玩</td>
              </tr>
              <tr class="warning">
                <td>3</td>
                <td>Python</td>
                <td>03/04/2012</td>
                <td>一直爬虫一直爽~</td>
              </tr>
              <tr class="info">
                <td>4</td>
                <td>公众表达</td>
                <td>04/04/2012</td>
                <td>站在台上，世界就是你的！</td>
              </tr>
            </tbody>
          </table>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    #reportedCourseList{
        h3{
            text-align: center;
        }
    }
</style>