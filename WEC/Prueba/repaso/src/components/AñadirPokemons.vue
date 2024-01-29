<script setup>
  import {ref} from "vue";

    const newName = "";
    const newType = "";
    const newAbility = "";

    const emit = defineEmits(['añadir']);
</script>

<template>
  <div class="container">
    <h1>AÑADIR POKEMONS</h1>
    <form>
        <div class="mb-3">
            <label class="form-label">Nombre:</label>
            <input type="text" class="form-control" v-model="newName">
        </div>
        <div class="mb-3">
            <label class="form-label">Tipo:</label>
            <input type="text" class="form-control" v-model="newType">
        </div>
        <div class="mb-3">
            <label class="form-label">Habilidad:</label>
            <input type="text" class="form-control" v-model="newAbility">
        </div>
        <button type="button" @click="emit('añadir', newName, newType, newAbility)">Submit</button>
    </form>
  </div>
</template>

<style scoped>
</style>
