<template>
	<transition name="fade">
	<div id="moments">
		<div id="backtoexplore" @click="back">
				<span>〈 </span><span>返回</span>
		</div>
		<div id="mybackground"><img src="../../assets/image/mybackground.jpg"></div>
		<div id="nameandhead">
				<span>曹昱RICO</span>
				<span><img src="../../assets/image/rico.png"></span>
		</div>	
		<div id="mymoment">
			<div id="momentsli" v-for="themoments in moments">
				<div id="momentoutter">
					<div id="momentheader"><img :src="themoments.headerimg"></div>
					<div id="momentinfo">
						<div><strong>{{themoments.name}}</strong></div>
						<div>{{themoments.content}}</div>
						<div><img :src="themoments.imgs"></div>
						<div id="timebefore">{{themoments.time}}小时前</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</transition>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		data() {
       	 	return {
         	  	moments:[]
        }},
		created() {
    		axios.get('static/data.json').then(response => 
     			(this.moments=response.data.moments)
    		);
  		},
  		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style type="text/css">
	.fade-enter-active{
 		 transition: opacity .3s;
	}
	.fade-enter{
 		 opacity: 0;
	}
	#moments{
		position:absolute;
		height:630px;
		overflow:auto;
	}
	#mybackground{
		position:relative;
		width:100%;
		height:200px;
		}
	#mybackground img{
		position:relative;
		width:100%;
		height:200px;
		}
	#backtoexplore{
		position:fixed;
		top:12px;
		left:10px;
		color:white;
		z-index:100;
	}
	#backtoexplore a{
		color:white;
	}
	#nameandhead{
		position:absolute;
		right:10px;
		top:175px;
	}
	#nameandhead img{
		width:55px;
		height:55px;
		border:solid 0.5px #d9d9d9;
	}
	#nameandhead span{
		color:white;
		vertical-align:top;
	}
	#momentoutter{
		display:flex;
	}
	#momentheader{
		width:40px;
		height:40px;
		margin-left:15px;
	}
	#momentheader img{
		width:40px;
		height:40px;
	}
	#mymoment{
		margin:50px 0 0 0;
	}
	#momentsli{
		margin:10px 0 5px 0;
	}
	#momentinfo{
		margin:0 15px 0 15px;
		font-size: 14px
	}
	#momentinfo img{
		height:80px;
	}
	#momentinfo div{
		margin-bottom: 5px
	}
	#timebefore{
		font-size: 10px;
		color:grey;
	}
	#momentoutter{
		border-bottom: solid 1px #d9d9d9;
	}
</style>