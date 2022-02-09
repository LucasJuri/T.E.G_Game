const express = require("express");
const res = require("express/lib/response");

const app = new express();;

app.listen(3000,  (req, res) => {
    console.log("server iniciado");
});