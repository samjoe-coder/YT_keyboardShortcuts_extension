function exe_ks_p125(){
    try{
        const settings = document.getElementsByClassName('ytp-settings-button');
        if(settings){
            settings[0].click();
        }

        try{
            const playback_speed = document.getElementsByClassName('ytp-menuitem');
            
            if(playback_speed){
                playback_speed[3].click();
                setTimeout(function(){
                    playback_speed[4].click();
                },1000);
                setTimeout(function(){
                    settings[0].click();
                },1000);
                
            }
        }catch(e){
            console.log(e);
        }
    }catch(e){
        console.log(e);
    }
}

exe_ks_p125();