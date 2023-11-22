// Напишите тип для этого объекта, со следующими условиями:
// - указание этажа не обязательно
// - возраст может быть null
// - город может быть только Moscow или Saint-Petersburg
{
    const bigObj = {
        name: 'Anna',
        age: 37,
        address: {
            city: 'Moscow',
            street: 'Arbat',
            house: 1,
            floor: 5,
        },
        orders: [
            [100200301, 1],
            [100232577, 5],
        ],
        getAddress() {
            return`${this.address.city}, ${this.address.street}, ${this.address.house}`;
        },
    };
}
//
// <<< SOLUTION >>>
{
    type bigObjType = {
        name: string,
        age: number | null,
        address: {
            city: 'Moscow' | 'Saint-Petersburg',
            street: string,
            house: number | string, // if the House Number has a Letter
            floor?: number,
        },
        orders: number[][],
        getAddress(): string,
    };
    //
    const bigObj : bigObjType = {
        name: 'Anna',
        age: 37,
        address: {
            city: 'Moscow',
            street: 'Arbat',
            house: 1,
            floor: 5,
        },
        orders: [
            [100200301, 1],
            [100232577, 5],
        ],
        getAddress() {
            return`${this.address.city}, ${this.address.street}, ${this.address.house}`;
        },
    };
}