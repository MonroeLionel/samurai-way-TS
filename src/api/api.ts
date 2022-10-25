import axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {"API-KEY": '3d23276c-ddcb-4cb6-9813-101eaaffca9c'}

})

export const usersAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
   }
}

export const getUsers = (currentPage: number, pageSize: number) => {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
     .then(response => response.data)
}

