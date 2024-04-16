import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ScatterPlot = ({
  data,
  x_axis_text,
  y_axis_text,
  xAccessor,
  yAccessor,
  xscale,
  yscale,
}) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define margin and dimensions
    const margin = { top: 20, right: 30, bottom: 30, left: 100 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, xAccessor)])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, yAccessor)])
      .range([height - margin.bottom, margin.top]);

    // Create circles
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(xAccessor(d)))
      .attr("cy", (d) => yScale(yAccessor(d)))
      .attr("r", 5)
      .attr("fill", "steelblue");

    // Add x-axis label
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.top + 10) // Adjust position for label
      .style("text-anchor", "middle")
      .text(x_axis_text);

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", 0 - height / 2)
      .attr("y", margin.left - 30) // Adjust position for label
      .style("text-anchor", "middle")
      .text(y_axis_text);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));
  }, [data]);

  return <svg ref={svgRef} width={600} height={400}></svg>;
};

export default ScatterPlot;
