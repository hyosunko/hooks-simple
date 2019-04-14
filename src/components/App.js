import React, { useState } from "react";
import ResourcesList from "./ResourcesList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourcesList resource={resource} />
    </div>
  );
};

export default App;
