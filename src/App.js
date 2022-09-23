import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hola mundo");
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum ?</h3>
      <form className="lore-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ut
          necessitatibus soluta maiores animi quaerat hic quas nostrum vero
          nesciunt eaque amet, asperiores culpa odit iusto. Quas numquam cum
          eaque.
        </p>
      </article>
    </section>
  );
}

export default App;
