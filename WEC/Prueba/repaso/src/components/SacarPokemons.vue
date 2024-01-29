<script setup>
  import {ref} from "vue";

  const props = defineProps(['arrayPkm']);
  const emit = defineEmits(['borrar']);
</script>

<template>
  <div class="container">
    <h1>POKEMONS</h1>

    <table class="table table-striped table-hover">
        <thead>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Habilidad</th>
            <th></th>
        </thead>
        <tbody>
            <tr v-for="(pkm, index) in arrayPkm">
                <td>{{ pkm.name }}</td>
                <td>{{ pkm.type }}</td>
                <td>{{ pkm.ability }}</td>
                <td>
                    <button type="button" @click="emit('borrar', index)"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
