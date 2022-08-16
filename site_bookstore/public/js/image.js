function fileValidation(){
    var file = document.getElementById('image');
    var filePath= file.value;
    var fileExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!fileExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        file.value = '';
        return false;
    }else{
        //Image preview
        if (file.files && file.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('fileImage').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(file.files[0]);
        }
    }
}