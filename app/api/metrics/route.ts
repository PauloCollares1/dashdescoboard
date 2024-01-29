import prisma from "@/prisma/conection";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const x = await req.json();

    const teste = await prisma.metricas.create({
      data: x,
    });
    return NextResponse.json("sss");
  } catch (error) {
    console.log("Erro na requisição POST da rota de Sprints", error);
    return NextResponse.json({
      error: "Erro na requisição POST da rota de Sprints",
      status: 500,
    });
  }
};

export const GET = async (req: Request, res: Request) => {
  try {
    const recivedData = await prisma.metricas.findMany();
    return NextResponse.json(recivedData);
  } catch (error) {
    console.log("Erro na requisição GET da rota de Sprints", error);
    return NextResponse.json({
      error: "Erro na requisição POST da rota de Sprints",
      status: 500,
    });
  }
};

// export const PUT = async (req: Request) => {
//   try {
//   } catch (error) {
//     console.log("Erro na requisição PUT da rota de Sprints", error);
//     return NextResponse.json({
//       error: "Erro na requisição POST da rota de Sprints",
//       status: 500,
//     });
//   }
// };

// export const DELETE = async (req: Request) => {
//   try {
//   } catch (error) {
//     console.log("Erro na requisição PUT da rota de Sprints", error);
//     return NextResponse.json({
//       error: "Erro na requisição POST da rota de Sprints",
//       status: 500,
//     });
//   }
// };
