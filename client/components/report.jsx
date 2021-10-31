import React, { Component } from 'react';
import greenSign from './../img/green.png';
import redSign from './../img/red.png';

class Report extends Component {
  render() {
    if (this.props.show && this.props.data.length > 0) {
      return (
        <section className="report-block">
          <table className="report-block__table">
            <caption className="report-block__table_heading">Calibration report</caption>
            <thead>
              <tr>
                <th>Data</th>
                <th>Used buffer solutions</th>
                <th>
                  Slope, %<br />
                  Norm 95-105
                </th>
                <th>
                  Offset, mV <br /> Norm ±(0-20)
                </th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="report-block__table_data">
                      {item.data.split(' ').map((j, jndex) => (
                        <span key={jndex}>
                          {j}
                          <br />
                        </span>
                      ))}
                    </td>
                    <td className="report-block__table_solution">
                      {item.solution.map((inner_item, inner_index) => {
                        return (
                          <span key={inner_index}>
                            B{inner_index + 1}: №{inner_item.number}: pH {inner_item.ph_value}
                            <br />
                          </span>
                        );
                      })}
                    </td>
                    <td className="report-block__table_slope">
                      <span>{item.slope}</span>
                      {parseInt(item.slope) >= 95 && parseInt(item.slope) <= 105 ? (
                        <img src={greenSign} alt="green" />
                      ) : (
                        <img src={redSign} alt="red" />
                      )}
                    </td>
                    <td className="report-block__table_offset">
                      <span>{item.offset}</span>
                      {parseInt(item.offset) >= -20 && parseInt(item.offset) <= 20 ? (
                        <img src={greenSign} alt="green" />
                      ) : (
                        <img src={redSign} alt="red" />
                      )}
                    </td>
                    <td className="report-block__table_user">{item.user}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      );
    } else if (!this.props.show && this.props.data == 'not_implemented') {
      return <div className="report-block__notFound">Ничего не найдено</div>;
    } else {
      return <div></div>;
    }
  }
}
export default Report;
