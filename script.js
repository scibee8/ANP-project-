document.addEventListener('DOMContentLoaded', function() {

    const her_model=document.getElementById('h_model');

    
    navigator.geolocation.getCurrentPosition(function(position) { 

        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        her_model.setAttribute('gps-entity-place',  `latitude: ${lat}; longitude: ${long}`);
    });
    
    
});

window.addEventListener('resize', adjustSliderWidth);

    function adjustSliderWidth() {
        var sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(function(slider) {
            slider.style.width = window.innerWidth > 600 ? '100%' : '90%'; // Adjust based on the condition
        });
    }

    // Initial adjustment on load
    adjustSliderWidth();




    


