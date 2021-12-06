import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "a865dfff-d1d7-4129-93c8-8027a95707d5",
    },
  });

  console.log(result);
}

main();
