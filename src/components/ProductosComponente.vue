<template>
    <div class="border border-danger rounded mx-3 my-3 p-3">
        <h5>TV LED 40 pulgadas oferta !!!</h5>
        <img src="https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202007/28/00114841703284____3__1200x1200.jpg"
            alt="tv led">
        <div>
            <button @click="realizarCompra()" class="btn btn-dark">COMPRAR</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductosComponente',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        realizarCompra() {
            alert('Vas a comprar TV LED 40 pulgadas');
        }
    },
};
</script>

<style scoped>
img {
    width: 200px;
}
</style>