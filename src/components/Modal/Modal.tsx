import React, { FormEvent, forwardRef, useEffect } from "react"


interface Props {
  children: React.ReactNode
  className?: string
  title?: string
  open?: boolean
  hideOnOverlayClick?: boolean
  onSubmit?: (e: FormEvent) => void
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ children, className, title, open, hideOnOverlayClick, onSubmit }, ref) => {
  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === (ref as any).current && hideOnOverlayClick) {        
          (ref as any).current.close();
      }
    };

    (ref as any).current.addEventListener('click', handleBackdropClick);
    return () => {
      (ref as any).current.removeEventListener('click', handleBackdropClick);
    };
  }, []);
    

  return (
    <dialog open={open} ref={ref}>
      <form method="dialog" className={`modal ${className || ''}`} onSubmit={(e: FormEvent) => onSubmit && onSubmit(e)}>
        <h3 className="modal__title">{ title }</h3>
        <div className="modal__content">
          { children }
        </div>
      </form>
    </dialog>
  )
});

export default Modal;
