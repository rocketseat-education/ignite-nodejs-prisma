import { PrismaClient } from "@prisma/client";


const prisma  = new PrismaClient();


async function main() {
  
  // select * from courses limit 1 
  const course1 = await prisma.courses.findFirst();
  console.log(course1);

  // select * from courses order by id desc limit 1
  const course2 = await prisma.courses.findFirst({
    take: -1 
  })

  console.log(course2)
  
}

main()