import React, { forwardRef, useEffect } from "react"


interface Props {
  children: React.ReactNode
  title?: string
  open?: boolean
  hideOnOverlayClick?: boolean
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ children, title, open, hideOnOverlayClick }, ref) => {
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
      <form method="dialog" className="modal">
        <h3 className="modal__title">{ title }</h3>
        <div className="modal__content">
          { children }
        </div>
      </form>
    </dialog>
  )
});

export default Modal;
