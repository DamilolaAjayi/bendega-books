<template>
    <div class="promo-preview">
        <figure class="preview">
            <img src="@/assets/promo.png" alt="promo">
        </figure>
    </div>    
</template>

<script>
export default {
    name: 'promo',
}
</script>

<style lang="scss" scoped>
    .promo {
        height: 27em;
        transform: translateY(250px);
        position: absolute;
        bottom: -20%;
        right: 0;
        z-index: 2;
    }
    .preview {
        animation: float 6s ease-in-out infinite;
        height: auto;
        width: 100%;
        position: relative;
    }
    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }        
    }

</style>