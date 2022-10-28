import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create_autohor() {
  const result = await prisma.authors.create({
    data: {
      name: "Mayk Brito",
      books: {
        createMany: {
          data: [
            { name: "Como começar  na programação" },
            { name: "Como ser muito produtivo" },
          ],
        },
      },
    },
  });

}