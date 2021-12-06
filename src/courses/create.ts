import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso de Elixir",
      description: "Curso excelente de Elixir Rafa Camarda",
    },
  });

  console.log(result);
}

main();
