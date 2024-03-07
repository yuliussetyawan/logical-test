const outlets = [
  { id: 11, name: "Hik Jo" },
  {
    id: 12,
    name: "Outlet 1",
  },
];

const products = [
  {
    id: 1,
    outlet_id: 11,
    name: "Bakso Bakar",
  },
  {
    id: 2,
    outlet_id: 11,
    name: "Bakso Goreng",
  },
  {
    id: 3,
    outlet_id: 12,
    name: "Es Teh",
  },
];

function manipulateArr(outlets, products) {
  return outlets.map((outlet) => ({
    ...outlet,
    Products: products.filter((product) => product.outlet_id === outlet.id),
  }));
}

console.log(JSON.stringify(manipulateArr(outlets, products)));

/* Output:
[
  {
    id: 11,
    name: "Hik Jo",
    Products: [
      { id: 1, outlet_id: 11, name: "Bakso Bakar" },
      { id: 2, outlet_id: 11, name: "Bakso Goreng" },
    ],
  },
  {
    id: 12,
    name: "Outlet 1",
    Products: [{ id: 3, outlet_id: 12, name: "Es Teh" }],
  },
];
*/