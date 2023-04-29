import './App.css';
import { CSVLink } from "react-csv";
import Logo from "./logo-black-and-yellow.svg";

var data = [
  //{ caseId: "1", caseName: "Morrow", email: "sokyt@mailinator.com", age: "36" },
];

const headers = [
  { label: "Case Id", key: "caseId" },
  { label: "Case Name", key: "caseName" },
  { label: "Injured Name", key: "injured Name" },
  { label: "Offenders Name", key: "offendersName" },
  { label: "Pre Settlement Cost", key: "preSettleCost" },
  { label: "Post Settlement Cost", key: "postSettleCost" },
  { label: "Recieved Surgury", key: "surgery" },
  { label: "Catastrophic", key: "catastrophic" }
];

const csvReport = {
  data: data,
  headers: headers,
  filename: 'Report.csv'
};

function App() {

  var caseId
  var caseName 
  var injuredName

  const onFormSubmit = (e) => {
    data = [
      { caseId: caseId, caseName: "Morrow", injuredName: "sokyt@mailinator.com", age: "36" },
    ];
    console.log("hello")
    console.log("hi" + caseId)
  }

  return (
    <div className="App">
      <br/>
      <img src={Logo}  alt="mandm"/>
      <h2>Fill out the form</h2>
             <form onSubmit={e=> {onFormSubmit(e)}}> 
                <div class="line">
                <br/>
                <label>Case ID</label>
                
                <input name='caseId' type='text' value={caseId}/>
                
                <label>Case Name</label>
                
                <input name='caseName' type='text'/>
                
                <label>Injured Name</label>
                
                <input name='injuredName' type='text' value={injuredName}/>
                
                <label>Offenders Names</label>
                
                <input name='offendersName' type='text'/>
                
                <label>Injured Medical Expense- pre-settlement</label>
                
                <input name='preSettleCost' type='text'/>
                
                <label>Expected Medical Expenses -post-settlment</label>
                
                <input name='postSettleCost' type='text'/>
                
                <label>Injured and Recieved Surgery</label>
                
                <input name='surgery' type='text'/>
                
                <label>Catastrophic</label>
                
                <input name='catastrophic' type='text'/>
                
                <label>Injured Lost Wages</label>
                
                <input name='lostWages' type='text'/>
                
                <label>Injured Insurance Policy Value</label>
                
                <input name='insurancePolicyValue' type='text'/>
               
                <label>Offender Insurance Policy Value</label>
              
                <input name='offenderInsurancePolicyValue' type='text'/>
              
                <label>Police Report</label>
                
                <input name='policeReport' type='text'/>
                
                <label>Injured Guilt Liability 1-4</label>
                
                <input name='injuredGuiltLiability' type='text'/>
                
                <label>Offender Guilt Liability</label>
                
                <input name='offenderGuiltLiability' type='text'/>
                
                <label>Injured Florida Local</label>
                
                <input name='injuredFL' type='text'/>
                
                <label>Offender Florida Local</label>
                
                <input name='offenderFL' type='text'/>
                
                <label>Injured Age</label>
                
                <input name='injuredAge' type='text'/>
                
                <label>Offender Age</label>
                
                <input name='offenderAge' type='text'/>
                
                <label>Injured phone number</label>
                
                <input name='injuredPhoneNumber' type='text'/>
                
                <label>Injured Location Type</label>
                
                <input name='injuredLocationType' type='text'/>
                
                <label>Injured Group</label>
                
                <input name='injuredGroup' type='text'/>
                
                <label>Offender Group</label>
                
                <input name='offenderGroup' type='text'/>
                
                <CSVLink {...csvReport}>Export to CSV</CSVLink>
                <input type='submit' value='get expected payout' />
                <br/>
                </div>
            </form>
    </div>
  );
}

export default App;
