import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚀 Welcome to CampusConnect AI</h1>
      <p>Find personalized career guidance powered by Gemini and Firebase.</p>

      <ul>
        <li><a href="/CareerAssistant">🎓 Career Assistant</a></li>
        <li><a href="/Opportunities">🗺️ Opportunity Matcher</a></li>
        {/* Add more links here as your features grow */}
      </ul>
    </main>
  )
}