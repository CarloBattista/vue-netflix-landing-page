<template>
    <div class="header">
        <div class="inner_header">
            <div class="logoSite">
                <router-link to="/">
                    <svg class="logo_svg" viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img">
                        <g>
                            <path
                                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z">
                            </path>
                        </g>
                    </svg>
                </router-link>
            </div>
            <div class="nav_row">
                <div class="wrap_sl">
                    <div class="box_icon bxi_left">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <select class="selectLanguage" name="LanguageSelect">
                        <option selected="" lang="it" label="Italiano" value="it-IT">Italiano</option>
                        <option lang="en" label="English" value="en-IT">English</option>
                    </select>
                    <div class="box_icon bxi_right">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div class="nt_btn">
                    <router-link to="/">
                        <span class="labelBtn">Accedi</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComp"
}
</script>

<style scoped>
.header {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 92px;
}

.inner_header {
    max-width: 1260px;
    height: 100%;
    margin: 0 auto;
    padding: 1.5rem 3rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

/* Logo */
.logoSite {
    cursor: pointer;
}

.logo_svg {
    width: 9.25rem;
    height: 2.5rem;
    color: rgb(229, 9, 20);
    fill: currentColor;
}

/* Nav */
.nav_row {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.wrap_sl {
    position: relative;
    min-height: 2rem;
    display: flex;
    align-items: center;
}

.selectLanguage {
    position: relative;
    appearance: none;
    background: rgba(22, 22, 22, 0.7);
    padding-right: 0.75rem;
    border-color: rgba(128, 128, 128, 0.7);
    border-width: 1px;
    border-style: solid;
    border-radius: 0.25rem;
    height: 100%;
    padding: 0.375rem 2.25rem;
    font-size: 1rem;
    font-weight: 400;
    color: rgb(255, 255, 255);
}

.box_icon {
    position: absolute;
    z-index: 5;
    top: 0;
    height: 100%;
    user-select: none;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box_icon svg {
    width: 1rem;
    height: 1rem;
    color: #fff;
    fill: #fff;
}

.box_icon.bxi_left {
    left: 0.75rem;
}

.box_icon.bxi_right {
    right: 0.75rem;
}

.nt_btn {
    border-radius: 0.25rem;
    border: none;
    outline: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 250ms;
    font-size: 0.875rem;
    font-weight: 500;
    min-height: 2rem;
    padding: 0.25rem 1rem;
    background: rgb(229, 9, 20);
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition-property: background-color, border-color;
    transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
}

.nt_btn:hover {
    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
    background: rgb(193, 17, 25);
}

.nt_btn:active {
    background: rgb(153, 22, 29);
    transition: none;
}

.nt_btn .labelBtn {
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
    font-weight: 500;
}

.nt_btn:active .labelBtn {
    color: rgba(255, 255, 255, 0.7);
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
    .header {
        height: 80px;
    }

    .logo_svg {
        width: 5.5625rem;
        height: 1.5rem;
    }

    .nav_row {
        gap: .5rem;
    }
}

@media only screen and (max-width: 600px) {
    .inner_header {
        padding: 1.5rem 1.5rem;
    }

    .selectLanguage{
        width: 0.0625rem!important;
        padding-right: 1.75rem!important;
    }
}

@media only screen and (max-width: 300px) {
    .header{
        height: auto;
    }
    .inner_header {
        height: 100%;
    }
}
</style>