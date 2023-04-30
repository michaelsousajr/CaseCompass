import './App.css';
import { CSVLink } from "react-csv";

const headers = [

    { label: "Total Medical Expenses", key: "totalMedicalExpenses" },
    { label: "Medical Mulipler", key: "postSettleCost" },
    { label: "Income Lost", key: "incomeLost" },
    { label: "Catastrophic", key: "catastrophic" },
    { label: "Injured Lost Wages", key: "lostWages" },
    { label: "Injured Insurance Policy Value", key: "injuredInsurance" },
    { label: "Police Report", key: "policeReport" },
    { label: "Injured Lost Wages", key: "lostWages" },
    { label: "Injured Guilt Liability", key: "injuredLiability" },
    { label: "Offender Guilt Liability", key: "offenderLiability" }
  ];

function ExportCSV({data}) {

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
