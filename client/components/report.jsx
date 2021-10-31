import React, { Component } from 'react';
import PropTypes from 'prop-types';
import greenSign from '../img/green.png';
import redSign from '../img/red.png';

class Report extends Component {
  render() {
    const { show, data } = this.props;
    if (show && data.length > 0) {
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
              {data.map((item, index) => {
                return (
                  <tr key={index.id}>
                    <td className="report-block__table_data">
                      {item.data.split(' ').map((j, jndex) => (
                        <span key={jndex.id}>
                          {j}
                          <br />
                        </span>
                      ))}
                    </td>
                    <td className="report-block__table_solution">
                      {item.solution.map((innerItem, innerIndex) => {
                        return (
                          <span key={innerIndex.id}>
                            B{innerIndex + 1}: №{innerItem.number}: pH {innerItem.ph_value}
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
    }
    if (!show && data === 'not_implemented') {
      return <div className="report-block__notFound">Ничего не найдено</div>;
    }
    return <div />;
  }
}

Report.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Report;
