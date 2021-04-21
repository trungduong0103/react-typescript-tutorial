import React, { ReactElement, ReactNode, useState } from "react";

// conventional props
const Heading = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

const HeadingWithContent = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  return <h1>{children}</h1>;
};

// default props
const defaultContainerProps = {
  heading: <strong>Strong Heading</strong>,
};

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

const Container = ({
  heading,
  children,
}: ContainerProps): ReactElement | null => {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

Container.defaultProps = defaultContainerProps;

// functional props
type textWithNumberProps = {
  children: (num: number) => ReactNode;
  header?: (num: number) => ReactNode;
};
const TextWithNumber = ({ header, children }: textWithNumberProps) => {
  const [state, setState] = useState<number>(1);
  return (
    <>
      {header && <h2>{header(state)}</h2>}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {children(state)}
        <div style={{ marginLeft: "10px" }}>
          <button onClick={() => setState(state + 1)}>Increment</button>
        </div>
      </div>
    </>
  );
};

// list
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, key) => (
        <li key={key}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      <Heading title="Title as string" />
      <HeadingWithContent>
        <i>Title as ReactNode</i>
      </HeadingWithContent>
      <Container>Container with strong heading!</Container>
      <br />
      <TextWithNumber
        header={(num) => <div>Optional header number is {num}</div>}
      >
        {(num) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List items={["Trung", "Tram", 1]} render={(item) => <div>{item}</div>} />
    </>
  );
}

export default App;
