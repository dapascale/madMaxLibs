$(document).ready(function() {

    let inspoName = prompt(`Enter your full name. Now. Please.`);

    alert(`Welcome.

    The machine behind me is the Mad Lib Generator XR24dlcZ, running Windows 98. It was designed and developed by the famous engineer ${inspoName}.
    
    This computer was designed to harness and exhibit the full might and power of the Internet Explorer web browser. ${inspoName} believed whole-heartedly in Internet Explorer, saying at one point that they were willing "to live and die for the grace and majesty of this mighty browser". This is their legacy.
    
    Enter all inputs below, and click 'USE IT' to witness the unparalleled power of Internet Explorer.
    
    While we respect your right to prevent additional dialogue boxes from appearing, we ask that you do not click the box, and trust us in good faith not to interfere with your experience any longer. Thank you.`);

    alert(`Last one.
    Just wanted to say, 'Have fun!'`)

    // hide the Mad Lib Story for now
    $(`.libForm`).hide();

    // Only let submit happen when all inputs are filled
    validate();
    $(`.typeHere`).change(validate);

    function validate(){
        if ($(`.libItemAdj1`).val().length > 0 &&
            $(`.libItemAdj2`).val().length > 0 &&
            $(`.libItemBody1`).val().length > 0 &&
            $(`.libItemPet`).val().length > 0 &&
            $(`.libItemPetName`).val().length > 0 &&
            $(`.libItemBody2`).val().length > 0 &&
            $(`.libItemAdj3`).val().length > 0 &&
            $(`.libItemNoun1`).val().length > 0 &&
            $(`.libItemRoom`).val().length > 0 &&
            $(`.libItemVerb1`).val().length > 0 &&
            $(`.libItemVerb2`).val().length > 0 &&
            $(`.libItemColor`).val().length > 0 &&
            $(`.libItemNoun2`).val().length > 0 &&
            $(`.libItemAdverb`).val().length > 0 &&
            $(`.libItemSillyWord`).val().length > 0 &&
            $(`.libItemVerb3`).val().length > 0 &&
            $(`.libItemVerb4`).val().length > 0 &&
            $(`.libItemAdj4`).val().length > 0 &&
            $(`.libItemBody3`).val().length > 0 &&
            $(`.libItemName`).val().length > 0 &&
            $(`.libItemAnimal`).val().length > 0 &&
            $(`.libItemFood`).val().length > 0 &&
            $(`.libItemBodyFunc`).val().length > 0 &&
            $(`.libItemVerb5`).val().length > 0) {
            $(`#addItem`).prop(`disabled`, false);
        }
        else {
            $(`#addItem`).prop(`disabled`, true);
        }
    };
    
    $(`#addItem`).click(function(event) {
        // prevent form from refreshing page
        event.preventDefault();
        // get info from the user's input and place it in mad lib
        $(`.adj1`).append($(`input.libItemAdj1`).val());
        $(`.adj2`).append($(`input.libItemAdj2`).val());
        $(`.body1`).append($(`input.libItemBody1`).val());
        $(`.petType`).append($(`input.libItemPet`).val());
        $(`.petName`).append($(`input.libItemPetName`).val());
        $(`.body2`).append($(`input.libItemBody2`).val());
        $(`.adj3`).append($(`input.libItemAdj3`).val());
        $(`.noun1`).append($(`input.libItemNoun1`).val());
        $(`.room`).append($(`input.libItemRoom`).val());
        $(`.verb1`).append($(`input.libItemVerb1`).val());
        $(`.verb2`).append($(`input.libItemVerb2`).val());
        $(`.color`).append($(`input.libItemColor`).val());
        $(`.noun2`).append($(`input.libItemNoun2`).val());
        $(`.adverb`).append($(`input.libItemAdverb`).val());
        $(`.sillyWord`).append($(`input.libItemSillyWord`).val());
        $(`.verb3`).append($(`input.libItemVerb3`).val());
        $(`.verb4`).append($(`input.libItemVerb4`).val());
        $(`.adj4`).append($(`input.libItemAdj4`).val());
        $(`.body3`).append($(`input.libItemBody3`).val());
        $(`.name`).append($(`input.libItemName`).val());
        $(`.animal`).append($(`input.libItemAnimal`).val());
        $(`.favoriteFood`).append($(`input.libItemFood`).val());
        $(`.bodyFunc`).append($(`input.libItemBodyFunc`).val());
        $(`.verb5`).append($(`input.libItemVerb5`).val());

        // clear all inputs
        $('.typeHere').val('');

        // show the story 
        $(`.libForm`).fadeIn(2000);

        // scroll to the story? If possible?
        $(`html, body`).animate({
            scrollTop: $(`.libForm`).offset().top
        }, 1000);
    });
});