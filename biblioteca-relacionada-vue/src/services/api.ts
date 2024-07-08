import axios from 'axios'

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function createAthor(name: string) {
  try {
    const response = await client.post('/authors', {
      name
    })

    console.log(response.data)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function createBook(title: string, description: string, author_id: string) {
  try {
    const response = await client.post('/authors', {
      title,
      description,
      author_id
    })

    console.log(response.data)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
