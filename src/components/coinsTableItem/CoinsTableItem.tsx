import {useSelector} from "react-redux";
import {ListText} from "../coinsTable/CoinsTable.style";


const CoinsTableItem = ({key}: any) => {
    const {coins, coinsLoadingStatus}: any = useSelector(state => state)

    return (
        <li key={key}>
            <ListText>{}</ListText>
            <ListText></ListText>
            <ListText></ListText>
            <ListText></ListText>
            <button>More</button>
        </li>
    )
}

export default CoinsTableItem;
