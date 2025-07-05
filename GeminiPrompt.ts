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
        Authorization: `AIzaSyCg1jV45IORg1fs1Zrgd7JI2n1d5T2um4o`
      }
    }
  );
  return response.data;
}