import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Cell,
	LabelList,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip
  } from "recharts";
import nearest25 from '../Functions/nearest25';

const colors = ["#135100", "#ED561B", "#DDDF00", "#006D7E", "#1B9C29", "#D07035", "#ACA01A", "#29D092", "#2977D0", "#0D233A"]

export default function Graph({data, plus10k}) {
    const max = Math.max(...data.map(d => d.stacks))
    console.log(max)
    console.log(plus10k)
    return(
        <div className="graph">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} fontSize={12} margin={{ top: 20, right: 80, bottom: 20, left: 20, }}>
                    <XAxis dataKey="name" label={{ value: 'Libraries', position: 'insideBottom', offset: -20, fontSize:14 }} />
                    <YAxis axisLine={false} domain={[0, nearest25(max)]} label={{ value: 'Stacks', angle: -90, position: 'insideLeft', fontSize:14 }} unit={plus10k&&"K"}/>
                    <CartesianGrid strokeDashArray="4" vertical={false} />
                    <Tooltip wrapperStyle={{textAlign: "center"}} labelStyle={{fontSize: 18}} contentStyle={{fontSize: 16}} />
                    <Bar dataKey="stacks" fill="#8884d8" maxBarSize={25} isAnimationActive={false} >
                        <LabelList dataKey="stacks" position="top" fontWeight="bold" fill="#000" />					
                        {	
                            data.map((entry,i) => <Cell key={i} fill={colors[i]} />)
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}