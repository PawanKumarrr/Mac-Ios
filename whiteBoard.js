function whiteBoard(currDockIcon){
    let appBox=`.box-box[appbox="WhiteBoard"]`
    toRemoveLaunchPad();
    currDockIcon.style.animation="box 1s  alternate";
    if(!currDockIcon.querySelector('.active-dot')){
            let divDot =  document.createElement("div");
            divDot.setAttribute('appBox-dot','WhiteBoard-dot');
            divDot.classList = "active-dot";
            currDockIcon.append(divDot);
    }

    let boxBox = document.querySelector(appBox); 
    if(boxBox){
        currDockIcon.removeAttribute('style');
        return;
    }

    let div =  document.createElement("div");
    div.classList ="box-box";
    div.setAttribute('appBox',"WhiteBoard");
    div.innerHTML = 
    `
        <div class="box-container">
            <div class="mac-dialogBox-title">
                <div class="mac-dialogBox-title-3option-box">
                    <div class="mac-dialogBox-title-icon1">
                    </div>
                    <div class="mac-dialogBox-title-icon2">
                    </div>
                    <div class="mac-dialogBox-title-icon3">
                    </div>
                </diV>
                <div class="mac-dialogBox-title-boxText">
                    WhiteBoard
                </div>
            </div>
        </div>
    `
    divScreenContainer.append(div);


    //Z-INdex                  
    let currBox = document.querySelector('.box-box[appbox="WhiteBoard"]');
    if(currBox){
        currDockIcon.addEventListener("click",function(){

            if(lastZIndexAppBOx != lastZIndexAppBOx!='WhiteBoard' ){
                let lastOpenBox = document.querySelector(`.box-box[appbox="${lastZIndexAppBOx}"]`);
                if(lastOpenBox){
                    lastOpenBox.style.zIndex = "0";
                }
            }
            let currBox = document.querySelector('.box-box[appbox="WhiteBoard"]');
            currBox.style.zIndex = "80";
            lastZIndexAppBOx = "WhiteBoard";
        })
    }

    cancelCircle(currDockIcon,appBox);
    fullScreenCircle(appBox);
    minimize(appBox);
}