import catService from "./cat.service.ts"
import { getAiResponse } from "./gemini.service.ts";

export const aiRecommendedService = async (kidsFriendly: boolean, appartmentFriendly: boolean) => {
    const matchCatsFromDb = await catService.recommend(kidsFriendly, appartmentFriendly);

    const prompt = `
You are a professional cat expert and breeder with extensive knowledge of cat breeds, behavior, temperament, energy levels, and suitability for different lifestyles.

User Preferences:
- Kids Friendly: ${kidsFriendly}
- Apartment Friendly: ${appartmentFriendly}

Your task is to analyze these preferences and recommend the most suitable cat breeds.

Requirements:
1. Consider the user's preferences carefully.
2. Compare multiple cat breeds that match the criteria.
3. Rank the top 5 most suitable breeds from best to worst.
4. For each breed provide:
   - Breed Name
   - Compatibility Score (out of 10)
   - Why it matches the user's preferences
   - Pros
   - Cons
5. Explain why the #1 recommendation is the best choice.
6. If a breed is not suitable, explain why.
7. Be concise but informative.
8. Use a friendly and professional tone.

Response Format:

# Top Cat Breed Recommendations

## 1. Breed Name
Score: X/10

Why it matches:
- ...

Pros:
- ...
- ...

Cons:
- ...
- ...

## 2. Breed Name
...

# Best Overall Recommendation

Explain why this breed is the best fit for the user based on the provided preferences.
    `;

    const aiResponse = await getAiResponse(prompt);

    return aiResponse;
}