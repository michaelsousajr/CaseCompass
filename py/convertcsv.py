import pandas as pd
data_xls = pd.read_excel('trainingData.xlsx', 'Working', dtype=str, index_col=None)
data_xls.to_csv('csvfile.csv', encoding='utf-8', index=False)
