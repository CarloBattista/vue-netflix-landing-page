<template>
    <div class="accordion_container">
        <div class="card_info">
            <div class="container_heading">
                <h2 class="heading">Domande frequenti</h2>
            </div>
            <div class="accordion_container_nv">
                <ul class="card_faq_container">
                    <li class="faq_item" v-for="(acc, index) in accordion" :key="acc.id">
                        <div class="wrap_faq_heading" @click="toggleAccordion(acc.id)">
                            <span class="heading_faq">{{ acc.heading }}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="icon_item" :class="{ 'accordion_isOpen': acc.open }" data-name="Plus" alt="">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div class="wrap_faq_content" :class="{ 'accordion-content': true, 'open': acc.open }">
                            <span class="content_faq" v-html="acc.content"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="form_container_em">
                <FormComp />
            </div>
        </div>
        <div class="end_card_line_separator"></div>
    </div>
</template>

<script>
import FormComp from './FormComp.vue';

export default {
    name: "AccordionComp",
    components: {
        FormComp
    },
    data() {
        return {
            accordion: [
                {
                    id: 0,
                    heading: "Cos'è Netflix?",
                    content: "Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.<br><br>Guarda quello che vuoi, quando vuoi. Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!",
                    open: false
                },
                {
                    id: 1,
                    heading: "Quanto costa Netflix?",
                    content: "Guarda Netflix su smartphone, tablet, Smart TV, laptop o dispositivi per lo streaming, il tutto per un importo mensile fisso. Piani da 5,49 € a 17,99 € al mese. Nessun costo aggiuntivo, nessun contratto.",
                    open: false
                },
                {
                    id: 2,
                    heading: "Dove posso guardare Netflix?",
                    content: "Guarda Netflix dove vuoi, quando vuoi. Accedi al tuo account per guardare subito Netflix dal tuo computer su netflix.com oppure da qualsiasi dispositivo connesso a Internet che supporta l'app Netflix, come smart TV, smartphone, tablet, lettori multimediali per streaming e console per videogiochi.<br><br>Con l'app per iOS, Android e Windows 10 puoi anche scaricare i tuoi programmi preferiti. Usa la funzionalità di download per guardare i contenuti mentre sei in viaggio e senza connessione a Internet. Porta Netflix sempre con te.",
                    open: false
                },
                {
                    id: 3,
                    heading: "Come posso disdire?",
                    content: "Netflix è flessibile. Nessun contratto fastidioso e nessun impegno. Puoi facilmente disdire il tuo contratto online con due clic. Nessuna penale: attiva o disdici il tuo account in qualsiasi momento.",
                    open: false
                },
                {
                    id: 4,
                    heading: "Cosa posso guardare su Netflix?",
                    content: "Netflix ha un nutrito catalogo di lungometraggi, documentari, serie TV, anime, originali Netflix pluripremiati e tanto altro. Guarda tutto quello che vuoi, in qualsiasi momento.",
                    open: false
                },
                {
                    id: 5,
                    heading: "Netflix è adatto ai bambini?",
                    content: "L'area Netflix Bambini, già inclusa nell'abbonamento, offre ai genitori un maggiore controllo sui contenuti e ai più piccoli uno spazio dedicato dove guardare serie TV e film per tutta la famiglia.<br><br>I profili Bambini hanno un filtro famiglia con PIN che ti permette di limitare l'accesso ai contenuti in base alla fascia d'età e bloccare la visione di titoli specifici.",
                    open: false
                },
            ]
        }
    },
    methods: {
        toggleAccordion(id) {
            this.accordion.forEach(acc => {
                if (acc.id === id) {
                    acc.open = !acc.open;
                } else {
                    acc.open = false;
                }
            });
        }
    }
}
</script>

<style scoped>
.accordion_container {
    position: relative;
    min-height: auto;
    padding: 4.5rem 0;
}

.card_info {
    max-width: calc(83.33333333333334% - 6rem);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container_heading {
    width: 100%;
    margin-bottom: 1.5rem;
    text-align: center;
}

.heading {
    font-size: 3rem;
    font-weight: 900;
}

.icon_item{
    transition: transform 200ms ease;
}

.icon_item.accordion_isOpen{
    transform: rotate(45deg);
}

.accordion_container {
    width: 100%;
}

.card_faq_container {
    font-size: 1.5rem;
    font-weight: 400;
}

.faq_item {
    width: 100%;
    margin: 0 0 0.5rem 0;
}

.wrap_faq_heading {
    position: relative;
    width: 100%;
    background-color: rgb(45, 45, 45);
    color: rgb(255, 255, 255);
    margin-bottom: 0.0625rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition-duration: 250ms;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
}

.wrap_faq_heading:hover {
    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
    background-color: rgb(65, 65, 65);
}

.wrap_faq_content {
    width: 100%;
    visibility: hidden;
    overflow: hidden;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s;
    text-align: left;
    background-color: rgb(45, 45, 45);
    color: rgb(255, 255, 255);
}

.wrap_faq_content.open{
    visibility: visible;
    max-height: 75rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.form_container_em{
    padding: 0 1.5rem;
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
    .accordion_container {
        top: 4.5rem;
    }

    .card_info {
        max-width: calc(100% - 4rem);
    }
}

@media only screen and (max-width: 960px) {
    .heading {
        font-size: 2rem;
        font-weight: 700;
    }

    .card_faq_container {
        font-size: 1.125rem;
        font-weight: 400;
    }

    .wrap_faq_heading {
        padding: 1.5rem;
    }
}

@media only screen and (max-width: 600px) {
    .accordion_container {
        padding: 3.5rem 0;
    }

    .card_container {
        padding: 3.5rem 0;
    }
}
</style>