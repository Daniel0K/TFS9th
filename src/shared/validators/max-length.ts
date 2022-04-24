export function maxLengthValidator(context: {
  requiredLength: string;
}): string {
  return `Максимальная длина — ${context.requiredLength}`;
}
