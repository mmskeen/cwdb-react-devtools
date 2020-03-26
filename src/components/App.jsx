import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function App() {
  const cards = contacts.map(c => (
    <Card name={c.name} img={c.imgURL} tel={c.phone} email={c.email} />
  ));
  return (
    <div>
      <Avatar img="https://mmskeen.github.io/images/profile.jpeg" />
      <h1 className="heading">My Contacts</h1>
      {cards}
    </div>
  );
}

export default App;
