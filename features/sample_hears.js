/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {
    let about = "I am a software engineer with skills in Javascript, Ruby, Ruby on Rails, React, Redux, PostgreSQL, MongoDB, HTML, and CSS. Since I was very young I have loved to make things.This started with little knick knacks I made with my mother and grandma led into metal / wood working, and finally software development. $ I love all of the things it allows me to do.Whenever I am programming It makes me feel as though I am a wizard just like in the stories I read as a child. $ Personally, I'm all about archery. I frequent a few outdoor courses around the bay area, that I would compare to golf courses. Different shots, at different angles and distances. Other hobbies of mine include rock climbing, surfing, swimming, and Krav Maga. Though I have found my passion I worked in a variety of backgrounds such as parks and recreation, and aquatics. $ It was actually while I worked as a Recreational Technician that I began to think about coding. I was given many odd jobs such as converting VHS to mp4 for training lifeguards, and managing our staff website.I used excel to create budgets to calculate areas of improvement. The more I worked with computers the more I wanted to know and learn. And I have never stopped. ";
    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    controller.hears('Tell me about yourself', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, about.split('$').join(' '))
    })
    controller.hears(['^goodbye$'], 'message,direct_message', async (bot, message) => {
        await bot.reply(message, 'Bye! Thanks for chatting!')
    })
    controller.hears(['^Hello$'], 'message,direct_message', async (bot, message) => {
        await bot.reply(message, "Hello! My name is Ethan Bot 3000 and I am Ethan Wright's personal chat bot. Let me know what you would like to know about him and I will do my best to answer.")
    })

    controller.hears(['^education$'],'message,direct_message', async (bot, message) => {
        await bot.reply(message, "Oregon State University, BA in History. App Academy certificate of completion in Software Development.")
    })

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

}