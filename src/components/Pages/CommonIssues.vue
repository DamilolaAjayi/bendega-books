<template>
    <div class="common--issues">
        <div class="container">
            <h2 class="common--issues__header">
                Do you?
            </h2>
            <ul>
                <li>Desire to travel abroad but are frustrated with low scores in IELTS/TOEFL?</li>
                <li>Struggle with slow career growth?</li>
                <li>Experience derailed academic progress as a result of poor communication?</li>
            </ul>
            <p class="text">
                It’s time to <span> ditch</span> the guesswork and <span> gain mastery of the common errors </span> in English Language and how you can <span> overcome </span>them.
            </p>
            <p class="closing--text">
                <a href="/store#!/Common-Errors-in-English-Language-Today/p/235677001/category=0">Order now </a>and start achieving better results.
            </p>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'common-issues',
};
</script>

<style lang="scss" scoped>
    .common--issues {
        padding: 4em 0em;
        background-color: #e7edf6;
        &__header {
            font-size: 3.2em;
            @media screen and (max-width: 767px) {
                font-size: 2.6em;
            }
        }
    }    
    li {
        margin: 2em 1.2em;
    }
    ul {
        padding: 0 3rem 1rem;
        font-size: 1.5em;
        @media screen and (max-width: 767px) {
            padding: 0em;
            font-size: 1.2em;
        }
    }
    p>a {
        font-weight: bold;
    }
    .text {
        font-size: 1.2em;
        @media screen and (max-width: 767px) {
            line-height: 1.5;
        }
    }
    .closing--text {
        padding: 5rem 0;
        font-size: 1.3em;
        @media screen and (max-width: 767px) {
            padding-top: 1em;
        }
    }
    span {
        color: #6794C4;
        font-weight: 500;
    }
</style>