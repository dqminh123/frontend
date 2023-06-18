export const state = () => ({
    user: null  
}) 
export const getters = {
    user: (state) => {
        return state.user;
    },
}
export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    
}
export const actions = {
    async getUsers ({ commit }) {
        try {
            await this.$axios.get('/users/', {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                commit('setUser', res.data)
            })
         }
         catch (error) {
          console.log(error);
        }
    }
}