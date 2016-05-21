/**
 * Created by Alan on 5/20/2016.
 */

    var text = '{"checkItems":[{"name":"Who is is updating the data for the 5K threshold"},{"name":"Single pro with large revenue impact"}]}';
    var text1 = '{"id":"5729046b6b7666a9f39346a9","badges":{"votes":0,"viewingMemberVoted":false,"subscribed":false,"fogbugz":"","checkItems":2,"checkItemsChecked":0,"comments":0,"attachments":0,"description":false,"due":null},"checkItemStates":[],"closed":false,"dateLastActivity":"2016-05-03T20:11:34.962Z","desc":"","descData":null,"due":null,"email":"alanmcivor+54a8d7b3566e2fc364e04755+5729046b6b7666a9f39346a9+ecb5e5fb71bcbc0f55035448ce4f093fd87e94d7@boards.trello.com","idBoard":"5569d2b9474cb1ed2d592743","idChecklists":["57290472050bc1d96e382250"],"idList":"56eb0e05c2f6c950061e3ba2","idMembers":[],"idMembersVoted":[],"idShort":255,"idAttachmentCover":null,"manualCoverAttachment":false,"labels":[],"idLabels":[],"name":"Meeting for 5/3","pos":131071,"shortLink":"772LK1Xx","shortUrl":"https://trello.com/c/772LK1Xx","subscribed":false,"url":"https://trello.com/c/772LK1Xx/255-meeting-for-5-3","members":[],"checklists":[{"id":"57290472050bc1d96e382250","name":"Checklist","idBoard":"5569d2b9474cb1ed2d592743","idCard":"5729046b6b7666a9f39346a9","pos":16384,"checkItems":[{"state":"incomplete","idChecklist":"57290472050bc1d96e382250","id":"57290482045474e75c29927b","name":"Who is is updating the data for the 5K threshold","nameData":null,"pos":16763},{"state":"incomplete","idChecklist":"57290472050bc1d96e382250","id":"572905f6abdcfcf48d0be06f","name":"Single pro with large revenue impact","nameData":null,"pos":33996}]}],"actions":[{"id":"57290472050bc1d96e382251","idMemberCreator":"54a8d7b3566e2fc364e04755","data":{"board":{"shortLink":"Opp1Yyti","name":"TNT","id":"5569d2b9474cb1ed2d592743"},"checklist":{"name":"Checklist","id":"57290472050bc1d96e382250"},"card":{"shortLink":"772LK1Xx","idShort":255,"name":"Meeting for 5/3","id":"5729046b6b7666a9f39346a9"}},"type":"addChecklistToCard","date":"2016-05-03T20:05:06.064Z","memberCreator":{"id":"54a8d7b3566e2fc364e04755","avatarHash":"2beda07e673a5e8430943e3dc8bba109","fullName":"Alan McIvor","initials":"AM","username":"alanmcivor"}},{"id":"5729046b6b7666a9f39346aa","idMemberCreator":"54a8d7b3566e2fc364e04755","data":{"board":{"shortLink":"Opp1Yyti","name":"TNT","id":"5569d2b9474cb1ed2d592743"},"list":{"name":"MRRA","id":"56eb0e05c2f6c950061e3ba2"},"card":{"shortLink":"772LK1Xx","idShort":255,"name":"Meeting for 5/3","id":"5729046b6b7666a9f39346a9"}},"type":"createCard","date":"2016-05-03T20:04:59.739Z","memberCreator":{"id":"54a8d7b3566e2fc364e04755","avatarHash":"2beda07e673a5e8430943e3dc8bba109","fullName":"Alan McIvor","initials":"AM","username":"alanmcivor"}}]}';

    obj = JSON.parse(text1);
    console.log("checklist has " + obj.checklists.length);
    console.log("Check ITems has " + obj.checklists[0].checkItems.length);
    var itemList = '';
    for (itemCount = 0; itemCount < obj.checklists[0].checkItems.length; itemCount++) {
        itemList = itemList + obj.checklists[0].checkItems[itemCount].name + '<br>';
    }
    console.log(itemList);
    document.getElementById("demo").innerHTML = itemList;




