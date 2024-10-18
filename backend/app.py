# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from model import predict_kurs

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Validate input data
    try:
        user_input = [
            float(data['jumlah_uang_beredar']),
            float(data['surplus_defisit']),
            float(data['aset']),
            float(data['giro_bank']),
            float(data['pertumbuhan_ekonomi']),
            float(data['rasio_modal']),
            float(data['penghasilan'])
        ]
    except (ValueError, KeyError) as e:
        return jsonify({'error': 'Invalid input data'}), 400
    
    prediction = predict_kurs(user_input)
    return jsonify({'predicted_kurs': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)