import React from "react";
import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className='App'>
      <header>
        <h1>React Skeleton Example</h1>
      </header>
      <main className='content'>
        <Articles />
        <User />
      </main>
    </div>
  );
}

export default App;
