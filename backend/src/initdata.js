import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv-defaults";
import Team from "../models/team.js";
import Land from "../models/land.js";
import User from "../models/user.js";
import Notification from "../models/notification.js";
import Event from "../models/event.js";
import Pair from "../models/pair.js";
import Effect from "../models/effect.js";

dotenv.config();
console.log(process.env.MONGO_URL);

const db = mongoose.connection;
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "NPC",
    password: "npc",
  },
];

const teams = [
  {
    teamname: "第1小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
  {
    teamname: "第2小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
  {
    teamname: "第3小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
  {
    teamname: "第4小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
  {
    teamname: "第5小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
  {
    teamname: "第6小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
  {
    teamname: "第7小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
  {
    teamname: "第8小隊",
    occupation: "N/A",
    money: 100000,
    bonus: { value: 1.0, time: 0, duration: 0 },
    soulgem: { value: false, time: 0 },
  },
];

const lands = [
  { id: 1, type: "Go", name: "GO 格", description: "真是夠格的啊！" },
  {
    id: 2,
    type: "Building",
    area: 1,
    name: "太空總部",
    owner: "N/A",
    level: 0,
  },
  {
    id: 3,
    type: "Building",
    area: 1,
    name: "航母總部",
    owner: "N/A",
    level: 0,
  },
  {
    id: 4,
    type: "Chance",
    name: "機會命運",
    description: "為你的未來重新洗牌！",
  },
  {
    id: 5,
    type: "Building",
    area: 1,
    name: "帝國大廈",
    owner: "N/A",
    level: 0,
  },
  { id: 6, type: "SpecialBuilding", name: "倫敦至聖所", owner: "N/A" },
  { id: 7, type: "Game", name: "跳左跳右", description: "細節略" },
  {
    id: 8,
    type: "Building",
    area: 2,
    name: "泰坦星",
    owner: "N/A",
    level: 0,
  },
  {
    id: 9,
    type: "Building",
    area: 2,
    name: "弗米爾星",
    owner: "N/A",
    level: 0,
  },
  {
    id: 10,
    type: "Chance",
    name: "機會命運",
    description: "為你的未來重新洗牌！",
  },
  { id: 11, type: "Jail", name: "探監", description: "去笑坐牢出來的人吧！" },
  {
    id: 12,
    type: "Building",
    area: 2,
    name: "虛無之地",
    owner: "N/A",
    level: 0,
  },
  { id: 13, type: "Store", name: "商店", description: "可購買各種有力卡片！" },
  { id: 14, type: "Game", name: "吊死鬼", description: "細節略" },
  {
    id: 15,
    type: "Building",
    area: 3,
    name: "神盾局",
    owner: "N/A",
    level: 0,
  },
  { id: 16, type: "SpecialBuilding", name: "香港至聖所", owner: "N/A" },
  {
    id: 17,
    type: "Chance",
    name: "機會命運",
    description: "為你的未來重新洗牌！",
  },
  {
    id: 18,
    type: "Building",
    area: 3,
    name: "復聯總部",
    owner: "N/A",
    level: 0,
  },
  {
    id: 19,
    type: "Building",
    area: 3,
    name: "天劍局",
    owner: "N/A",
    level: 0,
  },
  { id: 20, type: "Game", name: "含水猜歌", description: "細節略" },
  { id: 21, type: "Event", name: "事件", description: "有大事要發生的樣子..." },
  {
    id: 22,
    type: "Building",
    area: 4,
    name: "瓦甘達",
    owner: "N/A",
    level: 0,
  },
  {
    id: 23,
    type: "Building",
    area: 4,
    name: "邊境部落",
    owner: "N/A",
    level: 0,
  },
  {
    id: 24,
    type: "Chance",
    name: "機會命運",
    description: "為你的未來重新洗牌！",
  },
  {
    id: 25,
    type: "Building",
    area: 4,
    name: "亞特蘭提斯",
    owner: "N/A",
    level: 0,
  },
  { id: 26, type: "SpecialBuilding", name: "紐約至聖所", owner: "N/A" },
  { id: 27, type: "Game", name: "各自表述", description: "細節略" },
  {
    id: 28,
    type: "Building",
    area: 5,
    name: "阿斯嘉",
    owner: "N/A",
    level: 0,
  },
  {
    id: 29,
    type: "Building",
    area: 5,
    name: "彩虹橋",
    owner: "N/A",
    level: 0,
  },
  {
    id: 30,
    type: "Chance",
    name: "機會命運",
    description: "為你的未來重新洗牌！",
  },
  { id: 31, type: "ToJail", name: "入獄", description: "哈哈下去囉~" },
  {
    id: 32,
    type: "Building",
    area: 5,
    name: "英靈殿",
    owner: "N/A",
    level: 0,
  },
  { id: 33, type: "Store", name: "商店", description: "可購買各種有力卡片！" },
  { id: 34, type: "Game", name: "記憶tempo 2.0", description: "細節略" },
  {
    id: 35,
    type: "Building",
    area: 6,
    name: "史塔克總部",
    owner: "N/A",
    level: 0,
  },
  { id: 36, type: "SpecialBuilding", name: "卡瑪泰姬", owner: "N/A" },
  {
    id: 37,
    type: "Chance",
    name: "機會命運",
    description: "為你的未來重新洗牌！",
  },
  {
    id: 38,
    type: "Building",
    area: 6,
    name: "大羅",
    owner: "N/A",
    level: 0,
  },
  {
    id: 39,
    type: "Building",
    area: 6,
    name: "多摩",
    owner: "N/A",
    level: 0,
  },
  { id: 40, type: "Game", name: "倒轉猜字", description: "細節略" },
];

const events = [
  {
    id: 1,
    title: "去上學",
    description: "持有蜘蛛人系列建築的隊伍須進監獄上跳舞課",
  },
  {
    id: 2,
    title: "黑豹過世",
    description:
      "面臨國喪，持有黑豹系列建築的隊伍可以選擇(1)在原地休息5分鐘默哀致意 或 (2)繳20000結束",
  },
  {
    id: 3,
    title: "都更",
    description: "購買房地產與升級的金額減半",
  },
  {
    id: 4,
    title: "開啟傳送門",
    description:
      "至聖所的傳送門開啟了! 踩到至聖所格子的隊伍可以使用傳送門傳送至任意格子",
  },
  {
    id: 5,
    title: "金融風暴",
    description: "所有小隊手中現金減少10000。支付不出來視同破產",
  },
  { id: 6, title: "地震來襲", description: "所有人的房產下降一星級" },
  {
    id: 7,
    title: "復聯內鬨",
    description: "復聯系列的房產(與過路費)將提升1.5倍",
  },
  {
    id: 8,
    title: "失控的多重宇宙",
    description:
      "場地內將生成傳送門，經過會無條件傳送(12到13 , 25到26 , 39到40)",
  },
  { id: 9, title: "都更(II)", description: "購買房地產與升級的金額減半" },
  { id: 10, title: "政權顛覆", description: "財產前4的小隊全部入獄" },
  {
    id: 11,
    title: "宇宙大爆炸",
    description:
      "地球以外的房產格強制拋售, 並獲得50%價值的金額(地球以外:太空總部、泰坦星、佛米爾星、虛無之地、天劍局、阿斯嘉、彩虹橋、英靈殿、多摩)",
  },
  {
    id: 12,
    title: "金融風暴(II)",
    description: "所有小隊手中現金減少10000。支付不出來視同破產",
  },
  { id: 13, title: "央行升息", description: "手上持有現金翻倍" },
  {
    id: 14,
    title: "時光流逝",
    description: "往後每個小隊都將移動投擲兩個骰子後, 移動相當於兩次移動的和",
  },
];

const effects = [
  {
    id: 1,
    title: "地產增值(I)",
    description: "使你的房地產租金提升至150%, 效果持續10分鐘。不可疊加使用",
    trait: 1,
    duration: 600,
    bonus: 1.5,
  },
  {
    id: 2,
    title: "財產凍結",
    description:
      "選擇一個小隊, 其他小隊踩到此小隊的房產無須付租金, 效果持續5分鐘",
    trait: 1,
    duration: 300,
    bonus: 0,
  },
  {
    id: 3,
    title: "量子領域",
    description:
      "選擇一個區域, 若其他小隊停在此區域會損失10%手上的金錢, 效果持續10分鐘",
    trait: 1,
    duration: 600,
    bonus: -1,
  },
  {
    id: 4,
    title: "靈魂寶石",
    description:
      "所需支付的金錢提升至150%, 但同時所獲得的金錢提升至200%, 效果持續10分鐘",
    trait: 1,
    duration: 600,
    bonus: -1,
  },
  {
    id: 5,
    title: "地產增值(II)",
    description: "使你的房地產租金提升至200%, 效果持續10分鐘。不可疊加使用",
    trait: 1,
    duration: 600,
    bonus: 2,
  },
  {
    id: 6,
    title: "double一下",
    description:
      "選擇一個區域。若持有該區域數量-1的房產即可獲得double效果, 此效果沒有時間限制",
    trait: 0,
    duration: -1,
    bonus: -1,
  },
];

const notifications = [
  {
    id: 0,
    title: "歡迎遊玩大富翁",
    description: "衝啊",
    type: "permenant",
  },
  {
    id: 1,
    title: "Test temporary",
    description: "temporary",
    type: "temporary",
    duration: 800,
    createdAt: Date.now(),
  },
];

const pairs = [
  {
    key: "currentEvent",
    value: 0,
  },
  {
    key: "lastNotificationId",
    value: 0,
  },
];

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("db connected");
  await Team.deleteMany({});
  await Land.deleteMany({});
  await User.deleteMany({});
  await Event.deleteMany({});
  await Pair.deleteMany({});
  console.log("delete done");

  users.forEach(async (user) => {
    await new User(user).save();
  });
  console.log("users created");

  lands.forEach(async (ground) => {
    await new Land(ground).save();
  });
  console.log("lands created");

  teams.forEach(async (row) => {
    await new Team(row).save();
  });
  console.log("teams created");

  events.forEach(async (row) => {
    await new Event(row).save();
  });
  console.log("events created");

  pairs.forEach(async (row) => {
    await new Pair(row).save();
  });
  console.log("pairs created");

  notifications.forEach(async (row) => {
    await new Notification(row).save();
  });
  console.log("notifications created");

  effects.forEach(async (row) => {
    await new Effect(row).save();
  });
  console.log("effects created");

  console.log("finish saving data");
});
