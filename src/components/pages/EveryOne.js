
import DUMMY_DATA from "../pages/SampleData";
import Card from "../ui/Card";
import { useState } from 'react';
import { useEffect } from 'react';

function exp() { }



function EveryOne() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);
    //const [dataTest,setDataTest]= useState(DUMMY_DATA);



    // function AddItm(NewD){
    //     setDataTest(dataTest.concat(NewD))
    // }





    useEffect(() => {
        fetch('https://learn-app-backend-default-rtdb.asia-southeast1.firebasedatabase.app/members.json').then(
            (response) => { return response.json(); }
        ).then(
            (data) => {
                const NewData = []

                for (const key in data) {
                    const addData = {
                        id: key,
                        ...data[key]
                    }
                    NewData.push(addData)
                }
                setIsLoading(false);
                setLoadedData(NewData);
            }
        )
    }, [])

    if (isLoading) {
        return <section><div>...Loading</div></section>

    }



    return (
        <div>
            <h1>EveryOne</h1>
            <section>
                <ul>
                    {loadedData.map((Data) => {
                        return (
                            <li key={Data.id}>
                                <Card>{Data}</Card>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )

}


export default EveryOne;