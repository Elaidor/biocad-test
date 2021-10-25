import React,{Component} from "react";

class Report extends Component{
    render(){
        if (this.props.show) {
            return(
                <section className="info_block">
                   <table>
                       <caption>Calibration report</caption>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Used buffer solutions</th>
                                <th>Slope, %<br/>Norm 95-105</th>
                                <th>Offset, mV <br/> Norm ±(0-20)</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.data.map((item,index) => {
                                return(
                                <tr key={index}>
                                    <td>{item.data}</td>
                                    <td>{
                                        item.solution.map((inner_item, inner_index)=>{
                                            return(
                                                <p key={inner_index}>B{inner_index+1}: №{inner_item.number}: pH {inner_item.ph_value}</p>
                                            )
                                        })
                                    }
                                    </td>
                                    <td>{item.slope}</td>
                                    <td>{item.offset}</td>
                                    <td>{item.user}</td>
                                </tr>)
                           })}
                       </tbody>
                   </table>
                 </section>
            ) 
        } else {
        return(
            <div></div>
        )};
    }
}
export default Report;