// Завдання 1. Задайте правильні ts типи для класичних js;
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => { return 100 + a };

// Завдання 2. Задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything: any = -20;
anything = 'Text';
anything = {};

// Завдання 3. Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some:string;
some = 'Text';

let str: string;

str = some;

// Завдання 5. Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
type array =[string, number]
let person: array = ['Max', 21];

// Завдання 6. Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

enum Loading {
  LOADING,
  READY
}

// Завдання 7. Зробіть змінну, яка може приймати або рядок, або число.

let userAge: string | number = 12
userAge = '10'

// Завдання 8. Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let status: "enable" | "disable" = "disable"
status = "enable"


// Завдання 9. Створіть свій тип даних на основі наявних даних.

function showMessage(message: string): void {
  console.log(message);
}
 
function calc(num1: number, num2: number): number {
  return num1 + num2;
 }
 
function customError(): void {
  throw new Error('Error');
}

// Завадання 10. Створіть свій тип даних на основі наявних даних.

type PageType = {
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}

const page1: PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
 }
 
 const page2: PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
 }