import axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {"API-KEY": 'aebee15d-a8e4-471a-aaa5-f2699dbc0080'}

})

export const usersAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
   },
   follow(userId: number) {
      return instance.post(`follow/${userId}`, {}
      )
   },
   unFollow(userId: number) {
      return instance.delete(`follow/${userId}`)
   },
   getProfile(userId: string) {
      console.warn("obsollete method please use profileAPI object")
      return profileAPI.getProfile(userId)
   }

}

export const profileAPI = {

   getProfile(userId: string) {
      
      return instance.get(`profile/${userId}`)
        .then(response => response.data)
   },
   getStatus(userId: string) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put(`profile/status/`, {status: status})
   }

}

export const authAPI = {
   me() {
      return instance.get('auth/me')
   }
}
