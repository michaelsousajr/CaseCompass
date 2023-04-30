import './App.css';
import Logo from "./resources/logo-black-and-yellow.svg";
import CSV from "./ExportCSV.js";

function App() {

  var data = {}
  var caseId, caseName, totalMedicalExpenses, medicalMuliplier, incomeLost, incomeMultiplier, lostWages, injuredInsurance, offenderInsurance, policeReport, injuredGuiltLiability, offenderGuiltLiability, injuredFL, offenderFL, injuredAge, offendorAge, injuredGroup, offenderGroup, injuredLocalType

  const handleSubmit = event => {
    event.preventDefault();
    console.log(caseId)
    alert(`Your state values: \n 
            Case Id: ${caseId} \n 
            You can replace this alert with your process`);
    setData()
    console.log(data.medicalMuliplier)
    
  };


  function handleCaseIdChanged(event) {
    caseId  = event.target.value
  }function handleCaseNameChanged(event) {
    caseName  = event.target.value
  }function handleTotalMedicalExpensesChanged(event) {
    totalMedicalExpenses  = event.target.value
  }function handleMedicalMuliplierChanged(event) {
    medicalMuliplier  = event.target.value
  }function handleIncomeLostChanged(event) {
    incomeLost  = event.target.value
  }function handleIncomeMultiplierChanged(event) {
    incomeMultiplier  = event.target.value
  }

  function setData(){
     var data = [
      { medicalMuliplier: medicalMuliplier, totalMedicalExpenses: totalMedicalExpenses, incomeLost: incomeLost, incomeMultiplier: incomeMultiplier}
    ]
    return data
  }

  return (
    <div className="App">
      <br/>
      <img src={Logo}  alt="mandm"/>
      <h2>Case Compass</h2>
             <form onSubmit={handleSubmit}> 
                <div class="line">
                <h3>Enter your Information</h3>
                <br/>
                <div class="section">
                <label>Case ID</label>
                
                <input name='caseId' type='text' value={caseId} onChange={handleCaseIdChanged.bind(this)} />
                </div>
                <div class="section">
                <label>Case Name</label>
                
                <input name='caseName' type='text' value={caseName} onChange={handleCaseNameChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Total Medical Expenses</label>
                
                <input name='totalMedicalExpenses' type='text' value={totalMedicalExpenses} onChange={handleTotalMedicalExpensesChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Medical Muliplier</label>
                
                <input name='medicalMultiplier' type='text' value={medicalMuliplier} onChange={handleMedicalMuliplierChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Income Lost</label>
                
                <input name='incomeLost' type='text' value={incomeLost} onChange={handleIncomeLostChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Income Multiplier</label>
                
                <input name='incomeMultiplier' type='text' value={incomeMultiplier}  onChange={handleIncomeMultiplierChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Value of Injury Claim</label>
                
                <input name='lostWages' type='text' value={lostWages} />
                </div>
                <div class="section">
                <label>Injured Insurance Policy Value</label>
                
                <input name='injuredInsurance' type='text' value={injuredInsurance} />
                </div>
                <div class="section">
                <label>Offender Insurance Policy Value</label>
              
                <input name='offenderInsurance' type='text'  />
                </div>
                <div class="section">
                <label>Police Report</label>
                
                <input name='policeReport' type='text'  />
                </div>
                <div class="section">
                <label>Injured Guilt Liability 1-4</label>
                
                <input name='injuredGuiltLiability' type='text'/>
                </div>
                <div class="section">
                <label>Offender Guilt Liability</label>
                
                <input name='offenderGuiltLiability' type='text'/>
                </div>
                <div class="section">
                <label>Injured Florida Local</label>
                
                <input name='injuredFL' type='text'/>
                </div>
                <div class="section">
                <label>Offender Florida Local</label>
                
                <input name='offenderFL' type='text' />
                </div>
                <div class="section">
                <label>Injured Age</label>
                
                <input name='injuredAge' type='text' />
                </div>
                <div class="section">
                <label>Offender Age</label>
                
                <input name='offenderAge' type='text'/>
                </div>
                <div class="section">
                <label>Injured Location Type</label>
                
                <input name='injuredLocationType' type='text'/>
                </div>
                <div class="section">
                <label>Injured Group</label>
                
                <input name='injuredGroup' type='text' />
                </div>
                <div class="section">
                <label>Offender Group</label>
                
                <input name='offenderGroup' type='text'/>
                </div>
                <CSV data=
                {
                  setData()
                }
                  ></CSV>
                <br/>
                </div>
            </form>
            <div>
              <p> Value of Injury Claim:</p>
              <p>{data.caseId}</p>
    
            </div>
    </div>
  );
}

export default App;
