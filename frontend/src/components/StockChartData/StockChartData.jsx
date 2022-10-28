import {Chart} from "react-google-charts"
import React, { useState, useEffect } from 'react';


const StockChartData = (props) => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
      let tempChartData = props.StockSearch.map(entry => {
          return [entry.oneDay, entry.oneWeek, entry.oneMonth, entry.threeMonth, entry.YTD, entry.year];
      });
      setChartData(tempChartData);
  }, [props.StockSearch])

  return (
    <div>
      <Chart
      chartType="LineChart"
      data={[["1 Day", "1 Week", "1 month, 3 month", "YTD", "1 Year"], ...chartData]}
      width="100%"
      height="400px"
      options={{legend: {position: 'bottom'}}}
      legendToggle
      />
      </div>
    );
};

export default StockChartData;