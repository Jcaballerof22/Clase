<script setup>
  import {ref, watch} from "vue";

  const props = defineProps(['arrayPkm']);
  const arrayPkm2 = ref(props.arrayPkm);
  const tipoSeleccionado = ref('');
  const tipos = Array.from(new Set(props.arrayPkm.map(pkm => pkm.type)));

  watch(() => tipoSeleccionado.value, (nuevoTipo) => {
    if(nuevoTipo === ''){
        arrayPkm2.value = props.arrayPkm;
    }else{
        arrayPkm2.value = props.arrayPkm.filter(pkm => pkm.type === nuevoTipo);
    }
  });
</script>

<template>
  <div class="container">
    <h1>FILTRAR POKEMONS</h1>

    <select v-model="tipoSeleccionado">
        <option disabled selected>Selecciona</option>
        <option v-for="pkm in tipos" :key="pkm" :value="pkm">{{ pkm }}</option>
    </select>

    <table class="table table-striped table-hover">
        <thead>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Habilidad</th>
        </thead>
        <tbody>
            <tr v-for="(pkm, index) in arrayPkm2">
                <td>{{ pkm.name }}</td>
                <td>{{ pkm.type }}</td>
                <td>{{ pkm.ability }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
