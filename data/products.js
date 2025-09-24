export const products = Array.from({length:1000}).map((_, i) => ({
  id: String(i+1),
  name: `Product ${i+1}`,
  price: Math.floor(Math.random() *990) + 10,
  category: ["Hogar","Electrónica","Ropa","Deporte"][i%4],
}));