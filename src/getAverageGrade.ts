export function getAverageGrade(grades: number[]) {
  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }

  return sum / grades.length;
}
