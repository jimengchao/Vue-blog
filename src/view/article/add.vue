<template>
  <div class="app-container article-list-container">
		
		<div class="article-form">
			<div class="article-head">
				文章
			</div>
			<el-form ref="form" :model="form" label-width="80px" label-position="top">
			  <el-form-item label="标题">
			    <el-input v-model="form.title"></el-input>
			  </el-form-item>

			  <el-form-item label="简介">
			    <el-input type="textarea" :autosize="{minRows: 4}" v-model="form.intro"></el-input>
			  </el-form-item>

			  <el-form-item label="标签">
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
				
			  <el-form-item label="内容">
			    <el-input type="textarea" :autosize="{minRows: 8}" v-model="form.content"></el-input>
			  </el-form-item>

			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">保存</el-button>
			    <el-button>发布</el-button>
			  </el-form-item>
			</el-form>
		</div>


		<div class="article-preview markdown-body" v-html="previewContent">
		</div>

  </div>
</template>


<script>
import marked from 'marked';
import '@/assets/js/highlight/highlight'

import '@/assets/css/markdown.css'


marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
        return hljs.highlightAuto(code).value
   }
});


export default {
	name: 'articleAdd',
	data () {
		return {
		  	form:{
		  		title:'',
		  		content:''
		  	},
		  	previewContent: ""
		}
	},
	methods:{
		onSubmit(){
			console.log('ok');
		}
	},
	directives: {
	    // highlightjs(el,binding){
	    // 	let blocks = el.querySelectorAll('pre code');
  			// Array.prototype.forEach.call(blocks, hljs.highlightBlock);
	    // }
	},
	mounted () {
		
	},
	
	watch: {
		"form.content" (){
			this.previewContent = marked(this.form.content,{
                sanitize: true
            })
		}
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
		width:50%;
	}

	.article-form,.article-preview{
		vertical-align: top;
	}
	.el-select{
		width:100%;
	}

</style>
