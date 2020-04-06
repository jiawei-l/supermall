<template>
    <div class="recommand">
        <div v-for="item in recommand" class="recommand-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recommand",
        props:{
            recommand:{
                type:Array,
                defaults(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.recommand{
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 20px 0;
    border-bottom: 8px solid #ccc;
}
    .recommand-item{
        /*flex: 1;*/
        width: 22%;
        text-align: center;
    }
.recommand-item img{
    width: 100%;
}
</style>