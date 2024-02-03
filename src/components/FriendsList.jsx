import Friends from "./Friends";


function FrendsList({ friends, onSelectedFriends, selectedFriends }) {
    return (
      <ul className="">
        {friends.map(friend => {
          return <Friends key={friend.id} friends={friend} onSelectedFriends={onSelectedFriends} 
                                selectedFriends={selectedFriends}
                  />
        })}
      </ul>
    );
  }

export default FrendsList