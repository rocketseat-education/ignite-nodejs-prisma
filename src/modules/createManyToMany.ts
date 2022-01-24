import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "e27d03d2-f5ca-4f0c-908e-1d1bdda7a83e",
      fk_id_module: "81d0aea2-a1b2-48bd-b377-f8085fe7e2b9",
    },
  });

  console.log(result);
}

main();
