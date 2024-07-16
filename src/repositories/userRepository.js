import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.user.findMany();
};

export const getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: {id},
    });
};

export const createUser = async (userData) => {
    return await prisma.user.create({
        data: userData,
    });
};

export const updateUser = async (id, userData) => {
    return await prisma.user.update({
        where: {id},
        data: userData,
    });
};

export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: {id},
    });
};
