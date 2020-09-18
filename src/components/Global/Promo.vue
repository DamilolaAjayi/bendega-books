<template>
    <div class="promo">
        <p>
            <span>50% off </span>
            common errors
        </p>
    </div>    
</template>

<script>
export default {
    name: 'promo',
}
</script>

<style lang="scss" scoped>
    .promo {
        height: 4em;
        margin: 2.5rem auto;
        box-shadow: 0 2px 21px rgba(0,0,0,0.06);
        border-radius: 2rem;
        max-width: 300px;
        display: flex;
        z-index: 2;
        align-items: center;
        p{
            margin: 0 auto;
            font-weight: 500;
            font-size: 2rem;
            letter-spacing: 0.05em;
            text-transform: capitalize;
        }
        span {
            color: #6794C4;
        }
        @media screen and (max-width: 767px) {
            margin: 1.2rem auto 0;
        }
    }
</style>