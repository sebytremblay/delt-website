import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibilty] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibilty(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibilty(true)}>My button</Button>
    </div>
  );
}

export default App;
