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
        <div class="extension">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam laudantium delectus quos labore accusamus, aspernatur nulla, accusantium ut dignissimos provident, saepe est distinctio nam! Deleniti veritatis corrupti iste velit!    
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
            &--text {
                max-width: 450px;
                padding: 30px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }        
        &__image {
            img {
                height: 400px;
                border: 1px solid #fcfcfc;
                border-radius: 5px;
                background: white;
                border: 1px solid #fcfcfc;
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);                
            }
        }
    }
    .text {
        &--header {
            font-weight: 500;
            font-size: 4rem;
            padding-top: 3rem;
            margin: 0;
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
    }
</style>