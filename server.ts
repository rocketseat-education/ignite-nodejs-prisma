import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() // crio a instancia do prisma client 


async function main() {
  const result = await prisma.courses.create({ // acesso a tabela courses
    data: { // acesso a coluna de atributos 
      duration: 200,
      name: 'Curso de Python',
      description: 'curso de python doidao',
    }
  })

  console.log(result)
}

main();