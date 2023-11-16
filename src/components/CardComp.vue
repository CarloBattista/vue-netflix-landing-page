<template>
    <div class="card_container">
        <div class="card_info">
            <div class="start_region">
                <h2 class="heading">Goditi Netflix sulla tua TV</h2>
                <p class="subHeading">Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e
                    molti altri dispositivi.</p>
                <div class="white"></div>
            </div>
            <div class="end_region">
                <div class="box_image">
                    <img class="image_wrap" src="/_resources/imgs/tv.png" alt="tv frame">
                    <div class="box_video">
                        <video class="video_an" autoplay playsinline muted>
                            <source src="/_resources/videos/video-tv-0819.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="end_card_line_separator"></div>
    </div>
</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>
.card_container {
    position: relative;
    min-height: auto;
    padding: 4.5rem 0;
}

.card_info {
    max-width: calc(83.33333333333334% - 6rem);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.start_region{
    padding-right: 0.375rem;
}

.heading {
    font-size: 3rem;
    font-weight: 900;
}

.subHeading {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1rem 0 0;
}

.white{
    margin: 1.5rem 0 0;
}

.end_region{
    padding-left: 0.375rem;
    width: 100%;
}

.box_image{
    position: relative;
}

.image_wrap{
    width: 100%;
}

.box_video{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 46%;
    left: 50%;
    max-width: 73%;
    max-height: 54%;
    overflow: hidden;
    transform: translate(-50%, -50%);
}

.video_an{
    width: 100%;
    height: 100%;
}

.end_card_line_separator {
    width: 100%;
    height: 0.5rem;
    position: absolute;
    bottom: -0.5rem;
    background-color: rgb(35, 35, 35);
}

/* Media Query's */
@media only screen and (max-width: 1280px) {
    .card_container{
        top: 4.5rem;
    }
    
    .card_info {
        max-width: calc(100% - 4rem);
    }
}

@media only screen and (max-width: 960px) {
    .card_info {
        flex-direction: column;
    }

    .start_region {
        text-align: center;
    }

    .heading {
        font-size: 2rem;
        font-weight: 700;
    }

    .subHeading {
        margin: 1rem 0 0;
        font-size: 1.125rem;
        font-weight: 400;
    }
}

@media only screen and (max-width: 600px) {
    .card_container {
        padding: 3.5rem 0;
    }

    .card_info {
        max-width: calc(100% - 3rem);
    }
}
</style>