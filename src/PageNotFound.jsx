import { useNavigate, Link } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate(); // hooks

    const goBack = () => {
        navigate("/"); // redirect to home page
    }

    return (<div>
        <h1>Page Not Found</h1>
        <button className='btn btn-primary' onClick={goBack}>Go Back - useNavigate</button>
        <hr />
        <Link to="/">Go Back Link</Link>
    </div>);
}

export default PageNotFound;