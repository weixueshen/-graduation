<template>
    <div class="all">
        <header class="py-3">
            <div class="mx-8 container-fluid">
                <p>全部课程：</p>
                <span style="color:#3073f4;">全部</span>
                <span>IT互联网</span>
                <span>实用外语</span>
                <span>设计创作</span>
                <span>兴趣艺术</span>
                <span>农业生产</span>
            </div>
        </header>
        <section class="py-3 white">
            <div class="mx-8 container-fluid nav-box">
                <a class="yuan-btn" style="color: #3073f4;margin:0;">全部</a>
                <a>编程语言</a>
            </div>
        </section>
        <footer class="py-3">
            <div class="mx-8 container-fluid top-check">
                <p>综合排序</p>
                <label>
                    <input type="checkbox">
                    <span>免费公开课</span>
                </label>
                <label>
                    <input type="checkbox">
                    <span>VIP课程</span>
                </label>
                <label>
                    <input type="checkbox">
                    <span>直播课</span>
                </label>
                <label>
                    <input type="checkbox">
                    <span>视频课</span>
                </label>
                <label>
                    <input type="checkbox">
                    <span>精品小课</span>
                </label>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.all{
    a{
        color: black;
        text-decoration: none;
        cursor: pointer;
        transition: all .3s ease;
    }
    header{
        div{
            display: flex;
            p{
                margin: 0;
            }
            span{
                cursor:pointer;
                transition: all .2s ease;
                margin: 0 2em;
            }
            span:hover{
                color: #3073f4;
            }
        }
    }
    section{
        .nav-box{
            line-height: 35px;
            .yuan-btn{
                border: 1px solid #3073f4;
                border-radius: 2px;
                padding: 2px 5px;
            }
            a{
                margin: 1em;
                font-size: 14px;
            }
            a:hover{
                color: #3073f4;
            }
        }
    }
}
</style>