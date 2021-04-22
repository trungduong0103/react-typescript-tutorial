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

const TextField: React.FunctionComponent<TextFieldProps> = ({}) => {
  return (
    <>
      <input />
    </>
  );
};

export default TextField;
