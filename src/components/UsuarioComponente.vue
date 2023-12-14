<template>
    <div>
        <h2>ID: {{ usuarios[this.$route.params.id - 1].id }}</h2>
        <h2>NOMBRE: {{ usuarios[this.$route.params.id - 1].nombre }}</h2>
    </div>
</template>

<script>
export default {
    name: 'UsuarioComponente',

    data() {
        return {
            usuarios:[
                {
                    id:1,
                    nombre:'Pepe'
                },
                {
                    id:2,
                    nombre:'Juanita'
                },
                {
                    id:3,
                    nombre:'Santiago'
                },
            ]
        };
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style> 