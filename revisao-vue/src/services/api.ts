import axios from 'axios'

export async function doGet(url: string) {
  try {
    const response = await axios.get(url)

    return response.data
  } catch (error) {
    console.log(error)

    return []
  }
}
