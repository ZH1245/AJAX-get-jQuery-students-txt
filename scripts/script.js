$(function(){
    $('#load').click(load)
});
function load() {
        $.get("students.txt",function(response){
            var lines=response.split("\n");
            // console.log(lines)
            // var templi = document.createElement('li')
            // console.log($("#list"))
            for (let index = 0; index < lines.length; index++) {
                var templi = document.createElement('li')
                templi.append(lines[index]);
                $("#list").append(templi)
                templi.empty;
            }
        })
}