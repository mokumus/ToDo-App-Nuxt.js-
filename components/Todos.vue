<template>
    <div class="pa-5 ma-5">
        <add-todo/>
        <filter-todos/>
        <h3 class="text-center">Todos</h3>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md4 v-for="todo in allTodos" :key="todo.id">
                    <v-card @dblclick="onDblClick(todo)" width="100%" class="ma-4" elevation="2" :class="{'is-complete':todo.completed}">
                        <v-card-title primary class="title">{{todo.title}}</v-card-title>
                        <v-card-actions>
                        <v-btn
                            color="red"
                            text
                            id="deleteBtn"
                            @click="deleteTodo(todo.id)"
                        >
                            <v-icon >mdi-delete</v-icon>
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddTodo from './AddTodo.vue'
import FilterTodos from './FilterTodos.vue'

export default {
  components: { AddTodo, FilterTodos },
    name: "Todos",

    computed: {
        ...mapGetters ({
            allTodos: 'todos/allTodos'
        })
    },
    methods: {
        ...mapActions({
            fetchTodos: 'todos/fetchTodos',
            deleteTodo: 'todos/deleteTodo',
            updateTodo: 'todos/updateTodo'
        }),
        onDblClick(todo){
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updTodo)
        }
    },

    created() {
        this.fetchTodos()
    }
    
}
</script>


<style scoped>
#deleteBtn {
    position: absolute;
    right: 10px;
    bottom: 10px;
}

.is-complete {
  background: #b89933;
  color: #fff;
}

</style>