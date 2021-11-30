import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "180cf0f4-84ad-4f82-8cb3-15b816809f9b",
    },
    data: {
      duration: 250,
      name: "Curso de ReactJS",
    },
  });

  console.log(result);
}

main();
