/*
basic carousel web app javascript code
coded by: zachary murphy
date: 2/17/2019
*/

$(document).ready(function(){
    //slider varriable will be set to the ul element in html
    var slider = $("#image_list"); 
    var leftProperty, newleftProperty;

    //right button event handler click
    $("#right_button").click(function(){
        //get current left property value
        leftProperty =parseInt(slider.css("left"));

        //determine new value of left property
        if (leftProperty - 300 <= -900){
            newLeftProperty = 0;
        }else {
                newLeftProperty = leftProperty - 300;
            }
        //change the left property with the animate method
        slider.animate( {left: newLeftProperty}, 1000);
    });// end of right button

    //left button click event handler
    $("#left_button").click(function(){
        //get current left property value
        leftProperty = parseInt(slider.css("left"));

        //determine new value of left property
        if(leftProperty < 0){
            newLeftProperty = leftProperty + 300;
        } else{
            newLeftProperty = 0;
        }

        //change left property with the animate method
        slider.animate( {left: newLeftProperty}, 1000);
    }); // end of left button
});