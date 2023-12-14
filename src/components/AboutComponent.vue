<template>
    <div>
        <p>CICLO DE VIDA</p>
        <h4>Numero: {{ numero }}</h4>
        <button @click="incrementar">+</button>
        <button @click="decrementar">-</button>
        <p v-if="numero<4">Mensaje</p>
        <button @click="destruir">Autodestruccion</button>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',

    data() {
        return {
            numero:0,
        };
    },
    beforeCreate(){
        console.log('before create');
        console.log(this.numero);
    },
    created(){
        console.log('created');
        console.log(this.numero);
    },
    beforeMount(){
        console.log('before mount');
        console.log(this.numero);
    },
    mounted() {
        console.log('mounted');
        console.log(this.numero);
    },
    beforeUpdate(){
        console.log('before update');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('before Destroy')
    },
    destroyed(){
        console.log('destroyed');
    },

    methods: {
        incrementar(){
            this.numero++
        },
        decrementar(){
            this.numero--
        },
        destruir(){
            this.$destroy();
        }
    },
};
</script>

<style lang="scss" scoped>

</style>