<template>
    <div class="hero_container">
        <div class="background_image">
            <img class="img_bg" src="/_resources/imgs/IT-it-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="hero img">
        </div>
        <div class="container_info_hero">
            <h1 class="heading">Film, serie TV e tanto altro, senza limiti</h1>
            <p class="subHeading">Guarda ciò che vuoi ovunque. Disdici quando vuoi.</p>
            <div class="container_plan_start">
                <div class="containr_st">
                    <h3 class="st_text">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</h3>
                </div>
                <div class="container_form">
                    <div class="container_field">
                        <label for="emailForm">Indirizzo email</label>
                        <input class="input_field" id="emailForm" autocomplete="email" type="email" minlength="5" maxlength="50">
                    </div>
                    <div class="container_cta">
                        <button class="ct_btn" role="button" type="button">
                            <span class="label_btn">Inizia</span>
                            <div class="box_icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroComp"
    }
</script>

<style scoped>
.hero_container{
    position: relative;
    z-index: 10;
    width: 100%;
    min-height: 43rem;
    padding: 9.875rem 0 4rem;
    overflow: hidden;
}

.background_image{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.background_image::before{
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
}

.img_bg{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container_info_hero{
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Media Query's */
@media only screen and (max-width: 1280px) {
    .header {
        width: 100%;
        height: 92px;
    }

    .inner_header {
        width: 100%;
        padding: 1.5rem 2rem;
    }
}

@media only screen and (max-width: 960px) {
    .hero_container{
        min-height: 32rem;
        padding: 8.5rem 0 3rem;
    }
}

@media only screen and (max-width: 600px) {
    .hero_container{
        padding-bottom: 7.5rem 0 2rem;
    }
}

@media only screen and (max-width: 300px) {
    
}
</style>