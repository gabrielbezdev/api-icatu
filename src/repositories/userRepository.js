import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            createdAt: true,
            updatedAt: true,
            age: true,
            contact: true,
            state: true,
            city: true,
            blood_type: true,
            allergies: true,
            medications_in_use: true,
            emergency_contact_name: true,
            emergency_contact: true,
            squad: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
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
