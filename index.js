// para rodar aplicação 
// ctrl + shift + p 

var App_action = function () { };

App_action.prototype = {

    userConfiguration = 0 // 
    // 0 - no valid access
    // 1 - read configuration access
    // 2 - admin configuration access

    , system = (callback) => {
        if(callback != null){
            callback();
            alert('1');
        }else{
            alert('2');
        }
    }
    
    , configurationAccess = () => {
        
    }
}
