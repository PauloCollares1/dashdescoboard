import prisma from "@/prisma/conection";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const { userId } = auth();

console.log("o user id desse cara é: ", userId);

export const POST = async (req: Request) => {
  try {
    const { email } = await req.json();

    const sprint = await prisma.user.create({
      data: {
        email,
      },
    });
    return NextResponse.json(sprint);
  } catch (error) {
    console.log("Erro na requisição POST da rota de Sprints", error);
    return NextResponse.json({
      error: "Erro na requisição POST da rota de Sprints",
      status: 500,
    });
  }
};

export const GET = async (req: Request) => {
  try {
  } catch (error) {
    console.log("Erro na requisição GET da rota de Sprints", error);
    return NextResponse.json({
      error: "Erro na requisição POST da rota de Sprints",
      status: 500,
    });
  }
};

export const PUT = async (req: Request) => {
  try {
  } catch (error) {
    console.log("Erro na requisição PUT da rota de Sprints", error);
    return NextResponse.json({
      error: "Erro na requisição POST da rota de Sprints",
      status: 500,
    });
  }
};

export const DELETE = async (req: Request) => {
  try {
  } catch (error) {
    console.log("Erro na requisição PUT da rota de Sprints", error);
    return NextResponse.json({
      error: "Erro na requisição POST da rota de Sprints",
      status: 500,
    });
  }
};
