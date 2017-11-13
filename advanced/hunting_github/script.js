$(document).ready(function(){
    $('button').click(function(){
        var id = this.id
        $.get("https://api.github.com/users/githubUserName" + displayName)
    });

    function displayName(data) {
        if (data.name){
        $('body').append("<p>"+data.name+"</p>");
        }
    }
});
