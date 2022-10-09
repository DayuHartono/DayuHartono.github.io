$(document).ready(function(){
    $(".isinya").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_isinya = split[1];

        $(".isinya").removeClass('aktif');
        $("#isinya_"+id_isinya).addClass('aktif');

        

        $("#bagan_1").slideUp();
        $("#bagan_2").slideUp();
        $("#bagan_3").slideUp();
        $("#bagan_"+id_isinya).slideToggle("medium");
    });
});