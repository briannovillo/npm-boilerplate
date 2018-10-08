import React, {Component} from "react";
import PropTypes from "prop-types";
import {MobileMAMFutbol} from "../components/MobileMAMFutbol";
import {DesktopMAMFutbol} from "../components/DesktopMAMFutbol";
import {getData} from "../helpers/getData";

export default class MAMFutbolContainer extends Component {

  state = {
    status: '',
    local: '',
    localGoals: '',
    visitor: '',
    visitorGoals: '',
    incidents: [],
    loading: true,
    hasError: false
  };

  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
    mamId: PropTypes.string.isRequired,
    intervalTime: PropTypes.number.isRequired,
    host: PropTypes.string.isRequired,
    getData: PropTypes.func
  };

  static defaultProps = {
    intervalTime: 60000,
    host: 'http://mam-api.tn.com.ar/mam/',
    getData: getData
  };

  componentDidMount() {
    this.executeGetData();
    // Call service every minute
    this.intervalCall = setInterval(() => this.executeGetData(), this.props.intervalTime);
  }

  async executeGetData () {
    try {
      const {data, finish} = await this.props.getData(this.props.host, this.props.mamId);

      this.setState({
        status: data.match.state,
        local: data.local.name,
        localGoals: data.local.goal !== '' ? data.local.goal : 0,
        visitor: data.visitor.name,
        visitorGoals: data.visitor.goal !== '' ? data.visitor.goal : 0,
        incidents: data.incidents,
        loading: false,
        hasError: false
      });

      // Break the interval
      if (finish) {
        clearTimeout(this.intervalCall);
      }
    } catch(e) {
      this.setState({hasError: true});
    }
  }

  render() {
    if (this.state.hasError) return <div style={{display: 'none'}}>Ocurrió un error al obtener los datos</div>;

    return (
      this.props.isMobile ? <MobileMAMFutbol {...this.state} /> : <DesktopMAMFutbol {...this.state} />
    )
  }
}
