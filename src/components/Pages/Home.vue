<template>
    <div>
        <navigation></navigation>
        <div class="landing">
            <div class="landing__content">
                <div class="landing__image">
                    <img src="@/assets/common-errors-book.png" alt="">
                </div>
                    <h2 class="landing__content--header">BENDEGA BOOKS</h2>
                    <p class="landing__content--paragraph">
                        Discover how to fix and overcome the common errors in English Language with this book 
                        by renowned author and linguist, William Bendega.
                    </p>
            </div>
            <div class="promo">
                <promo />
            </div>
        </div>
    </div>
</template>

<script>
import Promo from '@/components/Global/Promo.vue';

export default {
    components: {
        Promo,
    },
};
</script>

<style lang="scss" scoped>
    .landing {
        color: #1b262c;
        padding: 20px 0;
        display: flex;
        width: 90%;
        margin: 0 auto;
        position: relative;
        &__image {
            img {
                height: 300px;
            }
        }
        &__content {
            padding-top: 50px;
            &--header {
                font-weight: 500;
            }
            &--paragraph {
                max-width: 600px;
            }
        }
    }
    .promo {
        position: absolute;
        right: 0;
    }
</style>
