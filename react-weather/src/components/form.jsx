import React from 'react';
import './style.css'
const Form = props => {
    return(
    <div className="container">
        <div>{props.error? error():null}</div>
        <form onSubmit={props.loadWeather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City Name"/>
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country Name"/>

                </div>
                <div className="col-md-3
                mt-md-0 text-md-left">
                <button className="btn btn-outline-dark btn-block">Check</button>
                </div>
            </div>
        </form>
    </div>
    )
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Both City and country names should be present.
        </div>
    )
}
export default Form