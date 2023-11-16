<template>
    <HeaderComp />
    <div class="mainView">
        <HeroComp />
    </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import HeroComp from '../components/HeroComp.vue';

export default {
    name: "LandingPage",
    components: {
        HeaderComp,
        HeroComp
    },
}
</script>

<style scoped></style>