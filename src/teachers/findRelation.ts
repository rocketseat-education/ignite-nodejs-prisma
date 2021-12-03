import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main() {
  const result = await prismaClient.courses.findMany({
    include: {
      teacher: true,
    },
  });

  console.log(result);
}

main();
