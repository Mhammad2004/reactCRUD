import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import initialData from "./data/initialData";
import useLocalStorage from "./hooks/useLocalStorage";
import EditModal from "./components/EditModal";

function App() {

  const [transactions, setTransactions] =
    useLocalStorage(
      "transactions",
      initialData
    );

  const [editing, setEditing] = useState(null);


  function editTransaction(transaction) {

    setEditing(transaction);

  }

  function addTransaction(transaction) {

    setTransactions([
      ...transactions,
      transaction
    ]);

  }



  function deleteTransaction(id) {

    setTransactions(
      transactions.filter(
        item => item.id !== id
      )
    )

  }

  function updateTransaction(updatedTransaction) {


    setTransactions(

      transactions.map(item =>

        item.id === updatedTransaction.id ? updatedTransaction : item

      )

    )


    setEditing(null);


  }

  return (

    <div>

      <Navbar />

      <Dashboard
        transactions={transactions}
      />


      <TransactionForm
        addTransaction={addTransaction}
      />


      <TransactionList

        transactions={transactions}

        deleteTransaction={deleteTransaction}


      />
      {
        editing &&

        <EditModal

          transaction={editing}

          updateTransaction={updateTransaction}

        />

      }

    </div>

  )

}


export default App;