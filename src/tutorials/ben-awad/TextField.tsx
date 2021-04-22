import { useRef, useState } from "react";

interface Person {
  firstname: string;
  lastname: string;
}

// add ? after prop name to make it optional
interface TextFieldProps {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => void;
  person: Person;
}

const TextField: React.FunctionComponent<TextFieldProps> = () => {
  interface TextNode {
    text: string;
  }

  const [count, setCount] = useState<number | string | undefined | null>(5);

  // setCount("Hello");
  // setCount(10);
  // setCount(undefined);
  // setCount(null);

  const [object, setObject] = useState<TextNode>();

  // setObject(undefined);
  // setObject({ text: "Yo!" });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} />
    </div>
  );
};

export default TextField;
