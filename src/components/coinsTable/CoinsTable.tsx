import {useSelector} from "react-redux";
import {Container, Error} from "../../styles/styles";
import {Table, TBody, TBodyTR, THead, THeadLabels, THeadTR, WrapperDiv} from "./CoinsTable.style";
import CoinsTableItem from "../coinsTableItem/CoinsTableItem";
import Spinner from "../spinner/Spinner";

const CoinsTable = () => {
    const {coins, coinsLoadingStatus}: any = useSelector(state => state)

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
                            <THeadLabels>Salary</THeadLabels>
                            <THeadLabels>Changes</THeadLabels>
                            <THeadLabels>Table</THeadLabels>
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
