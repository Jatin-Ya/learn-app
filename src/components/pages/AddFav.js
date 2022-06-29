
import { react } from 'react';
import Box from '../ui/Box';
import classes from './AddFav.module.css';
import {useHistory} from 'react-router-dom';
import { useRef} from 'react';
import { useState } from 'react';
import DUMMY_DATA from './SampleData';
import { AddItm } from './EveryOne';
// import setData from './SampleData';



function AddFav() {
    
    const history = useHistory();
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();

    function onAdd(NewData){
        fetch('https://learn-app-backend-default-rtdb.asia-southeast1.firebasedatabase.app/members.json',{
            method : 'POST',
            body : JSON.stringify(NewData),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(()=>{
            history.replace('/')
        })
    }

    function formSubmitHandler(event,props) {
        event.preventDefault()
        
        const NewData= {
             //id : 'A1',
            title : titleInput.current.value,
            image : imageInput.current.value,
            address : addressInput.current.value,
            description : descriptionInput.current.value
        }

        //AddItm(NewData);

        onAdd(NewData);

        history.push('/')
        

        // DUMMY_DATA= DUMMY_DATA.concat(NewData);

        //setData(DUMMY_DATA);
        // console.log({
        //     id : 'A1',
        //     title : titleInput.current.value,
        //     image : imageInput.current.value,
        //     address : addressInput.current.value,
        //     description : descriptionInput.current.value
        // })

    
    }
    return (
        <div>
            <h1>Add Someone</h1>
            <Box>

                <form className={classes.inpu} onSubmit={formSubmitHandler}>
                    <div className={classes.inpu}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' required id='title' ref={titleInput} />
                    </div>
                    <div className={classes.inpu}>
                        <label htmlFor='image'>Image</label>
                        <input type='url'  id='image' ref={imageInput} />
                    </div>
                    <div className={classes.inpu}>
                        <label htmlFor='address'>Address</label>
                        <input type='text' required id='address' ref={addressInput} />
                    </div>
                    <div className={classes.inpu}>
                        <label htmlFor='description'>Description</label>
                        <input type='text' required id='description' ref={descriptionInput} />
                    </div>
                    <button >Submit</button>
                </form>
            </Box>
        </div>

    );
}


export default AddFav;