import './App.css';

function App() {

  return (
    <div className="App">
      <h2>Fill out the form</h2>
             <form onSumbit> 
                <label>Case ID</label>
                <br/>
                <input name='caseId' type='text'/>
                <br/>
                <label>Case Name</label>
                <br/>
                <input name='caseName' type='text'/>
                <br/>
                <label>Injured Name</label>
                <br/>
                <input name='injuredName' type='text'/>
                <br/>
                <label>Offenders Names</label>
                <br/>
                <input name='offendersName' type='text'/>
                <br/>
                <label>Injured Medical Expense- pre-settlement</label>
                <br/>
                <input name='preSettleCost' type='text'/>
                <br/>
                <label>Expected Medical Expenses -post-settlment</label>
                <br/>
                <input name='postSettleCost' type='text'/>
                <br/>
                <label>Injured and Recieved Surgery</label>
                <br/>
                <input name='surgery' type='text'/>
                <br/>
                <label>Catastrophic</label>
                <br/>
                <input name='catastrophic' type='text'/>
                <br/>
                <label>Injured Lost Wages</label>
                <br/>
                <input name='lostWages' type='text'/>
                <br/>
                <label>Injured Insurance Policy Value</label>
                <br/>
                <input name='insurancePolicyValue' type='text'/>
                <br/>
                <label>Offender Insurance Policy Value</label>
                <br/>
                <input name='offenderInsurancePolicyValue' type='text'/>
                <br/>
                <label>Police Report</label>
                <br/>
                <input name='policeReport' type='text'/>
                <br/>
                <label>Injured Guilt Liability 1-4</label>
                <br/>
                <input name='injuredGuiltLiability' type='text'/>
                <br/>
                <label>Offender Guilt Liability</label>
                <br/>
                <input name='offenderGuiltLiability' type='text'/>
                <br/>
                <label>Injured Florida Local</label>
                <br/>
                <input name='injuredFL' type='text'/>
                <br/>
                <label>Offender Florida Local</label>
                <br/>
                <input name='offenderFL' type='text'/>
                <br/>
                <label>Injured Age</label>
                <br/>
                <input name='injuredAge' type='text'/>
                <br/>
                <label>Offender Age</label>
                <br/>
                <input name='offenderAge' type='text'/>
                <br/>
                <label>Injured phone number</label>
                <br/>
                <input name='injuredPhoneNumber' type='text'/>
                <br/>
                <label>Injured Location Type</label>
                <br/>
                <input name='injuredLocationType' type='text'/>
                <br/>
                <label>Injured Group</label>
                <br/>
                <input name='injuredGroup' type='text'/>
                <br/>
                <label>Offender Group</label>
                <br/>
                <input name='offenderGroup' type='text'/>
                <br/>
                <input type='submit' value='get expected payout' />
                <br/>
            </form>
    </div>
  );
}

export default App;
