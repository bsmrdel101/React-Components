import { generateClasses, parseClasses } from "../../scripts/tools/utils";
import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";

interface Props {
  children: React.ReactNode
  className?: string
  variant?: ('default')[]
  title?: string
  closeOnOutsideClick?: boolean
  exitWithEsc?: boolean
  showCloseBtn?: boolean
  width?: string
  height?: string
  maxHeight?: string
  open?: boolean
  setOpen?: (open: boolean) => void
  onClose?: () => void
}


export default function Modal({ children, className, variant, title, closeOnOutsideClick, exitWithEsc = true, showCloseBtn = true, width, height, maxHeight, open, setOpen, onClose, ...props }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const classes = generateClasses(className, variant, 'modal');

  useEffect(() => {
    bindEventListeners();
    ref.current.focus();
  }, []);

  const bindEventListeners = () => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target === (ref as any).current && closeOnOutsideClick) {
        closeModal();
      }
    };
  
    if (closeOnOutsideClick) {
      window.addEventListener('click', handleOutsideClick);
      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  };

  const closeModal = () => {
    if (setOpen) {
      setOpen(false);
    } else {
      onClose();
    }
  };
    

  return (
    <div className="modal-container">
      <dialog
        ref={ref}
        open={open}
        style={{ width, height, maxHeight }}
        onKeyDown={(e) => (exitWithEsc && e.key === 'Escape') && closeModal()}
        {...parseClasses(classes)}
        {...props}
      >
        <h3 className="modal__title">{ title }</h3>
        { showCloseBtn && <Button variant={["X"]} onClick={closeModal}>X</Button> }
        <div className="modal__content" style={{ maxHeight: maxHeight }}>
          { children }
        </div>
      </dialog>
    </div>
  );
}
