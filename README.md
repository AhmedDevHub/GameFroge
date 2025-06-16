# GameFroge
![web1](https://github.com/user-attachments/assets/3853f80e-40bb-4d70-a508-751fcba1dae9)
![web2](https://github.com/user-attachments/assets/3d783362-1100-477f-bf12-985cf25b09c8)
![web3](https://github.com/user-attachments/assets/4ab7bdff-1177-4cb8-8993-199dbcc2eeab)


[![Live on Vercel](https://img.shields.io/badge/Live%20Site-Vercel-blue?style=for-the-badge)](https://game-froge-rosy.vercel.app/)


Welcome to GameFroge - Your Ultimate Gaming Companion! 🎮

GameFroge is a modern, feature-rich gaming platform designed to enhance your gaming experience. With a sleek, responsive interface and powerful features, it helps you:

- Discover new games with advanced search and filtering
- Track your favorite games in your personal watch list
- Connect with other gaming enthusiasts
- Stay updated with the latest gaming news and releases
- Manage your gaming profile with customizable settings

Built with cutting-edge technologies and best practices, GameFroge offers a seamless, performant experience for gaming enthusiasts of all types.

## Features

- User Authentication & Authorization
- Game Browsing & Search
- Personal Profile Management
- Watch List for Tracking Games
- Modern, Responsive UI with Radix UI Components
- Real-time Notifications
- Secure API Integration

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anas-magdy/GameFroge.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Copy `.env.example` to `.env` and update the environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

## Project Structure

```
src/
├── app/              # Main application routes and pages
├── components/       # Reusable UI components
├── lib/              # Utility functions and configurations
├── middleware.ts     # Next.js middleware
├── models/           # MongoDB models
└── providers/        # Context providers
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Next.js Team
- Vercel
- Radix UI Team
- All contributors
