<template>
    <div class="rout-view">
		<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="https://res.shiguangkey.com/file/201909/02/20190902105959897341723.jpg!mall_index_banner_a?x-oss-process=image/format,webp" alt="">
      </div>
      <div class="item">
        <img src="https://res.shiguangkey.com/file/201909/02/20190902110059741015875.jpg!mall_index_banner_a?x-oss-process=image/format,webp" alt="...">
      </div>
      <div class="item">
        <img src="https://res.shiguangkey.com/file/201909/02/20190902110126076232837.jpg!mall_index_banner_a?x-oss-process=image/format,webp" alt="...">
      </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
		  <svg t="1568631635148" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3525" width="32" height="32"><path d="M268.217 526.604L725.45 1017.54a21.064 21.064 0 0 0 36.23-14.604V21.064A21.064 21.064 0 0 0 725.45 6.46L268.217 497.396a21.064 21.064 0 0 0 0 29.208z" p-id="3526" fill="#ffffff"></path></svg>
	  </span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true">
		  <svg t="1568631855826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4298" width="32" height="32"><path d="M896 627.2l-473.6 384c-25.6 12.8-64 12.8-89.6-12.8-12.8-12.8-12.8-25.6-12.8-38.4v-768c0-38.4 25.6-64 64-64 12.8 0 25.6 0 38.4 12.8l473.6 384c25.6 25.6 38.4 64 0 102.4 12.8-12.8 0 0 0 0z" p-id="4299" fill="#ffffff"></path></svg>
	  </span>
    </a>
  </div>
	<!-- 各种列表循环 -->
	<section class="" style="margin-top:1.5em;">
		<div class="title-info">
			<h3>IT互联网</h3>
			<ul>
				<li>
					<a href="#">
						更多
					</a>
				</li>
			</ul>
		</div>
		<div class="nav-info container-fluid">
			<div class="row">
				<div class="col-lg-2 col-md-3 col-sm-6 mb-3  row-item" v-for="item in msg" :key="item.id">
					<img :src="item.imgsrc" alt="" class="img-fluid">
					<div class="img-title-info white nav-item">
						<p class="p-info" style="font-size:15px;">{{ item.title }}</p>
						<div class="botton-title-info">
							<p>报名人数:  <span class="green">{{ item.person }}</span></p>
							<p class="green" style="float:right;">{{ item.much }}</p>
							<div style="clear:both;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="">
		<div class="title-info">
			<h3>EG实用英语</h3>
			<ul>
				<li>
					<a href="#">
						更多
					</a>
				</li>
			</ul>
		</div>
		<div class="nav-info container-fluid">
			<div class="row">
				<div class="col-lg-2 col-md-3 col-sm-6 mb-3  row-item" v-for="item in msg" :key="item.id">
					<img :src="item.imgsrc" alt="" class="img-fluid">
					<div class="img-title-info white nav-item">
						<p class="p-info" style="font-size:15px;">{{ item.title }}</p>
						<div class="botton-title-info">
							<p>报名人数:  <span class="green">{{ item.person }}</span></p>
							<p class="green" style="float:right;">{{ item.much }}</p>
							<div style="clear:both;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="">
		<div class="title-info">
			<h3>DE设计创作</h3>
			<ul>
				<li>
					<a href="#">
						更多
					</a>
				</li>
			</ul>
		</div>
		<div class="nav-info container-fluid">
			<div class="row">
				<div class="col-lg-2 col-md-3 col-sm-6 mb-3  row-item" v-for="item in msg" :key="item.id">
					<img :src="item.imgsrc" alt="" class="img-fluid">
					<div class="img-title-info white nav-item">
						<p class="p-info" style="font-size:15px;">{{ item.title }}</p>
						<div class="botton-title-info">
							<p>报名人数:  <span class="green">{{ item.person }}</span></p>
							<p class="green" style="float:right;">{{ item.much }}</p>
							<div style="clear:both;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="">
		<div class="title-info">
			<h3>IN兴趣艺术</h3>
			<ul>
				<li>
					<a href="#">
						更多
					</a>
				</li>
			</ul>
		</div>
		<div class="nav-info container-fluid">
			<div class="row">
				<div class="col-lg-2 col-md-3 col-sm-6 mb-3  row-item" v-for="item in msg" :key="item.id">
					<img :src="item.imgsrc" alt="" class="img-fluid">
					<div class="img-title-info white nav-item">
						<p class="p-info" style="font-size:15px;">{{ item.title }}</p>
						<div class="botton-title-info">
							<p>报名人数:  <span class="green">{{ item.person }}</span></p>
							<p class="green" style="float:right;">{{ item.much }}</p>
							<div style="clear:both;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="">
		<div class="title-info">
			<h3>GO农业生产</h3>
			<ul>
				<li>
					<a href="#">
						更多
					</a>
				</li>
			</ul>
		</div>
		<div class="nav-info container-fluid">
			<div class="row">
				<div class="col-lg-2 col-md-3 col-sm-6 mb-3  row-item" v-for="item in msg" :key="item.id">
					<img :src="item.imgsrc" alt="" class="img-fluid">
					<div class="img-title-info white nav-item">
						<p class="p-info" style="font-size:15px;">{{ item.title }}</p>
						<div class="botton-title-info">
							<p>报名人数:  <span class="green">{{ item.person }}</span></p>
							<p class="green" style="float:right;">{{ item.much }}</p>
							<div style="clear:both;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	</div>
</template>

<script>
export default {
    data(){
		return {
			msg : []
		}
	},
	created(){
		this.init();
		console.log(this.msg);
	},
	methods:{
		init(){
			this.$http.get('item',{},{emulateJSON:true}).then(res=>{
				console.log(res.body.itemarr);
				if(res.body.star == 200){
					for(var i=0;i<10;i++){
						this.msg.push(res.body.itemarr[i]);
					}
				}
			})
		},
		topClocs(){
			// document.getElementsByClassName("imginfo").style.display = "none";
			console.log("1");
			this.msg = !this.msg
		}
	}
}
</script>



<style lang="scss" scoped>

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


@media (max-width:1280px){
	.carousel-inner{
		img{
			height: 380px;
		}
	}
}

@media (max-width:980px){
	.carousel-inner{
		img{
			height: 300px;
		}
	}
}

@media (max-width:990px){
	.star1{
		display: block;
	}
	.nav > li > a{
		padding: 10px 14px;
	}
}

@media (max-width:680px){
	.carousel-inner{
		img{
			height: 200px;
		}
	}
}
@media (max-width:1200px){
  .title-info,.nav-info{
    margin:0em 1em;
  }
}
</style>