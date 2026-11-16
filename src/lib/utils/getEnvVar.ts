export function getEnvVar(name: string): string {
  const value = process.env[name];
  if (value !== undefined) {
    return value;
  }
  throw new Error(`Environment variable ${name} is not defined`);
} 
