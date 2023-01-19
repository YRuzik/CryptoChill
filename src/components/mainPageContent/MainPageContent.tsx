import {MainContainer, MainText, SubText} from "./MainPageContent.style";
import {Container} from "../../styles/styles";


const MainPageContent = () => {
    return (
        <Container>
            <MainContainer>
                <MainText>
                    Start viewing the state of the cryptocurrency in real time!
                    <SubText>
                        Crypto Chill - the most convenient platform for viewing the state of cryptocurrencies in real time! Detailed coin inspection, alerts and much more.
                    </SubText>
                </MainText>
                <img src={'https://static.tildacdn.info/tild3262-6537-4539-a535-343732653435/3mb.png'} width={'60%'}/>
            </MainContainer>
        </Container>
    )
}

export default MainPageContent;
