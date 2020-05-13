class Form{
constructor(){}
display(){
    var title = createElement("h2");
    title.html("Voters ID");
    title.position(130,0);

    var input1 = createInput("emailID");
    var input = createInput("name");
    var button = createButton("Enter");
    input1.position(130,160);
    input.position(100,185);
    button.position(260,220);
    var question = createElement("h2");
    var option = createButton("h3");
    var option1 = createButton("h3");

    button.mousePressed(function(){
        input1.hide();
        input.hide();
        button.hide();
        //question.hide();
        var emailID = input.value();
        playerCount +=1;
        player.update(name);
        player.updateCount(playerCount);
        question.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
       question.position(130,160);
       option.html("Yes");
       option.position(250,250);
       option1.html("No");
       option1.position(250,280);
    })
    
}

}