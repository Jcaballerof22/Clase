<script>
  import Modal from './components/Modal.vue'

  export default {
    name: 'App',
    components: {Modal},
    data() {
      return {
        title: 'My First Vue App :)',
        header: "AAAasa",
        text: "BBBbb",
        showModal: false
      }
    },
    methods: {
      hacerClick(){
        console.log(this.$refs.name);
        this.$refs.name.classList.add('active');
      },
      gestionarModal(){
        this.showModal = !this.showModal;
      }
    }
  }
</script>

<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="hacerClick">Click me</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @cerrar="gestionarModal"/>
  </div>
  <button @click.shift="gestionarModal">Abrir modal</button>
  
</template>

<style scoped>
h1{
  color: yellowgreen;
}
</style>
