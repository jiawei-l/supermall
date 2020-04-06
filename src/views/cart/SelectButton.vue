<template>
    <div class="select-button">
        <img src="~assets/img/tick.svg" alt=""  :class="{select:isSelect}">
    </div>
</template>

<script>
    export default {
        name: "SelectButton",

        methods:{
        },
        props:{
            isSelect:{
               type:Boolean,
                defaults(){
                   return false
                }
            }
        }
    }
</script>

<style scoped>
.select-button img{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    position: relative;
    top:50%;
    transform: translateY(-9px);

}
    .select{
        background: palevioletred;
    }

</style>