import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 150,
      name: "Curso de php",
      description: "Curso excelente de php",
    },
  });

  console.log(result);
}

main();
