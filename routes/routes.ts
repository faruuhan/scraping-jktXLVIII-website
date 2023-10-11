import express from "express";
const router = express();
import schedule from "../controllers/schedule";
import member from "../controllers/member";
import news from "../controllers/news";

router.get("/schedule", schedule.getSchedule);
router.get("/schedule/detail/:idschedule", schedule.getDetailSchedule);
router.get("/schedule/theater", schedule.getTheaterSchedule);
router.get("/member", member.getAllMember);
router.get("/member/detail/:idmember", member.getDetailMember);
router.get("/news", news.getAllNews);

export default router;