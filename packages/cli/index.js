// @ts-check
console.log("hello from cli");
import express from "express";
/**
 * @type  { import('express').Application } 
 */
const app = express()
app.get("/test", ()=>{
    
})
/**
 * this methods do cli behaviours
 * @param {string} cliParam - this is description for the param
 *  @return {boolean} - return method boolean as true 
 */
export default (cliParam)=> {
    let depedencies = express;
    console.log(cliParam);
    console.log("dependencies:" , depedencies);
    console.log("cli started")
     
    return true;
}
