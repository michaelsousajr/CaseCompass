import './App.css';
import { CSVLink } from "react-csv";

const headers = [

    { label: "Total Medical Expenses", key: "totalMedicalExpenses" },
    { label: "Medical Mulipler", key: "medicalMultiplier" },
    { label: "Income Lost", key: "incomeLost" },
    { label: "Income Multiplier", key: "incomeMultiplier" },
    { label: "Value of Injury", key: "lostWages" },
    
  ];

function ExportCSV({totalMedicalExpenses, medicalMultiplier}) {

    const data = [

        { totalMedicalExpenses: totalMedicalExpenses, medicalMultiplier: medicalMultiplier }
        
      ];


    const csvReport = {
        data: data,
        headers: headers,
        filename: 'report.csv'
      };

    return(
        <div>
            <input type='submit' value='get value of injury claim' />
             <CSVLink {...csvReport}>Export to CSV</CSVLink>
        </div>
    )
}export default ExportCSV;
