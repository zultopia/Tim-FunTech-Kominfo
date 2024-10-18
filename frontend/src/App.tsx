import './App.css';
import kominfoLogo from '/logo.png'; 
import FormInput from './components/FormInput';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    jumlah_uang_beredar: '',
    surplus_defisit: '',
    aset: '',
    giro_bank: '',
    pertumbuhan_ekonomi: '',
    rasio_modal: '',
    penghasilan: '',
  });

  const [predictedKurs, setPredictedKurs] = useState<number | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      setPredictedKurs(result.predicted_kurs);
    } else {
      alert('Error fetching prediction');
    }
  };

  return (
    <div className="container">
      <img src={kominfoLogo} alt="Logo Kominfo" className="header-logo" />
      <h1>Prediksi Kurs Bank Indonesia</h1>
      <div className="flex-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <FormInput label="Jumlah Uang Beredar (jt)" name="jumlah_uang_beredar" onChange={handleChange} />
            <FormInput label="Surplus & Defisit (jt)" name="surplus_defisit" onChange={handleChange} />
            <FormInput label="Aset (jt)" name="aset" onChange={handleChange} />
            <FormInput label="Giro Bank (jt)" name="giro_bank" onChange={handleChange} />
            <FormInput label="Pertumbuhan Ekonomi (%)" name="pertumbuhan_ekonomi" onChange={handleChange} />
            <FormInput label="Rasio Modal (%)" name="rasio_modal" onChange={handleChange} />
            <FormInput label="Penghasilan (jt)" name="penghasilan" onChange={handleChange} />
            <button type="submit">Hitung Kurs</button>
          </form>
        </div>
        {predictedKurs !== null && (
          <div className="result-container">
            <h2 className="result-title">Hasil Prediksi:</h2>
            <div className="result">
              <h3>{predictedKurs.toFixed(2)} IDR</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;