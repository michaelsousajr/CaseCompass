import pandas as pd
import sklearn as sk
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LinearRegression

#reading in csv
data = pd.read_csv('mycsv.csv')

X = data.drop('Value of Injury Claim', axis=1)

y = data['Value of Injury Claim']

#test and training sets. Training(80%) Tests(20%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Create a Linear Regression model
lr = LinearRegression()

# Train the model on the training data
lr.fit(X_train, y_train)

# Make predictions on the test data
y_pred = lr.predict(X_test)

# Print the R-squared score of the model
accuracy = round(lr.score(X_test, y_test) * 100, 1)
print("Accuracy Based on the Sample Training Data:", accuracy,'%')


TME = input("What are your total Medical Expenses?: ")
MM = input("What is your Medical Multiplier?(1.5 to 5) depending on severity: ")
IL = input("What is your income lost?: ")
IM = input("What is the Income Multiplier?(1.5 to 3)short term to long term effects: ")

new_data_dict = {'Total Medical Expenses': TME , 'Medical Multiplier': MM,'Income Lost':IL,'Income Multiplier':IM}

# Convert the dictionary to a DataFrame
new_data = pd.DataFrame([new_data_dict])

# Use the trained model to predict the target value for the new data point
prediction = lr.predict(new_data)

if prediction[0] < 0:
    prediction[0] *= -1

rounded_prediction = round(prediction[0]*1.2, 1)

print("Predicted Total Value of the Injury Claim: $",rounded_prediction)












