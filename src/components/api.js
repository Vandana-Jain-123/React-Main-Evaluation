import axios from "axios"

export const baseUrl = `https://hazel-sour-beam.glitch.me/api`
// questions

export const getDataFromApi = async (url) => {
    try {

        const res = await axios.get(url);
        const data = res.data
        console.log("response get api ", data);
        return data
    } catch (error) {
        console.log("error in get api", error);
        return error
    }
}

export const postApi = async (url, data) => {
    try {

        const res = await axios.get(url, data);
        const data = res.data
        console.log("response post api ", data);
        return data
    } catch (error) {
        console.log("error in post api", error);
        return error
    }
}

export const editDataApi = async (url, data) => {
    try {

        const res = await axios.patch(url, data);
        const data = res.data
        console.log("response get api ", data);
        return data
    } catch (error) {
        console.log("error in get api", error);
        return error
    }
}

export const deletDataApi = async (url) => {
    try {
        const res = await axios.get(url);
        const data = res.data
        console.log("response get api ", data);
        return data
    } catch (error) {
        console.log("error in get api", error);
        return error
    }
}