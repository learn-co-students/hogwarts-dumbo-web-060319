import React from "react"


export default class Display extends React.Component 
{


    render()
    {
    
        console.log(this.props)
        return (
            <div>
                <h3>Specialty: {this.props.specialty}</h3>
                <h3>Greased? {this.props.greased == true ? "True" : "False"}</h3>
                <h3>Weight: {this.props.weight}</h3>
                <h3></h3>
            </div>

        )
    }
}