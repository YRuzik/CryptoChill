import {useCallback} from "react";

export const useHttp: any = () => {

    const request = useCallback(async (url: string, method = 'GET', body = null, headers = {'X-CoinAPI-Key': 'API Key: 8184F278-9656-4722-BE4C-8546EE185259'}) => {

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
