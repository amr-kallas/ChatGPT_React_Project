import './feature.css'
function Feature(props){
    return(
        <div className='feature'>
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default Feature;