const axios = require('axios');

// Your Discord webhook URL
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// Function to get the word of the day from the dictionary API
async function getWordOfTheDay() {
  try {
    // Make a request to the dictionary API for the word of the day
    const response = await axios.get(`https://api.suvankar.cc/dictionaryapi/v1/wordoftheday`);
    
    // Extract word details
    const wotd = response.data;
    const wotdWord = wotd.word.charAt(0).toUpperCase() + wotd.word.slice(1); // Capitalize word
    const wotdPartOfSpeech = wotd?.meanings?.[0]?.partOfSpeech  ?? "No part of speech available"; // Part of speech
    const wotdGloss1 = wotd?.meanings?.[0]?.senses?.[0]?.glosses?.[0]  ?? "No definition available"; // Glossary 1
    const wotdGloss2 = wotd?.meanings?.[1]?.senses?.[0]?.glosses?.[0]  ?? "No secondary definition available"; // Glossary 2
    const wotdExamples = wotd?.meanings?.[0]?.senses?.[0]?.examples?.[0]  ?? "No example available"; // Example
    const wotdEtymology = wotd?.meanings?.[0]?.etymologyText  ?? "No etymology available"; // Etymology

    // Create the message payload
    const discordPayload = {
      content: ``,
      embeds: [
        {
          title: `📝 Today's Word is ${wotdWord}!`,
          description: `
          \n**Part of Speech**: ${wotdPartOfSpeech}
          
          **Meaning 1**: ${wotdGloss1}
          
          **Meaning 2**: ${wotdGloss2}
          
          **Example**: ${wotdExamples}
          
          **Etymology**: ${wotdEtymology}
          `,
          color: 0x1e90ff, // Optional: Embed color in hexadecimal
        },
      ],
    };

    // Send the message to the Discord webhook
    await axios.post(DISCORD_WEBHOOK_URL, discordPayload);

    console.log(`Notification sent for ${wotdWord} with details!`);
  } catch (error) {
    console.error('Error fetching word or sending webhook:', error.message);
  }
}

// Call the function to get the word of the day and send the notification
getWordOfTheDay();
