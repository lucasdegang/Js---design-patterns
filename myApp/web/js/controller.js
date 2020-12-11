// chamado apos carga index.js 
$(document).ready(function(){
    AppAction = new AppAction();
    AppAction.init();
});

// export fucntion
function execCall (){
    // chamada servidor
    alert("retornouuuu!");
}

//bloqueio de rotas (myApp, model, controller)