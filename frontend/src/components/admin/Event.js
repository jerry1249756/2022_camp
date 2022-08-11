import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  Box,
  Button,
  FormControl,
} from "@mui/material";
import RoleContext from "../useRole";

const Event = () => {
  const [message, setMessage] = useState(
    "持有蜘蛛人系列建築的隊伍須進監獄上跳舞課"
  );
  const [event, setEvent] = useState(0);
  const { setEventMessage, role } = useContext(RoleContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setEventMessage({
      title: data[event].title,
      content: message,
    });
    navigate("/notifications");
  };

  useEffect(() => {
    if (role !== "admin") {
      navigate("/permission");
    }
  }, []);

  const data = [
    {
      title: "去上學",
      description: "持有蜘蛛人系列建築的隊伍須進監獄上跳舞課",
    },
    {
      title: "黑豹過世",
      description:
        "面臨國喪，持有黑豹系列建築的隊伍可以選擇(1)在原地休息5分鐘默哀致意 或 (2)繳20000結束",
    },
    {
      title: "都更",
      description: "購買房地產與升級的金額減半",
    },
    {
      title: "開啟傳送門",
      description:
        "至聖所的傳送門開啟了! 踩到至聖所格子的隊伍可以使用傳送門傳送至任意格子",
    },
    {
      title: "金融風暴",
      description: "所有小隊手中現金減少10000。支付不出來視同破產",
    },
    { title: "地震來襲", description: "所有人的房產下降一星級" },
    { title: "復聯內鬨", description: "復聯系列的房產(與過路費)將提升1.5倍" },
    {
      title: "失控的多重宇宙",
      description:
        "場地內將生成傳送門，經過會無條件傳送(12到13 , 25到26 , 39到40)",
    },
    { title: "都更(II)", description: "購買房地產與升級的金額減半" },
    { title: "政權顛覆", description: "財產前4的小隊全部入獄" },
    {
      title: "宇宙大爆炸",
      description:
        "地球以外的房產格強制拋售, 並獲得50%價值的金額(地球以外:太空總部、泰坦星、佛米爾星、虛無之地、天劍局、阿斯嘉、彩虹橋、英靈殿、多摩)",
    },
    {
      title: "金融風暴(II)",
      description: "所有小隊手中現金減少10000。支付不出來視同破產",
    },
    { title: "央行升息", description: "手上持有現金翻倍" },
    {
      title: "時光流逝",
      description: "往後每個小隊都將移動投擲兩個骰子後, 移動相當於兩次移動的和",
    },
  ];

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Event Settings
        </Typography>
        <FormControl variant="standard" sx={{ minWidth: 215, marginTop: 2 }}>
          <InputLabel id="title">Trait</InputLabel>
          <Select
            value={event}
            labelId="title"
            onChange={(e) => {
              setEvent(e.target.value);
              setMessage(data[e.target.value].description);
            }}
          >
            {data.map((item) => {
              return (
                <MenuItem value={data.indexOf(item)} key={data.indexOf(item)}>
                  {item.title}
                </MenuItem>
              );
            })}
          </Select>
          <TextField
            id="content"
            label="Content"
            multiline
            sx={{ marginTop: 2, marginBottom: 2 }}
            variant="standard"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button disabled={!message} onClick={handleClick}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Event;
