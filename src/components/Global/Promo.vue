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
        margin: 5rem auto 2.5rem;
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
    }
    // .preview {
    //     animation: float 6s ease-in-out infinite;
    //     height: auto;
    //     width: 100%;
    //     position: relative;
    // }
    // @keyframes float {
    //     0% {
    //         transform: translateY(0px);
    //     }
    //     50% {
    //         transform: translateY(-20px);
    //     }
    //     100% {
    //         transform: translateY(0px);
    //     }        
    // }

</style>