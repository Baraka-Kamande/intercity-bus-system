# 🚌 Mfumo wa Usafiri wa Mabasi ya Mikoa (Intercity Bus System)

Mfumo wa kisasa wa kutempahini na kusimamia mabasi ya mikoani nchini Tanzania.

## 📋 Maelezo ya Mradi

Huu ni mfumo wa web-based unaoruhusu:
- **Abiria**: Kutafuta mabasi, kuchagua viti, na kutempahini tiketi mtandaoni
- **Kampuni za Mabasi**: Kusimamia mabasi, madereva, ratiba, na ma-bookings
- **Admin**: Kusimamia platform nzima, kampuni, na ripoti

## 🎯 Features Kuu

### Kwa Abiria
- ✅ Kutafuta mabasi kwa mkoa wa kuondoka na kwenda
- ✅ Kuchagua tarehe ya safari
- ✅ Kuona mabasi yanayopatikana, muda, na bei
- ✅ Kuchagua kiti maalum (seat selection)
- ✅ Kulipa kwa Lipa Namba, Cash, Pay on Boarding, au Demo
- ✅ Kupata tiketi ya kidigitali yenye QR code
- ✅ Kuangalia status ya booking

### Kwa Kampuni za Mabasi
- ✅ Kusajili na kusimamia mabasi
- ✅ Kusajili madereva
- ✅ Kutengeneza routes (njia za safari)
- ✅ Kupanga schedules (ratiba)
- ✅ Kusimamia viti (seat management)
- ✅ Kuona bookings na kuthibitisha abiria
- ✅ Ripoti za mapato na matumizi

### Kwa Admin
- ✅ Kusimamia kampuni zote
- ✅ Kuapprove/reject kampuni mpya
- ✅ Ripoti za platform nzima
- ✅ Analytics na insights

## 🛠️ Teknolojia Zinazotumika

### Backend
- **Node.js + Express.js** - Server framework
- **PostgreSQL** - Database
- **Prisma ORM** - Database ORM
- **JWT** - Authentication
- **Socket.io** - Real-time updates
- **Nodemailer** - Email notifications

### Frontend
- **React.js + Vite** - Frontend framework
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Zustand** - State management
- **Axios** - API calls
- **React Query** - Data fetching

### Payment Integration (Baadaye)
- **M-Pesa Daraja API** - Mobile money
- **Lipa Namba** - Manual payment confirmation

## 📁 Muundo wa Project

```
intercity-bus-system/
├── backend/              # Server-side code
│   ├── src/
│   │   ├── controllers/  # Business logic
│   │   ├── routes/       # API endpoints
│   │   ├── middleware/   # Auth, validation
│   │   ├── services/     # Email, payment services
│   │   ├── utils/        # Helper functions
│   │   └── app.js        # Main app
│   ├── prisma/
│   │   └── schema.prisma # Database schema
│   └── package.json
│
├── frontend/             # Client-side code
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Full pages
│   │   ├── services/     # API services
│   │   ├── store/        # State management
│   │   └── App.jsx       # Main component
│   └── package.json
│
└── docs/                 # Documentation
```

## 🚀 Kuanza (Getting Started)

### Requirements
- Node.js (v18 au zaidi)
- PostgreSQL (v14 au zaidi)
- Git

### Installation

1. **Clone repository**
```bash
git clone https://github.com/Baraka-Kamande/intercity-bus-system.git
cd intercity-bus-system
```

2. **Setup Backend**
```bash
cd backend
npm install
# Weka database connection kwenye .env
cp .env.example .env
# Run database migrations
npx prisma migrate dev
# Start server
npm run dev
```

3. **Setup Frontend**
```bash
cd frontend
npm install
# Start development server
npm run dev
```

## 📝 Development Status

Huu mradi uko under active development. Features zinajengwa hatua kwa hatua.

## 👥 Wachuuzi

- **Thunder Tecx** - Software Builder

## 📄 License

MIT License

## 📞 Mawasiliano

Kwa maswali au msaada, wasiliana kupitia GitHub issues.
