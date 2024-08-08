import { z } from 'zod';
import express from "express";

/* Type inference in zod */
//When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information
// More details - https://zod.dev/?id=type-inference

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});


/*
 THIS LINE NEVER REACHED INSIDE DIST .JS FILE BECAUSE IT IS REALTED TO TS 
 IT TELLS US HOW CAN WE USE TS IN ZOD
  */
type finalUserSchema = z.infer<typeof userProfileSchema>


app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: finalUserSchema = req.body; // how to assign a type to updateBody?

    if (!success) {
        res.status(411).json({});
        return
    }
    // update database here
    res.json({
        message: "User updated"
    })
});

app.listen(3000);