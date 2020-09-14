<template>
    <div>
        <div class="landing__content">
            <div class="landing__content--text">
                <div>
                    <h2 class="text--header">Common Errors</h2>
                    <div class="underline"></div>
                </div>
                <p class="text--paragraph">
                    Discover how to fix and overcome the common errors in English Language with this book 
                    by renowned author and linguist, William Bendega.
                </p>
            </div>
            <div class="landing__image">
                <img src="@/assets/common-errors-book.png" alt="">
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .landing {
        &__content {
            display: flex;
            justify-content: space-between;
            padding-top: 2rem;
            @media screen and (max-width: 767px) {
                display: flex;
                flex-direction: column-reverse;
            }
            &--text {
                padding: 30px 0;
                display: flex;
                flex-direction: column;
                @media screen and (max-width: 767px) {
                    padding: 1.2em 0;
                    align-items: center;
                }
            }
        }        
        &__image {
            img {
                height: 350px;
                width: 350px;
                border: 1px solid #fcfcfc;
                border-radius: 5px;
                background: white;
                border: 1px solid #fcfcfc;
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);                
            }
            @media screen and (max-width: 767px) {
                width: 250px;
                height: 350px;
                margin: 0 auto;
            }
        }
    }
    .text {
        &--header {
            font-weight: 500;
            font-size: 4rem;
            padding-top: 3rem;
            margin: 0;
            @media screen and (max-width: 767px) {
                padding-top: 0;
                text-align: center;
                width: max-content;
                border-bottom: 3px solid #6794c4;
            }
        }
        &--paragraph {
            line-height: 1.5;
            padding: 6rem 0;
            font-size: 1.2em;
        }
    }
    .underline {
        height: .5rem;
        width: 5rem;
        background-color: #6794C4;
            @media screen and (max-width: 767px) {
                display: none;
            }
    }
</style>