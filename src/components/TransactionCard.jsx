function TransactionCard({
    transaction,
    deleteTransaction,
    editTransaction
}) {


    return (

        <div transaction-card>


            <h3>
                {transaction.title}
            </h3>


            <p>
                Category: {transaction.category}
            </p>


            <p>
                Date: {transaction.date}
            </p>


            <p className={transaction.type}>

                {
                    transaction.type === "income"
                        ?
                        "+"
                        :
                        "-"
                }

                ${transaction.amount}

            </p>



            <button
                onClick={() => editTransaction(transaction)}
            >
                Edit
            </button>



            <button
                onClick={() => deleteTransaction(transaction.id)}
            >
                Delete
            </button>



            <hr />


        </div>

    )


}


export default TransactionCard;