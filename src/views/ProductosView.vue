<template>
    <div class="">
        <h2>Productos a la venta</h2>
        <div class="productos">
            <ProductosComponente />
            <ProductosComponente />
            <ProductosComponente />
            <ProductosComponente />
            <ProductosComponente />
        </div>
    </div>
</template>

<script>
import ProductosComponente from '@/components/ProductosComponente.vue';

export default {
    name: 'ProductosView',
    components: {
        ProductosComponente
    }
};
</script>

<style scoped>
.productos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>