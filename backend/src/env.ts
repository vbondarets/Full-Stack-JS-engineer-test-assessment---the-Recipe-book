import { cleanEnv, num, str } from 'envalid';

export default function checkEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: num(),
    RECIPE_API_URL: str(),
    FALLBACK_LANGUAGE: str(),
  });
}
