const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
const owner = ['211969554061066243'];
const id = ['211969554061066243', '' , '' , '' , ''];
const ms = require("ms");
const fs = require('fs');
const Canvas = require("canvas");
const jimp = require("jimp");
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const moment = require("moment");
const axios = require('axios');
const path = require('path');
const YouTube = require('simple-youtube-api');
const fetchVideoInfo = require('youtube-info');
const ytApiKey = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(ytApiKey); 


client.on('ready', function(){
    var ms = 60000 ;
  var setGame = [`جاكيو بوت`,` المستخدمين : ${client.users.size}`]; 
     var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
     client.user.setActivity(setGame[i],{type: 'LISTENING'});
    }, ms);
});

client.on('ready', () => {
client.user.setStatus("dnd");
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

         client.on('message', message => {
            if (message.content === 'سلام عليكم') {
  if(!message.channel.guild) return message.reply(' ');
              message.channel.send('**وعَلَيْكُم السَّلامُ ورَحْمَةُ اللهِ وَبَرَكاتُهُ**');
              message.channel.sendFile("https://cdn.pg.sa/IsIcfgkHwk.jpg");
               

            }
});


client.on('message', message => {
            if (message.content === 'السلام عليكم') {
  if(!message.channel.guild) return message.reply(' ');
              message.channel.send('**وعَلَيْكُم السَّلامُ ورَحْمَةُ اللهِ وَبَرَكاتُهُ**');
              message.channel.sendFile("https://cdn.pg.sa/IsIcfgkHwk.jpg");
               

            }
});


client.on('message', message => {
            if (message.content === 'سلام') {
  if(!message.channel.guild) return message.reply(' ');
              message.channel.send('**وعَلَيْكُم السَّلامُ ورَحْمَةُ اللهِ وَبَرَكاتُهُ**');
              message.channel.sendFile("https://cdn.pg.sa/IsIcfgkHwk.jpg");
               

            }
});
/*
client.on('message', message => { 
    var FFHH = "."
        if (message.content.startsWith(FFHH + `Jackeo`)) {
  if(!message.channel.guild) return message.reply(' ');
message.guild.setName(`!ّّّّّّّّ♔`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵ`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά`) 
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά¢k̲`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά¢k̲Φ`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`!ّّّّّّّّ♔Ĵά¢k̲Φ♔⌘|🎵💔😍`)
.then(msg => {
 setInterval(() => {
}, 11000);
});
},  10000);
});
},  8000);
});
},  6000);
});
},  4000);
});
},  1000);
})
        .catch(console.error);
  //message.delete().catch(O_o=>{}); 
 
}
}); */


client.on('message', message => {
    if (message.content.startsWith("تهكير")) {
  if(!message.channel.guild) return message.reply(' ');
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
             }, 5500)
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
              }, 10500)
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
               }, 15500)
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                }, 25500)
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
             }, 30500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
             }, 40500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفض بينات الحساب** `).setColor(0xFF0000)})
             }, 45500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البينات** `).setColor(0xFF0000)})
             }, 50500)
              setTimeout(function() {
               m.delete()
           }, 55000)
             setTimeout(function() {
               message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)
           });
         }
 });


client.on('ready',async () => {
setInterval(function(){
var currentTime = new Date(),
Year  = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
day   = currentTime.getDate()

client.channels.find('id', '353991730196119552').setName(`『 التاريخ ↩ ${Year}/${Month}/${day} 』`)
}, 5000);

});


client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});




client.on('message',   Jackeo =>{
    
    var  args = Jackeo.content.split(" ").slice(2).join(" ")
    var men = Jackeo.mentions.users.first()|| client.users.get(Jackeo.content.split(' ')[1])
    var  mas = Jackeo.author
                              if(Jackeo.content.startsWith('.sr7')) {
                              if(Jackeo.channel.type === "dm"){
if(!args) return  Jackeo.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var Jackeo3d = new Discord.RichEmbed()
     .setAuthor(Jackeo.author.username , Jackeo.author.avatarURL)
     .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
     .setTimestamp() 
     .setFooter(`- By , message.author.name .`)
     Jackeo.channel.send(Jackeo3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❎').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '✅' && user.id === Jackeo.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '❎' && user.id === Jackeo.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**• الرسالة : ** ', `<@${men.id}>` , true)
                    .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                    .addField('**• اليوم والوقت والتاريخ :**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          Jackeo.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
          Jackeo.delete();
})
nnn.on("collect", r => {
message.delete()
Jackeo.reply("`**تم الغاء الصراحة**`")
Jackeo.delete();
})
})
}) 
})
}
}
});




