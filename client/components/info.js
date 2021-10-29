import React,{Component} from "react";
import axios from "axios";
import Report from "./report.js";

class Info extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showReport:false,
            reportData:[],
            searchTable: 'calibrations'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleRadioChange(e) {
        this.setState({searchTable: e.target.value})
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.searchTable == 'measures' || this.state.searchTable == 'uses') {
            this.setState({showReport:false})
            this.setState({reportData:"not_implemented"});
            return
        }
        const url="http://localhost:7777/api/"+this.state.searchTable+"/"+this.props.data['tam'];
        axios.get(url)
            .then(
                response=>{
                    this.setState({reportData:response.data});
                    if (response.data.length > 0) {this.setState({showReport:true})}
                    else {this.setState({showReport:true})}
                }
            )
    }
    
    render(){
        const{showReport,reportData}=this.state;
        if (this.props.show && this.props.data) {
            return(
                <>
                    <section className="info-block flex flex-column">
                        <form className="info-block__form flex-column" onSubmit={this.handleSubmit}>
                            <div className="info-block__form_product flex">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1:200)">
                                <path d="M22.3506 10.0006C21.8935 10.0006 21.5228 9.62745 21.5228 9.16724V5.83414C21.5228 5.37393 21.8935 5.00082 22.3506 5.00082C22.8078 5.00082 23.1784 5.37393 23.1784 5.83414V9.16732C23.1783 9.62745 22.8078 10.0006 22.3506 10.0006Z" fill="#FFA000"/>
                                <path d="M22.3506 6.66736C23.7221 6.66736 24.8339 5.54813 24.8339 4.1675C24.8339 2.78686 23.7221 1.66763 22.3506 1.66763C20.9791 1.66763 19.8673 2.78686 19.8673 4.1675C19.8673 5.54813 20.9791 6.66736 22.3506 6.66736Z" fill="#FFC107"/>
                                <path d="M19.0395 8.33398H25.6617C26.1188 8.33398 26.4894 8.70709 26.4894 9.1673V20.8333C26.4894 21.2935 26.1188 21.6666 25.6617 21.6666H19.0395C18.5824 21.6666 18.2117 21.2935 18.2117 20.8333V9.16722C18.2117 8.70701 18.5824 8.33398 19.0395 8.33398Z" fill="#FFD54F"/>
                                <path d="M35.2042 21.6666H4.53041C2.96135 21.6716 1.52576 20.7784 0.82865 19.3633L0.0886247 17.8718C-0.115705 17.4599 0.0502887 16.9592 0.459491 16.7535C0.868616 16.5478 1.36598 16.7149 1.57038 17.1268L2.31041 18.6184C2.72885 19.4668 3.58954 20.0023 4.53049 19.9999H35.2043C36.1459 20.003 37.0073 19.4672 37.426 18.6184L38.166 17.1268C38.3704 16.7149 38.8677 16.5478 39.2769 16.7535C39.6861 16.9591 39.8521 17.4598 39.6478 17.8718L38.9078 19.3633C38.2102 20.779 36.7739 21.6723 35.2042 21.6666Z" fill="#CFD8DC"/>
                                <path d="M7.45078 24.9997C6.99362 24.9997 6.62299 24.6266 6.62299 24.1664V20.8332C6.62299 20.373 6.99362 19.9999 7.45078 19.9999C7.90794 19.9999 8.27858 20.373 8.27858 20.8332V24.1664C8.2785 24.6266 7.90794 24.9997 7.45078 24.9997Z" fill="#CFD8DC"/>
                                <path d="M32.2838 24.9997C31.8267 24.9997 31.4561 24.6266 31.4561 24.1664V20.8332C31.4561 20.373 31.8267 19.9999 32.2838 19.9999C32.741 19.9999 33.1116 20.373 33.1116 20.8332V24.1664C33.1115 24.6266 32.741 24.9997 32.2838 24.9997Z" fill="#CFD8DC"/>
                                <path d="M39.651 24.5331L36.522 30.8328H3.21254L0.0835735 24.5331C-0.0386518 24.2776 -0.0262353 23.9775 0.11671 23.7332C0.272305 23.488 0.539649 23.3378 0.828566 23.3332H38.906C39.1949 23.3378 39.4623 23.488 39.6178 23.7332C39.7608 23.9775 39.7732 24.2776 39.651 24.5331Z" fill="#607D8B"/>
                                <path d="M39.6178 37.9324C39.4622 38.1775 39.1949 38.3277 38.906 38.3324H0.828566C0.539649 38.3277 0.272227 38.1775 0.11671 37.9324C-0.0262353 37.688 -0.0386518 37.388 0.0835735 37.1324L3.21254 30.8328H36.522L39.651 37.1324C39.7732 37.388 39.7608 37.6879 39.6178 37.9324Z" fill="#455A64"/>
                                <path d="M17.384 34.9992H5.79517C5.33801 34.9992 4.96738 34.6261 4.96738 34.1659C4.96738 33.7057 5.33801 33.3326 5.79517 33.3326H17.3839C17.8411 33.3326 18.2117 33.7057 18.2117 34.1659C18.2117 34.6261 17.8412 34.9992 17.384 34.9992Z" fill="#B0BEC5"/>
                                <path d="M24.0061 34.9992H22.3506C21.8934 34.9992 21.5228 34.6261 21.5228 34.1659C21.5228 33.7057 21.8934 33.3326 22.3506 33.3326H24.0061C24.4633 33.3326 24.8339 33.7057 24.8339 34.1659C24.8339 34.6261 24.4633 34.9992 24.0061 34.9992Z" fill="#B0BEC5"/>
                                <path d="M28.9727 34.9992H27.3172C26.86 34.9992 26.4894 34.6261 26.4894 34.1659C26.4894 33.7057 26.86 33.3326 27.3172 33.3326H28.9727C29.4299 33.3326 29.8005 33.7057 29.8005 34.1659C29.8005 34.6261 29.4299 34.9992 28.9727 34.9992Z" fill="#B0BEC5"/>
                                <path d="M33.9394 34.9992H32.2838C31.8267 34.9992 31.4561 34.6261 31.4561 34.1659C31.4561 33.7057 31.8267 33.3326 32.2838 33.3326H33.9394C34.3965 33.3326 34.7672 33.7057 34.7672 34.1659C34.7672 34.6261 34.3965 34.9992 33.9394 34.9992Z" fill="#B0BEC5"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1:200">
                                <rect width="39.7351" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>                           
                                <p className="info-block__form_product_name">{this.props.data['product_name']}</p>
                            </div>
                            <select className="info-block__form_select" value={this.state.value} onChange={this.handleChange}>
                                <option value="1 month">1 month</option>
                                <option value="1 week">1 week</option>
                                <option value="1 year">1 year</option>
                            </select>
                            <div className="phone-screen">
                                <div className="info-block__form_radio">
                                    <label><input type="radio" id="reportChoice1"
                                    name="report" value="calibrations" defaultChecked onChange={this.handleRadioChange}/>
                                    Calibration</label>
                                    <label><input type="radio" id="reportChoice2"
                                    name="report" value="measures" onChange={this.handleRadioChange}/>
                                    Measuring</label>
                                    <label><input type="radio" id="reportChoice3"
                                    name="report" value="uses" onChange={this.handleRadioChange}/>
                                    Using</label>
                                </div>
                                <input className="info-block__form_button" type="submit" value="Generate report" />
                            </div>
                        </form>
                        <div className="info-block__description">
                            <ul className="info-block__description_ul" >
                                <li className="info-block__description_li">Тип оборудования: <span>{this.props.data["type"]}</span></li>
                                <li className="info-block__description_li">Статус: <span>{this.props.data["status"]}</span></li>
                                <li className="info-block__description_li">Изготовитель: <span>{this.props.data["manufacture"]}</span></li>
                                <li className="info-block__description_li">Модель: <span>{this.props.data["model"]}</span></li>
                                <li className="info-block__description_li">Ответственное подразделение (ремонт): <span>{this.props.data["responsible_division"]}</span></li>
                                <li className="info-block__description_li">Эксплуатирующее подразделение: <span>{this.props.data["operational_division"]}</span></li>
                                <li className="info-block__description_li">МОЛ: <span>{this.props.data["mol"]}</span></li>
                                <li className="info-block__description_li">Территория: <span>{this.props.data["territory"]}</span></li>
                                <li className="info-block__description_li">Серийный номер: <span>{this.props.data["serial"]}</span></li>
                                <li className="info-block__description_li">GUID: <a className="blue-color" href="#">{this.props.data["guid"]}</a></li>
                                <li className="info-block__description_li">Bims ID: <a className="blue-color" href="#"> {this.props.data["bims"]}</a></li>
                                <li className="info-block__description_li">Tam: <a className="blue-color" href="#"> {this.props.data["tam"]}</a></li>
                            </ul>
                        </div>
                    </section>
                    <Report show={showReport} data={reportData}/>
                 </>
            ) 
        } else if(this.props.data === undefined){
            return(<div className="info-block__not-found">Product information not found</div>)
        } else {
            return(<div></div>)
        }
    }
}
export default Info;