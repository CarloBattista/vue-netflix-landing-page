<template>
    <HeaderComp />
    <div class="mainView">
        <HeroComp />
        <BannerComp />
        <CardComp />
        <AccordionComp />
    </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import HeroComp from '../components/HeroComp.vue';
import BannerComp from '../components/BannerComp.vue';
import CardComp from '../components/CardComp.vue';
import AccordionComp from '../components/AccordionComp.vue';

export default {
    name: "LandingPage",
    components: {
        HeaderComp,
        HeroComp,
        BannerComp,
        CardComp,
        AccordionComp
    }
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