import {Chart} from "react-google-charts"
import React, { useState, useEffect } from 'react';


const StockChartData = (props) => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
      let tempChartData = props.stockSearch.map(entry => {
          return [entry.date, entry.weight];
      });
      setChartData(tempChartData);
  }, [props.parentEntries])

  return (
      <Chart
      chartType="LineChart"
      data={[["Date", "Weight"], ...chartData]}
      width="100%"
      height="400px"
      options={{legend: {position: 'bottom'}}}
      legendToggle
      />
    );
};

export default StockChartData;