require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("public"));
const dbConnect = require("./lib/db");

const Intro = require("./models/Intro");
const Project = require("./models/Project");
const Service = require("./models/Service");
const Skill = require("./models/Skill");
const Contact = require("./models/Contact");
const Copyright = require("./models/Copyright");

const auth = require("./lib/auth");
const create = require("./lib/create");
const remove = require("./lib/remove");

app.get("/getInfo", async (_req, res) => {
  try {
    const intro = await Intro.find({});
    const skill = await Skill.find({});
    const service = await Service.find({});
    const project = await Project.find({});
    const contact = await Contact.find({});
    const copyright = await Copyright.find({});

    return res.status(200).json({
      success: true,
      data: {
        intro: intro[0],
        projects: project[0],
        services: service[0],
        skills: skill[0],
        contact: contact[0],
        copyright: copyright[0],
      },
    });
  } catch (error) {
    console.log("Error from api", error);
    res.status(400).json({ success: false, data: null });
  }
});

app.post(
  "/api/v1/create/intro",
  (q, s, n) => {
    console.log("q", q.body);
    n();
  },
  auth,
  create(Intro)
);
app.post("/api/v1/create/skill", auth, create(Skill));
app.post("/api/v1/create/service", auth, create(Service));
app.post("/api/v1/create/project", auth, create(Project));
app.post("/api/v1/create/contact", auth, create(Contact));
app.post("/api/v1/create/copyright", auth, create(Copyright));

/**
 * Make check so that as soon as delete one doc ,then create that too.
 */

app.delete("/api/v1/delete/intro", auth, remove(Intro));
app.delete("/api/v1/delete/skill", auth, remove(Skill));
app.delete("/api/v1/delete/service", auth, remove(Service));
app.delete("/api/v1/delete/project", auth, remove(Project));
app.delete("/api/v1/delete/contact", auth, remove(Contact));
app.delete("/api/v1/delete/copyright", auth, remove(Copyright));

dbConnect().then(() => {
  app.listen(4000, () => console.log("Listening on 4000"));
});
