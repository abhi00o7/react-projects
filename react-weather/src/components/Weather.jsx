// import React from 'react'

export default function Weather(props) {
    return (
        <div className="container">
            <div className="cards">
                <h1 className="center">
                    {props.city}
                </h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}/>
                </h5>
                {props.tempCelsius? (<h1 className="py-2">{props.tempCelsius}&deg;</h1>):null}
                {/* To show the maximum and minimum temperature value */}
                {minMax(props.tempMin, props.tempMax)}
                <h4 className="py-3">
                    {props.description}
                </h4>
            </div>
        </div>
            
           )
}
function minMax(min, max) {
return(
    <h3>
        {min? <span className="px-4">{min}&deg;</span>:null}
        {max? <span className="px-4">{max}&deg;</span>:null}
    </h3>
)
}
