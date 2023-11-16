<template>
    <div class="hero_container">
        <div class="background_image">
            <img class="img_bg" src="/_resources/imgs/IT-it-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="hero img">
            <div class="overlay_br"></div>
        </div>
        <div class="container_info_hero">
            <div class="info_hero">
                <h1 class="heading">Film, serie TV e tanto altro, senza limiti</h1>
                <p class="subHeading">Guarda ciò che vuoi ovunque. Disdici quando vuoi.</p>
                <FormComp />
            </div>
        </div>
    </div>
</template>

<script>
import FormComp from './FormComp.vue';

export default {
    name: "HeroComp",
    components: {
        FormComp
    },
    data() {
        return {
            inputValue: "",
            isInputActive: false,
        }
    },
    methods: {
        toggleInput(isActive) {
            this.isInputActive = isActive;
        },
    },
}
</script>

<style scoped>
.hero_container {
    position: relative;
    z-index: 10;
    width: 100%;
    min-height: 43rem;
    padding: 9.875rem 0 4rem;
    overflow: hidden;
}

.background_image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.background_image::before {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
}

.overlay_br {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 40%);
}

.img_bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container_info_hero {
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.info_hero {
    width: calc(100% - 4rem);
    margin: auto;
}

.heading {
    font-size: 3rem;
    font-weight: 900;
}

.subHeading {
    margin: 1rem 0 0;
    font-size: 1.5rem;
    font-weight: 400;
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
    .hero_container {
        min-height: 35rem;
        padding: 8.5rem 0 3rem;
    }

    .heading {
        font-size: 2rem;
        font-weight: 700;
    }

    .subHeading {
        margin: 1rem 0 0;
        font-size: 1.125rem;
        font-weight: 500;
    }

    .st_text {
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.5;
    }

}

@media only screen and (max-width: 600px) {
    .hero_container {
        padding: 7.5rem 0 2rem;
    }

    .info_hero {
        width: calc(100% - 3rem);
        margin: 0 auto;
    }

    .container_form {
        flex-direction: column;
    }

    .container_field {
        height: 48px;
    }

    .container_cta {
        margin-left: 0;
        margin-top: 1rem;
    }

    .ct_btn {
        min-height: 3rem;
        font-size: 1.125rem;
    }

    .ct_btn .label_btn {
        font-size: 1.125rem;
    }

    .box_icon svg {
        width: 1.5rem;
        margin-left: 0.5rem;
    }

    .labelForm {
        top: .75rem;
    }

    .labelForm.input_isFocus {
        font-size: 0.75rem;
        top: 0.25rem;
    }
}
</style>