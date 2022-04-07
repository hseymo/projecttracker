// clock in header
var presentDate = moment().format("MMM Do, YYYY HH:mm:ss");
$('#present').text(presentDate)

setInterval(function() {
    presentDate = moment().format("MMM Do, YYYY HH:mm:ss");
    $('#present').text(presentDate)
},1000)


// $('#add').on("click", function() {
//         $('#dialog').dialog();
// });

let projectAddition;

$('#submit').on("click", function(event) {
    event.preventDefault()
    let projectAddition = {
        Project: $('#projectName').val(),
        Type: $('#projectType').val(),
        Rate: $('#hourlyRate').val(),
        Due: $('#dueDate').val()
    }
    console.log(projectAddition);
})

var projectNameList = [
    "gardening",
    "cooking",
    "coding",
    "sleeping"
]

$('#projectName').autocomplete({
    source: projectNameList
});