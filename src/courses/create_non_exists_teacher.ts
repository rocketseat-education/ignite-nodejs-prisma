import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso2 de Java",
      duration: 500,
      description: "Curso de Java 17",
      teacher: {
        connect: {
          name: 'Marcelo',
        },
      },
    },
  });

  console.log(result);
}
main()