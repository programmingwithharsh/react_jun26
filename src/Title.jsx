function Title(props) {
    console.log("Title props is", props);
    return ( <h1>This is Title Functional Component, Props username is {props.user}</h1> );
}

export default Title;