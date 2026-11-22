const axios = require('axios');

// Your Discord webhook URL
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// Function to get the word of the day from the dictionary API
async function getWordOfTheDay() {
  try {
    // Make a request to the dictionary API for the word of the day
    const response = await axios.get(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=eb3c7d039e95539e45003019f660c2215486f80a7772538fe&t=${Date.now()}`);
    
    // Extract word details
    const wotd = response.data;

    const wotdWord = wotd?.word
      ? wotd.word.charAt(0).toUpperCase() + wotd.word.slice(1)
      : 'Unknown';

    const defs = Array.isArray(wotd?.definitions) ? wotd.definitions : [];
    const partOfSpeech = defs[0]?.partOfSpeech ?? 'Not available';

    const definitionsBlock = defs.length
      ? defs
          .slice(0, 2)
          .map((d, i) => `**Meaning ${defs.length > 1 ? i + 1 : ''}**: ${d.text}`.replace(' :', ':'))
          .join('\n\n')
      : '**Meaning**: No definition available';

    const firstExample = wotd?.examples?.[0];
    const exampleText = firstExample?.text
      ? `"${firstExample.text}"${firstExample.title ? ` — *${firstExample.title}*` : ''}`
      : 'No example available';

    const etymology = wotd?.note ?? 'No etymology available';

    const translationResponse = await axios.get(`https://api.mymemory.translated.net/?q=${wotdWord}&langpair=en|pt-PT`);
    const translatedWord = translationResponse.data?.responseData?.translatedText ?? 'No translation available';

    const discordPayload = {
      embeds: [
        {
          title: `📝 Today's Word is ${wotdWord}!`,
          description: [
            `**Part of Speech**: ${partOfSpeech}`,
            definitionsBlock,
            `**Example**: ${exampleText}`,
            `**Etymology**: ${etymology}`,
            `**Translation to Portuguese**: ${translatedWord}`,
          ].join('\n\n'),
          color: 0x1e90ff,
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
