<template>
    <div class="footer">
        <div class="contact">
            <h2 class="contact__header">Get in Touch</h2>
            <ul class="contact__list">
                <li>+(234)-806-008-2265</li>
                <li><a :href="`mailto: bendegabooks@gmail.com`"></a></li>
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
        background-color: #6794C4;
    }
    .contact {
        &__list {
            font-weight: 500;
            list-style: none;
        }
    }
</style>