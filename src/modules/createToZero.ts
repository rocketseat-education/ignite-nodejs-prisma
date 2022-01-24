import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "Curso de NodeJS",
          description: "Curso completo de NodeJS",
        },
      },
      module: {
        create: {
          description: "Curso completo de PrismaIO",
          name: "PrismaIO",
        },
      },
    },
  });

  console.log(result);
}

main();
