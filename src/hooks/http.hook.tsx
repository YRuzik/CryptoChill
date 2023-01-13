import {useCallback} from "react";

export const useHttp: any = () => {

    const request = useCallback(async (url: string, method = 'GET', body = null, headers = {'X-CoinAPI-Key': '52074F2B-AB6B-45CF-BA4F-B4DA6C4BF5DD'}) => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    }, []);

    return {request}

}
