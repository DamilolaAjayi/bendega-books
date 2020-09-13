<template>
    <div>
        <navigation></navigation>
        <main>
            <div class="container">
                <promo />
                <home-page />
            </div>
        </main>
    </div>
</template>

<script>
import HomePageContent from './HomePageContent.vue';
import Promo from '../Global/Promo.vue';

export default {
    components: {
        Promo,
        HomePage: HomePageContent,
    },
};
</script>

<style lang="scss" scoped>
    .landing {
        margin: 0 90px;
        position: relative;
    }
</style>
