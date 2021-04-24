// props
import Counter from "./Counter";
import TextField from "./TextField";

const BenAwad = () => {
  return (
    <>
      <TextField
        person={{ firstname: "Trung", lastname: "Duong" }}
        text="Hello"
        handleChange={() => {}}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </>
  );
};

export default BenAwad;
