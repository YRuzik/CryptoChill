// @ts-ignore
import spinner from '../../resources/gif/spinner.gif'
import {Loading} from "../../styles/styles";

const Spinner = () => {
    return (
        <Loading>
            <img src={spinner} alt={'loading'}/>
            <h2>Loading...</h2>
        </Loading>
    )
}

export default Spinner;
