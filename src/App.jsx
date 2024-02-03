import { useState } from "react";
import Button from "./components/Button";
import FrendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";
import FormAddFriend from "./components/FormAddFriends";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



export default function App() {
  const [showFriend, setShowFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriends, setSelectedFriends] = useState(null);

  function handShowFriend() {
    setShowFriend((show) => !show);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriend(false);
  }

  function handlSelectedFriends(friend) {
    setSelectedFriends(cur => cur?.id === friend?.id ? null : friend)
    setShowFriend(false)
  }

  function handliSplitBill(value) {
    setFriends((friends) => friends.map(friend => friend.id === selectedFriends.id ? {...friend, balance: friend.balance + value} : friend))
    setSelectedFriends(null)
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FrendsList friends={friends} 
              onSelectedFriends={handlSelectedFriends}
              selectedFriends={selectedFriends}
          />
          {showFriend && (
            <FormAddFriend
              onAddFrieands={handleAddFriends}
              
            />
          )}
          <Button onClick={handShowFriend}>
            {showFriend ? "Close" : "Add friend"}
          </Button>
        </div>
        {selectedFriends && <FormSplitBill selectedFriends={selectedFriends} setSelected={setSelectedFriends} onSplitBill = {handliSplitBill}/>}
      </div>
    </>
  );
}








