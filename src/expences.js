import ExpenseItems from "./ExpenseItems"

function Expences(props) {
    return(
        <div className="expenses">
            <ExpenseItems
                title={props.data[0].title}
                amount={props.data[0].amount}
                date={props.data[0].date}
            />
            <ExpenseItems
                title={props.data[1].title}
                amount={props.data[1].amount}
                date={props.data[1].date}
            />
            <ExpenseItems
                title={props.data[2].title}
                amount={props.data[2].amount}
                date={props.data[2].date}
            />

        </div>
    )
}

export default Expences;