import React,{Component} from "react";
import axios from "axios";
import Report from "./report.js";

class Info extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showReport:false,
            reportData:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const url="http://localhost:7777/api/calibrations/"+this.props.data['tam'];
        axios.get(url)
            .then(
                response=>{
                    this.setState({reportData:response.data});
                }
            )
        this.setState({showReport:true});
    }
    
    render(){
        const{showReport,reportData}=this.state;
        if (this.props.show) {
            return(
                <section className="info_block">
                    <form onSubmit={this.handleSubmit}>
                        <div>

                            <p>{this.props.data['product_name']}</p>
                        </div>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="1 month">1 month</option>
                            <option value="1 week">1 week</option>
                            <option value="1 year">1 year</option>
                        </select>

                        
                        <input type="submit" value="Отправить" />
                    </form>
                    <Report show={showReport} data={reportData}/>
                 </section>
            ) 
            // <div>{this.props.data['tam']}</div>
        } else {
        return(
            <div></div>
        )};
    }
}
export default Info;