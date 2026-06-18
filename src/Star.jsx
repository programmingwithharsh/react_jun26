function Star(props) { // reusable component
    return (<div>
        {props.rating}
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
    </div>);
}

export default Star;