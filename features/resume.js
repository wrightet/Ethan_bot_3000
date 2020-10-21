const resume = {
    "basics": {
        "name": "Ethan Wright",
        "label": "Software Engineer",
        "picture": "",
        "email": "707-685-7417",
        "phone": "(707)685-7417",
        "website": "https://wrightet.github.io/ethan-wright/",
        "location": {
            "postalCode": "CA 94510",
            "city": "Benicia",
            "countryCode": "US",
            "region": "California"
        },
        "profiles": [
            {
                "network": "LinkedIn",
                "username": "Ethan Wright",
                "url": "https://www.linkedin.com/in/ethan-wright-91a75270/"
            }
        ]
    },
    "work": [
        {
            "company": "Greater Vallejo Recreation District",
            "position": "Recreation Technician",
            "website": "https://www.gvrd.org/",
            "startDate": "2010-07-01",
            "endDate": "2018-03-30",
            "summary": "Managed Cunningham Pool in Vallejo, CA",
            "highlights": [
                "Implemented a more efficient [sales/ intake/ retention] system that increased sales by $3000 in 2016.",
                "Converted VHS and DVD library to MP4 files and uploaded to the staff website, allowing staff to train from home.",
                "Tracked sales and expenses on a bi-monthly basis using Excel.",
                "Organized the weekly employee work schedules.",
                "Trained new employees and provided biweekly evaluations and constructive feedback."
            ]
        },
        {
            "company": "KidSpirit",
            "position": "Archery and Aquatics Supervisor",
            "website": "https://kidspirit.oregonstate.edu/",
            "startDate": "2016-09-20",
            "endDate": "2017-12-08",
            "summary": "KidSpirit strives to serve as a leader in providing young people with intentional, high quality, equitable learning experiences that promote positive interactions among adults & peers.",
            "highlights": [
                "Scheduled instructors.",
                "Edited and approved lesson plans.",
                "Created the aquatics curriculum, and swim manual.",
                "Taught archery and swim lessons",
                "Communicated with parents about expectations, their child's progress, and updates on lesson locations."
            ]
        },
        {
            "company": "All Star Swim School",
            "position": "Swim Instructor",
            "website": "https://www.allstarswimschool.com/",
            "startDate": "2018-03-30",
            "endDate": "2018-10-17",
            "summary": "All-Star is a safe and fun environment for swimmers of all levels – whether it’s learning the basics of water safety to refining strokes for competitive swimming.",
            "highlights": [
                "Taught private swim lessons, custom tailored to each individual students needs",
                "Informed parents of their child's progress",
                "Tracked student's progress to make a strategic lesson plans.",
                "Basic pool maintenance."
            ]
        },
        {
            "company": "CarMax",
            "position": "Sales Consultant",
            "website": "https://www.carmax.com/stores/6048?utm_source=SEO_Local&utm_medium=SEO_Local_Snack_Pack&utm_campaign=SEO_CA&utm_content=SEO_Fairfield&utm_term=SEO_6048",
            "startDate": "2019-02-18",
            "endDate": "2019-09-07",
            "summary": "Used car dealership",
            "highlights": [
                "Guided customers on their shopping journey.",
                "Recommended and sourced cars based on each client's needs.",
                "Aided customers with financing vehicles.",
                "Helped customers who wished to sell their car and presented CarMax's offer."
            ]
        }
    ],
    "education": [
        {
            "institution": "Oregon State University",
            "area": "History",
            "studyType": "Bachelor of Arts",
            "startDate": "2013-09-20",
            "endDate": "2017-12-08",
            "gpa": "3.1"
        },
        {
            "institution": "App Academy",
            "area": "Software Development",
            "studyType": "Certificate of Completion",
            "startDate": "2019-10-14",
            "endDate": "2020-02-08"
        }
    ],
    "awards": [
        {
            "title": "Lifeguard of the Year",
            "date": "2011-08-01",
            "awarder": "Greater Vallejo Recreation District",
            "summary": "Award given to the lifeguard who set the best example for the rest of the staff."
        }
    ],
    "skills": [
        {
            "name": "Web Development",
            "level": "Master",
            "keywords": [
                "HTML",
                "CSS",
                "Javascript",
                "Ruby",
                "Ruby on Rails",
                "Node.js",
                "React",
                "Redux",
                "Webpack",
                "Yarn",
                "Babel",
                "Python",
                "SQL",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Express",
                "Passport",
                "Postman",
                "Mongoose",
                "NPM",
                "AWS",
                "GitHub",
                "Heroku",
                "JBuilder",
                "JQuery"

            ]
        }
    ],
    "languages": [
        {
            "language": "English",
            "fluency": "Native speaker"
        },
        {
            "language": "Spanish",
            "fluency": "Professional working proficiency"
        }
    ],
    "interests": [
        {
            "name": "Archery",
            "keywords": [
                "Traditional Archery",
                "Recurve Bow",
                "Longbow",
                "Compound Bow"
            ]
        },
        {
            "name": "Surfing",
            "keywords": [
                "Longboard"
            ]
        },
        {
            "name": "Swimming",
            "keywords": [
                "Competitive",
                "Recreational"
            ]
        },
        {
            "name": "Bouldering",
            "keywords": [
                "Gym Climbing"
            ]
        },
        {
            "name": "Krav Maga",
            "keywords": [
                "Isreali Close Combat"
            ]
        },
        {
            "name": "Reading and Writing",
            "keywords": [
                "Fantasy",
                "Science Fiction"
            ]
        }
    ]
}

