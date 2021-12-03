import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura limpa",
      author_id: "d669ef20-2f4e-4645-9608-6b35babf0e4e",
    },
  });

  console.log(result);
}

main();
