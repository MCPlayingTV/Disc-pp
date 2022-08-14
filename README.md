# Disc++
All-in-one, simple to use, Discord bot coding language.

### Example:
*ping command:*
```
name: ping
run:
    reply("Pong!")
error:
    reply("Error!")
```
*say command:*
```
name: say
args:
    reqestedMsg:
        type: text
        description: What should I say?
run:
    reply(requestedMsg)
error:
    reply("I couldn't say that..")
```
*button handling:*
```
name: buttontest
run:
    button("Click Me","blue")
error:
    reply("Couldn't send button!")
click:
    reply("You clicked my button!",true)
```

### Plans:
*basic list of planned ideas*.
- [ ] Built-in web panel to control bots easily (*with console access*).
- [ ] Easy package installation, where dpp files are in the main directory with a commands folder, and running `dpp start` would start the bot.
- [ ] Ability for complex features in bots (*ex. more native support for packages*).
- [ ] Bot Templates, where people can get their own, easily customizable bots.
- More, and more..