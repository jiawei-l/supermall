<template>
  <scroll ref="scroll" class="content">
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :product="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'

  export default {
    name: "CartList",
    components: {
      Scroll, CartListItem
    },
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .content{
    overflow: hidden;
  }
</style>
