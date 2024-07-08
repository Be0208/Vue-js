import axios from 'axios'

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
})

const createAccount = async (name: string, email: string, password: string) => {
  try {
    const response = await client.post('/users', {
      name,
      email,
      password
    })

    console.log(response.data)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const login = async (email: string, password: string) => {
  try {
    const response = await client.post('/login', {
      email,
      password
    })

    if (response.status == 200) {
      sessionStorage.setItem('token', response.data.data.token)
    }

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const getCars = async () => {
  try {
    const token = sessionStorage.getItem('token')

    const response = await client.get('/carros', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
    return false
  }
}

const createCars = async (marca: string, modelo: string) => {
  try {
    const token = sessionStorage.getItem('token');

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const response = await client.post('/carros', {
      marca,
      modelo
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(response.data);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { createAccount, login, getCars, createCars }
