import { ContainerItem, Containter, ContainerItemImg } from "./PrimaryContent.style";
import McDuck from 'resources/img/McDuck_2.png'

const PrimaryContent = () => {
    return (
            <Containter>
                <ContainerItemImg><img src={McDuck} /></ContainerItemImg>
                <ContainerItem>
                    <h2>Follow the changes in cryptocurrencies. </h2>
                    If you are interested in something, you can take a detailed look at the cryptocurrencies listed below.
                </ContainerItem>

            </Containter>
    )
}

export default PrimaryContent;
