<template>
  <div id="releasedCourse">
    <h3>发布的课</h3>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
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
                <td>10001</td>
                <td>JAVA</td>
                <td>01/04/2012</td>
                <td>从入门到秃头</td>
              </tr>
              <tr class="success">
                <td>10022</td>
                <td>JAVA</td>
                <td>05/04/2012</td>
                <td>从入门到精通</td>
              </tr>
              <tr class="error">
                <td>10002</td>
                <td>PHP</td>
                <td>02/06/2012</td>
                <td>PHP是世界上最好的语言！</td>
              </tr>
              <tr class="warning">
                <td>51563</td>
                <td>C++</td>
                <td>03/09/2012</td>
                <td>真特么难，我好难啊</td>
              </tr>
              <tr class="info">
                <td>46556</td>
                <td>JavaScript</td>
                <td>04/04/2019</td>
                <td>我和java的关系就像雷锋和雷峰塔的关系——一毛钱关系都没有！</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    #releasedCourse{
        h3{
            text-align: center;
        }
        img{
            width: 140px;
        }
    }
</style>