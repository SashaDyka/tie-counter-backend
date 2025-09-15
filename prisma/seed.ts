import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  console.log('Filling the database...');

  const bill1 = await prisma.bill.create({
    data: {
      totalAmount: 8000.0,
      defaultTipPercentage: 10,
      people: {
        create: [
          { name: 'Anna' },
          { name: 'Ivan' },
          { name: 'Merry' },
          { name: 'Den' },
        ],
      },
    },
  });
  console.log(`Create bill with ID: ${bill1.id} `);

  const bill2 = await prisma.bill.create({
    data: {
      totalAmount: 3500.0,
      defaultTipPercentage: 15,
      people: {
        create: [
          { name: 'Jon', individualAmount: 150.0 },
          { name: 'Emma', individualAmount: 200.0 },
          { name: 'Kate', individualAmount: 200.0 },
        ],
      },
    },
  });
  console.log(`Create bill with ID: ${bill1.id} `);

  const bill3 = await prisma.bill.create({
    data: {
      totalAmount: 5000.0,
      defaultTipPercentage: 20,
      people: {
        create: [
          { name: 'Olha', individualTipPercentage: 15 },
          { name: 'Nikita', individualAmount: 180.0 },
          { name: 'Sasha' },
        ],
      },
    },
  });
  console.log(`Create bill with ID: ${bill1.id} `);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });