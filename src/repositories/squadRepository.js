import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllSquads = async () => {
    return await prisma.squad.findMany();
};

export const getSquadById = async (id) => {
    return await prisma.squad.findUnique({
        where: { id },
    });
};

// Nova função para obter um squad por e-mail
export const getSquadByEmail = async (email) => {
    return await prisma.squad.findUnique({
        where: { email },
    });
};

export const createSquad = async (squadData) => {
    return await prisma.squad.create({
        data: squadData,
    });
};

export const updateSquad = async (id, squadData) => {
    return await prisma.squad.update({
        where: { id },
        data: squadData,
    });
};

export const deleteSquad = async (id) => {
    return await prisma.squad.delete({
        where: { id },
    });
};