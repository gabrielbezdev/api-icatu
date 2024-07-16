import * as squadService from '../services/squadService.js';

export const getAllSquads = async (req, res) => {
    try {
        const squads = await squadService.getAllSquads();
        res.status(200).json(squads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getSquadById = async (req, res) => {
    try {
        const squad = await squadService.getSquadById(req.params.id);
        res.status(200).json(squad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createSquad = async (req, res) => {
    try {
        const newSquad = await squadService.createSquad(req.body);
        res.status(201).json(newSquad);
    } catch (error) {
        if (error.message === 'A equipe que você está tentando criar já existe!') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

export const updateSquad = async (req, res) => {
    try {
        const updatedSquad = await squadService.updateSquad(req.params.id, req.body);
        res.status(200).json(updatedSquad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteSquad = async (req, res) => {
    try {
        await squadService.deleteSquad(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
