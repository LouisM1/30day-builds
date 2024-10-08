import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const BubbleSortVisualizer = () => {
  const svgRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1));
  }, []);

  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const chart = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .range([0, width - margin.left - margin.right])
      .padding(0.1)
      .domain(data.map((_, i) => i));

    const y = d3.scaleLinear()
      .range([height - margin.top - margin.bottom, 0])
      .domain([0, d3.max(data)]);

    chart.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d))
      .attr("width", x.bandwidth())
      .attr("height", d => height - margin.top - margin.bottom - y(d));
  }, [data]);

  const bubbleSort = async () => {
    let newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      for (let j = 0; j < newData.length - i - 1; j++) {
        if (newData[j] > newData[j + 1]) {
          await swap(j, j + 1, newData);
        }
      }
    }
  };

  const swap = async (i, j, arr) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    setData([...arr]);

    const svg = d3.select(svgRef.current);
    svg.selectAll(".bar")
      .data(arr)
      .transition()
      .duration(50)
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d))
      .attr("height", d => height - margin.top - margin.bottom - y(d));

    svg.selectAll(".bar")
      .classed("swapping", (d, index) => index === i || index === j);

    await new Promise(resolve => setTimeout(resolve, 100));

    svg.selectAll(".bar").classed("swapping", false);
  };

  return (
    <div>
      <svg ref={svgRef} width="600" height="400"></svg>
      <button onClick={bubbleSort}>Start Sort</button>
    </div>
  );
};

export default BubbleSortVisualizer;