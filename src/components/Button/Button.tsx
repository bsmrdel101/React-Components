import { Ref } from "react"


interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  noHover?: boolean
  noScale?: boolean
  type?: 'button' | 'submit' | 'dialog'
  modalRef?: Ref<HTMLDialogElement>
}

export default function Button({ children, className, noHover, noScale, onClick, type, modalRef }: Props) {
  const showModal = () => {
    const modal: HTMLDialogElement = (modalRef as any).current;
    modal.showModal();
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
    if (type === 'dialog') {
      showModal();
    } else if (onClick) {
      onClick();
    }
  };


  return (
    <>
      <button
        className={classValue}
        onClick={handleClick}
        type={type !== 'dialog' ? type : 'button'}
      >
        { children }
      </button>
    </>
  );
}