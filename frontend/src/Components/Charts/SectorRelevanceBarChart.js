import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function SectorRelevanceBarChart({
  data,
  xAccessor,
  yAccessor,
}) {
  const svgRef = useRef();

  useEffect(() => {
    if (data.length > 0) {
      drawBarChart();
    }
  }, [data]);

  const drawBarChart = () => {
    const svg = d3.select(svgRef.current);

    // Clear previous contents
    svg.selectAll("*").remove();

    // Define margins and dimensions
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Group data by sector and calculate average relevance
    const sectorRelevance = d3.rollup(
      data,
      (v) => d3.mean(v, (d) => +d.relevance), // Convert relevance to a number
      (d) => d.sector
    );

    // Convert data to array of objects
    const sectorRelevanceArray = Array.from(
      sectorRelevance,
      ([key, value]) => ({
        sector: key,
        relevance: value,
      })
    );

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(sectorRelevanceArray.map((d) => d.sector))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(sectorRelevanceArray, (d) => d.relevance)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Append bars
    svg
      .selectAll("rect")
      .data(sectorRelevanceArray)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.sector))
      .attr("y", (d) => yScale(d.relevance))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - margin.bottom - yScale(d.relevance))
      .attr("fill", "steelblue");

    // Append x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .attr("x", -10)
      .attr("y", 0)
      .style("text-anchor", "end");

    // Append y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Append y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", margin.left - 40)
      .style("text-anchor", "middle")
      .text("Average Relevance");

    // Append chart title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top - 10)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Average Relevance by Sector");
  };

  return <svg ref={svgRef} width={600} height={400}></svg>;
}
