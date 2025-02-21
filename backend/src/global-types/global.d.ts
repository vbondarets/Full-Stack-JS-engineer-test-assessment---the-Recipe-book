declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: string;
    RECIPE_API_URL: string;
    FALLBACK_LANGUAGE: string;
  }
}
