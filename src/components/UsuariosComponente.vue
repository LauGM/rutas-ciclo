<template>
    <div>
        <button @click="redirigir({path:'/usuario/1'})">Usuario 1</button>
        <button @click="redirigir({path:'/usuario/2'})">Usuario 2</button>
        <button @click="redirigir({path:'/usuario/3'})">Usuario 3</button>
    </div>
</template>

<script>
export default {
    name: 'UsuariosComponente',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        redirigir(ruta){
            this.$router.push(ruta);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>