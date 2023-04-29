

<script>
// Define the fields and their possible values
const fields = {
  'Case ID': () => Math.floor(Math.random() * 100000),
  'Case Name': ['Car Accident', 'Slip and Fall', 'Medical Malpractice'],
  'AI Generated Description': () => `This case involves a ${Math.random() > 0.5 ? 'serious' : 'minor'} injury to the plaintiff.`,
  'Expected Payout for Injured': () => Math.floor(Math.random() * 100000),
  'Injured Name': ['John Doe', 'Jane Doe', 'Bob Smith'],
  'Offender Name(s)': ['Acme Inc.', 'XYZ Corp.', 'ABC Co.'],
  'Injured Medical Expenses (pre-settlement)': () => Math.floor(Math.random() * 50000),
  'Expected Medical Expenses (post settlement)': () => Math.floor(Math.random() * 50000),
  'Injured Received Surgery? (Y-1/N-0)': ['Y', 'N'],
  'Catastrophic? (Y-1/N-0)': ['Y', 'N'],
  'Injured Lost Wages': () => Math.floor(Math.random() * 50000),
  'Injured Insurance Policy Value': () => Math.floor(Math.random() * 50000),
  'Offender(s) Insurance Policy Value': () => Math.floor(Math.random() * 50000),
  'Police Report?': ['Y', 'N'],
  'Injured Guilt Liability (0 completely innocent - 4 very guilty) [synthesis of police report]': () => Math.floor(Math.random() * 5),
  'Offender Guilt Liability (0 completely innocent - 4 very guilty) [synthesis of police report]': () => Math.floor(Math.random() * 5),
  'Injured FL Local?': ['Y', 'N'],
  'Offender FL Local?': ['Y', 'N'],
  'Injured Age': () => Math.floor(Math.random() * 80),
  '(Avg)Offender(s) Age': () => Math.floor(Math.random() * 80),
  'Injured Phone Number': () => Math.floor(Math.random() * 10000000000),
  'Incident Location Type (1-Business, 2-Residential, 3-Road)': ['1', '2', '3'],
  'Injured Group?': ['Y', 'N'],
  'Offender Group?': ['Y', 'N']
};

// Randomize the fields and calculate the settlement amount
let values = {};
for (let field in fields) {
  let value = fields[field];
  if (typeof value === 'function') {
    values[field] = value();
  } else {
    values[field] = value[Math.floor(Math.random() * value.length)];
  }
}

// Calculate the settlement amount
let settlement = values['Expected Payout for Injured'] * values['Offender(s) Insurance Policy Value'] / (values['Offender Guilt Liability (0 completely innocent - 4 very guilty) [synthesis of police report]'] + 1);
console.log('Settlement amount:', settlement);
console.log('values: ', values);

</script>



<h1>Case Compass</h1>

<p>values = {values}</p>

<p>Settlement Amount = ${settlement}</p>



<style>
	:Global(body){
		background-color: black;
	}

</style>
