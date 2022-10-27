import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React Native ',
      description: 'Curso excelente de React Native',
      duration: 400,
      teacher: {
        create: {
          name: 'Rodolfinho',
        }
      },
    },
  });

  console.log(result)
}

main()