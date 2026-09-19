# 📖 Maelekezo ya Kusaka (Setup Guide)

Hapa ndipo utaanza! Fuata hatua hizi kwa makini.

## 📋 Orodha ya Vitu Unavyohitaji

- ✅ Node.js (v18 au zaidi)
- ✅ PostgreSQL (v14 au zaidi)
- ✅ Git
- ✅ Code editor (VS Code inapendekezwa)

## 🚀 Hatua 1: Kusaka Node.js

### Kwenye Windows:
1. Nenda https://nodejs.org
2. Download **LTS version** (k.m. v18.x au v20.x)
3. Install kwa kubonyeza "Next"
4. Verify: Fungua Command Prompt na andika:
```bash
node --version
npm --version
```

### Kwenye Mac:
```bash
# Install Homebrew kama hauna
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node@18

# Verify
node --version
npm --version
```

### Kwenye Linux (Ubuntu/Debian):
```bash
# Install Node.js
sudo apt update
sudo apt install nodejs npm

# Verify
node --version
npm --version
```

## 🐘 Hatua 2: Kusaka PostgreSQL

### Kwenye Windows:
1. Nenda https://www.postgresql.org/download/windows/
2. Download na install
3. Wakati wa install:
   - Weka password ya `postgres` user (kumbuka!)
   - Weka port kuwa `5432`
4. Verify: Fungua Command Prompt na andika:
```bash
psql --version
```

### Kwenye Mac:
```bash
# Install PostgreSQL
brew install postgresql@14

# Start PostgreSQL
brew services start postgresql@14

# Verify
psql --version
```

### Kwenye Linux (Ubuntu/Debian):
```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL
sudo systemctl start postgresql

# Verify
psql --version
```

## 🔧 Hatua 3: Kuunda Database

### Fungua PostgreSQL:

**Windows:**
```bash
# Fungua psql
psql -U postgres
```

**Mac/Linux:**
```bash
# Fungua psql
sudo -u postgres psql
```

### Unda Database:

```sql
-- Unda database mpya
CREATE DATABASE intercity_bus_db;

-- Hakikisha imeundwa
\l

# Toka kwenye psql
\q
```

## 📁 Hatua 4: Ku-Clone Project

```bash
# Nenda kwenye folder unayotaka kuhifadhi project
cd Documents/Projects

# Clone repository
git clone https://github.com/Baraka-Kamande/intercity-bus-system.git

# Nenda kwenye project folder
cd intercity-bus-system
```

## ⚙️ Hatua 5: Kusaka Backend

```bash
# Nenda kwenye backend folder
cd backend

# Install dependencies zote
npm install

# Nakili .env.example na kuiita .env
cp .env.example .env
```

### Hariri .env file:

Fungua `backend/.env` na weka:

```env
DATABASE_URL="postgresql://postgres:PASSWORD_YAKO@localhost:5432/intercity_bus_db?schema=public"

JWT_SECRET="weka-string-ndefu-hapa-kwa-security"

PORT=5000
NODE_ENV="development"
FRONTEND_URL="http://localhost:5173"
```

**Muhimu:** Badilisha `PASSWORD_YAKO` kuwa password uliyoipa PostgreSQL!

## 🗄️ Hatua 6: Kusaka Database Schema

```bash
# Kwenye backend folder

# Generate Prisma Client
npx prisma generate

# Push schema kwenye database (kwa ajili ya development)
npx prisma db push

# Au unaweza kutumia migrations
npx prisma migrate dev --name init
```

### Hakikisha Database Imesaka Vizuri:

```bash
# Fungua Prisma Studio (GUI ya kuona database)
npx prisma studio
```

Hii itafungua browser kwenye `http://localhost:5555` na utaona tables zote!

## 🏃 Hatua 7: Kuanzisha Server

```bash
# Kwenye backend folder

# Anzisha server kwa development mode
npm run dev
```

Utaona:
```
╔════════════════════════════════════════╗
║  🚌 INTERCITY BUS SYSTEM API           ║
║  ✅ Server inafanya kazi               ║
║  📡 Port: 5000                         ║
║  🌐 URL: http://localhost:5000         ║
╚════════════════════════════════════════╝
```

## ✅ Hatua 8: Kujaribu Server

Fungua browser na nenda:
- http://localhost:5000/api - Utapata info za API
- http://localhost:5000/api/health - Utapata status ya server

Au tumia Postman/curl:
```bash
curl http://localhost:5000/api/health
```

## 🐛 Hitilafu za Kawaida na Suluhisho

### 1. "DATABASE_URL error"
- Hakikisha `.env` file iko na `DATABASE_URL` sahihi
- Hakikisha PostgreSQL inafanya kazi
- Hakikisha password ni sahihi

### 2. "Port 5000 already in use"
- Badilisha PORT kwenye `.env` kuwa namba nyingine (k.m. 5001)
- Au zima app nyingine inayotumia port 5000

### 3. "Prisma errors"
```bash
# Reset database na schema
npx prisma migrate reset
npx prisma db push
```

### 4. "Cannot find module '@prisma/client'"
```bash
# Install tena
npx prisma generate
npm install
```

## 📚 Hatua zinazofuata

Baada ya backend kusaka vizuri:

1. ✅ Database schema imesaka
2. ✅ Server inafanya kazi
3. 📝 Tutaanza kuandika authentication (login/register)
4. 📝 Tutaunda API za users, kampuni, na mabasi
5. 🎨 Tutaanza frontend (React)

## 💡 Vidokezo

- Kila unapobadilisha schema, run: `npx prisma db push`
- Tumia `npx prisma studio` kuona data yako
- Check logs kwenye terminal kwa errors
- Hakikisha `.env` file haiko kwenye Git (iko kwenye `.gitignore`)

## 📞 Msaada

Kama una shida:
1. Check terminal logs
2. Hakikisha `.env` iko sahihi
3. Jaribu kuzima na kuwasha tena server
4. Tazama `backend/prisma/schema.prisma` kuona kama schema ni sahihi

---

**Hongera!** 🎉 Backend yako imesaka na iko tayari kwa development!