client.on("guildMemberAdd", (member) => {
client.channels.get('356375188256063499').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})
client.on("guildMemberRemove", (member) => {
client.channels.get('356375188256063499').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})



/*
client.on('message', async message => {
  if(message.content.startsWith(prefix + "رسالة")) {
    let i = client.users.size;
    if(message.author.id !== '211969554061066243') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
}); */

//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('353991756519309333');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`『فويس أون لاين ↩ ${currentSize}』`);
  if (currentSize !== size) channel.setName(`『الاعضاء بالرومات الصوتية ↩ ${currentSize}』`);
});


/*
client.on('ready',async () => {
setInterval(function(){
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


client.channels.find('id', '356375188256063499').setName(`『 الوقت ↩ ${hours2}:${minutes} 』`)
}, 5000);
       
    }); 
// ميوت
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members 🎮"));//here 
    });


client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية Manage Roles**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص Manage Roles للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
}); */






client.on('message', message => {
if (message.content === ".server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 ايــدي السيرفر**", "**"+message.guild.id+"**",true)
.addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
.addField("**✅ الشــات الرئيسي**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("**🌍 خادم السيرفر**" , "**"+message.guild.region+"**",true)
.addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
.addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField("👔عدد الاعضــاء",`
**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('000000')
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content === 'تعال') {
  if(!message.channel.guild) return message.reply(' ');
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('هنالك خطأ ما');
        })
        .catch(console.log);
    } else {
      message.reply(` ** انا جيت ؟ :joy: ** `);
    }
  }
});

/*
client.on('message', message => {
  if (message.content.startsWith('العيد')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`Please be in a voice channel first!`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8SdXc61y7l4", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
}); */




client.on("message", (message) => {
           if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
     let jackeo = new Discord.RichEmbed()
            .setTimestamp()
                .setTitle("هذة ارسل للبوت رسالة")
                .addField(`من:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                   .setThumbnail(message.author.displayAvatarURL)
                   .addField(`الرسالة: `, `\n\n\`\`\`${message.content}\`\`\``)
                  .setFooter(`DM .. | Jackeo`)
               client.users.get("211969554061066243").send(jackeo)
         }
});

client.on('message', message => {
   if (message.content === ".id") {
  if(!message.channel.guild) return message.reply(' ');
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)


  message.channel.sendEmbed(embed);
    }
});


devs = ['211969554061066243']

client.on('message', message => {
var prefix = ".";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say")  {
   if(!message.channel.guild) return message.reply(' ');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply(' ');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});

