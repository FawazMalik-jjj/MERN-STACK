const nodeAddresses = [
  {
    id: 1,
    name: "Node A",
    address: "0x1234567890123456789012345678901234567890",
  },
  {
    id: 2,
    name: "Node B",
    address: "0x0987654321098765432109876543210987654321",
  },
  {
    id: 3,
    name: "Node C",
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
  },
];

const walletDetails = {
  address: "0x1234567890123456789012345678901234567890",
  balance: 100,
  transactions: [
    {
      id: 1,
      from: "0x0987654321098765432109876543210987654321",
      to: "0x1234567890123456789012345678901234567890",
      amount: 50,
      timestamp: "2022-03-08T08:30:00Z",
    },
    {
      id: 2,
      from: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
      to: "0x1234567890123456789012345678901234567890",
      amount: 25,
      timestamp: "2022-03-08T09:15:00Z",
    },
    {
      id: 3,
      from: "0x0987654321098765432109876543210987654321",
      to: "0x1234567890123456789012345678901234567890",
      amount: 10,
      timestamp: "2022-03-08T10:00:00Z",
    },
  ],
};

export { nodeAddresses, walletDetails };
