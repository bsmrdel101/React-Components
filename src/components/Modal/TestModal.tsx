import { useState } from "react";
import Button from "../Button/Button";
import Modal from "./Modal";

interface Props {
  open: boolean
  setOpen: (value: boolean) => void
}


export default function TestModal({ open, setOpen }: Props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput('');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setInput('');
  };


  return (
    <Modal
      title="Select an option"
      open={open}
      onClose={handleClose}
      width="20rem"
      closeOnOutsideClick
    >
      <form style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }} onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <Button type="button">1st option</Button>
        <Button type="button">2nd option</Button>

        <div className="modal__footer">
          <Button type="button" onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Modal>
  )
}
