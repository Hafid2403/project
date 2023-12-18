$(document).ready(function () {
    $("#image-upload").change(function () {
        const file = this.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = function () {
            $("#profile-pic").attr("src", fileReader.result).removeClass("hidden");
        };

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            $("#profile-pic").attr("src", "user-pict.png");
        }
    });
});