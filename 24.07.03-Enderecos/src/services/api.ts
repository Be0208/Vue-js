import axios from 'axios'

const client = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

async function getDataCEP(cep: string) {
  try {
    const { data } = await client.get(`${cep}/json`)

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export { getDataCEP }
