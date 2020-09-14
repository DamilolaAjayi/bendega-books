<template>
    <div>
        <navigation></navigation>
        <main>
            <div class="container">
                <promo />
                <home-page />
                <common-issues />
            </div>
            <foot></foot>
        </main>
    </div>
</template>

<script>
import HomePageContent from './HomePageContent.vue';
import Promo from '../Global/Promo.vue';
import CommonIssues from './CommonIssues.vue';

export default {
    components: {
        Promo,
        HomePage: HomePageContent,
        CommonIssues,
    },
};
</script>

<style lang="scss" scoped>
    .landing {
        margin: 0 90px;
        position: relative;
    }
</style>
