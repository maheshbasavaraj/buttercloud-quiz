import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const scenarios = await prisma.scenario.findMany({
    include: {
      components: true,
    },
  });
  console.log(JSON.stringify(scenarios, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });