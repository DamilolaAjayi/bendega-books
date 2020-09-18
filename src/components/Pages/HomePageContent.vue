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
                <p class="action">
                    <a href="store.html">Order now</a> only <span>₦3,000</span> <img src="@/assets/arrow.svg" alt=""> <span>₦1,500</span>
                </p>
            </div>
            <div class="landing__image">
                <img src="@/assets/common-errors-book.png" alt="common errors book">
                <a href="store.html" class="cta">Order Now</a>
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
            height: 85vh;
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
                    padding-top: 0;
                    padding-bottom: 1.2em;
                    align-items: center;
                }
            }
        }        
        &__image {
            display: flex;
            flex-direction: column;
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
                width: 300px;
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
            padding: 6rem 0;
            line-height: 1.8;
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
        font-weight: 500;
        color: #6794C4;
        &:last-of-type {
            border: none;
            color: black;
            font-weight: 500;
        }
    }
    .action {
        font-weight: bold;
        margin: 0;
        display: flex;
        align-items: center;
        &>span{
            text-decoration: line-through;
            margin: 6px;
            color: black;
        }
        &>span:last-child {
            text-decoration: underline;
        }
        img, a {
            margin: 5px;
        }
    }
    .cta {
        margin: 3rem auto;
        width: 50%;
        background-color: #6794C4;
        outline: none;
        border: none;
        padding: 0.8em;
        color: white;
        text-align: center;
        font-weight: 500;
        border-radius: 6px;
        animation: glowing 2000ms infinite;
        -webkit-animation: glowing 2000ms infinite;
        -moz-animation: glowing 2000ms infinite;
        -o-animation: glowing 2000ms infinite;
        @media screen and (max-width: 767px) {
            width: 100%;
        }
    }
    @keyframes glowing {
        0% {
            background-color: #6794C4;
            box-shadow: 0 0 3px #2ba805;
        }
        50% {
            background-color: #6794C4;
            box-shadow: 0 0 10px #49e819;
        }
        100% {
            background-color: #6794C4;
            box-shadow: 0 0 3px #6794C4;
        }
    }
</style>
