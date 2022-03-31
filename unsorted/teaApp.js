

// Switch Statement
function someTea(theName) {
    console.log('Hello ' + theName + ' how are you today?');
    console.log('Would you like some tea?');
    let tea = prompt('Yes or No');
        switch(tea) {
            case "yes":
                console.log('Here is your tea ' + theName + ', enjoy.');
                break;
             case "Yes":
                 console.log('Here is your tea ' + theName + ', enjoy.');
                 break;
            case 'no':
                console.log(`${theName}, what do you mean no? I think you meant to say yes, here is your tea.`);
                break;
             case 'No':
                 console.log(`${theName}, what do you mean no? I think you meant to say yes, here is your tea.`);
                break;
            default:
                console.log('I asked if you want tea, yes or no.');
                break;

        }
}
someTea('rin');