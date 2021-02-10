<template>
  <div>
        <v-row class="pl-5">
            <v-col cols="4">
                <v-select
                    :items="items"
                    label="Filter"
                    width="200px"
                    @change="filterTodos"
                ></v-select>
            </v-col>
        </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "FilterTodos",
    data: () => ({
        items: [200, 100, 50, 20, 10, 5],
    }),
    methods: {
        ...mapActions({
            filterTodos: 'todos/filterTodos',
        })
    },
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>