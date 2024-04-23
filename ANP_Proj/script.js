document.addEventListener('DOMContentLoaded', function() {
    const size_slider= document.getElementById('s_slide');
    const rot_slider= document.getElementById('r_slide');
    const her_model=document.getElementById('h_model');
    const model_button=document.getElementById('m_button');

    

     navigator.geolocation.getCurrentPosition(function(position) { 

        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        her_model.setAttribute('gps-entity-place',  `latitude: ${lat}; longitude: ${long}`);
    });
    

    size_slider.addEventListener('input', function(){ 
        const s_val=this.value;
        her_model.setAttribute('scale', `${s_val} ${s_val} ${s_val}`);
    });

    rot_slider.addEventListener('input', function() { 

        const r_val=this.value;
        her_model.setAttribute('rotation', `0 ${r_val} 0`);

    });

    const m_list=['./assets/venus/scene.gltf', './assets/bone_point/scene.gltf', './assets/logboat_model/scene.gltf'];
    let m_index=0;

    model_button.addEventListener('click', function() {

        if(m_index<2){
            m_index++
        }else{
            m_index=0;
        }

        if(m_index==0){
            her_model.setAttribute('gltf-model',`${m_list[m_index]}` );
            her_model.setAttribute('position', `0 -5 -20` );
            her_model.setAttribute('size', `0.1 0.1 0.1`);

        }else if(m_index==1){
            her_model.setAttribute('gltf-model',`${m_list[m_index]}` );
            her_model.setAttribute('position', `0 0 -20` );
            her_model.setAttribute('size', `0.1 0.1 0.1`);

        }else{
            her_model.setAttribute('gltf-model',`${m_list[m_index]}` );
            her_model.setAttribute('position', `0 0 -20` );
            her_model.setAttribute('size', `0.01 0.01 0.01`);
        }
        
       

    });

    
});




    


