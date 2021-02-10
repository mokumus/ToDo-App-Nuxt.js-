import axios from 'axios'

export const state = () => ({
    todos: []
  })

export const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id), // Remove from UI
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
          state.todos.splice(index, 1, updTodo);
        }
      }
}

export const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            { title, completed: false }
        );
        commit('newTodo', response.data)
    },  
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`); // Remove from database
        commit('removeTodo', id)
    },

    async filterTodos({ commit }, e) {
        // Get selected number
        const limit = e
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}` )
        commit('setTodos', response.data);
    },

    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
          updTodo
        );
    
        console.log(response.data);
    
        commit('updateTodo', response.data);
    }
}

export const getters = {
    allTodos: state => {
        return state.todos
    }
}
