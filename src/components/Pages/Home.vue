<template>
    <div>
        <navigation></navigation>
        <div class="landing">
            <promo />
            <home-page />
        </div>
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
        padding: 20px 0;
        margin: 0 90px;
        position: relative;
    }
</style>
