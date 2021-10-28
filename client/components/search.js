import React,{Component} from "react";
import Info from "./info.js";
import axios from "axios";

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showInfo:false,
            scalesData:{}
    };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value == "") {
            this.setState({showInfo:false})
            return
        }
        const url="http://localhost:7777/api/scales/"+this.state.value;
        axios.get(url)
            .then(
                response=>{
                    this.setState({scalesData:response.data[0]});
                    if (response.data.length > 0) {this.setState({showInfo:true})}
                    else {this.setState({showInfo:false})}
                }
            )
    }

    render(){
        const{showInfo,scalesData}=this.state;
        return (
            <>
                <section className="search-block">
                    <form onSubmit={this.handleSubmit}>
                        <label className="search-block__heading" >
                        Enter inventory number, guid or bims id</label>
                        <div className="search-block__input flex">
                            <input className="search-block__input_text" type="text"  value={this.state.value} onChange={this.handleChange}/>
                            <input className="search-block__input_button" type="submit" value="Search" />
                        </div>
                    </form>
                </section>
                <Info show={showInfo} data={scalesData}/>
            </>
        );
    }
}
export default Search;