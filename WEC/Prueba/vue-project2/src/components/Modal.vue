<template>
    <div class="backdrop" @click.self="cerrarModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['header', 'text', 'theme'],
        methods: {
            cerrarModal(){
                this.$emit('cerrar')
            }
        }
    }
</script>

<style>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        color: black;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .sale{
        background-color: violet;
    }
</style>