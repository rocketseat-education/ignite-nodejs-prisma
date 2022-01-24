import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "e38d73bd-a1ee-42fc-a036-8e392eaa79d5",
    },
    data: {
      duration: 300,
      name: "Curso muito bom de React Native",
      description: "Curso muito bom de React Native com Rodrigão",
    },
  });

  console.log(result);
}

main();
