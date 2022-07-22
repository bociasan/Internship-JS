import { mockData } from "../mockData.js";
import { mockFlags } from "../flags.js";
const drivers = [...mockData.sort((a,b) => b.points - a.points)];
const flags = [...mockFlags];
//console.log(flags)
const container = document.querySelector('.drivers-container');
//console.log(drivers)

drivers.forEach((driver, index) =>{
    container.innerHTML += `<div class="driver-card"> 
            
    <div style="display: flex; justify-content: space-between; padding: 10px 0; margin: 0; ">
        <div style="font-size: 70; vertical-align: top; "> ${index+1} </div>
        <div> 
            <div style="font-size: 30; padding: 6px 0 0 0;">
                ${driver.points}       
            </div>

            <div class="pts-div">
                PTS
            </div>

        </div>
    </div>

    <div class="line"></div>

    <div class="space-between">
        <div style="display: flex;">
            <canvas id="newCanvas" width="8px" height="30px" style="background: ${driver.hex}; margin-right: 5px;">
            </canvas>
            <div>
                <div>${driver.firstName}</div>
                <div>${driver.lastName}</div>
            </div>
        </div>

        <img class="flag" src="${flags.find((flag) => flag.country === driver.country).image}" width=20%>
        
    </div>

    <div class="line"></div>

    <div>${driver.team}</div> 

    <div class="div-relative" >
        <img src="${driver.image}" width=70% style="position: absolute; margin-left: 12%; ">

        <div class="driver-number">${driver.number}</div>
        <div class="plus-div"></div>
    </div>


    <div class="line"></div>
    <div class="space-between" style="position: relative;">
        <button class="pts-button">+</button>
        <button class="pts-button">-</button>
    </div>


</div> <!-- End card -->  `
})