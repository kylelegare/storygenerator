import { apiKey } from "./secrets";

const generateStoryButton = document.getElementById("generate-story-button");
const generatedStoryDiv = document.getElementById("generated-story");

generateStoryButton.addEventListener("click", async () => {
  // Retrieve the values entered in the form's text boxes
  const characterName = document.getElementById("character-name").value;
  const characterProblem = document.getElementById("character-problem").value;
  const storyLocation = document.getElementById("story-location").value;

  // Generate the prompt for the story
  const prompt = `Please write a children's story with the main character named "${characterName}" who has to deal with "${characterProblem}" and the story takes place in "${storyLocation}".`;

  // Use the OpenAI API to generate the story based on the prompt
  const response = await fetch(
    `https://api.openai.com/v1/completions?prompt=${encodeURIComponent(prompt)}&api_key=${apiKey}`
  );

  // Check if the response is defined
  if (response) {
    // Display the generated story on the web page
    generatedStoryDiv.innerHTML = response.data.story;
  }
});
