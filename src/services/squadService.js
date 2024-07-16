import * as squadRepository from '../repositories/squadRepository.js';

export const getAllSquads = () => {
    return squadRepository.getAllSquads();
};

export const getSquadById = (id) => {
    return squadRepository.getSquadById(id);
};

export const createSquad = async (squadData) => {
    const existingSquad = await squadRepository.getSquadById(squadData.name);
    if (existingSquad) {
        throw new Error('A equipe que você está tentando criar já existe!');
    }
    return squadRepository.createSquad(squadData);
};

export const updateSquad = (id, squadData) => {
    return squadRepository.updateSquad(id, squadData);
};

export const deleteSquad = (id) => {
    return squadRepository.deleteSquad(id);
};
