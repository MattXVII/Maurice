const Discord = require("discord.js");
const client = new Discord.Client();

client.login("Nzk3ODU0MzUxMjA0ODEwNzYy.X_shxA.NBv2gQxSGACx3FKtiub21hZpbE8");

var embed = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 1 di 17")
    .setImage("https://bit.ly/3hZOQJe%22")

var messaggi = [" Samue mbe chiuda sa vocc", " Mbe zitt Samue", "Guarda Samue, ma quant'e bona l'Azzolina?", "Vu nu gocc d genziana?", "Manduma so it a pija lu pa, tu nsi fatt nind", "Ma tu sti matt", "Samue toccami l'uccello"];

client.on("message", (message) => {
    if (message.content == "m! blasfemus") {
        message.channel.send(embed)
    }
});

client.on("message", (message) => {
    if (message.content == "m! frasi") {
        var random = Math.floor(Math.random() * messaggi.length)
        message.channel.send(messaggi[random]);
    }
});