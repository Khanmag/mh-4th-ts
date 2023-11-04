type bigObj = bigObjType;

const bigObj = {
    name: 'Anna',
    age: 37,
    adress: {
        city: 'Moscow',
        street: 'Arbat',
        house: 1,
        floor: 5,
    },
    orders: [
        [100200301, 1],
        [100232577, 5],
    ],
    etAddress() {
        return `${this.adress.city}, ${this.adress.street}, ${this.adress.house}` 
    }
}

type bigObjType = {
    name: string;
    age: number | null;
    adress: {
        city: cityName;
        street: string;
        house: number;
        floor?: number;
    },
    orders:[number, number];
    getAddress: () => string;
}

enum cityName { 
    moskow = 'Moscow', 
    saintPetersburg = 'Saint-Petersburg',
};
