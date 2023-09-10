import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div>
      <Link to={"/accordion"}>Go to Accordion</Link>
      <Link to={"/dropdown"}>Go to Dropdown</Link>
      <Link to={"/button"}>Go to Button</Link>
      <div>
        <Route path={"/dropdown"}>
          <DropdownPage />
        </Route>
        <Route path={"/accordion"}>
          <AccordionPage />
        </Route>
        <Route path={"/button"}>
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
