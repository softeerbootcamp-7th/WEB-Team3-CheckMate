import { aiIngredientRecommendHandler } from './ingredient/ai-ingredient-recommend/aiIngredientRecommendHandler';
import { storeRegisterHandler } from './onboarding/store-register';

export const handlers = [
  ...storeRegisterHandler,
  ...aiIngredientRecommendHandler,
];
