<template>
    <div>
        <navigation></navigation>
        <main>
            <div class="landing">
                <promo />
                <home-page />
                <store />
            </div>
        </main>
    </div>
</template>

<script>
import HomePageContent from './HomePageContent.vue';
import Promo from '../Global/Promo.vue';
import Store from '../Store/store';

export default {
    components: {
        Promo,
        HomePage: HomePageContent,
        Store,
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
