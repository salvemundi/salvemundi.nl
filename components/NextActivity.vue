<template>
    <div class="up">
        <div class="next-activity">
            <div class="turn-back py-5 text-center">
                <h2 class="portico">Volgende Activiteit:</h2>
                <h3 class="mb-3">Bierproeverij</h3>
                <no-ssr>
                    <flip-countdown deadline="2022-11-26 15:00:00"></flip-countdown>
                </no-ssr>
            </div>
        </div>
    </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'

export default {
    components: { FlipCountdown }
}
</script>

<style>
.flip-card__top[data-v-cff81de8], .flip-card__top, .flip-card__top-bottom[data-v-cff81de8], .flip-card__top::before, .flip-card__top::after{
    color: #f2f2f2 !important;
    background: #4C2149 !important;
}

.flip-card__bottom[data-v-cff81de8],  .flip-card__back-bottom[data-v-cff81de8], .flip-card__bottom::before, .flip-card__bottom::after{
    color: #ffffff !important;
    background-color: #602A5C !important;
    background: #602A5C !important;
}

 .flip-card__back[data-v-cff81de8]::before, .flip-card__back[data-v-cff81de8]::after{
    color: #f2f2f2 !important;
    background: #4C2149 !important;
}

.flip-clock__slot{
    background: white;
    padding-top: 5px;
    transform: translateY(-5px);
    border-bottom-left-radius: 0.30em;
    border-bottom-right-radius: 0.30em;
    color: black;
    text-transform: uppercase;
}

.turn-back{
    transform: skewY(4deg);
    color: white;
    width: 100%;
}

.next-activity{
    background-color: #93138A;
    transform: skewY(-4deg);
    width: 100%;
    z-index: 34;
}

.up{
    position: relative;
    transform: translateY(-6em);
    z-index: 30;
}

.up .container{
    padding: 0 !important;
}

@media only screen and (max-width: 1000px){
    .up{
        position: relative;
        transform: translateY(-5em);

    }

}


@media only screen and (max-width: 1500px){
    .up{
        position: relative;
        transform: translateY(-5em);

    }

}


@media only screen and (max-width: 900px){
    .up{
        position: relative;
        transform: translateY(-2.5em);

    }

}

@media only screen and (max-width: 550px){
    .up{
        position: relative;
        transform: translateY(-1.2em);
        z-index: 30;
    }
}


@media only screen and (max-width: 400px){
    .up{
        position: relative;
        transform: translateY(-1em);
        z-index: 30;
    }
}


</style>
