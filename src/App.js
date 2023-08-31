import Button from "./Button";
import { GoBellFill, GoDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5">
          <GoBellFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>See Deal!</Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoDownload />
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
