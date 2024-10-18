# backend/model.py
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib
import os

data = pd.read_csv('data/Data BI - Copy of 2018-2023.csv')

X = data.drop(columns=['Tahun', 'Kurs (USD)'])
y = data['Kurs (USD)']

def train_model():
    model = RandomForestRegressor(random_state=42)
    model.fit(X, y)
    joblib.dump(model, 'model.pkl')  

def load_model():
    return joblib.load('model.pkl')

def predict_kurs(user_input):
    if not os.path.exists('model.pkl'):
        train_model()  
    model = load_model()
    return model.predict([user_input])

if __name__ == '__main__':
    train_model()  