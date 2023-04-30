import './App.css';
import Logo from "./resources/logo-black-and-yellow.svg"
import CaseLogo from "./resources/CasecompassBlack.png"
import CSV from "./ExportCSV.js";

function App() {

  var caseId, caseName, totalMedicalExpenses, medicalMultiplier, incomeLost, incomeMultiplier, injuredInsurance

  //submit function
  const handleSubmit = event => {
    event.preventDefault(); //ignore defaults
    var info = {totalMedicalExpenses, medicalMultiplier, incomeLost, incomeMultiplier}

    //preform calculation in leu of AI algoritmn
    var  nonEconomic = incomeLost * medicalMultiplier
    var injuryClaim = (totalMedicalExpenses * medicalMultiplier) + (incomeLost * incomeMultiplier) + nonEconomic
    //return result 
    alert(`Results: \n 
    Value Of Injury Claim: $${injuryClaim}`);
  };

  //handle input and save to variable in feilds
  function handleCaseIdChanged(event) {
    caseId  = event.target.value
  }function handleCaseNameChanged(event) {
    caseName  = event.target.value
  }function handleTotalMedicalExpensesChanged(event) {
    totalMedicalExpenses  = event.target.value
  }function handleMedicalMultiplierChanged(event) {
    medicalMultiplier  = event.target.value
  }function handleIncomeLostChanged(event) {
    incomeLost  = event.target.value
  }function handleIncomeMultiplierChanged(event) {
    incomeMultiplier  = event.target.value
  }

  //return HTML body
  return (
    <div className="App">
      <br/>
      <center>
      <img src={Logo}  alt="mandm"/>
      <img src={CaseLogo}  alt="case compass" class= "case"/>
      </center>
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
                <label>Injury Severity 1-3</label>
                
                <input name='medicalMultiplier' type='text' value={medicalMultiplier} onChange={handleMedicalMultiplierChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Income Lost</label>
                
                <input name='incomeLost' type='text' value={incomeLost} onChange={handleIncomeLostChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Length of Lost Income 1-3</label>
                
                <input name='incomeMultiplier' type='text' value={incomeMultiplier}  onChange={handleIncomeMultiplierChanged.bind(this)}/>
                </div>
                <div class="section">
                <label>Injured Person Insurance Policy Value</label>
                
                <input name='injuredInsurance' type='text' value={injuredInsurance} />
                </div>
                <div class="section">
                <label>Offender Insurance Policy Value</label>
              
                <input name='offenderInsurance' type='text'  />
                </div>
                <div class="section">
                <label>Police Report Y/N</label>
                
                <input name='policeReport' type='text'  />
                </div>
                <div class="section">
                <label>Injured Person Guilt Liability 1-4</label>
                
                <input name='injuredGuiltLiability' type='text'/>
                </div>              
                <div class="section">
                <label>Injured Person Age</label>
                
                <input name='injuredAge' type='text' />
                </div>
                <div class="section">
                <label>Injured Location Type</label>
                
                <input name='injuredLocationType' type='text'/>
                </div>
                <div class="section">
                <label>Number Injured</label>
                
                <input name='injuredGroup' type='text' />
                </div>
                <input type='submit' value='get value of injury claim' />
                <CSV totalMedicalExpenses = {totalMedicalExpenses} medicalMultiplier = {medicalMultiplier} incomeLost = {incomeLost} incomeMultiplier = {incomeMultiplier}></CSV>
                <br/>
                </div>
            </form>
    </div>
  );
}

export default App;
