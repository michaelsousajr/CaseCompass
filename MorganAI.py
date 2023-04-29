import pandas as pd
import sklearn as sk
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

#reading in csv
data = pd.read_csv('csvKH_MM_2023_TrainingModelDataset.csv')

#dropping non-numerical data
data = data.drop(['Case ID:','Case Name:','AI Generated Description:','Injured Name:','Offender Name(s):','Injured Phone Number:'], axis=1)

#changing all the Y to 1 and N to 0 for preprocessing
data['Injured Received Surgury? (Y-1/N-0):'] = data['Injured Received Surgury? (Y-1/N-0):'].replace(['Y'], 1)
data['Injured Received Surgury? (Y-1/N-0):'] = data['Injured Received Surgury? (Y-1/N-0):'].replace(['N'], 0)
data['Catastrophic? (Y-1/N-0):'] = data['Catastrophic? (Y-1/N-0):'].replace(['Y'], 1)
data['Catastrophic? (Y-1/N-0):'] = data['Catastrophic? (Y-1/N-0):'].replace(['N'], 0)
data['Police Report?'] = data['Police Report?'].replace(['Y'], 1)
data['Police Report?'] = data['Police Report?'].replace(['N'], 0)
data['Injured FL Local?'] = data['Injured FL Local?'].replace(['Y'], 1)
data['Injured FL Local?'] = data['Injured FL Local?'].replace(['N'], 0)
data['Offender FL Local?'] = data['Offender FL Local?'].replace(['Y'], 1)
data['Offender FL Local?'] = data['Offender FL Local?'].replace(['N'], 0)
data['Injured Group?:'] = data['Injured Group?:'].replace(['Y'], 1)
data['Injured Group?:'] = data['Injured Group?:'].replace(['N'], 0)
data['Offender Group?:'] = data['Offender Group?:'].replace(['Y'], 1)
data['Offender Group?:'] = data['Offender Group?:'].replace(['N'], 0)

#create a Logistic Regression Object
lr = LogisticRegression()

#create values and target 
X = data.drop('target', axis=1)
y = data['target']

#test and training sets. Training(80%) Tests(20%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#Fitting the training data into our model
lr.fit(X_train,y_train)

#predicting the test
y_pred = model.predict(X_test)


#Checking and printing Accuracy
accuracy = accuracy_score(y_test, y_pred)
print('Accuracy:', accuracy)


