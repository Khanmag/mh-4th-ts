type bigObj2Type = {
  name: string;
  age: number | null;
  adress: {
    city: City;
    street: string;
    house: number;
    floor?: number;
  };
  orders: number[][];
  etAddress(): string;
};

type City = "Moscow" | "Saint-Petersburg";


const bigObj2: bigObj2Type = {
  name: "Anna",
  age: 37,
  adress: {
    city: "Moscow",
    street: "Arbat",
    house: 1,
    floor: 5,
  },
  orders: [
    [100200301, 1],
    [100232577, 5],
  ],
  etAddress() {
    return `${this.adress.city}, ${this.adress.street}, ${this.adress.house}`;
  },
};
