import UserService from './userService'


export default async function guard(role){
    if (!role){
        return true
        //si no me has puesto meta es true, la ruta es libre
    }
    const user = await UserService.get()
    return UserService.checkRole(user,role)
}