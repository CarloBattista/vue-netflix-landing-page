<template>
    <div class="container_plan_start">
        <div class="containr_st">
            <h3 class="st_text">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il
                tuo abbonamento.</h3>
        </div>
        <div class="container_form">
            <div class="container_field">
                <label class="labelForm" :class="{ 'input_isFocus': isInputActive || inputValue }" for="emailForm">Indirizzo
                    email</label>
                <input class="input_field" v-model="inputValue" id="emailForm" autocomplete="email" type="email"
                    minlength="5" maxlength="50" @focus="toggleInput(true)" @blur.stop="toggleInput(false)">
            </div>
            <div class="container_cta">
                <button class="ct_btn" role="button" type="button">
                    <span class="label_btn">Inizia</span>
                    <div class="box_icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight"
                            aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormComp",
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
.container_plan_start {
    width: 100%;
    margin-top: 1.5rem;
}

.containr_st {
    width: 100%;
    text-align: center;
}

.st_text {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
}

.container_form {
    width: 100%;
    max-width: 36.625rem;
    margin: 1rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container_field {
    position: relative;
    width: 100%;
    min-width: 12.5rem;
    height: 56px;
}

.input_field {
    width: 100%;
    height: 100%;
    background: rgba(22, 22, 22, 0.7);
    border-color: rgba(128, 128, 128, 0.7);
    border-width: 1px;
    border-style: solid;
    border-radius: 0.25rem;
    padding: 1.5rem 1rem 0.5rem;
    outline: none;
}

.input_field[type=email] {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
}

.labelForm {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition-property: top, font-size;
    transition-duration: 250ms;
    pointer-events: none;
    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
}

.labelForm.input_isFocus {
    font-size: 0.75rem;
    top: 0.5rem;
}

.container_cta {
    margin-left: .5rem;
}

.ct_btn {
    border-radius: 0.25rem;
    cursor: pointer;
    width: auto;
    font-size: 1.5rem;
    font-weight: 500;
    min-height: 3.5rem;
    line-height: 1;
    padding: 0.75rem 1.5rem;
    background: rgb(229, 9, 20);
    color: rgb(255, 255, 255);
    outline: none;
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 250ms;
    transition-property: background-color, border-color;
    transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
}

.ct_btn:hover {
    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
    background: rgb(193, 17, 25);
}

.ct_btn:active {
    transition: none;
    color: rgba(255, 255, 255, 0.7);
    background: rgb(153, 22, 29);
}

.ct_btn .label_btn {
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
}

.ct_btn:active .label_btn {
    color: rgba(255, 255, 255, 0.7);
}

.box_icon {
    display: inline-block;
    height: 1.5rem;
}

.box_icon svg {
    width: 3.5rem;
    height: inherit;
    margin-left: 0.5rem;
    margin-right: 0rem;
}

/* Media Query's */
@media only screen and (max-width: 960px) {
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