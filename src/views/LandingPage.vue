<template>
    <HeaderComp />
    <div class="mainView">
        <HeroComp />
        <BannerComp />
    </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import HeroComp from '../components/HeroComp.vue';
import BannerComp from '../components/BannerComp.vue';

export default {
    name: "LandingPage",
    components: {
        HeaderComp,
        HeroComp,
        BannerComp
    },
}
</script>

<style scoped></style>