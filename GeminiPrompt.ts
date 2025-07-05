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
        Authorization: AIzaSyCh1Z6KcVHb0eZ55MwLEFEnwZ_uL6BVWC0
      }
    }
  );
  return response.data;
}