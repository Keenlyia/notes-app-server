import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express()
const prisma = new PrismaClient();

app.use(express.json())
app.use(cors())

app.get("/notes", async (req, res) => {

    const notes = await prisma.note.findMany();

    res.json(notes)
})

app.post("/notes", async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = await prisma.note.create({
        data: { title, content }
    });
    res.json(note);
    } catch (error) {
        res.status(500).send("Ooops something went wrong")
    }
});

app.put("/notes/:id", async(req, res) => {
    const { title, content } = req.body
    const id = parseInt(req.params.id)

    try {
        const updatedNote = await prisma.note.update({
            where: { id },
            data: { title, content }
        })
        res.json(updatedNote)
    } catch (error) {
        res.status(500).send("Ooops something went wrong")
    }
})

app.delete("/notes/:id", async(req, res) => {
    const id = parseInt(req.params.id)

    try {
        await prisma.note.delete({
            where: { id },
        })
        res.status(204).send();
    } catch (error) {
        res.status(500).send("Ooops something went wrong")
    }
})


app.listen(5000, () => {
    console.log("server running on localhost:5000")
})