function onSubmit(resolve) {
  let discord_webhook = '' //Your discord webhook
  let responses = resolve.source.getResponses();
  let responseNumber = responses.length;
  let discord_embed = {
      embeds: [{
          type: 'rich', // do not change
          title: 'New Application! Response Number: #' + responseNumber,
          color: 00000, //Here would be the color the default is black
          fields: [], //Leave this alone
      }]
  }
  resolve.response.getItemResponses().forEach(function(comeback) {
      let val = comeback.getResponse() || 'None'
      discord_embed.embeds[0].fields.push({ name: comeback.getItem().getTitle(), value: val })
  })
  UrlFetchApp.fetch(discord_webhook, {
      method: 'post',
      payload: JSON.stringify(discord_embed),
      contentType: 'application/json'
  })
}
