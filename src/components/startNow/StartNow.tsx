import {Reason, ReasonsContainer, StartNowContainer} from "./StartNow.style";

const StartNow = () => {
    return (
        <StartNowContainer>
            <h1 style={{fontSize: '2.5rem', marginTop: '-3rem'}}>The most accurate cryptocurrency platform</h1>
            <h3 style={{opacity: 0.5}}>Here are just a few reasons why you should choose Crypto Chill</h3>
            <ReasonsContainer>
                <Reason>
                    <i className='fas fa-chart-line fa-4x' style={{color: '#e5a92a'}}></i>
                    <h2>Dynamic Update</h2>
                    <h3 style={{opacity: 0.65}}>View the status of currencies in real time with dynamic price updates</h3>
                </Reason>
                <Reason>
                    <i className='fa fa-bell fa-4x' style={{color: '#e5a92a'}}></i>
                    <h2>Real-time Notifications</h2>
                    <h3 style={{opacity: 0.65}}>Get notifications about the decrease or decrease in the prices of cryptocurrencies in real time</h3>
                </Reason>
                <Reason>
                    <i className='fa-brands fa-bitcoin fa-4x' style={{color: '#e5a92a'}}></i>
                    <h2>Relevant Coins</h2>
                    <h3 style={{opacity: 0.65}}>Track the top and most relevant cryptocurrencies, with a detailed inspection and information</h3>
                </Reason>
            </ReasonsContainer>
        </StartNowContainer>
    )
}

export default StartNow;
