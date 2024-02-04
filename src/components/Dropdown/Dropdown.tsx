import { Children, useEffect, useState } from "react";
import DropdownOption from "./DropdownOption";


interface Props {
  children: React.ReactElement<typeof DropdownOption> | React.ReactElement<typeof DropdownOption>[]
  className?: string
  onChange?: (value: string) => void
}

export default function Dropdown({ children, className, onChange }: Props) {
  const dropdownOptions: any = Children.toArray(children);
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0].props.value);
  const [previouslySelectedOption, setPreviouslySelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dropdownOptions.forEach((child: any) => {
      if (child.props.defaultOption) {
        setSelectedOption(child.props.value);
      }
    });

    window.addEventListener('click', (e: any) => {
      if (e.target.closest('.dropdown__option')) return;
      setIsOpen(false);
    });
  }, []);

  const selectOption = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    if (onChange && previouslySelectedOption !== value) {
      onChange(value);
      setPreviouslySelectedOption(value);
    }
  };

  const getSortedDropdownOptions = dropdownOptions.sort((a: any, b: any) => 
    a.props.value === selectedOption ? -1 : b.props.value === selectedOption ? 1 : 0
  );

  
  return (
    <div className={`dropdown ${className || ''}`}>
      {isOpen ?
        dropdownOptions.map((child: any, i: number) => {
          const { value, children } = child.props;

          return (
            <DropdownOption
              {...child.props}
              className={`${value === selectedOption ? 'dropdown__option--selected' : ''}`}
              onClick={() => selectOption(value)}
              key={i}
            >
              { children }
            </DropdownOption>
          );
        })
      :
        getSortedDropdownOptions.map((child: any) => {
          const { value, children, className } = child.props;

          if (value === selectedOption) {
            return (
              <DropdownOption
                {...child.props}
                className={`${className} dropdown__option--selected`}
                value={value}
                onClick={() => setIsOpen(true)}
                key={value}
              >
                { children }
              </DropdownOption>
            );
          }
        })
      }
    </div>
  );
}
