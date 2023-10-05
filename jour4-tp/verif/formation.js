import 'text-encoding-polyfill'
import JOI from "joi";

export const schemaFormation = JOI.object({
    nom : JOI.string().min(3).max(255).required() ,
    description : JOI.string().min(3).max(10000).required(),
    date_debut : JOI.date().required()
});