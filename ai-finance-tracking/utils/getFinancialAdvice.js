// // utils/getFinancialAdvice.js
// import OpenAI from "openai";

// // Initialize the OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// // Function to fetch user-specific data (mocked for this example)

// // Function to generate personalized financial advice
// const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
//   console.log(totalBudget, totalIncome, totalSpend);
//   try {
//     const userPrompt = `
//       Based on the following financial data:
//       - Total Budget: ${totalBudget} USD 
//       - Expenses: ${totalSpend} USD 
//       - Incomes: ${totalIncome} USD
//       Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
//     `;

//     // Send the prompt to the OpenAI API
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: userPrompt }],
//     });

//     // Process and return the response
//     const advice = chatCompletion.choices[0].message.content;
//     console.log(userPrompt);
//     console.log(advice);
//     return advice;
//   } catch (error) {
//     console.error("Error fetching financial advice:", error);
//     return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
//   }
// };

// export default getFinancialAdvice;


// utils/getFinancialAdvice.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API client with your API key
const genAI = new GoogleGenerativeAI("AIzaSyDe2IPXV3hR2FCyRcFvyqdLJ4BPlUMttQE");  // Replace with your actual Gemini API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });  // Specify the Gemini model

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} INR
      - Expenses: ${totalSpend} INR
      - Incomes: ${totalIncome} INR
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.  Also suggest ways where the amount can be invested like (gold, property, stocks, IPO, land, Crypto currency) etc to gain profits
    `;

    // Generate content using the Gemini model
    const result = await model.generateContent(userPrompt);

    // Process the result to get the financial advice text
    const advice = result.response.text();
    console.log(userPrompt);
    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;

