<template>
  <div class="pl-5">
    <h3 >Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <v-text-field v-model="title"/>
        <v-btn class="ma-4" color="blue" @click="onSubmit" > Submit </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions({
        addTodo: 'todos/addTodo'
    }),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>