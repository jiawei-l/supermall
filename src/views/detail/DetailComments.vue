<template>
    <div>
        <div v-if="Object.keys(comments).length !== 0">
            <div class="title">
                <span>用户评价</span>
                <span>更多</span>
            </div>
        <div class="user-mes">
            <img :src="comments.user.avatar" alt="">
            <span>{{comments.user.uname}}</span>
        </div>
        <div class="user-comment">
            <p>{{comments.content}}</p>
            <div class="comment-other">
                <span class="date">{{comments.created | showDate}}</span>
                <span>{{comments.style}}</span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import {formatDate} from "common/util";

    export default {
        name: "DetailComments",
        props:{
            comments:{
                type:Object,
                defaults(){
                    return {}
                }
            }
        },
        filters:{
            showDate(value){
                const date=new Date(value*1000)
                return formatDate(date,'yyyy-MM-dd hh:mm')

            }
        }

    }
</script>

<style scoped>
.title{
    height: 30px;
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    display: flex;
    padding: 0 20px;
}
    .title span{
        flex: 1;
    }
.title span:nth-child(2){
    text-align: right;
}
    .user-mes{
        padding:10px 20px ;
        display: flex;
        align-items: center;
        border-bottom: 1px dotted #ccc;
    }
    .user-mes img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .user-comment{
        padding: 0 20px;
        line-height: 1.5;

    }
    .comment-other{
        color: #cccccc;
    }
    .date{
        margin-right: 5px;
    }
</style>