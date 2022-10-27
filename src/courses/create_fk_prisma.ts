import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de angular ",
      duration: 200,
      description: "Curso de angular",
      fk_id_teacher: "24e762ff-0029-4ce0-b0fb-9c0d54f271f1",
    },
  });

  console.log(result);
}

main()