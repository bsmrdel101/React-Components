import { Children, ReactElement, useEffect, useState } from "react";
import DropdownOption from "./DropdownOption";


interface Props {
  children: ReactElement<typeof DropdownOption> | ReactElement<typeof DropdownOption>[]
  className?: string
  onChange?: (value: string) => void
}

export default function Dropdown({ children, className, onChange }: Props) {
  const dropdownOptions: any = Children.toArray(children);
  const defaultOption = dropdownOptions.find((option: any) => option.props.selected) || dropdownOptions[0];
  const [selectedOption, setSelectedOption] = useState(defaultOption.props);
  const [previouslySelectedOption, setPreviouslySelectedOption] = useState(defaultOption.props.value);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dropdownOptions.forEach((child: any) => {
      if (child.props.defaultOption) {
        setSelectedOption(child.props);
      }
    });

    window.addEventListener('click', (e: any) => {
      if (e.target.closest('.dropdown__option')) return;
      setIsOpen(false);
    });
  }, []);

  const selectOption = (child: any) => {
    setSelectedOption(child);
    setIsOpen(false);
    const value = child.value || child.children;
    if (onChange && previouslySelectedOption !== value) {
      onChange(value);
      setPreviouslySelectedOption(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  
  return (
    <div
      className={`dropdown ${className || ''}`}
      tabIndex={0}
      role="button"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onKeyDown={handleKeyDown}
    >
      {isOpen ?
        <>
          <DropdownOption   
            {...selectedOption}
            className={`${className} dropdown__option--selected`}
            value={selectedOption.value}
            onClick={() => setIsOpen(false)}
          >
            { selectedOption.children }
            <img src={'/images/icons/arrow-up.svg'} alt="" className="dropdown__arrow-icon" draggable="false" width="16rem" />
          </DropdownOption>
      
          <div className="dropdown__list">
            {dropdownOptions.map((child: any, i: number) => {
              const { children, className } = child.props;
              return (
                <DropdownOption
                  {...child.props}
                  className={className}
                  onClick={() => selectOption(child.props)}
                  key={i}
                  role="option"
                  aria-selected={selectedOption.value === child.props.value}
                >
                  { children }
                </DropdownOption>
              );
            })}
          </div>
        </>
      :
        <DropdownOption
          {...selectedOption}
          className={`${className} dropdown__option--selected`}
          value={selectedOption.value}
          onClick={() => setIsOpen(true)}
        >
          { selectedOption.children }
          <img src={'/images/icons/arrow-down.svg'} alt="" className="dropdown__arrow-icon" draggable="false" width="16rem" />
        </DropdownOption>
      }
    </div>
  );
}
