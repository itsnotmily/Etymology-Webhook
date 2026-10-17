# **Automated Discord Webhook Messages Using an Etymology API**

📚 A Node.js project designed to send a **Word of the Day with its etymology** to Discord channels via webhooks. Using an etymology API or dictionary data source, the project automatically shares a daily word, its definition, origin, and historical development. This repository is ideal for vocabulary building, language learning, and discovering the fascinating histories behind words.
It uses https://api.suvankar.cc/ free api for getting the information

---

## **Features**

- 📖 **Daily Word Notifications:** Automatically shares a new word every day, including its definition and etymology.
- 🕒 **Automated Scheduling:** Configurable daily notifications using GitHub Actions.
- 🎨 **Rich Discord Embeds:** Displays the word, definition, language of origin, historical background, and example usage in a clean, structured embed.
- 🌍 **Explore Word Origins:** Discover how words developed over time and how they entered the English language.
- 🔌 **API Integration:** Fetches word data from an external etymology API or dictionary data source.
- 🔒 **Secure Webhook Integration:** Stores the Discord webhook URL securely using GitHub Actions secrets.

---

## **How It Works**

1. **Fetch Word Data via API:**
   - Makes API calls to an etymology API or dictionary data source to retrieve information about a word.
   - Uses https://api.suvankar.cc/ free api
   - Collects available details, such as the definition, language of origin, historical forms, and etymological notes.
   - Selects a word to feature as the Word of the Day.

2. **Format the Discord Message:**
   - Formats the retrieved information into a rich Discord embed.
   - Includes the word, definition, etymology, and an example sentence when available.
   - Adds a source link where possible so readers can explore the word further.

3. **Send to Discord:**
   - Sends the formatted message to a Discord channel using a webhook URL.
   - Presents the daily word in an easy-to-read format.

4. **Automate with GitHub Actions:**
   - Runs the script automatically every day at a configurable time.
   - Supports manual execution for testing or sending a word on demand.

---


## **Example Discord Output**

📝 Today's Word is Exploration!
Part of Speech: noun

Meaning 1: The process of exploring.

Meaning 2: The (pre-)mining process of finding and determining commercially viable ore deposits (after prospecting), also called mineral exploration.

Example: By this time, largely inspired by The Railway Magazine, I had begun to spread my wings, and had started on a long career of railway exploration.

Etymology: From Middle French exploration, from Latin exploratio. Morphologically explore + -ation.
---

## **Customization**

- **Change the API Provider:** Replace the default data source with an etymology API, Wiktionary-based source, or dictionary API that supplies etymological information.
- **Customize the Embed:** Add pronunciation, phonetic transcription, part of speech, synonyms, example sentences, or historical word forms.
- **Choose a Theme:** Focus on English word origins, words borrowed from other languages, archaic words, scientific terminology, or unusual vocabulary.
- **Avoid Repeated Words:** Store previously published words and exclude them from future selections.
- **Adjust the Schedule:** Change the GitHub Actions cron expression to send notifications at your preferred time.
- **Add Source Links:** Include a link to the dictionary or etymological reference used for each word.

---

## **Future Enhancements**

- 🌟 Support multiple etymology and dictionary APIs.
- 🧠 Introduce themed word collections, such as Latin roots, Greek origins, and Old English vocabulary.
- 📅 Maintain a history of published words to prevent duplicates.
- 🔊 Include pronunciation guides or audio where available.
- 🌐 Support words from multiple languages.
- 📝 Add a weekly recap featuring all words shared during the week.
- 🎯 Allow users to request the etymology of a specific word through Discord commands.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
# **Contact**

Have questions or suggestions? Open an issue in the GitHub repository or get in touch through GitHub.
