export function minLengthValidator(context: {
  requiredLength: string;
}): string {
  return `Минимальная длина — ${context.requiredLength}`;
}
