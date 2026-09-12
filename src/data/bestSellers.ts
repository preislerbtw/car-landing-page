export interface BestSeller {
  id: string;
  name: string;
  category: string;
  priceFrom: string;
}

export const bestSellers: BestSeller[] = [
  {
    id: "1",
    name: "Nissan Silvia S15",
    category: "JDM",
    priceFrom: "R$ 189.990",
  },
  {
    id: "2",
    name: "Chevrolet Corvette C6",
    category: "Esportivo",
    priceFrom: "R$ 299.990",
  },
  {
    id: "3",
    name: "Nissan Skyline R34",
    category: "JDM",
    priceFrom: "R$ 899.990",
  },
];
