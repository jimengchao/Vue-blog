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

          <router-link class="add-link" to="/article/add">
            <el-button type="primary" icon="edit">添加</el-button>
          </router-link>

      </div>
      <div class="article-list">
        <el-table :data="tableData6" ref="singleTable" border fit highlight-current-row style="width:100%" class="article-table">

            <el-table-column align="center" width="65" type="selection"></el-table-column>
            
            <el-table-column align="center" label="序号" prop="id" width="65"></el-table-column>
            <el-table-column align="center" label="时间" prop="time" width="220"></el-table-column>
            <el-table-column align="left" label="标题" prop="title" ></el-table-column>
            <el-table-column align="center" label="阅读量" prop="pv" width="90" ></el-table-column>
            <el-table-column align="center" label="状态" prop="status" width="90" ></el-table-column>


            <el-table-column align="center" label="操作"  width="140">

                <template scope="scope">
                  <el-button type="info" size="small">发布</el-button>
                  <el-button type="danger" size="small">移除</el-button>
                </template>

            </el-table-column>

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
          value: '黄金糕',
          label: '黄金糕'
        }],
        tableData6: [{
          id: 1,
          time: '2017-01-02',
          title: '大六人深增持技得养将何生军',
          pv: 3,
          status: 3
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

    .article-table td{
      padding: 8px 0;
    }
</style>
