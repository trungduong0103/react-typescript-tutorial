import { ReactElement, ReactNode, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

type rowWithTwoColumnsProps = {
  firstColumn: ReactNode;
  secondColumn: ReactNode;
};

const RowWithTwoColumns = ({
  firstColumn,
  secondColumn,
}: rowWithTwoColumnsProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 2 }}>{firstColumn}</div>

      <div style={{ flex: 2, textAlign: "center" }}>{secondColumn}</div>
    </div>
  );
};

function JackHerrington() {
  const codeString = `
  const Heading = ({ title }: { title: string }) => {
    return <h1>{title}</h1>;
  };

  <Heading title="Title as string" />
  `;

  const codeString1 = `
    const HeadingWithContent = ({
      children,
    }: 
    {
      children: ReactNode;
    }): ReactElement | null => {
      return <h1>{children}</h1>;
    };

    <HeadingWithContent>
      <i>Title as ReactNode</i>
    </HeadingWithContent>
  `;

  const codeString2 = `
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

  <Container>Container with strong heading!</Container>
  `;

  const codeString3 = `
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

  <TextWithNumber
    header={(num) => <div>Optional header number is {num}</div>}
  >
    {(num) => <div>Today's number is {num}</div>}
  </TextWithNumber>
  `;

  const codeString4 = `
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

  <List items={["Trung", "Tram", 1]} render={(item) => <div>{item}</div>} />
`;

  return (
    <>
      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {codeString}
      </SyntaxHighlighter>
      <Heading title="Title as string" />

      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {codeString1}
      </SyntaxHighlighter>
      <HeadingWithContent>
        <i>Title as ReactNode</i>
      </HeadingWithContent>

      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {codeString2}
      </SyntaxHighlighter>
      <Container>Container with strong heading!</Container>
      <br />

      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {codeString3}
      </SyntaxHighlighter>

      <TextWithNumber
        header={(num) => <div>Optional header number is {num}</div>}
      >
        {(num) => <div>Today's number is {num}</div>}
      </TextWithNumber>

      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {codeString4}
      </SyntaxHighlighter>
      <List items={["Trung", "Tram", 1]} render={(item) => <div>{item}</div>} />
    </>
  );
}

export default JackHerrington;
