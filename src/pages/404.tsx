import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <h1>Error 404!</h1>
            <h2>It seems you have climbed to a non-existent page!</h2>
            <h2><Link to={'/'}>Click me!</Link> to return to the main page.</h2>
        </>
    )
}

export default Error404
