import GhPolyglot from "gh-polyglot";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function Chart({ username }) {
  const [langData, setLangData] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const ployglot = new GhPolyglot(username);
    ployglot.userStats((err, stats) => {
      if (err) {
        console.error("Error:", err);
      }
      console.log(stats);
      setLangData(stats);
    });
    console.log(langData);
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
            label: "",
            data: languageValue,
            backgroundColor: languageColor,
          },
        ],
      };
      setChartData(chartPassData);
    }
  }, [langData]);
  return <>{langData && chartData && <Bar data={chartData} />}</>;
}
export default Chart;
