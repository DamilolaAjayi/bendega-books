<template>
    <div>
        <navigation></navigation>
        <main>
        <div class="container">
            <div class="faqs">
                <h2 class="faqs__header">Frequently Asked Questions</h2>
                <div>
                    <ul>
                        <div class="faq">
                            <li>When will I receive the book?</li>
                            <p class="answer">- Delivery within Lagos takes between 3-5 days and shipments outside Lagos take up to 14 days.</p>
                        </div>
                        <div class="faq">
                            <li>I need some assistance. Where can I contact?</li>
                            <p class="answer">- Please send us an <a :href="`mailto: bendegabooks@gmail.com`">email</a> and we’ll get in touch.</p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <foot></foot>
        </main>
    </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
    .faqs {
        padding: 3rem 0;
        background-color: white;
        &__header {
            padding: 3rem 0;
        }
    }
    .answer {
        margin: 5px 0;
    }
    .faq {
        padding-bottom: 3rem;
        padding-left: 1em;
    }
    li {
        font-weight: 500;
    }
</style>