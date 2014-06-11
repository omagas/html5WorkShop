$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('.progress-bar').click(function (e){
    $(this).width="80%"
})
