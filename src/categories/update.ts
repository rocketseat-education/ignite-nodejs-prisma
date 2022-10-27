import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.update({
    where: {
      id: '29e22445-4648-4dae-b371-4a0a8babeca0'
    },
    data: {
      duration: 300,
      description: 'testando testando testando - aaaaaa riririririri',
    },
  })
  console.log(result)
}

main()