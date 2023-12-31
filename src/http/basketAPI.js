import { $host, $authHost } from "./index";

export const addDevice = async(userId, deviceId) => {
    const body = {
        userId,
        deviceId
    }    
    const {data} = await $host.post("api/basket", body)
    return data
}

export const deleteDevice = async(userId, deviceId) => {
    const url = `api/basket/user/${userId}/device/${deviceId}`
    const {data} = await $host.delete(url)
    return data
}

export const getBasket = async(userId) => {
    const {data} = await $host.get("api/basket/" + userId)
    return data
} 

export const deleteAllDevices = async(userId) => {
    const {data} = await $host.delete("api/basket/user/" + userId)
    return data
} 