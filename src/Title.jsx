import './style.css';

function Title(props) {
    console.log("Title props is", props);
    return ( <h1 className="header">This is Title Functional Component, Props username is {props.user}</h1> );
}

export default Title;