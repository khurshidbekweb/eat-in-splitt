import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFrieands }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
  
    function handlSubmitFrieands(e) {
      e.preventDefault();
      const id = crypto.randomUUID();
      const newFriends = {
        id,
        name,
        image: `${image}?=${id}`,
        balance: 0,
      };
      onAddFrieands(newFriends);
  
      setName("");
      setImage("https://i.pravatar.cc/48");
    }
    return (
      <>
        <form onSubmit={handlSubmitFrieands} className="form-add-friend">
          <label>🧑‍🤝‍🧑 Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <label>🖼️ Image URl</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
  
          <Button>Add</Button>
        </form>
      </>
    )
  }

  export default FormAddFriend