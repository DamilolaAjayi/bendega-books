<template>
    <div>
        <div class="landing__content container">
            <div class="landing__content--text">
                <div>
                    <h2 class="text--header">Common Errors</h2>
                    <div class="underline"></div>
                </div>
                <p class="text--paragraph">
                    Discover how to <span>fix</span> and <span>overcome</span> the <span>common errors in English Language</span> with this book 
                    by renowned author and linguist,<span> William Bendega</span>.
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
                max-width: 450px;
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
            margin-right: 10%;
            img {
                height: 350px;
                width: 350px;
                border: 1px solid #fcfcfc;
                border-radius: 10px;
                background: white;
                border: 1px solid #fcfcfc;
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);                
            }
            @media screen and (max-width: 767px) {
                width: 250px;
                height: 350px;
                border-radius: 5px;
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
            @media screen and (max-width: 767px) {
                padding: 1rem;
            }
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
    span {
        @media screen and (max-width: 767px) {
            border-bottom: 1px solid #6794c4;
        }
        &:last-of-type {
            border: none;
            font-weight: 500;
        }
    }
</style>