const Discord = require("discord.js")
const clinet = new Discord.Client();

clinet.on("ready" , () => {
  clinet.user.setPresence({ activity: {name: "躲貓貓<3", status: "online"} })
})

clinet.on("message", message => {
  if(message.content === "早安") {
    message.channel.send("早安：Ｄ") ;
  }
    if(message.content === "!午安") {
    message.channel.send("中午好，記得吃飯！") 
  }
      if(message.content === "晚安") {
    message.channel.send("晚安啦！") 
     }
        if(message.content === "你好") {
    message.channel.send("你好啊._.") ;
  }
          if(message.content === "你來在哪裡") {
    message.channel.send("我來自翔律，一個充滿愛的地方！") ;
  }
});
