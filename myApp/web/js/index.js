// import function

var AppAction = function () { };

AppAction.prototype = {
    // global variable
    _userConfiguration : 0

    // 0 - invalid access
    // 1 - normal access
    // 2 - admin

    , init : function (){
        alert("init");
    }

    , consultar : function (){
        var self = this;
        
        self.montaLista(0);
        self.montaLista(3);
        //self.montaLista(2);
    }

    , montaLista : function(parallax){
        var divM = null;
        var div = null;
        var idParallax = "parallax";

        if(parallax != 0){
            if(parallax == 2){
                idParallax = 'parallax2';
            }else{
                idParallax = 'parallax3';
            }
        }
        
        divM = $(document.createElement('div'));
        
        div = $(document.createElement('div'));
        div.attr('height', '150px;');
        div.html("&nbsp;");
        divM.append(div);

        div = $(document.createElement('div'));
        div.attr('height', '400px;');
        div.addClass(idParallax);
        divM.append(div);

        div = $(document.createElement('div'));
        div.attr('height', '150px;');
        div.html("&nbsp;");
        divM.append(div);

        $("#app").append(divM);
    }
};

// free function
//execCall();