# Bot de WhatsApp - Mensagem Automática
Um bot simples para WhatsApp que envia automaticamente uma mensagem em grupos no período especificado.

## 🚀 Tecnologias usadas
- whatsapp-web.js <br>
- node-schedule <br>

## 🔧 Como usar
> Clone o repositório:
```
git clone https://github.com/YagoArruda/WhatSapp-Bot.git
```
```
cd bot-whatsapp
```
<br>

> Instale as dependências:
```
npm install
```
<br>

> Crie o arquivo ***config.json*** e preencha com:
```
{
    "mensagens": [
        {
            "mensagem_tag": "padrao",
            "dataHora": "minuto hora dia mes dia_da_semana" ex: 0 10 23 * *,
            "mensagem": "mensagem automatica padrao",
            "grupos": [
                {
                    "nome": "teste",
                    "groupId": "ID@g.us"
                }
            ]
        }
    ]
}
```
Caso não saiba o ID do grupo, execute o ***ids.js*** para obter uma lista dos chats que o número tem.
<br>

> Execute o bot:
```
node bot.js
```
<br>

> Escaneie o QR Code que aparecer no terminal com o WhatsApp.
<br>

## ✨ Funcionalidades
✔️ Envia mensagens automáticas para os grupos/números especificados <br>
✔️ Agendamento usando node-schedule <br>
✔️ Suporte para autenticação local com whatsapp-web.js <br>