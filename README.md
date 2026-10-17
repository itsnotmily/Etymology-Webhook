# **Automated Discord Webhook Messages Using an Etymology API**

📚 A Node.js project designed to send a **Word of the Day with its etymology** to Discord channels via webhooks. Using an etymology API or dictionary data source, the project automatically shares a daily word, its definition, origin, and historical development. This repository is ideal for vocabulary building, language learning, and discovering the fascinating histories behind words.

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

## **Setup Instructions**

### Prerequisites

- Node.js installed on your system.
- A Discord webhook URL. Learn how to create one [here](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
- An etymology API or dictionary data source that provides word-origin information.
- A GitHub repository for automated scheduling.

### Local Development

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/Discord-Webhook-Sender.git
   cd Discord-Webhook-Sender
   ```

2. **Navigate to the Word of the Day Directory:**

   ```bash
   cd word-of-the-day
   ```

3. **Configure Your Discord Webhook:**

   Set the `DISCORD_WEBHOOK_URL` environment variable to your Discord webhook URL.

   ```bash
   # Linux/macOS
   export DISCORD_WEBHOOK_URL="YOUR_DISCORD_WEBHOOK_URL"
   ```

   On Windows PowerShell:

   ```powershell
   $env:DISCORD_WEBHOOK_URL="YOUR_DISCORD_WEBHOOK_URL"
   ```

4. **Install Dependencies:**

   ```bash
   npm install axios
   ```

5. **Run the Script:**

   ```bash
   node word-of-the-day.js
   ```

   The script fetches a word and its available etymological information, formats the result, and sends it to your Discord channel.

---

## **Automation via GitHub Actions**

This project uses GitHub Actions to send a Word of the Day automatically.

### 1. Configure the Schedule

The workflow is defined in:

```text
.github/workflows/word-of-the-day.yml
```

Example workflow configuration:

```yaml
name: Daily Word of the Day

on:
  schedule:
    - cron: '0 9 * * *'
  workflow_dispatch:

jobs:
  send-word:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install axios

      - name: Send Word of the Day
        run: node word-of-the-day/word-of-the-day.js
        env:
          DISCORD_WEBHOOK_URL: ${{ secrets.DISCORD_WEBHOOK_URL }}
```

**Note:** GitHub Actions cron schedules use UTC. The example runs at 09:00 UTC daily. Scheduled workflows can occasionally be delayed, and the workflow must be on the repository's default branch.

### 2. Configure Your Webhook Secret

1. Navigate to your GitHub repository.
2. Open **Settings → Secrets and variables → Actions**.
3. Create a repository secret named `DISCORD_WEBHOOK_URL`.
4. Paste your Discord webhook URL into the secret value.

The workflow will make this secret available to the script at runtime.

---

## **Example Discord Output**

📚 **Word of the Day: Serendipity**

*Definition:* The occurrence of a fortunate discovery or event by chance.

**Etymology:**
- **Origin:** English
- **Coined by:** Horace Walpole in 1754
- **Historical background:** Inspired by *The Three Princes of Serendip*, a tale about characters who make unexpected discoveries through observation and good fortune.

**Example:** "Finding that old book in a second-hand shop was pure serendipity."

🔗 **Explore further:** [Read more about the word](https://en.wiktionary.org/wiki/serendipity)

*Discover a new word and its history every day!*

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
