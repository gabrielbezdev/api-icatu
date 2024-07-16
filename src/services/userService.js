import * as userRepository from '../repositories/userRepository.js';

export const getAllUsers = () => {
    return userRepository.getAllUsers();
};

export const getUserById = (id) => {
    return userRepository.getUserById(id);
};

export const createUser = async (userData) => {
    const existingUser = await userRepository.getUserById(userData.email);
    if (existingUser) {
        throw new Error('Email already in use');
    }
    return userRepository.createUser(userData);
};

export const updateUser = (id, userData) => {
    return userRepository.updateUser(id, userData);
};

export const deleteUser = (id) => {
    return userRepository.deleteUser(id);
};
