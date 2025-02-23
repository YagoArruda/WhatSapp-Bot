const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const schedule = require('node-schedule');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('Escaneie este QR Code com o WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Coletando IDs');
    console.log('#############################');

    let chats = await client.getChats();
    let grupos = chats.filter(chat => chat.isGroup);

    chats.forEach(chat => {
        console.log(`Nome: ${chat.name} | ID: ${chat.id._serialized}`);
        console.log('-----------------------------');
    });

    console.log('Coleta de IDs finalizada....'); // Aqui você pode colocar uma indicação de que a coleta foi concluída
    client.destroy();
});

client.initialize();
