import {KvartalVolumeContainer, KvartalVolumeWrapper} from "./KvartalVolume.style";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const KvartalVolume = () => {
    const {bitcoin}: any = useSelector(state => state)
    const [volume, setVolume] = useState(0)

    useEffect(() => {
        if (bitcoin !== undefined && !isNaN(bitcoin.volumeUsd24Hr)) {
            setVolume((Math.round(bitcoin.volumeUsd24Hr * 90)))
        }
    }, [bitcoin])

    return (
        <KvartalVolumeContainer>
            <KvartalVolumeWrapper>
                <span>
                    <h1 style={{padding: 0, margin: 0, fontSize: '4rem'}}> {+volume.toString().slice(0, 3)} bil. $</h1>
                    <h5 style={{padding: 0, margin: 0, fontSize: '1rem', opacity: 0.75}}>Quarterly Bitcoin Volume</h5>
                </span>
                <span>
                    <h1 style={{padding: 0, margin: 0, fontSize: '4rem'}}>100+</h1>
                    <h5 style={{padding: 0, margin: 0, fontSize: '1rem', opacity: 0.75}}>Countries where our services are available</h5>
                </span>
                <span>
                    <h1 style={{padding: 0, margin: 0, fontSize: '4rem'}}>4</h1>
                    <h5 style={{padding: 0, margin: 0, fontSize: '1rem', opacity: 0.75}}>Top cryptocurrencies in real time</h5>
                </span>
            </KvartalVolumeWrapper>
        </KvartalVolumeContainer>
    )
}

export default KvartalVolume
