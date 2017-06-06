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

			    <el-input placeholder="回车创建标签" v-model="form.tag" @keyup.enter.native="createTag"></el-input>

			  </el-form-item>
			  <el-form-item>
				<el-tag
				  v-for="tag in form.tags"
				  :key="tag.name"
				  :closable="true"
				  :type="tag.type"
				  @close="delTag(tag)"
				>
					{{tag.name}}
				</el-tag>
			  </el-form-item>
				
			  <el-form-item label="内容">
				<div class="el-textarea">
					<textarea type="textarea" rows="2" @keydown.9="tabFn" v-model="form.content" autocomplete="off" validateevent="true" class="el-textarea__inner mdEditor" style="height: 180px;"></textarea>
				</div>
			  </el-form-item>

			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">保存</el-button>
			    <el-button>发布</el-button>
			  </el-form-item>
			</el-form>
		</div>


		<div class="article-preview markdown-body" v-html="Content">
		</div>

  </div>
</template>


<script>
import marked from 'marked';
import range from '@/assets/js/rangeFn'
import '@/assets/js/highlight/highlight'

import '@/assets/css/markdown.css'

let renderer = new marked.Renderer();
marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

function insertContent(val, that) {
    let textareaDom = document.querySelector('.mdEditor');
    let value = textareaDom.value;
    let point = range.getCursortPosition(textareaDom);
    let lastChart = value.substring(point - 1, point);
    let lastFourCharts = value.substring(point - 4, point);
    if (lastChart != '\n' && value != '' && lastFourCharts != '    ') {
        val = '\n' + val;
        range.insertAfterText(textareaDom, val);
    } else {
        range.insertAfterText(textareaDom, val);
    }
    that.previewContent = document.querySelector('.mdEditor').value;
}

export default {
	name: 'articleAdd',
	data () {
		return {
		  	form:{
		  		title:'',
		  		intro:'',
		  		content:'',
		  		tag:'',
		  		tags:[]
		  	},
		  	previewContent: ""
		}
	},
	methods:{
		onSubmit () {
			console.log('ok');
		},
		tabFn (evt) {
            insertContent("    ", this);
            // 屏蔽屌tab切换事件
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
            }
        },
        createTag (){

        	let tag = this.form.tag;
        	let type = this.getTagType();
        	this.$store.dispatch('saveArticle',{tag:tag}).then(res => {
        		if( res.data.code == 200 ){
        			//添加标签
        			this.form.tags.push({
        				name: tag,
        				type: type
        			})
        			//标签输入框置空
        			this.form.tag = ''
        		}
        	}).catch(err => {
        		this.$message.error(err.data.msg || '添加失败');
        		console.log(err);
        	})

        },
        getTagType(){
        	let typeArr = ['','gray','primary','success','warning','danger'];
        	let num = Math.random() * typeArr.length | 0
        	return typeArr[num];
        },
        delTag(evt){
        	this.form.tags.splice(evt, 1);
        }

	},
	directives: {
	  
	},
	mounted () {
		
	},
	computed: {
		Content(){
			return marked(this.form.content,{
                sanitize: true
            })
		}
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

	.el-tag + .el-tag {
	    margin-left: 10px;
	}

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
