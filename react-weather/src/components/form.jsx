import React from 'react';
import './style.css'
const Form = props => {
    return(
    <form onSubmit={props.loadweather}>
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City Name"/>
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country Name"/>

                </div>
                <div className="col-md-3
                mt-md-0 text-md-left">
                <button className="btn btn-warning">Check</button>
                </div>
            </div>
        </div>
    </form>
    )
}

export default Form