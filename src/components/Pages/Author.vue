<template>
    <div>
        <navigation></navigation>
        <main>
        <div class="author--profile container">
            <div class="author--profile__image">
                <img src="@/assets/common-errors-author.png" alt="common errors author">
            </div>
            <div class="author--profile__text">
                <h2>About William Bendega</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                </p>
            </div>
        </div>
        </main>        
    </div>
</template>

<script>
export default {
    name: 'author',
}
</script>

<style lang="scss" scoped>
    .author--profile {
        padding-top: 5em;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 767px) {
            display: block;
        }
        &__text {
            line-height: 150%;
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            h2 {
                padding: 1.2em 0;
            }
        }
        &__image {
            width: 100%;
        }
    }
</style>