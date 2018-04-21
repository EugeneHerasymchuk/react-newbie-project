import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, Button } from 'element-react';
import 'element-theme-default';

const OrderModal = props => {
  return (
    <Dialog
      title={props.title}
      size="tiny"
      visible={props.visible}
      onCancel={props.onCancel}
      lockScroll={false}
    >
      <Dialog.Body>{props.children}</Dialog.Body>
      <Dialog.Footer className="dialog-footer">
        <Button onClick={props.onCancel}>{props.cancelButtonText}</Button>
        <Button type="primary" onClick={props.onSuccess}>
          {props.successButtonText}{' '}
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

OrderModal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
  cancelButtonText: PropTypes.string,
  successButtonText: PropTypes.string,
  children: PropTypes.any
};

export default OrderModal;
