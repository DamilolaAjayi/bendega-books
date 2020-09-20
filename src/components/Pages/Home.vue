<template>
    <div>
        <navigation></navigation>
        <main>
                <home-page />
                <common-issues />
                <el-footer></el-footer>
        </main>
    </div>
</template>

<script>
import HomePageContent from './HomePageContent.vue';
import CommonIssues from './CommonIssues.vue';

export default {
    components: {
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
