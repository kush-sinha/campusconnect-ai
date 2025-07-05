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
        Authorization: `AIzaSyDorG892FuLeknQlSwOjyeswGxZ7cmiD_0`
      }
    }
  );
  return response.data;
}