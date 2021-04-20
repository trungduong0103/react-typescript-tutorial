import React, { ReactElement, ReactNode } from "react";

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

// defaultProps
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

function App() {
  return (
    <>
      <Heading title="Title as string" />
      <HeadingWithContent>
        <i>Title as ReactNode</i>
      </HeadingWithContent>
      <Container>Hi!</Container>
    </>
  );
}

export default App;
