import Button from "./components/Button/Button";
import Grid from "./components/Grid/Grid";
import GridItem from "./components/Grid/GridItem";
import Dropdown from "./components/Dropdown/Dropdown";
import TestModal from "./components/Modal/TestModal";
import { useState } from "react";


export default function App() {
  const [TestModalOpen, setTestModalOpen] = useState(false);

  return (
    <>
      <section>
        <h2>Button</h2>
        <Button>Click Me</Button>
      </section>

      <section>
        <h2>Modal</h2>
        <Button onClick={() => setTestModalOpen(true)}>Open Modal</Button>
        <TestModal open={TestModalOpen} setOpen={setTestModalOpen} />
      </section>

      <section>
        <h2>Grid</h2>
        <Grid
          rows={3}
          gap={0.5}
        >
          <GridItem rowStart={1} rowEnd={3} colStart={1} colEnd={4}>
            <p>Item 1</p>
          </GridItem>
          <GridItem rowStart={1} rowEnd={1} colStart={4} colEnd={6}>
            <p>Item 2</p>
          </GridItem>
          <GridItem rowStart={1} rowEnd={1} colStart={6} colEnd={8}>
            <p>Item 3</p>
          </GridItem>
          <GridItem rowStart={1} rowEnd={4} colStart={8} colEnd={13}>
            <Button>Item 4</Button>
          </GridItem>
          <GridItem rowStart={4} rowEnd={3} colStart={1} colEnd={8}>
            <Grid
              rows={3}
            >
              <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={13}>
                <p>Item 5</p>
              </GridItem>
              <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={6}>
                <p>Item 6</p>
              </GridItem>
              <GridItem rowStart={2} rowEnd={3} colStart={6} colEnd={13}>
                <p>Item 7</p>
              </GridItem>
              <GridItem rowStart={3} rowEnd={4} colStart={1} colEnd={13}>
                <p>Item 8</p>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </section>

      <section>
        <h2>Dropdown</h2>
        <Dropdown onChange={(value: string) => console.log(value)}>
          <option value="1">Option 1</option>
          <option value="2" selected>Option 2</option>
          <option>Option 3</option>
        </Dropdown>
      </section>
    </>
  )
}
