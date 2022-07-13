import Papa from 'papaparse'
import { useState, useEffect } from "react";
import Scatter from "./components/Scatter";
import Bar from "./components/Bar"
const App: React.FC = () => {
  // Specify the data for the chart
  const [rows, setRows] = useState([]);
 
  useEffect(() => {
    async function getData() {
      try {

        const response: any = await fetch('/winedata.csv')// Fetching data from csv file
        const reader: any = response.body.getReader()
        const result = await reader.read() // raw array
        const decoder = new TextDecoder('utf-8')
        const csv = decoder.decode(result.value) // the csv text
        const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
        const rows: any = results.data // array of objects
        console.log("Rows type", typeof (rows));
        setRows(rows)

      }
      catch (error) {
        throw error;
      }



    }
    getData()
  }, [])



  return (
    <div className="App">
      <Scatter rows={rows} />
      <Bar rows={rows} />
    </div>
  );
}

export default App;
