import TransactionCard from "./TransactionCard";


function TransactionList({transactions, deleteTransaction, editTransaction}) {


    return (

        <div className="transactions">

            <h2>
                Transactions
            </h2>


            {
                transactions.length === 0 ?

                <p>
                    No transactions found
                </p>

                :

                transactions.map(transaction => (

                    <TransactionCard

                        key={transaction.id}

                        transaction={transaction}

                        deleteTransaction={deleteTransaction}

                        editTransaction={editTransaction}

                    />

                ))

            }


        </div>

    )

}


export default TransactionList;