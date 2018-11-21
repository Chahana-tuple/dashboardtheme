$(function(){
    function pageLoad(){
        $('.widget').widgster();
    }
    pageLoad();
    singApp.onPageLoad(pageLoad);
});