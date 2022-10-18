const formatNumber = (NumberResponse) => ({
  number: NumberResponse[0].thenumber
})

module.exports = {
  get: async (axios) => {
    const number = await axios.$get('/number', {})
    return formatNumber(number.data)
  },
  update: async (axios) => {
    axios.setHeader('Access-Control-Allow-Origin', true)
    const updated = await axios.$put(
      `/number`,
    )
    return formatNumber(updated.data)
  },
}
