import { useState } from "react";


function EditModal({
    transaction,
    updateTransaction
}) {


    const [form, setForm] = useState(transaction);



    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        })

    }



    function save() {

        updateTransaction({

            ...form,

            amount: Number(form.amount)

        })

    }



    return (

        <div className="modal">

            <div className="modal-box">

                <h2>
                    Edit Transaction
                </h2>


                <input

                    name="title"

                    value={form.title}

                    onChange={handleChange}

                />


                <input

                    name="amount"

                    value={form.amount}

                    onChange={handleChange}

                />



                <button onClick={save}>
                    Save
                </button>


            </div>
        </div>

    )


}


export default EditModal;