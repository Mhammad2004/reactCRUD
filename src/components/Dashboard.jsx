function Dashboard({ transactions }) {


    const income =
        transactions
            .filter(t => t.type === "income")
            .reduce(
                (total, t) => total + t.amount,
                0
            );



    const expense =
        transactions
            .filter(t => t.type === "expense")
            .reduce(
                (total, t) => total + t.amount,
                0
            );



    return (

        <div className="dashboard">

            <h2>
                Balance: ${income - expense}
            </h2>


            <h3>
                Income: ${income}
            </h3>


            <h3>
                Expense: ${expense}
            </h3>


        </div>

    )

}


export default Dashboard;