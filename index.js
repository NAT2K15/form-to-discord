function onSubmit(resolve) {
    let discord_webhook = '' //Your discord webhook
    let discord_embed = {
        embeds: [{
            type: 'rich', // do not change
            title: 'New app!', ///Here would be the title
            color: 00000, //Here would be the color the default is black
            description: `A new form resonse has just been sumbited. Below are the answers to the questions you have on the google form.`
        }],
        content: `<%role-id-here> A new form was sumbbited`
    }
    resolve.response.getItemResponses().forEach(function(comeback) {
        let val = comeback.getResponse() || 'None'
        discord_embed.embeds[0].description +=  `\n**${comeback.getItem().getTitle()}**\`\`\`\n${val}\`\`\``
    })
    UrlFetchApp.fetch(discord_webhook, {
        method: 'post',
        payload: JSON.stringify(discord_embed),
        contentType: 'application/json'
    })
}
