import React from 'react';
import './Modal.module.scss';

interface ModalProps {
  //This is the interface for the Modal component
  children?: any;
  title?: string;
  show?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
