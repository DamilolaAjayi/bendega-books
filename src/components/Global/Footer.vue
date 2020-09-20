<template>
    <div class="footer">
        <div class="container">
            <h2 class="contact__header">Get in Touch</h2>
            <ul class="contact__list">
                <div>
                    <li class="author"><a href="/author">Meet the author</a></li>
                    <li><a href="/faq">Frequently asked questions</a></li>
                </div>
                <div class="contact">
                    <li>+(234)-806-008-2265</li>
                    <li><a :href="`mailto: bendegabooks@gmail.com`">bendegabooks@gmail.com</a></li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'foot',
};
</script>

<style lang="scss" scoped>
    .footer {
        background-color: rgba(103,148,196,0.5);
        padding: 3em;
        @media screen and (max-width: 767px) {
            padding-left: 0;
        }
    }
    .contact {
        padding: 2rem 0;
        &__list {
            font-weight: 500;
            list-style: none;
        }
    }
    a {
        color: inherit;
    }
    li {
        padding: 0.2rem 0;
    }
</style>