Hooks.on("renderChatMessage", (message, html) => {

    html[0].style.borderColor = null;

    let userId = message.data.user;
    let user = game.users?.get(userId);

    if (user.data.role != 4) {
        html[0].children[0].children[0].style.color = user.data.color;
    }

});