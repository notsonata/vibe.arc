# VIBE.ARC - Streetwear Shop

A Laravel + Vue.js streetwear e-commerce website with cosmic aesthetic.

## Check it here:
https://vibearc-production.up.railway.app/

## How to Run

1. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Setup Database**
   ```bash
   php artisan migrate
   ```

4. **Build Assets**
   ```bash
   npm run build
   ```

5. **Start Development Server**
   ```bash
   php artisan serve
   ```

6. **Visit Application**
   
   Open your browser to `http://localhost:8000`

## Development Mode (Optional)

For hot-reloading during development:
```bash
npm run dev
```
Run this in a separate terminal while `php artisan serve` is running.
