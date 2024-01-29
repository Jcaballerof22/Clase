<script setup>
    defineProps({
        title: String,
        id: Number,
        body: {
            type: String,
            default: "Sin descripción"
        },
        colorText: String,
    });

    const emit = defineEmits(['cambiarFavorito']);
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" :class="`text-${colorText}`">{{ id }} - {{ title }}</h5>
            <p>{{ body }}</p>
            <button @click="emit('cambiarFav', title)">Favorito</button>
        </div>
    </div>
</template>