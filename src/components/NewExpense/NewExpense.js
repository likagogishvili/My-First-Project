import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const [isEditing, setIsEditing]=useState(false);
    function SaveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    function startEditing(){
        setIsEditing(true)
    }

    function stopEditingHandler(){
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add New Expense</button> }
            {isEditing && 
            <ExpenseForm 
                onSaveExpenseData={SaveExpenseDataHandler} 
                onCancel={stopEditingHandler} 
                /> }
        </div>
    );

}
export default NewExpense;


