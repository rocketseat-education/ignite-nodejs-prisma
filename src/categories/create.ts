import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.categories.create({
    data: {
      name: "TI e software",
    },
  });

  console.log(result);
}

main();
