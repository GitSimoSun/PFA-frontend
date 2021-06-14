import React, { useState, useEffect } from 'react';
import Tool from './Tool';
import {ReactComponent as Chevron} from '../Icons/leftChevron.svg';
import { useHistory } from 'react-router';


export default function AllItems({category}) {
	let history = useHistory();
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const [show, setShow] = useState(true)
    useEffect(
        () => {
            fetch(`/api/tools&category=${category}`)
            .then(res => res.json())
            .then(res => setData([...res]))
            .catch(console.log());
        }
    , [category])

    const handleClick = () => {
        fetch(`/api/tools&category=${category}&index=${25*index}`)
        .then(res => res.json())
        .then(res => {
            if (!!res.length) {
                setData(prevData => [...prevData, ...res])
                setIndex(prevIndex => prevIndex + 1);
            }else {
                setShow(false);
            }
        })
        .catch(console.log())
    } 
    return (
        <div>
            {
                !!data.length?
                <div className="all-items">
                    <div className="back" onClick={history.goBack}> <Chevron /><p>{category} Tools and Services</p></div>
                    <div className="all-items-items">
                        {data.map(t => <Tool data={t} />)}
                    </div>
                    {show && <div className="show-more" onClick={handleClick}><p>Show More</p></div>}
                </div>
                : <div onClick={() => console.log(data)}>loding...</div>
            }
        </div>

	)
}
