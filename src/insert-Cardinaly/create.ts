import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Js',
      duration: 500,
      description: 'Curso de Js realizado pelo professor Ciclano',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Daniela Leao Evangelista'
          },
          create: {
            name: "Daniela Leao Evangelista"
          },
        },
      },
    }
  })

  console.log(result)
}

main()