import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';

const OrderModal = props => {
  const actions = props.onCancel &&
    props.onSuccess && [
      { label: props.cancelButtonText, onClick: props.onCancel },
      { label: props.successButtonText, onClick: props.onSuccess }
    ];

  return (
    <Dialog
      actions={actions}
      active={props.visible}
      onEscKeyDown={props.onCancel}
      onOverlayClick={props.onCancel}
      title={props.title}
    >
      {props.children}
    </Dialog>
  );
};

OrderModal.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
  cancelButtonText: PropTypes.string,
  successButtonText: PropTypes.string,
  children: PropTypes.any
};

export default OrderModal;
