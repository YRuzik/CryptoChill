import PrimaryContent from "../components/primaryContent/PrimaryContent";
import CoinsTable from "../components/coinsTable/CoinsTable";
import McDuck from 'resources/gif/McDuck.gif';
import MainPageContent from "../components/mainPageContent/MainPageContent";
import StartNow from "../components/startNow/StartNow";
import KvartalVolume from "../components/kvartalVolume/KvartalVolume";
import ToDos from "../components/toDos/ToDos";

const MainPage = () => {
    return (
        <>
            <MainPageContent/>
            <StartNow/>
            <PrimaryContent />
            <CoinsTable />
            <KvartalVolume/>
            <ToDos/>
            <div style={{textAlign: 'start'}}>
                <img alt={'mcDuck'} style={{width: '10%',position: 'fixed',bottom: 0}} src={McDuck}/>
            </div>
        </>
    )
}

export default MainPage;
