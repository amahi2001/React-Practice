import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(i => i.value);
    const totalMax = Math.max(...dataPointValues); 

  return (
    <div className="chart">
      {props.dataPoints.map((i) => (
        <ChartBar
          key={i.label}
          value={i.value}
          maxValue={totalMax}
          label={i.label}
        />
      ))}
    </div>
  );
};

export default Chart;
