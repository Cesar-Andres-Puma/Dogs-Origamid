import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import * as S from "./style";

export const UserStatsGragphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    if (data.length) {
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
    }

    setGraph(graphData);
  }, [data]);
  return (
    <S.ContainerGraph className="animeLeft">
      <S.graphItem className="total">
        <p>Acessos: {total}</p>
      </S.graphItem>
      <S.graphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </S.graphItem>
      <S.graphItem>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </S.graphItem>
    </S.ContainerGraph>
  );
};
