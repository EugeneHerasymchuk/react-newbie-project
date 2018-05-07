import React, { Component } from 'react';
import Aux from '../Aux';
import OrderModal from '../../components/OrderModal/OrderModal';

const errorHandler = (WrappedComponent, axios) => {
  return class EH extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      // Set axios interceptors
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.responseInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          alert('Error happened');
          this.setState({ error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    render() {
      return (
        <Aux>
          <OrderModal
            onCancel={() => {
              this.setState({ error: null });
            }}
            title={'Error occured'}
            visible={!!this.state.error}
          >
            {this.state.error && this.state.error.message}
          </OrderModal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default errorHandler;
