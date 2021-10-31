import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Report from './report';
import scale from '../img/scale.svg';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showReport: false,
      reportData: [],
      searchTable: 'calibrations',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioChange(e) {
    this.setState({ searchTable: e.target.value });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const { searchTable } = this.state;
    const { data } = this.props;
    e.preventDefault();
    if (searchTable === 'measures' || searchTable === 'uses') {
      this.setState({ showReport: false });
      this.setState({ reportData: 'not_implemented' });
      return;
    }
    const url = `http://localhost:7777/api/${searchTable}/${data.tam}`;
    axios.get(url).then((response) => {
      this.setState({ reportData: response.data });
      if (response.data.length > 0) {
        this.setState({ showReport: true });
      } else {
        this.setState({ showReport: true });
      }
    });
  }

  render() {
    const { showReport, reportData, value } = this.state;
    const { show, data } = this.props;
    if (show && data) {
      return (
        <>
          <section className="info-block flex flex-column-reverse">
            <form className="info-block__form flex-column" onSubmit={this.handleSubmit}>
              <div className="info-block__form_product flex">
                <img src={scale} alt="scale" />
                <p className="info-block__form_product_name">{data.product_name}</p>
              </div>
              <select className="info-block__form_select" value={value} onChange={this.handleChange}>
                <option value="1 month">1 month</option>
                <option value="1 week">1 week</option>
                <option value="1 year">1 year</option>
              </select>
              <div className="phone-screen">
                <div className="info-block__form_radio">
                  <label htmlFor="reportChoice1">
                    <input
                      type="radio"
                      id="reportChoice1"
                      name="report"
                      value="calibrations"
                      defaultChecked
                      onChange={this.handleRadioChange}
                    />
                    Calibration
                  </label>
                  <label htmlFor="reportChoice2">
                    <input type="radio" id="reportChoice2" name="report" value="measures" onChange={this.handleRadioChange} />
                    Measuring
                  </label>
                  <label htmlFor="reportChoice3">
                    <input type="radio" id="reportChoice3" name="report" value="uses" onChange={this.handleRadioChange} />
                    Using
                  </label>
                </div>
                <input className="info-block__form_button" type="submit" value="Generate report" />
              </div>
            </form>
            <div className="info-block__description">
              <ul className="info-block__description_ul">
                <li className="info-block__description_li">
                  Тип оборудования: <span>{data.type}</span>
                </li>
                <li className="info-block__description_li">
                  Статус: <span>{data.status}</span>
                </li>
                <li className="info-block__description_li">
                  Изготовитель: <span>{data.manufacture}</span>
                </li>
                <li className="info-block__description_li">
                  Модель: <span>{data.model}</span>
                </li>
                <li className="info-block__description_li">
                  Ответственное подразделение (ремонт): <span>{data.responsible_division}</span>
                </li>
                <li className="info-block__description_li">
                  Эксплуатирующее подразделение: <span>{data.operational_division}</span>
                </li>
                <li className="info-block__description_li">
                  МОЛ: <span>{data.mol}</span>
                </li>
                <li className="info-block__description_li">
                  Территория: <span>{data.territory}</span>
                </li>
                <li className="info-block__description_li">
                  Серийный номер: <span>{data.serial}</span>
                </li>
                <li className="info-block__description_li">
                  GUID:{' '}
                  <a className="blue-color" href="#">
                    {data.guid}
                  </a>
                </li>
                <li className="info-block__description_li">
                  Bims ID:{' '}
                  <a className="blue-color" href="#">
                    {' '}
                    {data.bims}
                  </a>
                </li>
                <li className="info-block__description_li">
                  Tam:{' '}
                  <a className="blue-color" href="#">
                    {' '}
                    {data.tam}
                  </a>
                </li>
              </ul>
            </div>
            <div className="info-block__form_product flex phone-show">
              <img src={scale} alt="scale" />
              <p className="info-block__form_product_name">{data.product_name}</p>
            </div>
          </section>
          <Report show={showReport} data={reportData} />
        </>
      );
    }
    if (data === undefined) {
      return <div className="info-block__not-found">Product information not found</div>;
    }
    return <div />;
  }
}

Info.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.object,
};

export default Info;