/*

client.on('message', async message => {
  if(message.content.startsWith(prefix + "voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('**:negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__**');
  if(!args) args = ` » VoiceOnline :  ${message.guild.members.filter(s => s.voiceChannel).size} . `;
  message.channel.send('**:white_check_mark: » تم عمل الروم الصوتي بنجاح**');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

//ping probot 
  if (command == "ping") {
    message.channel.send("Pong!")
      .then(message => message.edit(`Pong! \`${client.ping}ms\``))
      .catch(console.error);
});

//مغير الرسالة 
client.on('message', msg => {
if (msg.content === 'garo') {
msg.channel.send('ok').then(msg => {
setTimeout(() => {
  msg.edit(`🚬💨💨💨`);
 },1500);
 setTimeout(() => {
  msg.edit(`🚬💨💨`);
},1800);
setTimeout(() => {
msg.edit(`🚬💨`);
},2100);
setTimeout(() => {
msg.edit(`🚬`)
},2400);
});
}    	
});

//تاريخ الجزائر
client.on('message', function(message) {

    if (message.content === prefix + "hours"|| message.content === prefix + "Hours" || message.content === prefix + "HOURS") {
        if (!message.channel.guild) return message.reply('This command only for servers ⁉');  
    var currentTime = new Date(),
       hours = currentTime.getHours() + 1 ,
       hours2 = currentTime.getHours() + 0 ,
       hours3 = currentTime.getHours() + 0 ,
       hours4 = currentTime.getHours() + 0 ,
       minutes = currentTime.getMinutes(),
       seconds = currentTime.getSeconds(),
       Year = currentTime.getFullYear(),
       Month = currentTime.getMonth() + 1,
       Day = currentTime.getDate();
        var h = hours
  if(hours > 12) {
          hours -= 12;
       } else if(hours == 0) {
           hours = "12";
       }  
        if(hours2 > 12) {
          hours2 -= 12;
       } else if(hours2 == 0) {
           hours2 = "12";
       
       }  
       if(hours3 > 12) {
          hours3 -= 12;
       } else if(hours3 == 0) {
           hours3 = "12";
       } 
       if(hours4 > 12) {
        hours4 -= 12;
     } else if(hours4 == 0) {
         hours4 = "12";
     } 
       if (minutes < 10) {
           minutes = '0' + minutes;
       }
       var suffix = 'A.m';
       if (hours >= 12) {
           suffix = 'P.m';
           hours = hours - 12;
       }
       if (hours == 0) {
           hours = 12;
       }
           var Date15= new Discord.RichEmbed()
           .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
           .setTitle( "date and time")
           .setColor('BLACK')
           .setTimestamp()
           .setFooter(`ID: ${message.author.username}#${message.author.discriminator}`)
           .addField('Egypt :flag_eg:  ',
           hours + ":" + minutes +":"+ seconds )
            .addField('tunisia :flag_tn:  ',
           hours2 + ":" + minutes +":"+ seconds) 
           .addField('algeria :flag_dz:  ',
            hours3 + ":" + minutes +":"+ seconds ) 
           .addField('Morocco :flag_ma:  ',
            hours4 + ":" + minutes +":"+ seconds ) 
           .addField('Date',
            Day + "-" + Month + "-" + Year )
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.sendEmbed(Date15);
   }
}); 

const profile = JSON.parse(fs.readFileSync('./profile.json', "utf8"));

client.on("message", message => {
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    info: '$info To Set The Info',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 15005,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
    var prefix ="."
    if(message.content.startsWith(prefix + "credits")) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, your :credit_card: balance` + " is `" + `$${profile[men.id].credits}` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `$${profile[message.author.id].credits}` + "`.**")
}
}
var prefix ="."
if(message.content.startsWith(prefix + "daily")) {
      if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
      let args = message.content.split(" ").slice(1);
    let textxt = args.slice(0).join("");
let daily = Math.floor(Math.random() * 100) + 5500;
    profile[message.author.id].credits += daily;
    fs.writeFile("./profile.json", JSON.stringify(profile), function(err) {if(err) console.error(err)});
     message.channel.send(`**${message.author.username} you collect your ${daily}  :yen: daily pounds**`)
} else {
    message.channel.send(`**:atm: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'credits')) {
          if (!args[0]) {
          //  message.channel.send(`**استخدم: ${prefix}تحويل @الشخص المبلغ**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
          //  message.channel.send(`**استخدم: ${prefix}تحويل @الشخص المبلغ**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**:no_entry: لا يوجد المبلغ الكافي **")
if(args[0].startsWith("-")) return  message.channel.send('**!! لا يمكنيي**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
         //   if (!defineduser) return message.channel.send(`**استخدم: ${prefix}تحويل @الشخص المبلغ**`);
            if(defineduser.id === message.author.id) return message.channel.send("** تريد التحويل لنفسك ؟ **")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879', '2999', '9950', '2000', '9999', '0000', '9595', '2000', '2018', '2019', '2020', '2021'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879', '2999', '9950', '2000', '9999', '0000', '9595', '2000', '2018', '2019', '2020', '2021'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ** ${message.author.username} Transfer Fees:\`${args}\` **
 type these numbers to confirm :\n \`${x[x3]}\``).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 100;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`$" + args[0] + "` to " + `<@${defineduser.id}>.**`)
mentionned.send(` :atm:  |  Transfer Receipt  \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID: (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });
*/


client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });


client.login(process.env.BOT_TOKEN);
