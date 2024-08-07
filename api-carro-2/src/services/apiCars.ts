import axios from 'axios'

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})

const login = async (email: string, password: string) => {
  try {
    const response = await client.post('/login', {
      email,
      password
    })

    if (response.status === 200) {
      const { data, msg } = response.data

      console.log(msg)

      sessionStorage.setItem('token', data.token)
    }

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
export { login }

export async function doGet(url: string) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    }
    const response = await client.get(url, config)

    return response?.data
  } catch (error) {
    console.log(error)
    return []
  }
}
