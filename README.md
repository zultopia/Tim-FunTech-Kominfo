# Predictor Kurs Bank Indonesia

Predictor Kurs Bank Indonesia adalah aplikasi web yang digunakan untuk memprediksi nilai tukar (kurs) berdasarkan berbagai parameter ekonomi. Aplikasi ini menggunakan model Machine Learning untuk memberikan estimasi kurs yang akurat.

## Fitur

- Menghitung nilai tukar berdasarkan input pengguna
- Menggunakan model Machine Learning untuk prediksi
- Antarmuka pengguna yang responsif dan intuitif
- Menyediakan opsi untuk menyegarkan input dan hasil prediksi

## Prerequisites

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (versi 14 atau lebih baru)
- [Python](https://www.python.org/) (versi 3.7 atau lebih baru)
- [Flask](https://flask.palletsprojects.com/) untuk backend
- [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/) untuk mengizinkan permintaan lintas asal
- [Joblib](https://joblib.readthedocs.io/en/latest/) untuk menyimpan dan memuat model

## Instalasi

### Backend (Flask)

1. Masuk ke direktori backend:
    ```bash
    cd backend
    ```

2. Instal dependensi:
    ```bash
    pip install -r requirements.txt
    ```

3. Jalankan aplikasi Flask:
    ```bash
    python app.py
    ```

### Frontend (React)

1. Masuk ke direktori frontend:
    ```bash
    cd frontend
    ```

2. Instal dependensi:
    ```bash
    npm install
    ```

3. Jalankan aplikasi React:
    ```bash
    npm start
    ```

## Cara Menggunakan

1. Buka browser dan akses [http://localhost:3000](http://localhost:3000).
2. Masukkan nilai untuk parameter yang diminta:
   - Jumlah Uang Beredar (jt)
   - Surplus & Defisit (jt)
   - Aset (jt)
   - Giro Bank (jt)
   - Pertumbuhan Ekonomi (%)
   - Rasio Modal (%)
   - Penghasilan (jt)
3. Klik tombol **Hitung Kurs** untuk mendapatkan prediksi nilai tukar.
4. Klik tombol **Refresh** untuk mengatur ulang input dan hasil.

## Troubleshooting

- Jika Anda mendapatkan error 500, periksa konsol aplikasi Flask untuk pesan kesalahan yang lebih spesifik.
- Pastikan model telah dilatih dan disimpan dengan benar sebelum melakukan prediksi.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat branch baru dan kirim pull request.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Developer

- Tim Fun Tech