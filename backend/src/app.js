// ============================================
// APP.JS - Express Server ya Msingi
// ============================================
// Hii ndio sehemu kuu ya backend yetu
// Inasimamia requests zote kutoka frontend

// ============================================
// 1. KULETA VITU (Imports)
// ============================================

// dotenv inasoma .env file yetu
require('dotenv').config();

// express ni framework ya backend
const express = require('express');

// cors inaruhusu frontend kupata data kutoka backend
const cors = require('cors');

// ============================================
// 2. KUUNDA EXPRESS APP
// ============================================

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================
// 3. MIDDLEWARE
// ============================================
// Middleware ni code inayofanya kazi kabla ya request kufika endpoint

// CORS - inaruhusu frontend yetu kupata data
// Tunaweka URL ya frontend kwenye .env file
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// express.json() inasoma JSON data kutoka request body
// Hii inahitajika kwa POST, PUT, PATCH requests
app.use(express.json());

// express.urlencoded() inasoma form data
app.use(express.urlencoded({ extended: true }));

// ============================================
// 4. HEALTH CHECK ENDPOINT
// ============================================
// Hii endpoint inatumika kujua kama server inafanya kazi

app.get('/api/health', (req, res) => {
  // Tunarudisha status ya server
  res.json({
    status: 'OK',
    message: 'Intercity Bus API inafanya kazi',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// 5. ROOT ENDPOINT
// ============================================
// Endpoint ya msingi inayorudisha info za API

app.get('/api', (req, res) => {
  res.json({
    name: 'Intercity Bus System API',
    version: '1.0.0',
    description: 'Mfumo wa Usafiri wa Mabasi ya Mikoa',
    endpoints: {
      health: 'GET /api/health',
      // Tutaweka endpoints nyingine hapa baadaye
    }
  });
});

// ============================================
// 6. ERROR HANDLING
// ============================================
// Hii inashughulikia errors zozote

// 404 - Page haijapatikana
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'Endpoint haipatikani'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'Hitilafu imetokea'
  });
});

// ============================================
// 7. KUANZISHA SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║  🚌 INTERCITY BUS SYSTEM API           ║
  ║  ✅ Server inafanya kazi               ║
  ║  📡 Port: ${PORT}                        ║
  ║  🌐 URL: http://localhost:${PORT}       ║
  ║  🔧 Mode: ${process.env.NODE_ENV || 'development'}          ║
  ╚════════════════════════════════════════╝
  `);
});

// Export app kwa ajili ya testing
module.exports = app;
