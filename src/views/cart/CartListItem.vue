<template>
  <div id="item">
  <select-button :is-select="product.isSelect" @click.native="changeSelect"></select-button>
    <div class="img">
      <img :src="product.image" alt="">
    </div>
    <div class="intro">
      <div class="title">
        {{product.title}}
      </div>
      <div class="des">
        商品描述:{{product.desc}}
      </div>
      <div class="bottom">
        <span class="item-price">¥{{product.price}}</span>
        <span class="item-count">x{{product.count}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import SelectButton from './SelectButton'
  export default {
    name: "ShopCartItem",
    props: {
      product: Object
    },
    components:{
      SelectButton
    },

    methods: {
      changeSelect(){
        this.product.isSelect=!this.product.isSelect
      }
    }
  }
</script>

<style scoped>
  #item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  /*.item-selector {*/
  /*  width: 14%;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*}*/

  .title, .des {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .img {
    padding: 5px;
  }

  .img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .intro {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .des {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .bottom{
    display: flex;
    height: 30px;
    line-height: 30px;
    padding: 10px;
  }
  .bottom span{
    display: block;
    flex: 1;
  }
  .item-price{
    color: red;
  }
  .item-count{
    color: rebeccapurple;
    text-align: right;
    padding-right: 20px;
  }

</style>
