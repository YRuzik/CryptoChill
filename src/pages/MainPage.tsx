import PrimaryContent from "../components/BaseInformation/PrimaryContent";
import CoinsTable from "../components/coinsTable/CoinsTable";
//@ts-ignore
import McDuck from '../resources/gif/McDuck.gif';

const MainPage = () => {
    return (
        <>
        <PrimaryContent />
        <CoinsTable />
        <div style={{textAlign: 'start'}}> 
        <img style={{width: '10%',position: 'fixed',bottom: 0}} src={McDuck}/>
        </div>
        </>
    )
}

export default MainPage;
