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
      axios.interceptors.response.use(
        res => res,
        error => {
          console.log('dd', error);
          this.setState({ error: error });
        }
      );
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
