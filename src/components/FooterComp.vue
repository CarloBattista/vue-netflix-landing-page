<template>
    <div class="footer">
        <div class="inner_footer">
            <div class="container_footer_item tel">
                <div class="tel_nt">Domande? Chiama
                    <a href="tel:800-130-364">800-130-364</a>
                </div>
            </div>
            <div class="container_footer_links">
                <div class="container_wrapper_links">
                    <ul class="link_list">
                        <li class="item_footer" v-for="(foo, index) in footerLinks" :key="index">
                            <a class="footer_link" :href="foo.linkPage">{{ foo.namePage }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container_footer_item">
                <SelectLanguageComp />
            </div>
            <div class="container_footer_item">
                <p class="copy">Netflix italia</p>
            </div>
        </div>
    </div>
</template>

<script>
import SelectLanguageComp from './SelectLanguageComp.vue';

export default {
    name: "FooterComp",
    components: {
        SelectLanguageComp
    },
    data() {
        return {
            footerLinks: [
                {
                    id: 0,
                    namePage: "Domande frequenti",
                    linkPage: "",
                },
                {
                    id: 1,
                    namePage: "Account",
                    linkPage: "",
                },
                {
                    id: 2,
                    namePage: "Rapporti con gli investitori",
                    linkPage: "",
                },
                {
                    id: 3,
                    namePage: "Riscatta carte regalo",
                    linkPage: "",
                },
                {
                    id: 4,
                    namePage: "Come guardare Netflix",
                    linkPage: "",
                },
                {
                    id: 5,
                    namePage: "Privacy",
                    linkPage: "",
                },
                {
                    id: 6,
                    namePage: "Informazioni sull'azienda",
                    linkPage: "",
                },
                {
                    id: 7,
                    namePage: "Test di velocità",
                    linkPage: "",
                },
                {
                    id: 8,
                    namePage: "Note legali",
                    linkPage: "",
                },
                {
                    id: 9,
                    namePage: "Preferenze per la pubblicità",
                    linkPage: "",
                },
                {
                    id: 10,
                    namePage: "Centro assistenza",
                    linkPage: "",
                },
                {
                    id: 11,
                    namePage: "Media Center",
                    linkPage: "",
                },
                {
                    id: 12,
                    namePage: "Opportunità di lavoro",
                    linkPage: "",
                },
                {
                    id: 13,
                    namePage: "Acquista carte regalo",
                    linkPage: "",
                },
                {
                    id: 14,
                    namePage: "Condizioni di utilizzo",
                    linkPage: "",
                },
                {
                    id: 15,
                    namePage: "Preferenze per i cookie",
                    linkPage: "",
                },
                {
                    id: 16,
                    namePage: "Contattaci",
                    linkPage: "",
                },
                {
                    id: 17,
                    namePage: "Garanzia legale",
                    linkPage: "",
                },
                {
                    id: 18,
                    namePage: "Solo su Netflix",
                    linkPage: "",
                }
            ]
        }
    }
}
</script>

<style scoped>
.footer {
    position: relative;
    width: 100%;
    padding: 0 3rem;
    padding-bottom: 4.5rem;
    color: rgba(255, 255, 255, 0.7);
    margin: auto;
    font-size: 1rem;
    font-weight: 400;
}

.inner_footer {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.container_footer_item.tel {
    margin-bottom: 0.75rem;
}

.tel_nt {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
}

.tel_nt a {
    color: rgba(255, 255, 255, 0.7);
    margin-left: .3rem;
    text-decoration: underline;
}

.copy {
    font-size: 0.875rem;
    margin-top: 1.5rem;
}

.container_footer_links {
    margin: 0.75rem 0;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
}

.link_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: -1rem;
    margin-left: -0.75rem;
    margin-bottom: 1rem;
    width: calc(100% + 0.75rem);
}

.item_footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 0 0 calc(25% - 0.75rem);
    margin-top: 1rem;
    margin-left: 0.75rem;
}

.item_footer a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: underline;
}

/* Media Query's */
@media only screen and (max-width: 1280px) {
    .footer {
        padding: 4.5rem 2rem;
    }
}

@media only screen and (max-width: 960px) {
    .footer {
        padding: 2rem;
    }

    .item_footer {
        flex: 0 0 calc(50% - 0.75rem);
    }
}

@media only screen and (max-width: 600px) {
    .footer {
        padding: 2rem 1.5rem;
    }
}
</style>