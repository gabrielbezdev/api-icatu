import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/users', async (req, res) => {
    const user = await prisma.user.create({
        data:{
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            contact: req.body.contact,
            state: req.body.state,
            city: req.body.city,
            blood_type: req.body.blood_type,
            allergies: req.body.allergies,
            medications_in_use: req.body.medications_in_use,
            emergency_contact_name: req.body.emergency_contact_name,
            emergency_contact: req.body.emergency_contact
        }
    })
    res.status(201).json(user)
})

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.put('/users/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data:{
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            contact: req.body.contact,
            state: req.body.state,
            city: req.body.city,
            blood_type: req.body.blood_type,
            allergies: req.body.allergies,
            medications_in_use: req.body.medications_in_use,
            emergency_contact_name: req.body.emergency_contact_name,
            emergency_contact: req.body.emergency_contact
        }
    })
    res.status(201).json(user)
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: "User deleted"})
})

app.listen(3000)