import React , { useEffect, useState }from 'react';
import Tool from './Tool';
import {ReactComponent as Chevron} from '../Icons/rightChevron.svg';
import { useHistory } from 'react-router';
import Graph from './Graph';


export default function Libraries({c, clink}) {
	let history = useHistory();
	const [data, setData] = useState([]);
	const [graphData, setGraphData] = useState([]);
	const [plus10k, setPlus10k] = useState(false);
	useEffect(
        () => {
            fetch(`/api/tools&category=${c}`)
            .then(res => res.json())
            .then(res => setData([...res]))
            .catch(console.log());
        }
    , [c])
	
	useEffect(
		() => {
			let t = data.slice(0,10).every(t => t.stacks_num  >= 1000);
			setPlus10k(t);
			setGraphData(data.slice(0,10).map(
				d => {
					return { name: d.name,
							stacks: t? d.stacks_num/1000 : d.stacks_num,
						}
				}
			))
		}
	, [data])


	return (
		<div className="testtest">
			<p>Top {c} Tools and Services Ranked By Stacks</p>
				<Graph data={graphData} plus10k={plus10k}  />
				<div className="explore" onClick={() => history.push(`/tools/app-data/${clink}/all`)}><p>Explore All</p> <Chevron /></div>
				<div className="items">
					{data.slice(0,4).map(t => <Tool data={t}/>)}
				</div>
		</div>
	)
}
