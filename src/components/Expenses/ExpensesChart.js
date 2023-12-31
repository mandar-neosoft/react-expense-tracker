import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // using for... in loop

  //   for (const expense in props.expenses) {
  //     console.log(props.expenses[expense]);
  //     const expenseMonth = props.expenses[expense].date.getMonth(); // starting at 0, so January => 0
  //     chartDataPoints[expenseMonth].value += props.expenses[expense].amount;
  //   }

  // using for...of loop
  for (const expense of props.expenses) {
    // console.log(expense);
    const expenseMonth = expense.date.getMonth(); // starting at 0, so January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  //console.log(chartDataPoints);
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
