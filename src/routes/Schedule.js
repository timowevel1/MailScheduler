const express = require('express');
const router = express.Router();
const schedule = require('node-schedule');
const mail = require("../services/EmailSenderService")

/*
Dates are provided in ISO 8601, e.g. 2022-12-27T20:32Z with UTC+00:00
 */

router.get("/",(req,res) => {
    if(!req.body.date){
        res.sendStatus(500);
    } else {
        if(!process.env.USE_SECRET || req.body.secret === process.env.SECRET) {
            try {
                const scheduleDate = new Date(req.body.date);
                schedule.scheduleJob(scheduleDate, () => {
                    mail.sendMail(
                        res,
                        req.body.emailTo,
                        req.body.emailFrom,
                        req.body.subject,
                        req.body.cc,
                        req.body.bcc,
                        req.body.emailBody,
                        req.body.mail_url);
                });
                console.log("Email was scheduled at " + scheduleDate.toString());
                res.sendStatus(200);
            } catch (e) {
                res.send(e);
            }
        } else res.sendStatus(403);
    }
})



module.exports = { router };