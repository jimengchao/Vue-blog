<template>
  <div class="app-container article-list-container">
		<div class="article-head">
			文章
		</div>
		<div class="article-form">
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

  </div>
</template>


<script>
import SimpleMDE from 'simplemde'
import css from 'simplemde/dist/simplemde.min.css'

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
		let simplemde = new SimpleMDE({
			element: document.getElementById("editor")
		});
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
		width:440px;
	}
	.el-select{
		width:100%;
	}

</style>
