import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

const WordCloud = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data.length > 0) {
      drawWordCloud();
    }
  }, [data]);

  const drawWordCloud = () => {
    const svg = d3.select(svgRef.current);

    // Clear previous contents
    svg.selectAll("*").remove();

    // Extract topics and their frequency
    const topics = data.map((d) => d.topic);
    const topicCounts = d3.rollup(
      topics,
      (v) => v.length,
      (d) => d
    );

    // Convert topic counts to array of objects
    const words = Array.from(topicCounts, ([topic, count]) => ({
      text: topic,
      size: count,
    }));

    // Define layout for the word cloud
    const layout = cloud()
      .size([600, 400])
      .words(words)
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90) // rotate words randomly
      .fontSize((d) => 10 + Math.log2(d.size) * 10) // adjust font size based on frequency
      .on("end", draw);

    // Generate word cloud layout
    layout.start();

    function draw(words) {
      svg
        .append("g")
        .attr("transform", "translate(300,200)")
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => d.size + "px")
        .style("fill", "steelblue")
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d) => d.text);
    }
  };

  return <svg ref={svgRef} width={600} height={400}></svg>;
};

export default WordCloud;
