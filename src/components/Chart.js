import GhPolyglot from "gh-polyglot";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ username }) {
  const [langData, setLangData] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const ployglot = new GhPolyglot(username);
    ployglot.userStats((err, stats) => {
      if (err) {
        // console.error("Error:", err);
      }
      // console.log(stats);
      setLangData(stats);
    });
    // console.log(langData);
  }, []);

  useEffect(() => {
    if (langData) {
      const languageName = langData.map((lang) => lang.label);
      const languageValue = langData.map((lang) => lang.value);
      const languageColor = langData.map((lang) => lang.color);

      const chartPassData = {
        labels: languageName,
        datasets: [
          {
            label: languageName,
            data: languageValue,
            backgroundColor: languageColor,
          },
        ],
      };

      setChartData(chartPassData);
    }
  }, [langData]);

  return (
    <div>
      {langData && Object.keys(chartData).length > 0 && (
        <Doughnut data={chartData} />
      )}
    </div>
  );
}
export default Chart;
