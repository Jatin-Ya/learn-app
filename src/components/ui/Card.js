import classes from './Card.module.css';
import Box from './Box';

function Card(props) {
    // console.log(props);
    // return <div className={classes.card}>{props.children}</div>
    return <Box >
        <img src={props.children.image} className={classes.avatar}></img>
        <div className={classes.container}>
            {/* <p>Ja</p> */}
            <h4>{props.children.title}</h4>
            <p>{props.children.address}</p>
            <p>{props.children.description}</p>
            <button>Add Favorites</button>
        </div>
    </Box>

}

export default Card;