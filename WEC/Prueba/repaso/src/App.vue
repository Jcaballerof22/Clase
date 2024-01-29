<script setup>
  import {ref} from "vue";
  import SacarPokemons from "./components/SacarPokemons.vue";
  import AñadirPokemons from "./components/AñadirPokemons.vue";
  import FiltrarPokemons from "./components/FiltrarPokemons.vue";

  const pokemons = ref([
    { "name": "bulbasaur",  "type": "plant", "ability": "Razor Leaf" },
    { "name": "ivysaur",  "type": "plant", "ability": "Seed Bomb" },
    { "name": "venusaur", "type": "plant", "ability": "Solar Beam" },
    { "name": "charmander",  "type": "fire", "ability": "Ember" },
    { "name": "charmeleon",  "type": "fire", "ability": "Flamethrower" },
    { "name": "charizard",  "type": "fire", "ability": "Inferno" },
    { "name": "squirtle",  "type": "water", "ability": "Water Gun" },
    { "name": "wartortle",  "type": "water", "ability": "Water Pulse" },
    { "name": "blastoise",  "type": "water", "ability": "Hydro Pump" },
    { "name": "caterpie",  "type": "bug", "ability": "String Shot" },
  ])

  const añadir = (newName, newType, newAbility) => {
    pokemons.value.push({"name" : newName,"type" : newType,"ability" : newAbility});
  }

  const borrar = (index) => {
    pokemons.value.splice(index, 1);
  }
</script>

<template>
  <SacarPokemons :arrayPkm = pokemons @borrar = "borrar" />

  <AñadirPokemons @añadir = "añadir"/>

  <FiltrarPokemons :arrayPkm = pokemons />
</template>

<style scoped>
</style>












<!-- lo mismo perocon FETCH
<script setup>
import { ref, onMounted } from 'vue';
import TaulaDatuak from './components/TaulaDatuak.vue';
import AnadirDatuak from './components/AnadirDatuak.vue';
import FiltroDatuak from './components/FiltroDatuak.vue';

const pokemonakLortu = ref([]);
const datuakFiltratuta = ref([]);
const typesArray = ref([]);

const borrar = (index) => {
  pokemonakLortu.value.splice(index, 1);
  actualizarDatuakFiltratuta();
};

const add = (name, type, ability) => {
  const datuak = {
    "name": name,
    "type": type,
    "ability": ability
  };
  pokemonakLortu.value.push(datuak);
  actualizarDatuakFiltratuta();
};

const filtro = (type) => {
  datuakFiltratuta.value = type
    ? pokemonakLortu.value.filter(pokemon => pokemon.type === type)
    : [...pokemonakLortu.value];
};

const actualizarDatuakFiltratuta = () => {
  filtro(); // Actualizar datos filtrados al agregar o eliminar
};

onMounted(async () => {
  try {
    const response = await fetch('https://api.example.com/pokemon'); // Cambia la URL por la de tu API
    const data = await response.json();
    pokemonakLortu.value = data;
    datuakFiltratuta.value = [...pokemonakLortu.value];
    typesArray.value = Array.from(new Set(pokemonakLortu.value.map(pokemon => pokemon.type)));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <div>
    <TaulaDatuak :datosArray="pokemonakLortu" @borrar="borrar" />
    <br>
    <AnadirDatuak @add="add" />
    <br>
    <FiltroDatuak :datuakFiltratuta="datuakFiltratuta" :typesArray="typesArray" @filtro="filtro" />
  </div>
</template>
 -->
