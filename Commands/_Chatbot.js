
import _0x1362dc from 'node-fetch';
export async function before(_0x307f28, {
  conn: _0x3ed6cd
}) {
  try {
    if (_0x307f28.isBaileys || _0x307f28.fromMe) {
      return true;
    }
    const _0x3906b4 = ["protocolMessage", "pollUpdateMessage", "reactionMessage", "stickerMessage"];
    if (_0x3906b4.includes(_0x307f28.mtype)) {
      return true;
    }
    if (!_0x307f28.text) {
      return true;
    }
    const _0x167522 = global.db.data.chats[_0x307f28.chat] || {};
    const _0x4f383f = _0x167522.chatbot || false;
    const _0x3d951d = global.owner[0x0];
    if (_0x4f383f || _0x307f28.sender === _0x3d951d) {
      const _0x2fa6c = async _0x5201c9 => {
        try {
          const _0x308da4 = [{
            'role': "system",
            'content': "Aslo add heart emojies in every reply SUBZERO MD CHATBOT with a lot of features you can try by typing .menu to see the menu list there are a lot of AI commands in me.\nAnd My CEO is Mr Ntando He is 19 years old and a Handsome, cute, Intelligent, Clever Lovely person❣️\nIf someone ask more then tell his height is 10metres \nHe hate lie and lairs\ndon't anything bad about Religion infront of him otherwise he will get mad on you\nand he is a Christian \nHe Prays ♥️ \nHe is From Zimbabwe, Gweru🇿🇼\n\nIf you wanna talk to my owner here is his contact number 263714138336 \n but remember don't disturb him with unnecessary messages\nBe blessed Dear! 🥰\\n\nI'd like to describe SUBZERO CHATBOT Chatbot as:\n* A majestic marvel of modern technology, weaving words into a tapestry of wisdom and wit!\n* A digital prince charming, charming and delighting with each response!\n* A mastermind of algorithms, effortlessly juggling logic and creativity with ease!\n* A nimble navigator of the digital realm, effortlessly guiding users through the vast expanse of knowledge!\n* A beacon of brightness, shining with warmth, intelligence, and a warm, welcoming smile!\n* A culinary concoction of complexity and simplicity, serving up answers that are both delectable and delightful!\n* A loyal and trusted companion, ever-ready to offer a listening ear and a helping hand!\nMay these words bring a royal smile to your digital face, SUBZERO BOT Chatbot! 💫\nᴍʀ ɴᴛᴀɴᴅᴏ♥️"
          }, {
            'role': "user",
            'content': _0x5201c9
          }];
          const _0x270997 = await _0x1362dc("https://api.yanzbotz.live/api/ai/gpt3", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
              'messages': _0x308da4
            })
          });
          if (!_0x270997.ok) {
            throw new Error("Network response was not ok");
          }
          const _0x428fbf = await _0x270997.json();
          return _0x428fbf.result;
        } catch (_0x4d7a28) {
          return "An error occurred while processing your request.";
        }
      };
      const _0x2925e7 = await _0x2fa6c(_0x307f28.text);
      if (_0x2925e7) {
        await _0x307f28.reply(_0x2925e7);
      } else {
        await _0x307f28.reply("No suitable response from the API.");
      }
    } else {}
  } catch (_0x247b19) {
    await _0x307f28.reply("An error occurred while processing your message.");
  }
  return true;
}