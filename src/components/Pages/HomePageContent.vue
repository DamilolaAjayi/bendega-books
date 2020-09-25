<template>
    <div class="container">
        <div class="landing__content">
            <div class="landing__content--text">
                <div>
                    <h2 class="text--header">Better English, Better Results</h2>
                </div>
                <p class="text--paragraph">
                    Discover how to <span>fix</span> and <span>overcome</span> the <span>common errors in English Language</span> with this book 
                    by renowned author and linguist,<span> William Bendega</span>.
                </p>
                <p class="action">
                    <a href="/store#!/Common-Errors-in-English-Language-Today/p/235677001/category=0">Order now</a> only <span>₦3,000</span> <img src="@/assets/arrow.svg" alt=""> <span>₦1,500</span>
                </p>
            </div>
            <div class="landing__item">
                <div class="landing__image">
                    <img class="promo-banner" src="@/assets/50-off.png" alt="50% off banner">
                    <img src="@/assets/common-errors-book.png" alt="common errors book">
                </div>
                <a href="/store#!/Common-Errors-in-English-Language-Today/p/235677001/category=0" class="cta">Order Now</a>  
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
            padding: 5em 0;
            @media screen and (max-width: 767px) {
                display: flex;
                flex-direction: column-reverse;
                padding-bottom: 0;
            }
            &--text {
                width: 50%;
                padding: 0.625em 0;
                display: flex;
                flex-direction: column;
                @media screen and (max-width: 767px) {
                    padding: 1.2em 0;
                    align-items: left;
                    width: 100%;
                }
            }
        }
        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 767px) {
                justify-content: center;
            }
        }        
        &__image {
            position: relative;
            img:last-child {
                height: 350px;
                width: 350px;
                border: 1px solid #fcfcfc;
                border-radius: 10px;
                background: white;
                border: 1px solid #fcfcfc;
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);                
            }
            @media screen and (max-width: 767px) {
                width: 100%;
                border-radius: 5px;
                margin: 0 auto;
            }
        }
    }
    .text {
        &--header {
            font-weight: 800;
            font-size: 2em;
            width: max-content;
            margin: 0;
            @media screen and (max-width: 767px) {
                padding-top: 0;
                font-size: 2rem;
                border-bottom: 3px solid #6794c4;
            }
        }
        &--paragraph {
            padding: 4rem 0;
            max-width: 28em;
            line-height: 1.8;
            font-size: 1.2em;
            @media screen and (max-width: 767px) {
                padding: 1.3rem 0;
            }
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
        font-size: 1.2em;
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
            margin-right: 5px;
        }
        @media screen and (max-width: 767px) {
            font-size: 1em;
        }        
    }
    .cta {
        margin: 3rem 0 3rem;
        width: 350px;
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
        &--block {
            margin: 2rem 0;
            padding-right: 0;
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
    .promo-banner {
        position: absolute;
        width: 50%;
        margin-top: -50px;
        margin-left: -80px;
        top: 0;
        left: 0;
        opacity: 0.9;
        @media screen and (max-width: 992px) {
            right: 0;
            left: auto;
            margin-right: -10%;
            width: 45%;
        }
        @media screen and (max-width: 450px) {
            margin-right: -15px;
        }
    }
</style>
