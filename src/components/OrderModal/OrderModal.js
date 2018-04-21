import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';

const OrderModal = props => {
  const actions = [
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
  onCancel: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  successButtonText: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default OrderModal;
