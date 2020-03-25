import React from "react";
import Card from "./Card";
import contacts from "./contacts";

function App() {
  const cards = contacts.map(c => (
    <Card name={c.name} img={c.imgURL} tel={c.phone} email={c.email} />
  ));
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {cards}
    </div>
  );
}

export default App;
