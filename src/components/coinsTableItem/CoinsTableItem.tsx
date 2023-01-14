import {Button, TBodyTD} from "../coinsTable/CoinsTable.style";
// @ts-ignore
import ada from "../../resources/img/ada.png"
// @ts-ignore
import bit from "../../resources/img/bit.png"
// @ts-ignore
import eth from "../../resources/img/eth.png"
// @ts-ignore
import usdt from "../../resources/img/usdt.png"
import mainService from "../../services/MainService";
import {latestData} from "../../interfaces/interfaces";
import {useState} from "react";


const CoinsTableItem = ({name, symbol, priceUsd, current, id}: any) => {
    const [changes, setChanges] = useState<string | number >(0)
    const {getHistoryOfCoin} = mainService();

    const usdToRub = Math.floor(priceUsd * 67)

    let currentIMG = ''

    const takeChanges = async () => {
        let latestData: any[] = []
        await getHistoryOfCoin(id).then(data => latestData.push(data.data.filter((item: latestData, i: number) => i === data.data.length-1 || i === data.data.length - 2)))
        await setChanges ((Number(latestData[0][1].priceUsd-latestData[0][0].priceUsd)/latestData[0][0].priceUsd * 100).toFixed(2))
    }

    takeChanges()

    switch (symbol) {
        case 'BTC':
             currentIMG = bit;
             break
        case 'ETH':
            currentIMG = eth;
            break
        case 'ADA':
            currentIMG = ada;
            break
        case 'USDT':
            currentIMG = usdt;
            break
        default: break
    }

    return (
        <>
            <TBodyTD>{current+1}</TBodyTD>
            <TBodyTD>
                <a style={{display: 'flex', flex: '1 1 auto', alignItems: "center"}}>
                    <img style={{paddingRight: '0.5rem'}} src={currentIMG !== undefined ? currentIMG : undefined}/>
                    {name}
                    <span style={{opacity: 0.5, paddingLeft: '0.5rem'}}>{symbol}</span>
                </a>
            </TBodyTD>
            <TBodyTD>~{usdToRub} RUB</TBodyTD>
            <TBodyTD style={changes > 0 ? {color: 'green'} : {color: 'red'}}>
                {changes > 0 ? '+' : '-'}
                {changes !== undefined ? changes : 'in process'}%
            </TBodyTD>
            <TBodyTD>in progress</TBodyTD>
            <TBodyTD><Button>More</Button></TBodyTD>
        </>
    )
}

export default CoinsTableItem;
