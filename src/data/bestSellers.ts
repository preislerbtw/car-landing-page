export interface BestSeller {
  id: string;
  name: string;
  category: string;
  priceFrom: string;
}

export const bestSellers: BestSeller[] = [
  {
    id: "1",
    name: "Fiat Strada",
    category: "Picape Compacta",
    priceFrom: "R$ 98.990",
  },
  {
    id: "2",
    name: "Chevrolet Onix",
    category: "Hatch",
    priceFrom: "R$ 84.990",
  },
  {
    id: "3",
    name: "Hyundai HB20",
    category: "Hatch",
    priceFrom: "R$ 79.990",
  },
];