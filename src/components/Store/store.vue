<template>
    <div>
        <navigation></navigation>
        <main>
            <h1>Store</h1>
            <div class="footer">
                <foot></foot>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'store',
}
</script>

<style lang="scss" scoped>
    .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>

