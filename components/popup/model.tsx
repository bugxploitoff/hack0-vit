import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}
      </div>
    </div>
  );
};

export default Modal;
