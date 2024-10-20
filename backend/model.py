# backend/model.py
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error
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

def evaluate_model(model, X, y):
    """Evaluate model and return R² and MAE"""
    y_pred = model.predict(X)
    r2 = r2_score(y, y_pred)
    mae = mean_absolute_error(y, y_pred)
    return r2, mae

def predict_kurs(user_input):
    if not os.path.exists('model.pkl'):
        train_model()  
    model = load_model()
    
    # Perform prediction
    prediction = model.predict([user_input])
    
    # Evaluate the model performance
    r2, mae = evaluate_model(model, X, y)
    
    return prediction, r2, mae

if __name__ == '__main__':
    train_model()