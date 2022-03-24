/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
export function getPersons() {
    let name: string;
    let age: number;
    let gender: 'male' | 'female';
    return [{ name, age, gender }];
}

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
export function personToString(person: {
    name: string;
    age: number;
    gender: 'male' | 'female';
    company?: string;
}): string {
    if (person.company !== undefined) {
        return `${person}`;
    }
    return `${person}`;
}
