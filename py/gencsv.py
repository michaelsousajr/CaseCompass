#create a script that will create a csv with 500 responses using this equation
#Value of Injury Claim = (Total Medical Expenses x Medical Multiplier) + (Income Lost x Income Multiplier) + (Non-economic Damages)

# total medical expenses = (1000 to 30000 with an average of 13000)
# Medical multipler = (1.5 to 5)
# Income lost = (20000 to 100000 with an average of 62000) x (Medical multiplier /  10)
# Income Multiplier = 1.5 to 3
# Non-economic damages = (Income lost) x 2
import csv
import random

# Define ranges and averages for each parameter
total_medical_expenses_range = (1000, 30000)
total_medical_expenses_average = 13000

medical_multiplier_range = (1.5, 5)

income_lost_range = (20000, 100000)
income_lost_average = 62000

income_multiplier_range = (1.5, 3)

# Define the function for calculating the value of injury claim
def calculate_value_of_injury_claim(total_medical_expenses, medical_multiplier, income_lost, income_multiplier):
    non_economic_damages = income_lost * 2
    value_of_injury_claim = (total_medical_expenses * medical_multiplier) + (income_lost * income_multiplier) + non_economic_damages
    return value_of_injury_claim

# Create a list to store the responses
responses = []

# Generate 500 random responses and add them to the list
for i in range(5000):
    total_medical_expenses = random.randint(*total_medical_expenses_range)
    medical_multiplier = round(random.uniform(*medical_multiplier_range), 2)
    income_lost = round(random.gauss(income_lost_average, (income_lost_range[1] - income_lost_range[0]) / 4), 2)
    income_lost = income_lost * (medical_multiplier / 10)
    income_multiplier = round(random.uniform(*income_multiplier_range), 2)
    value_of_injury_claim = calculate_value_of_injury_claim(total_medical_expenses, medical_multiplier, income_lost, income_multiplier)
    response = [total_medical_expenses, medical_multiplier, income_lost, income_multiplier, value_of_injury_claim]
    responses.append(response)

# Write the responses to a CSV file
with open('mycsv.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Total Medical Expenses', 'Medical Multiplier', 'Income Lost', 'Income Multiplier', 'Value of Injury Claim'])
    writer.writerows(responses)

