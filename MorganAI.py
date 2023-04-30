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

# Print the coefficients and intercept of the model
print("Coefficients:", lr.coef_)
print("Intercept:", lr.intercept_)

# Print the R-squared score of the model
print("R-squared score:", lr.score(X_test, y_test))







