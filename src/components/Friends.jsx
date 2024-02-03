
import Button from './Button'

function Friends({ friends, onSelectedFriends, selectedFriends }) {
    const isSelect = selectedFriends?.id === friends.id
    return (
      <>
        <li key={friends.id} className={isSelect?"selected":""}>
              <img src={friends.image} alt={friends.name} />
              <h3>{friends.name}</h3>
  
              {friends.balance < 0 && (
                <p className="red">
                  You own {friends.name} {Math.abs(friends.balance)}€
                </p>
              )}
              {friends.balance > 0 && (
                <p className="green">
                  {friends.name} owes you {Math.abs(friends.balance)}€
                </p>
              )}
              {friends.balance === 0 && <p>You and {friends.name} are event</p>}
  
              <Button onClick={()=> onSelectedFriends(friends)}>{isSelect?"Close":"Select"}</Button>
            </li>
      </>
    );
  }

  export default Friends