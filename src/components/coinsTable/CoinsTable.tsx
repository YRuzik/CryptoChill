import {useSelector} from "react-redux";
import MainService from "../../services/MainService";
import {useEffect} from "react";
import {coinsFetching} from "../../actions";
import {Container} from "../../styles/styles";
import {CoinList, HeaderText, Table} from "./CoinsTable.style";
import {coin} from "../../interfaces/interfaces";
import CoinsTableItem from "../coinsTableItem/CoinsTableItem";


const CoinsTable = () => {
    /*const {coins, coinsLoadingStatus}: any = useSelector(state => state)

    const {getAllCoins, dispatch} = MainService();

    useEffect(() => {
        dispatch(coinsFetching());
        getAllCoins()
    }, [])

    console.log(coins)*/

    function renderItems (arr: []) {
        let res = arr.map((item: coin, i: number) => {
            return <CoinsTableItem key={i}/>
        })
    }

    return (
        <Container>
            <Table>
                <HeaderText>
                    #
                </HeaderText>
            </Table>

            <Table style={{marginTop: '2rem'}}>
                <CoinList>
                    <li>

                    </li>
                </CoinList>
            </Table>
        </Container>
    )
}

export default CoinsTable;
