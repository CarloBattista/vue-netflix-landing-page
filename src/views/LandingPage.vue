<template>
    <HeaderComp />
    <div class="mainView">
        <HeroComp />
        <BannerComp />
        <CardComp />
        <AccordionComp />
    </div>
    <FooterComp />
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import HeroComp from '../components/HeroComp.vue';
import BannerComp from '../components/BannerComp.vue';
import CardComp from '../components/CardComp.vue';
import AccordionComp from '../components/AccordionComp.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
    name: "LandingPage",
    components: {
        HeaderComp,
        HeroComp,
        BannerComp,
        CardComp,
        AccordionComp,
        FooterComp
    }
}
</script>

<style scoped>
.mainView{
    position: relative;
    top: -92px;
    left: 0;
    width: 100%;
}

/* Media Query's */
@media only screen and (max-width: 960px) {
    .mainView {
        top: -80px;
    }
}

@media only screen and (max-width: 300px) {
    .mainView {
        top: -114px;
    }
}
</style>