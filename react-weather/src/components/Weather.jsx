// import React from 'react'

export default function Weather() {
    return (
        <div className="container">
            <div className="cards">
                <h1 className="center">LocationUnknown</h1>
                <h5 className="py-4">
                    <i className="wi wi-day-sunny display-1"/>
                </h5>
                <h1 className="py-2">24&deg;</h1>
                {/* To show the maximum and minimum temperature value */}
                {minMax(23,44)}
                <h4 className="py-3">
                    Heavy UV radiation
                </h4>
            </div>
        </div>
            
           )
}
function minMax(min, max) {
return(
    <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
    </h3>
)
}
