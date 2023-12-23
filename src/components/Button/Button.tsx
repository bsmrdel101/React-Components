import { Ref } from "react"


interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  noHover?: boolean
  noScale?: boolean
  type?: 'button' | 'submit' | 'dialog-open' | 'dialog-close'
  modalRef?: Ref<HTMLDialogElement>
}

export default function Button({ children, className, noHover, noScale, onClick, type, modalRef }: Props) {
  const showModal = () => {
    const modal: HTMLDialogElement = (modalRef as any).current;
    modal.showModal();
  };

  const closeModal = () => {
    const modal: HTMLDialogElement = (modalRef as any).current;
    modal.close();
  };

  const getClassNames = (): string[] => {
    const classes = [];
    if (noHover) classes.push('no-hover');
    if (noScale) classes.push('no-scale');
    return classes;
  };

  const classNames = getClassNames();
  let classValue = classNames.length > 0 ? `button ${classNames.join(' ')}` : 'button';
  if (className) classValue += ` ${className}`;

  const handleClick = () => {
    if (type === 'dialog-open') {
      showModal();
    } else if (type === 'dialog-close') {
      closeModal();
    } else if (onClick) {
      onClick();
    }
  };


  return (
    <>
      <button
        className={classValue}
        onClick={handleClick}
        type={(type !== 'dialog-open' && type !== 'dialog-close') ? type : 'button'}
      >
        { children }
      </button>
    </>
  );
}