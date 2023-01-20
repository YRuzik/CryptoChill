import {ExitButton, ToasterBody, ToasterContent, ToasterHeader, ToasterWrapper} from "./Toaster.style";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Toaster = () => {
    const {bitcoin}: any = useSelector(state => state)
    const [showToaster, setShowToaster] = useState(false)
    const [value, setValue] = useState<number>(0)
    const [viewer, setViewer] = useState<number>(0)

    const getChanges = (prevValue: string | number, currentValue: string | number) => {
        return Number(prevValue) - Number(currentValue)
    }

    useEffect(() => {
        setValue((curValue) => curValue = bitcoin.priceUsd)
        if (value && value !== bitcoin.priceUsd && !isNaN(value)) {
            setViewer(getChanges(bitcoin.priceUsd, value))
            setShowToaster(true)
            setTimeout(() => setShowToaster(false), 5000)
        }
    }, [bitcoin])

    const viewToaster = () => {
        return (
            <>
            {viewer ? <ToasterWrapper style={viewer > 0 ?
                {backgroundColor: 'rgba(124, 252, 0,.25)', color: "#228B22", border: '1px solid rgba(124, 252, 0)'} :
                {backgroundColor: 'rgba(255, 69, 0, .25)', color: "rgba(255, 69, 0) ", border: '1px solid rgba(255, 69, 0)'}}
            >
                <ToasterContent>
                    <ToasterHeader>
                        <h4 style={{padding: 0, margin: 0}}>Bitcoin has {viewer > 0 ? 'grown' : 'fallen'}!</h4>
                        <h4 onClick={() => setShowToaster(false)} style={{padding: 0, margin: 0}}><ExitButton>╳</ExitButton></h4>
                    </ToasterHeader>
                    <ToasterBody>
                        Bitcoin has {viewer > 0 ? 'grown' : 'fallen'} by {new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(viewer).toFixed(2)))} $
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
