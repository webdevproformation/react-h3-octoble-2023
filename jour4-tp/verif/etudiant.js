// stopper le server 
// npm install text-encoding-polyfill
import 'text-encoding-polyfill'
import JOI from "joi";

// JOI est une librairie qui permet d'effectuer plein de test très facilement

export const schemaEtudiant = JOI.object({
    nom : JOI.string().min(3).max(255).required() ,
    age : JOI.number().min(1).max(120).required(),
    email : JOI.string().email({ tlds: { allow: false } }).required()
});

// 11 if ()
// alain@yahoo.fr
