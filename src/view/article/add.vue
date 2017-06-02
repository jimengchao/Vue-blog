<template>
  <div class="app-container article-list-container">
		
		<div class="article-form">
			<div class="article-head">
				文章
			</div>
			<el-form ref="form" :model="form" label-width="80px" label-position="top">
			  <el-form-item label="活动名称">
			    <el-input v-model="form.title"></el-input>
			  </el-form-item>

			  <el-form-item label="活动标签">
			    <el-input v-model="form.tag" placeholder="回车创建标签"></el-input>
			  </el-form-item>
			  <el-form-item >
			    <el-tag>标签一</el-tag>
				<el-tag type="gray">标签二</el-tag>
				<el-tag type="primary">标签三</el-tag>
				<el-tag type="success">标签四</el-tag>
				<el-tag type="warning">标签五</el-tag>
				<el-tag type="danger">标签六</el-tag>
			  </el-form-item>
				
			  	<label class="el-form-item__label">活动内容</label>
			  <div class="">
			  	<textarea id="editor"></textarea>
			  </div>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">保存</el-button>
			    <el-button>发布</el-button>
			  </el-form-item>
			</el-form>
		</div>


		<div class="article-preview">
			131231231231231231231231231231231234
		</div>

  </div>
</template>


<script>

export default {
	name: 'articleAdd',
	data () {
		return {
		  	form:{
		  		title:'',

		  	}
		}
	},
	methods:{
		onSubmit(){
			console.log('ok');
		}
	},
	mounted () {
	
	}
}
</script>

<style lang="scss" scoped>
	.article-head{
		font-size:20px;
		color:#2a2a2a;
		margin-bottom:25px;
	}
	
	.article-form{
		display:inline-block;
		width: 45%;
		padding-right:60px;
		margin-right:20px;
		border-right:2px solid #bfcbd9;
	}
	
	.article-preview{
		display:inline-block;
	}

	.article-form,.article-preview{
		vertical-align: top;
	}
	.el-select{
		width:100%;
	}

</style>
