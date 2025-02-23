const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const schedule = require('node-schedule');

// Carregar configuração do JSON
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const mensagens = config.mensagens;

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    preGroupId = console.read
    console.log('Escaneie este QR Code com o WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.clear();
    console.log('Bot online');

    mensagens.forEach(objmensagem => {

        // Agendar a mensagem para minuto/hora/dia/mes/dia da semana
        schedule.scheduleJob(objmensagem.dataHora, async () => {
            const message = objmensagem.mensagem;

            objmensagem.grupos.forEach(async (grupo) => {
                try {
                    let chat = await client.getChatById(grupo.groupId);
                    await chat.sendMessage(message);
                    console.log(objmensagem.mensagem_tag + "/" + grupo.nome + ": " + 'Mensagem enviada com sucesso!');
                } catch (error) {
                    console.error(objmensagem.mensagem_tag + "/" + grupo.nome + ": " + 'Erro ao enviar a mensagem:', error);
                }
            })

        });

    });
});

client.initialize();
