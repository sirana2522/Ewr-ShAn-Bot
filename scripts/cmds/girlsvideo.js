module.exports = {
  config: {
    name: "girlsvideo",
    aliases: ["girl"],
    version: "2.0",
    author: "𝗦𝗵𝗔𝗻",
    countDown: 0,
    role: 0,
    shortDescription: "",
    longDescription: "send you a hot girl video",
    category: "18+",
    guide: "{p}{n}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "কিরে লুচ্চা 🤨 দারা দিতেছি 😜",
    });

    const link = [
"https://drive.google.com/uc?export=download&id=16HuQeuPLsfMcXLITNOJSBVJewHmXk8Ru",
"https://drive.google.com/uc?export=download&id=16BJpSk2zk7Uy9DxLxbwFkEW9uDXsYzlB",
"https://drive.google.com/uc?export=download&id=17by8dS0pQY4d1tIJIsoaeAuRvATiGywY",
"https://drive.google.com/uc?export=download&id=16U0pk5Z1xSK1noxppaBSVoWABeLtu4RG",
"https://drive.google.com/uc?export=download&id=15mNY62pGLPq7W_Uly5IBi0dd9YHzWyWc",
"https://drive.google.com/uc?export=download&id=15PMxc-gznm4Ona3fZLPTs7Yj3kOfx0Wf",
"https://drive.google.com/uc?export=download&id=16I-YJcYmNOBHWath6Y86F44d7e_ofe7J",
"https://drive.google.com/uc?export=download&id=17Udy1YF9M0f6kVkTY_I2s_Lgy3iXheuj",
"https://drive.google.com/uc?export=download&id=16sM1E35-ua6qAKfSnnGlIAQQmb4bqgRD",
"https://drive.google.com/uc?export=download&id=15qhYDHsVznBZVyBniyNlECYovVnLgiBV",
"https://drive.google.com/uc?export=download&id=16Eg73csaToVbQ0lz_hDxk8L6sKjSLvgd",
"https://drive.google.com/uc?export=download&id=17zX7xULbhcYDtfjZwcSfb8esrAH8ePwY",
"https://drive.google.com/uc?export=download&id=17bx6rdpZo4SEiSeiMpI_asDXbazTBdTg",
"https://drive.google.com/uc?export=download&id=15uZpBBRBijJxYifQgsNtme13SvyiBvVj",
"https://drive.google.com/uc?export=download&id=16TeBkjBYYtT19mjBgmghIF4Ts8Rj2EaP",
"https://drive.google.com/uc?export=download&id=17mM28fnOWAybglrog-ZnAb-qLI9mqljX",
"https://drive.google.com/uc?export=download&id=16HTIuH9ReUiU6PvQ5150VjiXl5qRub_E",
"https://drive.google.com/uc?export=download&id=168IpCjTPNP97LCCJhOdf06OUTzbt1Dgn",
"https://drive.google.com/uc?export=download&id=172G7rebE1EiEbxk7WmUQTqEA-JhokpHY",
"https://drive.google.com/uc?export=download&id=17fFHNzH1pYhJGFLvpJA0K-ARht8twPFH",
"https://drive.google.com/uc?export=download&id=168KgKWLMVQRDPWtU0KKc09EFuhfXPmEg",
"https://drive.google.com/uc?export=download&id=16ogQkb5pU83btZxJuK6vEcK5Z1R8XEr3",
"https://drive.google.com/uc?export=download&id=17SQOC--BT2tYJOcLYHA6pLr9u0yRSBc5",
"https://drive.google.com/uc?export=download&id=170WOkxswt5Zi_JbUS3HL2Z9tdUco6llL",
"https://drive.google.com/uc?export=download&id=176b9bbWNc8Pk37c-gfn3RWV1V1ycXsuK",
"https://drive.google.com/uc?export=download&id=15YUyugeHbZGPOwPv_hNgbgLGyx11bMMa",
"https://drive.google.com/uc?export=download&id=16qxAxXFGXTSeI-yxroyAcK5J9C8xovbL",
"https://drive.google.com/uc?export=download&id=16_-J9PjHk5kw1Cn4QlJbCzRUM2GEF0H6",
"https://drive.google.com/uc?export=download&id=16matvWMeSMjePiue8zUtGKrjCzRLcYoO",
"https://drive.google.com/uc?export=download&id=16-9DhekS3frUC3nXL_gQ5ilP8-QdMjK7",
"https://drive.google.com/uc?export=download&id=16zI3y_YZhxkZdztOTlmmni08fFm3yY8r",
"https://drive.google.com/uc?export=download&id=17S9mhKKn4BCkc3fzeny3UFvRPrC39JRd",
"https://drive.google.com/uc?export=download&id=15DZnoyssXYUvG6VUrhOKQfkunOB3DDWZ",
"https://drive.google.com/uc?export=download&id=176e7iQND8XV_vyz7vA8dlZ3bdghVekDK",
"https://drive.google.com/uc?export=download&id=16fxEZu9t-8RuuTEB5HJtjQO_E4jfe66L",
"https://drive.google.com/uc?export=download&id=15l-YEUg-E_J9JlH73wZWN9FHeSTQwceX",
"https://drive.google.com/uc?export=download&id=17XeHrfGFeCRDNx7xFJT1NHlvtyEQmGU5",
"https://drive.google.com/uc?export=download&id=17LkXkBhUMFHOW5qFKfvXdJvNlZ24vDfz",
"https://drive.google.com/uc?export=download&id=15r55bWoRJpE7RT9rltPIT438gMIEnjB3",
"https://drive.google.com/uc?export=download&id=17r05O7YYrp213wv_X1AG3iOlWhbwpETr",
"https://drive.google.com/uc?export=download&id=1AZJ1Y7XFSzVPG7qntx3SV4i5AUw06QH6",
"https://drive.google.com/uc?export=download&id=1Ab9EOmObvaxZCuuGprctkWf523lGGq3C"
  ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: 'এই নে বোকাচুলা দেখ 🥵💦',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 40000);

      setTimeout(() => {
        api.unsendMessage(sentVideos.messageID);
      }, 50000);
    }
  },
};
