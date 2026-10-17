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
    const wotdWord = wotd.name.charAt(0).toUpperCase() + wotd.name.slice(1); // Capitalize word
    const wotdAudio = wotd.audioUrl; // audio
    const wotdGloss1 = wotd.meanings[0].senses[0].glosses[0]; // glossary 1
    const wotdGloss2 = wotd.meanings[0].senses[1].glosses[0]; // glossary 2
    const wotdExamples = wotd.meanings[0].senses[0].examples[0]; // example sentence
    const wotdEtimology = wotd.meanings[0].etymology; // etymology

    // Create the message payload
    const discordPayload = {
      content: `🎨 Today's word is **${wotdWord}**!`,
      embeds: [
        {
          title: `Meet ${wotdWord}!`,
          description: `
          **Pronunciation**: ${wotdAudio}
          **Meaning 1**: ${wotdGloss1}
          **Meaning 2**: ${wotdGloss2}
          **Example**: ${wotdExamples}
          **Etymology**: ${wotdEtimology}
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
