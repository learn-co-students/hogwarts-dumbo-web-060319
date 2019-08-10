
import React from "react"
import hogs from '../porkers_data';
import Display from "./Display.js"

export default class Tiles extends React.Component 
{
    state = 
    {
        clicked: null
        
    }

    handleClick = (e) => 
    {
        this.setState({
            clicked: e.target.parentElement.id 
        })
    }

    getHog = (hogsName) => 
    {
        let format = hogsName.toLowerCase().split(" ").join('_')
        return require(`../hog-imgs/${format}.jpg`)
    }

    showHogs() 
    {
        // let greasedOrNot;
        // if (this.props.greased == 1)
        // {
        //     greasedOrNot = true;
        // }
        // if (this.props.ungreased == 1)
        // {
        //     greasedOrNot = false;
        // }

        const sortManager = (hogs) => 
        {
            if (this.props.sortname == 1)
            {
                console.log("Hi");
                
                return hogs.sort((a,b) => 
                {
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                })
            }
            else if (this.props.sortweight == 1)
            {
                return hogs.sort ( (a,b) => 
                {
                    if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
                    {
                        return -1;
                    }
                    if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
                    {
                        return 1;
                    }
                })
            }
            else 
            {
                return hogs;
            }
        }

        const hogRenderDecision = (hog) => 
        {
            let greasedOrNot;
            if (this.props.greased == 1 && hog.greased == true)
            {
                greasedOrNot = "block";
            }
            else if (this.props.ungreased == 1 && hog.greased == false)
            {
                greasedOrNot = "block";
            }
            else 
            {
                greasedOrNot = "none"
            }

            if (this.props.showAll == 1)
            {
                greasedOrNot = "block"
            }
            return greasedOrNot;
        }
        let all = sortManager(hogs).map(hog => 
            {
                return (

                <div id = {hog.name} onClick = {this.handleClick} key = {hog.name} className = "pigTile" style = {{display: hogRenderDecision(hog)}}>
                    <img src = {this.getHog(hog.name)}></img>
                    <br></br>
                    {hog.name}
                    {this.state.clicked == hog.name ? <Display specialty = {hog.specialty} greased = {hog.greased} medal = {hog["highest medal achieved"]} weight = {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}/> : null}
                </div>)
            })
        return all;
    }


    render() 
    {
        
        return (
            <div className = "ui grid container">
                {this.showHogs()}

            </div>
        )
    }
}
