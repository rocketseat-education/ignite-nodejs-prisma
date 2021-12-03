import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      duration: 300,
      description: "Curso excelente de ReactJS",
      fk_id_teacher: "27d4419b-d786-44cb-a21a-8f2f73b06813",
    },
  });

  console.log(result);
}

main();
