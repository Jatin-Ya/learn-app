import classes from './Box.module.css';
function Box(props) {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Box;