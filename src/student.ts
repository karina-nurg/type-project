export type Student = {
  fullName: string
  group: string
  grades: number[]
   address: {
   city: string;
   street: string;
   houseNumber: number;
 };

}

export const student1: Student = {
  fullName: 'Иван Иванов',
  group: 'Группа 1',
  grades: [5, 4, 3, 5, 2],
  address: {
    city: 'Алматы',
    street: 'ул. Ленина',
    houseNumber: 10
  }
};

export function printStudentInfo(student: Student): void {
  console.log(`Имя: ${student.fullName}`);
  console.log(`Группа: ${student.group}`);
  console.log(`Оценки: ${student.grades.join(', ')}`);
  console.log(`Адрес: ${student.address.city}, ${student.address.street}, д. ${student.address.houseNumber}`);
}

printStudentInfo(student1)