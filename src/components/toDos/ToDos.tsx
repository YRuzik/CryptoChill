import {Do, ToDosContainer, ToDosWrapper} from "./ToDos.style";

const ToDos = () => {
    return (
        <ToDosContainer>
            <h1 style={{paddingBottom: '2rem'}}>Start using our app right now!</h1>
            <ToDosWrapper>
                <Do style={{paddingLeft: '4rem'}}>
                    <span>
                        <i className='fa-solid fa-hand-holding-dollar fa-4x' style={{color: '#e5a92a'}}></i>
                        <h2>Select the desired coin</h2>
                    </span>
                    <div style={{height: '1rem',width: '5rem', borderTop: '1px solid rgba(0,0,0,.5)', marginLeft: '6rem'}}>
                    </div>
                </Do>
                <Do style={{marginLeft: '5rem'}}>
                    <span>
                        <i className='fa fa-info fa-4x' style={{color: '#e5a92a'}}></i>
                        <h2>Check real-time info</h2>
                    </span>
                    <div style={{height: '1rem',width: '5rem', borderTop: '1px solid rgba(0,0,0,.5)', marginLeft: '6rem'}}>
                    </div>
                </Do>
                <Do>
                    <span>
                        <i className='fa-solid fa-child-reaching fa-4x' style={{color: '#e5a92a'}}></i>
                        <h2>Chill!</h2>
                    </span>
                    <div style={{height: '1rem',width: '5rem'}}>
                    </div>
                </Do>
            </ToDosWrapper>
        </ToDosContainer>
    )
}

export default ToDos
