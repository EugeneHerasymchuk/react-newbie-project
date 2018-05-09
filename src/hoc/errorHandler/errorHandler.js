import React, { Component } from 'react';

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
      return this.state.error ? (
        <div>Error happened</div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default errorHandler;
