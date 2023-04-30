import './App.css';
import { CSVLink } from "react-csv";

//headers for CSV
const headers = [

    { label: "Total Medical Expenses", key: "totalMedicalExpenses" },
    { label: "Medical Mulipler", key: "medicalMultiplier" },
    { label: "Income Lost", key: "incomeLost" },
    { label: "Income Multiplier", key: "incomeMultiplier" },
    { label: "Value of Injury", key: "lostWages" },
    
  ];

function ExportCSV({totalMedicalExpenses, medicalMultiplier, incomeLost, incomeMultiplier}) {

    //calculation in leu of AI Guess Algorithmn
    var  nonEconomic = incomeLost * medicalMultiplier
    var injuryClaim = (totalMedicalExpenses * medicalMultiplier) + (incomeLost * incomeMultiplier) + nonEconomic

    //input for CSV
    const data = [
        { totalMedicalExpenses: totalMedicalExpenses, medicalMultiplier: medicalMultiplier, incomeLost: incomeLost, incomeMultiplier:incomeMultiplier, injuryClaim:injuryClaim }
      ];

    const csvReport = {
        data: data,
        headers: headers,
        filename: 'report.csv'
      };

      

    return(
        <div class ="csv">
             <CSVLink {...csvReport}>Export to CSV</CSVLink>
        </div>
    )
}export default ExportCSV;
