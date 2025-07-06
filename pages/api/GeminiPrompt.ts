import axios from 'axios';

export async function getCareerSuggestions(promptText: string) {
  const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'),
    {
      contents: [{
        parts: [{ text: `You are a professional career coach. ${promptText}` }]
      }]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization:'AIzaSyD4Ph_o7alzwdTl-WgSZsDj0cWLqJWLS7o'
      }
    }
  );
  return response.data;
}