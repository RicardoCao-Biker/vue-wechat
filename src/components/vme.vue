<template>
	<div id='mepage-bg'>
		<router-link to="/myprofile">
		<div class='idcells'>
				<div class="weui-cell__hd">
	            	<img src='../assets/image/rico.png' id='headimage'>
	          	</div>
	          	<div class="weui-cell__bd">
	            	<h2 class="self-nickname">曹昱RICO</h2>
	           		 <p class="self-wxid">微信号: ricardo_cy</p>
	         	</div>
	         	<div class="weui-cell__ft">
	           		<img src="../assets/image/chat-info-qr.png">
	          </div>
		</div>
		</router-link>
		<div class='cells'>
			<div class='cell'>
				<div class='cellimg'>
	           		<img src="../assets/image/me_more-my-bank-card.png">
	         	</div>
	         	<a href="https://pay.weixin.qq.com/index.php/core/home">
	         	<div class="cellname">
	           		<p>钱包</p>
	         	</div>
	         	</a>
	         </div>
		</div>
		<div class='cells'>
			<div class='cell'>
				<div class='cellimg'>
           			<img src="../assets/image/me_more-my-favorites.png">
         		</div>
         		<div class="cellname">
           		<p>收藏</p>
           		</div>
         	</div>
         	<div class='cell'>
				<div class='cellimg'>
           			<img src="../assets/image/me_more-my-album.png">
         		</div>
         		<router-link to="/moments">
         		<div class="cellname">
           			<p>相册</p>
           		</div>
         	  	</router-link>
         	</div>
         	<div class='cell'>
				<div class='cellimg'>
           			<img src="../assets/image/me_my-card-package-icon.png">
         		</div>
         		<div class="cellname">
           			<p>卡包</p>
           		</div>
         	</div>
         	<div class='cell'>
				<div class='cellimg'>
           			<img src="../assets/image/me_more-expression.png">
         		</div>
         		<div class="cellname">
           			<p>表情</p>
           		</div>
         	</div>
		</div>
		<router-link to="/settings">
		<div class='cells'>			
			<div class='cell'>
				<div class='cellimg'>
	           		<img src="../assets/image/me_more-setting.png">
	         	</div>
	         	<div class="cellname">
	           		<p>设置</p>
	         	</div>
         	</div>
		</div>
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
	}
</script>
<style type="text/css">
	#headimage{
		display:inline-block;
		margin:5px 10px 5px 5px;
		width:60px;
		height:60px
	}
	.self-nickname{
		display:inline-block;
	  	font-size:15px;
	  	margin:0 0 5px 0
	  }
  	.self-wxid{
  		font-size:13px;
  		margin:0px;
  	}
  	.weui-cell__hd{
	  	display:inline-block;
	  }
	.weui-cell__bd{
	  display:inline-block;
	  vertical-align: top;
	  margin-top: 10px
	  }
	.weui-cell__bd h2,p{
		display: block;
	}
	.weui-cell__ft{
	  	display:inline-block;
	  	vertical-align: top;
	  	margin-top:23px;
	  	float: right;
	  }
    .weui-cell__ft img{
      	height:25px;
     	margin-right:25px}
</style>