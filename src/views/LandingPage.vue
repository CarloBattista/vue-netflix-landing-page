<template>
    <HeaderComp />
    <div class="mainView">
        <HeroComp />
        <BannerComp />
        <CardComp />
    </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import HeroComp from '../components/HeroComp.vue';
import BannerComp from '../components/BannerComp.vue';
import CardComp from '../components/CardComp.vue';

export default {
    name: "LandingPage",
    components: {
        HeaderComp,
        HeroComp,
        BannerComp,
        CardComp
    },
}
</script>

<style scoped>
.mainView{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
</style>