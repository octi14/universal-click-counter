const NumberService = require('../service/number')

export const state = () => ({
  number: null,
})

export const actions = {
  async get({ commit, state }) {
    const number = await NumberService.get(this.$axios, {})
    commit('setNumber', number)
  },
  async update({ commit, state}) {
    try {
      const response = await NumberService.update(this.$axios)
      commit('setNumber', response)
    } catch (e) {
      throw new Error('Error actualizando')
    }
  },

}

export const mutations = {
  setNumber(state, number) {
    state.number = number
  },
}
