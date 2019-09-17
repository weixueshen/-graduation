<template>
	<div class="box">
	<header>
		<div class="top-box hidden-xs hidden-sm">
		<div class="container text-center">
			<div class="row">
			<div class="c1 col-xs-2">
				<a href="#">本人微信</a>
				<span><i class="glyphicon glyphicon-triangle-bottom"></i></span>
			</div>
			<div class="c1 col-xs-5">假如你不愿意加我微信就打我电话187200289594</div>
			<div class="c1 col-xs-3">
				<a href="#" class="btn btn-primary btn-xs" role="button">点我登入</a>
				<a href="#" class="btn btn-default btn-xs" role="button">点我注册</a></div>
			<div class="c1 col-xs-2"><a href="#">个人中心</a></div>
			</div>
		</div>
		</div>
  	</header>
  <section id="top">
    <div class="nav-box .navbar-static-top">
      <nav class="navbar navbar-default bottom-none">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav la-ul">
              <li class="act"><router-link tag="a" to="/home">首页详情</router-link></li>
              <li><router-link tag="a" to="/all">全部课程</router-link></li>
              <li><router-link tag="a" to="/ouer">关于我们</router-link></li>
			  <li class="star1"><router-link tag="a" to="/login">点我登录</router-link></li>
              <li class="star1"><router-link tag="a" to="/regist">点我注册</router-link></li>
              <li class="star1"><router-link tag="a" to="/user">个人中心</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right hidden-sm hidden-xs">
              <li><a href="#">更多精彩</a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
    </div>
  </section>
	<transition>
		<router-view></router-view>
	</transition>
	<footer class="">
		<div class="foot-top white py-5">
			<div class="nav-info container-fluid">
				<span>友情链接</span>
				<a href="#">特别通道</a>
				<a href="#">SEO优化中心</a>
				<a href="#">我们的商城</a>
				<a href="#">我们的淘宝旗舰店</a>
				<a href="#">安全中心</a>
			</div>

		</div>
	</footer>
	<a class="go-top" href="#top">
		<svg t="1568685001487" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2560" width="30" height="30"><path d="M911.344 821.76c-20.48 0-61.44 0-81.92-20.464L501.76 453.104 174.064 801.28c-40.96 40.96-102.4 40.96-143.36 0-40.96-40.976-40.96-102.416 0-143.376l409.6-409.6c40.976-40.96 102.416-40.96 143.376 0l409.6 409.6c40.96 40.976 40.96 102.416 0 143.376C972.784 821.76 931.84 821.76 911.344 821.76L911.344 821.76zM911.344 821.76" p-id="2561" fill="#ffffff"></path></svg>
	</a>
	</div>

</template>


<script>
export default {
}
</script>

<style lang="scss" scoped>
.go-top{
	position:fixed;
	bottom: 5em;
	right: .8em;
	width: 30px;
	height:30px;
	border-radius: 50%;
	background: #000000;
	opacity: 0.5;
	transition: all .5s ease;
}
.go-top:hover{
	opacity: 1;
}
.glyphicon-chevron-left::before {
    content: "";
}
.glyphicon-chevron-right::before {
	content: "";
}
.carousel-inner{
	img{
		transition: all 0.5s ease;
		height: 450px;
	}
}
.pb-5, .py-5 {
    padding-bottom: 3rem !important;
}
.pt-5, .py-5 {
    padding-top: 3rem !important;
}
.title-info{
	display: flex;
	margin:0 8em; 
	margin-bottom: 1em;
	h3{
		font-size: 20px;
	}
	ul{
		list-style: none;
		width: 100%;
		border-bottom: 1px solid #e4e5e8;
		height: 31px;
		li{
			float: right;
		}
	}
}
.nav-info{
	margin:0 8em;
}

.img-title-info{
	padding: 1em 1em 0 1em;
	.botton-title-info{
		line-height: 2em;
		font-size:12px;
		p{
			float: left;
		}

	}
}

footer{
	.foot-top{
		span{
			font-size: 16px;
			font-weight: 500;
		}
		a{
			margin: 0 1em;
		}
	}
}
@media (min-width: 991px){
	.star1{
		display: none;
	}
}


@media (max-width:990px){
	.star1{
		display: block;
	}
}



</style>