module.exports = function (controller) {
    // use a function to match a condition in the message
    controller.hears('Tell me about yourself', 'message,direct_message', async (bot, message) => {
        let about = "I am a software engineer with skills in Javascript, Ruby, Ruby on Rails, React, Redux, PostgreSQL, MongoDB, HTML, and CSS. \r\n Since I was very young I have loved to make things.This started with little knick knacks I made with my mother and grandma led into metal / wood working, and finally software development. I love all of the things computer programming allows me to do. Whenever I am programming It makes me feel as though I am a wizard just like in the stories I read as a child. \n Personally, I also enjoy archery. I frequent a few outdoor courses around the bay area, that I would compare to golf courses. Different shots, at different angles and distances. Other hobbies of mine include rock climbing, surfing, swimming, and Krav Maga. \n Though I have found my passion I worked in a variety of backgrounds such as parks and recreation, and aquatics. \n It was actually while I worked as a Recreational Technician that I began to think about coding. I was given many odd jobs such as converting VHS to mp4 for training lifeguards, and managing our staff website. I used excel to create budgets to calculate areas of improvement. The more I worked with computers the more I wanted to know and learn. And I have never stopped. ";
        await bot.reply(message, about)
    })
    controller.hears('resume', 'message,direct_message', async (bot, message) => {
        const response = resume;
        await bot.reply(message, JSON.stringify(response));
    })
    controller.hears(['^goodbye$'], 'message,direct_message', async (bot, message) => {
        await bot.reply(message, 'Bye! Thanks for chatting!')
    })
    controller.hears(['^Hello$'], 'message,direct_message', async (bot, message) => {
        await bot.reply(message, "Hello! My name is Ethan Bot 3000 and I am Ethan Wright's personal chat bot. Let me know what you would like to know about him and I will do my best to answer. Currently you can ask me, favorite color, favorite food, education, interests, awards, work, skills, languages, and resume.")
    })
    controller.hears(['^what is your favorite color$'], 'message,direct_message', async(bot, message) => {
        await bot.reply(message, "Ethan's favorite color is blue.")
    })
    controller.hears(['^favorite color$'], 'message,direct_message', async(bot, message) => {
        await bot.reply(message, "Ethan's favorite color is blue.")
    })
    controller.hears(['^favorite food$'], 'message,direct_message', async(bot, message) => {
        await bot.reply(message, "Ethan's favorite food is chocolate chip cookies.")
    })
    controller.hears(['^what is your favorite food$'], 'message,direct_message', async(bot, message) => {
        await bot.reply(message, "Ethan's favorite food is chocolate chip cookies.")
    })
    controller.hears(['^education$'], 'message,direct_message', async (bot, message) => {
        const response = resume.education;
        await bot.reply(message, JSON.stringify(response));
    })
    controller.hears(['^work$'], 'message,direct_message', async (bot, message) => {
        const response = resume.work;
        await bot.reply(message, JSON.stringify(response));
    })
    controller.hears(['^skills$'], 'message,direct_message', async (bot, message) => {
        const response = resume.skills;
        await bot.reply(message, JSON.stringify(response));
    })
    controller.hears(['^languages$'], 'message,direct_message', async (bot, message) => {
        const response = resume.languages;
        await bot.reply(message, JSON.stringify(response));
    })
    controller.hears(['^interests$'], 'message,direct_message', async (bot, message) => {
        const response = resume.interests;
        await bot.reply(message, JSON.stringify(response));
    })

    

}