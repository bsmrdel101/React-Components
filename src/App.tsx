import { useRef } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

export default function App() {
  const optionsModalRef = useRef(null);

  return (
    <>
      <section>
        <h2>Button</h2>
        <Button>Click Me</Button>
      </section>

      <section>
        <h2>Modal</h2>
        <Button type="dialog-open" modalRef={optionsModalRef}>Open Modal</Button>
        <Modal
          title="Select an option"
          hideOnOverlayClick={true}
          ref={optionsModalRef}
        >
          <input required />
          <Button type="button">1st option</Button>
          <Button type="button">2nd option</Button>
          <Button type="dialog-close" modalRef={optionsModalRef}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </Modal>
      </section>
    </>
  )
}
