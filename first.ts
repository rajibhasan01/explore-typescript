let money: number = 5;
let honey: string = "O my sweet Heart honey dew dew peu peu";
let funny: boolean = false;


function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = add(45, 87);

function doubleConsole(number: number): void {
    console.log(2 * number);
}


/*
// multi purpose
function add(first: number | string, second: number | string): number | string {
    const result: string | number = first + second;
    return result;
}

const output: number = add(45, 87);
const fullName = add('Adam', 'Sand');
*/