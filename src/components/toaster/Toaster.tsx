import {ExitButton, ToasterBody, ToasterContent, ToasterHeader, ToasterWrapper} from "./Toaster.style";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {previousCoinValueFetched} from "../../actions";

const Toaster = ({isReady}: any) => {
    const {coins}: any = useSelector(state => state)
    const [showToaster, setShowToaster] = useState(false)
    const [value, setValue] = useState<number | null>(null)

    useEffect(() => {
        console.log('initialize')
        setTimeout(() => {
            console.log('setTimeoutReady!')
            console.log(coins)
            if(coins.length > 0) {
                console.log('works!')
                localStorage.setItem('prevCoin',coins[0].priceUsd)
                console.log('++++++++', Number(localStorage.getItem('prevCoin')))
                setInterval(() => {
                    setValue(Number(localStorage.getItem('prevCoin')) - Number(coins[0].priceUsd))
                    console.log('++++++++', Number(localStorage.getItem('prevCoin')))
                    console.log('--------', Number(coins[0].priceUsd))
                    setShowToaster(true)
                    setTimeout(() => {
                        setShowToaster(false)
                    }, 5000)
                }, 20000)
            }
        }, 5000)
    }, [isReady])

    const getChange = (prevValue: number, currentValue: number) => {
        return prevValue - currentValue
    }


    const viewToaster = () => {
        console.log(value)
        return (
            <>
            {value !== null ? <ToasterWrapper style={value > 0 ?
                {backgroundColor: 'rgba(124, 252, 0,.25)', color: "green", border: '1px solid rgba(124, 252, 0)'} :
                {backgroundColor: 'rgba(255, 69, 0, .25)', color: "rgba(255, 69, 0) ", border: '1px solid rgba(255, 69, 0)'}}
            >
                <ToasterContent>
                    <ToasterHeader>
                        <h4 style={{padding: 0, margin: 0}}>Bitcoin has {value > 0 ? 'grown' : 'fallen'}!</h4>
                        <h4 onClick={() => setShowToaster(false)} style={{padding: 0, margin: 0}}><ExitButton>╳</ExitButton></h4>
                    </ToasterHeader>
                    <ToasterBody>
                        Bitcoin has {value > 0 ? 'grown' : 'fallen'} by {new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(value).toFixed(2)))} $
                    </ToasterBody>
                </ToasterContent>
            </ToasterWrapper>
            : null
            }
            </>
        )
    }


    return (
        <>
            {showToaster ? viewToaster() : null}
        </>
    )
}

export default Toaster;
