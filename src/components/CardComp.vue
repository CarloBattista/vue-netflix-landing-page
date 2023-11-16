<template>
    <div class="card_info_nt_container">
        <div class="card_container">
            <div class="card_info">
                <div class="start_region">
                    <h2 class="heading">Goditi Netflix sulla tua TV</h2>
                    <p class="subHeading">Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori
                        Blu-ray e
                        molti altri dispositivi.</p>
                    <div class="white"></div>
                </div>
                <div class="end_region">
                    <div class="box_image">
                        <img class="image_wrap" src="/_resources/imgs/tv.png" alt="tv frame">
                        <div class="box_video" id="box_video_tv">
                            <video class="video_an" autoplay playsinline muted>
                                <source src="/_resources/videos/video-tv-0819.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="end_card_line_separator"></div>
        </div>
        <div class="card_container">
            <div class="card_info change_order">
                <div class="start_region reflect">
                    <h2 class="heading">Guarda Netflix ovunque</h2>
                    <p class="subHeading">Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming
                        film e
                        serie TV senza limiti.</p>
                    <div class="white"></div>
                </div>
                <div class="end_region">
                    <div class="box_image">
                        <img class="image_wrap" src="/_resources/imgs/device-pile.png" alt="device pile">
                        <div class="box_video" id="box_video_devices">
                            <video class="video_an" autoplay playsinline muted>
                                <source src="/_resources/videos/video-devices.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="end_card_line_separator"></div>
        </div>
        <div class="card_container">
            <div class="card_info">
                <div class="start_region">
                    <h2 class="heading">Crea profili per i bambini</h2>
                    <p class="subHeading">I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in
                        uno
                        spazio tutto loro già incluso nel tuo abbonamento.</p>
                    <div class="white"></div>
                </div>
                <div class="end_region">
                    <div class="box_image">
                        <img class="image_wrap" src="/_resources/imgs/children.png" alt="children">
                        <!-- <div class="box_video">
                        <video class="video_an" autoplay playsinline muted>
                            <source src="/_resources/videos/video-tv-0819.mp4" type="video/mp4">
                        </video>
                    </div> -->
                    </div>
                </div>
            </div>
            <div class="end_card_line_separator"></div>
        </div>
        <div class="card_container">
            <div class="card_info change_order">
                <div class="start_region reflect">
                    <h2 class="heading">Scarica le tue serie da guardare offline</h2>
                    <p class="subHeading">Guarda in aereo, sul treno, in astronave...</p>
                    <div class="white"></div>
                </div>
                <div class="end_region">
                    <div class="box_image">
                        <img class="image_wrap" src="/_resources/imgs/mobile-0819.jpg" alt="mobile frame">
                        <div class="card_animation_downloads">
                            <div class="left_card">
                                <div class="wrap_poster">
                                    <img class="poster" src="/_resources/imgs/boxshot.png" alt="poster">
                                </div>
                                <div class="wrap_info">
                                    <div class="text_line text_top">Stranger Things</div>
                                    <div class="text_line text_bottom">Download in corso...</div>
                                </div>
                            </div>
                            <div class="box_gif_dw"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="end_card_line_separator"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComp",
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

.change_order .start_region {
    padding-right: 0;
    padding-left: 0.375rem;
}

.start_region {
    padding-right: 0.375rem;
}

.reflect {
    order: 1;
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

.white {
    margin: 1.5rem 0 0;
}

.end_region {
    padding-left: 0.375rem;
    width: 100%;
}

.change_order .end_region {
    padding-left: 0;
    padding-right: 0.375rem;
}

.box_image {
    position: relative;
}

.image_wrap {
    width: 100%;
}

.box_video#box_video_tv {
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

.box_video#box_video_devices {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 34%;
    left: 50%;
    max-width: 63%;
    max-height: 47%;
    overflow: hidden;
    transform: translate(-50%, -50%);
}

.video_an {
    width: 100%;
    height: 100%;
}

.card_animation_downloads {
    overflow: hidden;
    position: absolute;
    left: 50%;
    bottom: 8%;
    transform: translateX(-50%);
    margin: 0 auto;
    background: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    min-width: 15rem;
    min-height: 4rem;
    max-height: 6rem;
    border: 2px solid rgba(128, 128, 128, 0.7);
    box-shadow: 0 0 2em 0 rgb(0, 0, 0);
    border-radius: 0.75rem;
    z-index: 1;
    padding: 0.5rem 0.75rem;
}

.left_card {
    display: flex;
    align-items: center;
}

.wrap_poster {
    height: 4.5rem;
    margin-right: 1rem;
}

.poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.wrap_info {
    margin: .3rem 0;
}

.text_top {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
}

.text_bottom {
    color: #0071eb;
    font-size: 0.875rem;
    font-weight: 400;
}

.box_gif_dw {
    width: 3rem;
    height: 3rem;
    outline: 2px solid rgb(0, 0, 0);
    outline-offset: -2px;
    background-image: url("/_resources/imgs/download-icon.gif");
    background-repeat: no-repeat;
    background-size: 100%;
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
    .card_container {
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
        padding-right: 0;
    }

    .change_order .start_region {
        padding-left: 0;
        padding-right: 0;
    }

    .end_region {
        padding-left: 0;
    }

    .change_order .end_region {
        padding-left: 0;
        padding-right: 0;
    }

    .reflect {
        order: 0;
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

    .card_animation_downloads {
        padding: 0.35rem 0.75rem;
    }

    .wrap_poster {
        height: 4rem;
    }
}

@media only screen and (max-width: 600px) {
    .card_container {
        padding: 3.5rem 0;
    }

    .card_info {
        max-width: calc(100% - 3rem);
    }

    .card_animation_downloads {
        padding: 0.25rem 0.65rem;
    }

    .wrap_poster {
        height: 3rem;
    }

    .text_top {
        font-size: 0.875rem;
        font-weight: 500;
    }

    .text_bottom {
        font-size: 0.75rem;
        font-weight: 400;
    }
}</style>