import { generateClasses, parseClasses } from "../../scripts/tools/utils";

interface Props extends ButtonHTML {
  children: any
  className?: string
  variant?: ('small' | 'x-small' | 'large' | 'hover-move' | 'search' | 'X' | 'circle' | 'center' | 'plain' | 'save' | 'blue' | 'green' | 'red-color' | 'link' | 'fit' | 'danger')[]
  type?: 'submit' | 'reset' | 'button'
}


export default function Button({ children, className = '', variant = [], type, ...props }: Props) {
  const classes = generateClasses(className, variant, 'button');

  return (
    <button
      type={type}
      {...parseClasses(classes)}
      {...props}
    >
      { children }
    </button>
  );
}
