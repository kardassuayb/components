import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const SET_VALUE_TO_ADD = "change-value";
const ADD_VALUE = "add-value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
        count: state.count + state.valueToAdd,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0; // e.target.value değeri string döndürdüğü için bu formülle number'a çevirdik. Ayrıca bir değer girilmediyse "0" değerini alsın diye "||" kullandık.
    // setValueToAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE,
    });
  };

  console.log(state);
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
