import { FormsApp } from "./components/FormsApp";
import { FetchApp } from "./components/FetchApp";
import { CounterApp } from "./components/CounterApp";

export const HooksApp = () => {
  return (
      <>
      <h1>React Hooks</h1>
      <button type="button" className="btn btn-danger">Danger</button>
      <hr/>
      <FetchApp />
      <CounterApp />
      <FormsApp />
      </>
  );
}