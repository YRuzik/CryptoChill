import {useSelector} from "react-redux";
import MainService from "../../services/MainService";
import {useEffect} from "react";
import {coinsFetching} from "../../actions";
import {Container, Error} from "../../styles/styles";
import {Table, TBody, TBodyTR, THead, THeadLabels, THeadTR, WrapperDiv} from "./CoinsTable.style";
import {coin} from "../../interfaces/interfaces";
import CoinsTableItem from "../coinsTableItem/CoinsTableItem";
import Spinner from "../spinner/Spinner";


const CoinsTable = () => {

    const {coins, coinsLoadingStatus}: any = useSelector(state => state)

    const {getAllCoins, dispatch} = MainService();

    useEffect(() => {
        dispatch(coinsFetching());
        getAllCoins();
    }, [])

    if (coinsLoadingStatus === 'loading') {
        return <Spinner/>
    } else if (coinsLoadingStatus === 'error') {
        return <Error>Ошибка загрузки...</Error>
    }

    function renderItems (arr: object[]) {
        return arr.map(({...props}, id) => {
            return (
                <TBodyTR key={id}>
                    <CoinsTableItem current={id} {...props}/>
                </TBodyTR>
            )
        })
    }


    const elements = renderItems(coins)

    return (
        <Container>
            <WrapperDiv>
                <Table>
                    <THead>
                        <THeadTR>
                            <THeadLabels>#</THeadLabels>
                            <THeadLabels>Name</THeadLabels>
                            <THeadLabels>Price</THeadLabels>
                            <THeadLabels>Change</THeadLabels>
                            <THeadLabels>Price Graph</THeadLabels>
                            <THeadLabels>Details</THeadLabels>
                        </THeadTR>
                    </THead>
                    <TBody>
                        {elements}
                    </TBody>
                </Table>
            </WrapperDiv>
        </Container>
    )
}

export default CoinsTable;
