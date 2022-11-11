require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-Parser");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");

require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");
const { log } = require("console");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");






app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("main");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/userMain", auth , (req, res) => {
    res.render("userMain");
});
app.get("/userDictation", auth , (req, res) => {
    res.render("userDictation");
});
app.get("/userGame", auth , (req, res) => {
    res.render("userGame");
});
app.get("/userPage", auth , (req, res) => {
    res.render("userPage");
});

app.get("/logout", auth, async(req,res) => {
    try {
        console.log(req.user);
        req.user.tokens = req.user.tokens.filter((currElement) => {
                return currElement.token != req.token;
        })

        res.clearCookie("jwt");

        console.log("logout successfully");

        await req.user.save();
        res.render("login");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/LB", (req, res) => {
    res.render("LB");
});

app.get("/dictation", (req, res) => {
    res.render("dictation");
});

app.get("/game", (req, res) => {
    res.render("game");
});


app.get("/page", (req, res) => {
    res.render("page");
});



app.post('/register', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: cpassword
            })

            console.log("the success part" + registerEmployee);
            const token = await registerEmployee.generateAuthToken();
            console.log("the token part" + token);


            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 30000),
                httpOnly: true
            });

            const registered = await registerEmployee.save();
            console.log("the page part " + registered);

            res.status(201).render("login");
        }
        else {
            res.send("Password does not match ");
        }
    } catch (error) {
        res.status(400).send(error);
        console.log("The error part page");

    }
})



app.post("/login", async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({ email: email });
        const validPassword = await bcrypt.compare(password, useremail.password);

        const token = await useremail.generateAuthToken();
        console.log("the token part" + token);


        res.cookie("jwt", token, {
            httpOnly: true,
        });

        if (validPassword) {
            res.status(201).render("userMain");
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid Email")
    }
})

app.listen(port, () => {
    console.log(`Server is running at port ${3000}`);
});
