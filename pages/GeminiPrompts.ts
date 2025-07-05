import axios from 'axios';

export async function getCareerSuggestions(promptText: string) {
  const response = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    {
      contents: [{
        parts: [{ text: `You are a professional career coach. ${promptText}` }]
      }]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer YOUR_GEMINI_API_KEY`
      }
    }
  );
  return response.data;
}