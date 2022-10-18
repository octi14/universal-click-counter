const NumberService = require('../service/number')

export const state = () => ({
  number: null,
})

export const actions = {
  async get({ commit, state }) {
    const number = await NumberService.get(this.$axios, {})
    commit('setNumber', number)
  },
  async update() {
    try {
      await NumberService.update(this.$axios)
    } catch (e) {
      throw new Error('Error actualizando')
    }
  },
  async delete({ commit, state }, { id, userToken }) {
    const deleted = await IndiceService.delete(this.$axios, {
      id,
      userToken,
    })
    return deleted
  },

}

export const mutations = {
  setNumber(state, number) {
    state.number = number
  },
}
