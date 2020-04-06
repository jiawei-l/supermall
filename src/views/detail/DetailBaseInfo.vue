<template>
    <div v-if="Object.keys(detailData).length !== 0" class="base-info">
        <div class="info-title">{{detailData.title}}</div>
        <div class="info-price">
            <span class="n-price">{{detailData.newPrice}}</span>
            <span class="o-price">{{detailData.oldPrice}}</span>
            <span class="discount">{{detailData.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{detailData.columns[0]}}</span>
            <span>{{detailData.columns[1]}}</span>
            <span>{{detailData.services[detailData.services.length-1].name}}</span>
        </div>
        <div class="info-service">
      <span class="info-service-item" v-for="index in detailData.services.length-1" :key="index">
        <img :src="detailData.services[index-1].icon">
        <span>{{detailData.services[index-1].name}}</span>
      </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
            detailData:{
                type:Object,
                defaults(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
.info-title{
    padding: 15px 10px;
}
.info-price{
    padding-bottom: 15px;
    padding-left: 20px;
}
    .n-price{
        color: red;
        font-size: 25px;
    }
    .o-price{
        margin-left: 20px;
        color: #cccccc;
        text-decoration: line-through;
    }
    .info-other{
        display: flex;
        justify-content: space-between;
        /*margin-bottom: 20px;*/
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
    }
    .info-other span{
        width: 33%;
        text-align: center;
        color: #cccccc;
    }
    .info-service{
        display: flex;
        justify-content: space-around;
        line-height: 60px;
        border-bottom: 3px solid #ccc;

    }
    .info-service img{
        width: 20px;
        position: relative;
        top: 4px;
    }
</style>