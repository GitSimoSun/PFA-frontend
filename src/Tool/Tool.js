import React from 'react';
import setNumber from '../Functions/setNumber';

export default function Tool({data}) {

	return (
		<div className="tool">
            <div>          
                <p className="tool-name">{data.name}</p>
                <img src={data.logo} alt="tool icon"/>
                <div className="type">
                    <p>{data.category}</p>
                </div>
            </div>
            <div className="stack-num">
                <p>Stacks</p>
                <p>{setNumber(data.stacks_num)}</p>
            </div>
		</div>
	)
}
