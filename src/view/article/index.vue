<template>
  <div class="app-container article-list-container">
      <div class="filter-container">
          <el-input class="filter-item" style="width:200px;" placeholder="请输入搜索内容"></el-input>

          <el-select class="filter-item" clearable v-model="listQuery.title" placeholder="分类" style="width:120px;">

            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>

          <el-select class="filter-item" multiple filterable allow-create v-model="listQuery.label" placeholder="标签" style="width:220px;">

            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>

          <el-button type="primary" icon="search">搜索</el-button>

      </div>
      <div class="article-list">
        <el-table :data="tableData6" ref="singleTable" border fit highlight-current-row style="width:100%">

            <el-table-column align="center" label="序号" width="65" type="index"></el-table-column>
            
            <el-table-column align="center" label="序号" width="65" type="index"></el-table-column>

        </el-table>
      </div>
  </div>
</template>


<script>

export default {
  name: 'article',
  data () {
    return {
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎1'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        listQuery: {
            page: 1,
            limit: 20,
            importance: '',
            title: '',
            label: '',
            sort: '+id'
        },
    }
  }
  
}
</script>

<style lang="scss" scoped>
    .app-container{
        padding: 20px;
    }
    .filter-item{
      margin-right: 10px;
    }
    .article-list{

      margin-top:20px;
    }
</style>
