import axios from 'axios';

const client = axios.create({
  baseURL: 'https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function doGet(url: string) {
  try {
    const response = await client.get(url)

    return response?.data
  } catch (error) {
    console.log(error)
    return []
  }
}
