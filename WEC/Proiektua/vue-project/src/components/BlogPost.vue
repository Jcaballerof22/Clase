<script setup>
    defineProps({
        title: String,
        id: Number,
        body:{
            type: String,
            default: "Sin descripción",
        },
        colorText: String,
    });
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" :class="`text-${colorText}`">{{ id }} - {{ title }}</h5>
            <p>{{ body }}</p>
        </div>
    </div>
</template>