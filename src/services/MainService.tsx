import {useHttp} from "../hooks/http.hook";


const MainService = () => {
    const {request} = useHttp();

    const _baseURL = 'https://api.coincap.io/v2/'

    const getAllCoins = async() => {
        return (
            await request(`${_baseURL}assets`)
        )
    }

    const getHistoryOfCoin = async(id: string | undefined , interval: string | undefined = 'd1') => {
        return (
            await request(`${_baseURL}assets/${id}/history?interval=${interval}`)
        )
    }

    const getCoin = async(id: string | undefined) => {
        return (
            await request(`${_baseURL}assets/${id}`)
        )
    }

    return {getAllCoins, getHistoryOfCoin, getCoin}
}

export default MainService;
