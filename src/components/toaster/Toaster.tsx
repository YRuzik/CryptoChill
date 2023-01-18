import {ExitButton, ToasterBody, ToasterContent, ToasterHeader, ToasterWrapper} from "./Toaster.style";
import {useState} from "react";

const Toaster = ({myValue}: any) => {
    const [showToaster, setShowToaster] = useState(true)

    const onCloseToaster = (showToaster: boolean) => {
        setShowToaster(!showToaster)
    }

    const viewToaster = () => {
        return (
            <ToasterWrapper style={myValue > 0 ?
                {backgroundColor: 'rgba(124, 252, 0,.25)', color: "green", border: '1px solid rgba(124, 252, 0)'} :
                {backgroundColor: 'rgba(255, 69, 0, .25)', color: "rgba(255, 69, 0) ", border: '1px solid rgba(255, 69, 0)'}}
            >
                <ToasterContent>
                    <ToasterHeader>
                        <h4 style={{padding: 0, margin: 0}}>Bitcoin has {myValue > 0 ? 'grown' : 'fallen'}!</h4>
                        <h4 onClick={() => onCloseToaster(showToaster)} style={{padding: 0, margin: 0}}><ExitButton>╳</ExitButton></h4>
                    </ToasterHeader>
                    <ToasterBody>
                        Bitcoin has {myValue > 0 ? 'grown' : 'fallen'} by {new Intl.NumberFormat("eu", {style: "decimal"}).format(+(Number(myValue).toFixed(2)))} $
                    </ToasterBody>
                </ToasterContent>
            </ToasterWrapper>
        )
    }


    return (
        <>
            {showToaster ? viewToaster() : null}
        </>
    )
}

export default Toaster;
