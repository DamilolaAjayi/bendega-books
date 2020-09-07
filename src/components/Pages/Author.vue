<template>
    <div>
        <navigation></navigation>
        <div class="author--profile">
            <div class="author--profile__image">
                <img src="@/assets/common-errors-author.png" alt="common errors author">
            </div>
            <div class="author--profile__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita ullam porro cupiditate. Quis exercitationem rem omnis deleniti mollitia ea, placeat in sunt quia quisquam eveniet commodi fuga accusamus cum.
                </p>
            </div>
        </div>        
    </div>
</template>

<style lang="scss" scoped>
    .author--profile {
        margin: 0 10%;
        padding-top: 80px;
        display: flex;
        &__text {
            line-height: 120%;
            display: flex;
            align-items: center;
        }
        &__image {
            width: 100%;
        }
    }
</style>