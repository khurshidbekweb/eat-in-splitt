import { useState } from "react"
import Button from "./Button"

function FormSplitBill({ selectedFriends, onSplitBill }) {
    const [billValue, setBillValue] = useState(null)
    const [expanse, setExpense] = useState(null)
    const paidByValue = billValue ? billValue-expanse : ""
    const [whoIsPay, setWhoIsPay] = useState('user')
  
    function handleBillValue(e){
      e.preventDefault()
      onSplitBill(whoIsPay === "user" ? paidByValue : -paidByValue);    
      
    }
    return (
      <form onSubmit={handleBillValue} className="form-split-bill">
        <h2>Split a bill whith {selectedFriends?.name} </h2>
  
        <label>💰 Bill value</label>
        <input type="number" onChange={e=> setBillValue(Number(e.target.value))}/>
  
        <label>🧍 Your expense </label>
        <input type="number" onChange={e => setExpense(Number(e.target.value)>billValue?expanse:Number(e.target.value))}/>
  
        <label>🧑‍🤝‍🧑 {selectedFriends?.name}`s expanse</label>
        <input type="number" disabled value={paidByValue} />
  
        <label>🤑 Who is paying the bill</label>
        <select defaultValue={whoIsPay} onChange={e => setWhoIsPay(e.target.value)}>
          <option value="user">You</option>
          <option value="friends">{selectedFriends?.name}</option>
        </select>
  
        <Button>Split bill</Button>
      </form>
    );
  }

  export default FormSplitBill