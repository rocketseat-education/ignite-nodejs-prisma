import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.teachers.create({
    data: {
      name: 'Rodolfinho',
    },
  })
  console.log(result);
}


main()