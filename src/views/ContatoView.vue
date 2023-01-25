<template>
  <div>
    <div v-if="loading">
      <p>carregando</p>
    </div>
    <div v-if="api">
      <h1>Contato</h1>
      {{ api }}
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "ContatoView",
  mixins: [fetchData],

  created() {
    this.fetchData("/contato");
  },
};
</script>
