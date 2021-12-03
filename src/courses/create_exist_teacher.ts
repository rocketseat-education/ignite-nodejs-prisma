import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      description: "Curso excelente de React Native",
      duration: 300,
      teacher: {
        connect: {
          id: "44c4b53d-1b30-4183-b969-fc707032abe4",
        },
      },
    },
  });

  console.log(result);
}

main();
