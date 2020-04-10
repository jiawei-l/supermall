<template>
    <grid-view>
        <Good :contentDetail=""></Good>
    </grid-view>
</template>

<script>
    import GridView from 'common/gridView/GridView'
    import Good from 'components/content/goods/Goods'

    export default {
        name: "ContentDetail",
        components:{
            Good,
            GridView

        },
        props:{
            contentDetail:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>