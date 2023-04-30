//create a script that will create a csv with 500 responses using this equation
//Value of Injury Claim = (Total Medical Expenses x Medical Multiplier) + (Income Lost x Income Multiplier) + (Non-economic Damages)

// total medical expenses = (1000 to 30000 with an average of 13000)
//Medical multipler = (1.5 to 5)
// Income lost = (20000 to 100000 with an average of 62000) x (Medical multiplier /  10)
// Income Multiplier = 1.5 to 3
//Non-economic damages = (Income lost) x 2

total_medical_expenses_range = (1000, 30000);
total_medical_expenses_average = 13000;
medical_multiplier_range = (1.5, 5);
income_lost_range = (20000, 100000);
income_lost_average = 62000;
income_multiplier_range = (1.5, 3);

// Define the function for calculating the value of injury claim
function calculate_value_of_injury_claim(total_medical_expenses, medical_multiplier, income_lost, income_multiplier){
    non_economic_damages = income_lost * 2;
    value_of_injury_claim = (total_medical_expenses * medical_multiplier) + (income_lost * income_multiplier) + non_economic_damages;
    return value_of_injury_claim;
}

console.log(calculate_value_of_injury_claim());
