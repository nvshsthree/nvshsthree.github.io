function load() {
    var youtube = false;
    /*var facebook = false;
    var allow = false;*/

    fetch('https://simplecorsoverwrite.chowders.workers.dev/?https://example.com').then( response => {
        console.log(response)
        if(response.ok){
            youtube = true;
        };
        if(!response.ok){
            youtube = false;
        };
    });
    /*fetch('https://facebook.com/').then( response => {
        if(response.ok){
            facebook = true;
        };
        if(!response.ok){
            facebook = false;
        };
    });*/

    console.log(youtube);
    //console.log(facebook);

    /*if(youtube == false && facebook == false){
        allow = true;
    };
    if(youtube == true && facebook == false){
        allow = false;
    };
    if(youtube == true && facebook == true){
        allow = true;
    };*/
    if (youtube) {
        allow = false   
    }

    if(allow = true){
        //location.replace("https://nvshs.github.io/portal");
    };
    if(allow == false){
        //location.replace("https://nvshs.github.io/infosite");
    };
}
