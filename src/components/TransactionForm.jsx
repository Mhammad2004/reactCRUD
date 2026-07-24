import {useState} from "react";


function TransactionForm({addTransaction}){


const [form,setForm]=useState({

title:"",
amount:"",
type:"expense",
category:""

})


function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

})

}



function submit(e){

e.preventDefault();


addTransaction({

...form,

id:Date.now(),

amount:Number(form.amount),

date:new Date().toISOString()

})


setForm({

title:"",
amount:"",
type:"expense",
category:""

})


}



return(

<form onSubmit={submit}>


<input
name="title"
placeholder="Title"
value={form.title}
onChange={handleChange}
/>


<input

name="amount"

placeholder="Amount"

value={form.amount}

onChange={handleChange}

/>



<select

name="type"

value={form.type}

onChange={handleChange}

>

<option value="expense">
Expense
</option>


<option value="income">
Income
</option>


</select>



<input

name="category"

placeholder="Category"

value={form.category}

onChange={handleChange}

/>


<button>
Add
</button>


</form>

)


}


export default TransactionForm;