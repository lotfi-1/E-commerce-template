
let switchBtn= document.querySelector(".container header > div:last-child .profile .information div:nth-child(3) div");
if(window.localStorage.getItem("theme")==="dark"){
    dark(switchBtn);
} else{
    light(switchBtn);
}

let linksbtn= document.querySelector(".container header > div:first-child  button");
let links = document.querySelector(".container header > div:first-child .links");
const style = getComputedStyle(links);
let blur= document.querySelector(".container header > div:first-child .blur");
linksbtn.onclick=(e)=>{
    let span = linksbtn.children; 
    if(linksbtn.classList.contains("clickedBtn")){
        linksbtn.classList.remove("clickedBtn");
        links.removeAttribute("open");
        links.setAttribute("closing","");
        span[0].style.cssText=`
            transform : rotate(0);
        `;
        span[1].style.cssText=`
            opacity: 1;
        `;
        span[2].style.cssText=`
            transform : rotate(0);
        `;
        links.style.left ="-100%";
        blur.style.right ="-100%";
    } else {
        links.removeAttribute("closing");
        links.setAttribute("open","");
        span[0].style.cssText=`
            top: 9px;
            transform : rotate(-45deg);
        `;
        span[1].style.cssText=`
            opacity: 0;
        `;
        span[2].style.cssText=`
            top: 9px;
            transform : rotate(45deg);
        `;
        links.style.left="0";
        blur.style.right ="0";
        linksbtn.classList.add("clickedBtn");
    }
}
blur.onclick= e=>{
    let span = linksbtn.children; 
    linksbtn.classList.remove("clicked");
    links.removeAttribute("open");
    links.setAttribute("closing","");
    span[0].style.cssText=`
        transform : rotate(0);
    `;
    span[1].style.cssText=`
        opacity: 1;
    `;
    span[2].style.cssText=`
        transform : rotate(0);
    `;
    links.style.left ="-100%";
    blur.style.right ="-100%";
}

let linksVisible = document.querySelectorAll(".container header > div:first-child .links ul li ");
linksVisible.forEach(e=>{
    e.onmouseover= ele=>{
        if(style.position==="static"){
            let border= document.querySelector(".container header .border");
            border.style.cssText=`
                width: ${e.offsetWidth}px;
                left: ${e.offsetLeft}px;
            `;
        }
    }
});
links.onmouseout= e=>{
    if(style.position==="static"){
        let border= document.querySelector(".container header .border");
        border.style.cssText=`
            left: -80px;
            transition: left 0.6s;
        `;
    }
}
let storeIcon= document.querySelector(".container header > div:last-child .icon > img");
let cart=  document.querySelector(".container header > div:last-child .icon > div:last-child > div:last-child");
let deleteBtn ;
storeIcon.onclick= ()=> {
    let data = storeIcon.nextElementSibling.getAttribute("data");
    if(!data || data === "closing"){
        let openWind= document.querySelectorAll("[data=\"open\"]");
        let noti = document.querySelector(".notification");
        if(openWind.length > 0)
            openWind.forEach(ele=>closing(ele,1));
        if(noti !== null)
            animationClosing(noti,1);
        if(cart.textContent === "")
                cart.textContent= "Your cart is empty";

        openW(storeIcon.nextElementSibling,1,"block");        
    } else
        closing(storeIcon.nextElementSibling,1);

    
            

}

let profileIcon= document.querySelector(".container header > div:last-child .profile > img");
profileIcon.onclick= ()=> {
    let data = profileIcon.nextElementSibling.getAttribute("data");
    if(!data || data === "closing"){
            let openWind= document.querySelectorAll("[data=\"open\"]");
            openWind.forEach(ele=> closing(ele)); 
            openW(profileIcon.nextElementSibling,1,"block");
        } else {
            profileIcon.style.border= "none";
            closing(profileIcon.nextElementSibling,1);
        }
}


let lightDarkIcon= document.querySelectorAll(".container header > div:last-child .profile .information div:nth-child(3) i"); 
lightDarkIcon.forEach(e=>{
    e.onclick= ele=>{
        if(e.classList.contains("fa-sun")){
            light(switchBtn);
        } else {
            dark(switchBtn);
        }
    };
});

switchBtn.onclick= e=>{
    if(!switchBtn.hasAttribute("dark")){
        dark(switchBtn);
    } else {
        light(switchBtn);
    }
};

// 
// 
// 
// 
// 
//      SECTION Part 
// 
// 
// 
// 
// 
// 
//              Photo Part
// 
// 
let icons= document.querySelectorAll(".container section .photos i");
let divimg=document.querySelectorAll(".container section .photos > div > img");
let loop=document.querySelector(".container section .photos > img");
let i=1;
icons.forEach(e=>{
    e.onclick = ele=>{
        i=changePh(loop,divimg,e,i);
    }
});

divimg.forEach(e=>{
    e.onclick= (ele)=>{
        i=changeIndex(divimg,loop,e);
    };
});

let child;

loop.addEventListener("click",(e)=>{
    if(document.body.offsetWidth >= 992){
        let container = document.querySelector(".container");
        let dialogEle = document.createElement("div");
        dialogEle.classList.add("wind");
        dialogEle.setAttribute("open","");
        dialogEle.style.cssText =`
        width: ${container.offsetWidth}px;
        height: ${container.offsetHeight}px;
        `;
        
        if(child === undefined ){
            child= document.querySelector(".container section .photos ").cloneNode(true); 
            child.classList.add("copy");
            child.style.cssText =`
            position: fixed;
            top: 45%;
            left: 50%; 
            transform : translate(-50%,-50%);
            background-color: transparent;
            z-index:6;
            `;
            container.children[1].append(child);
        } 
        
        
        container.children[1].append(dialogEle);
        openW(child,1,"block");
        openW(dialogEle,0.8,"block");
    }
});










// 
// 
// 
//              description Part 
// 
// 
// 
// 

let minus= document.querySelector(".container section .description > div:last-of-type > div:first-child") ;
let plus= document.querySelector(".container section .description > div:last-of-type > div:last-child");
let quantity= document.querySelector(".container section .description > div:last-of-type > div:nth-child(2)");
let add= document.querySelector(".container section .description > button"); 
let priceOfSneakers= document.querySelector(".container section .description > div:first-of-type > div:first-child");
let title = document.querySelector(".container section .description > h2");

minus.onclick =(e)=>{
    let price = +quantity.textContent;     
    price -= 1 ; 
    if(price>=0)
        quantity.textContent= ''+price ; 
}
plus.onclick =(e)=>{
    let price = +quantity.textContent; 
    price += 1 ; 
    if(price<30)
        quantity.textContent= ''+price ; 
}

let notification;

add.onclick =(e)=>{
    let data = storeIcon.nextElementSibling.getAttribute("data");
        if(+quantity.textContent > 0 ){
            createElement(cart,divimg[0].getAttribute("src"),title.textContent,+priceOfSneakers.textContent.substring(1),+quantity.textContent);
            if(data !== "open"){
                if(notification=== undefined){
                    notification= document.createElement("div");
                    notification.classList.add("notification");
                    notification.textContent= quantity.textContent;
                    storeIcon.parentElement.prepend(notification);
                }else 
                    notification.textContent= quantity.textContent;
                    notification.style.display= "flex";
                animationOpen(notification,1);
            }
        }
    
}


// 
// 
// 
// 
//  function Part 
// 
// 
// 
// 
// 
// 

// 
// 
// 
//  header function 
//  
// 
// 

function animationOpen(child,endopacity){
    let opacity = 0;
    let animation = function() {
        opacity += 0.05; 
        child.style.opacity = opacity; 
        if (opacity < endopacity) {
            requestAnimationFrame(animation);
        }
    };
    requestAnimationFrame(animation);
}

function animationClosing(child,beginopacity,callback=""){
    let opacity = beginopacity;
    let animation = function() {
        opacity -= 0.05; 
        child.style.opacity = opacity; 
        if (opacity > 0) {
            requestAnimationFrame(animation);
        }else{
            child.style.display= "none";
            if(callback==="remove"){
                child.remove();
                if(cart.textContent===""){
                    cart.textContent="Your cart is empty";
                }
            }
        }
    };
    requestAnimationFrame(animation);
}

function openW(child,endopacity,display){
    child.setAttribute("data","open");
    child.style.display= display;
    animationOpen(child,endopacity);
}
function closing(child,beginopacity,callback=""){
    child.setAttribute("data","closing");
    animationClosing(child,beginopacity,callback);
}

function dark(ele){
    let circl= ele.children[0];
    let background= ele.children[1]; 
        ele.setAttribute("dark","");
        ele.removeAttribute("light");
        circl.style.left= "35px";
        background.style.cssText=`
            background-color: #2196F3;
            width: 52px ;  
        `;
        let root = document.documentElement;
        root.style.setProperty('--white', "hsl(220, 13%, 13%)");
        root.style.setProperty('--titleColor', "white");
        root.style.setProperty('--textColor', "#ccc");
        // root.style.setProperty('--black', "white");
        window.localStorage.setItem("theme","dark");
}
function light(ele){
    let circl= ele.children[0];
    let background= ele.children[1]; 
    ele.setAttribute("light","");
    ele.removeAttribute("dark");
    circl.style.left= "4px";
    background.style.cssText=`
        width: 0;  
    `;
    let root = document.documentElement;
    root.style.setProperty('--white', "white");
    root.style.setProperty('--titleColor', "hsl(220, 13%, 13%)");
    root.style.setProperty('--textColor', "#858585");
    window.localStorage.setItem("theme","light");
}

// 
// 
//  section function 
// 
// 
// 
function replaceCharacter(string,index,value){
    return string.substring(0,index) + value + string.substring(index + 1);
}

function changePh(parent,smallImgs,e,numPh){
    if(e.classList.contains("fa-circle-chevron-left")){
        numPh--;
        if(numPh<=0)
        numPh=4;
    } else {
        numPh++;
        if(numPh>4)
        numPh=1;
    }
    changeimg(smallImgs,numPh-1);
    parent.setAttribute("src",replaceCharacter(parent.getAttribute("src"),21,numPh));
    return numPh;
}

function changeimg(images,ind){
images.forEach((e,index)=>{
    if(ind===index)
        e.classList.add("active");
    else 
        e.classList.remove("active");
});
}

function changeIndex(smallImages,bigImg,e){
let index;
index=e.getAttribute("src").charAt(21);
changeimg(smallImages,index-1);
bigImg.setAttribute("src",replaceCharacter(bigImg.getAttribute("src"),21,index));
return index ;
}

function createElement(parent,imagesrc,title,price,quantities){
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let i = document.createElement("i");
    let button = document.createElement("button");
    button.textContent="Checkout";
    div.classList.add("add");
    img.setAttribute("src",imagesrc);
    span.textContent= `$${price * quantities}`;
    p.textContent=title + ` ${price} x ${quantities}`;
    i.classList.add("fa-solid" ,"fa-trash-can");
    i.setAttribute("id","delete");
    div.append(img);
    div.append(p);
    div.append(i);
    div.append(button);
    p.append(span);

    if(parent.textContent==="Your cart is empty")
        parent.textContent="";

    let data = storeIcon.nextElementSibling.getAttribute("data");
    parent.prepend(div);
    if(data === "open"){
        animationOpen(div,1);
    } 
}

const observer = new MutationObserver((mutations)=>{
        mutations.forEach((e)=>{
            if(e.addedNodes.length){
                for(const node of e.addedNodes){
                    if(node.children !== undefined){
                        if(node.children[2] !== undefined && node.children[2].id === "delete"){
                            node.children[2].addEventListener("click",()=>{
                                closing(node.children[2].parentElement,1,"remove");
                            });
                        }
                        
                        if(node.classList.contains("copy")){
                            let iCopy=1;
                            let loopCopy=document.querySelector(".container section .copy > img");
                            let iconsCopy= document.querySelectorAll(".container section .copy i");
                            let divimgCopy=document.querySelectorAll(".container section .copy > div > img");
                            iconsCopy.forEach(e=>{
                                e.onclick = ele=>{
                                    iCopy=changePh(loopCopy,divimgCopy,e,iCopy);
                                }
                            });
                            divimgCopy.forEach(e=>{
                                e.onclick= (ele)=>{
                                    iCopy=changeIndex(divimgCopy,loopCopy,e);
                                };
                            });
                        }
                        if(node.classList.contains("wind")){
                            let photoCopy= document.querySelector(".container section .copy");; 
                            node.onclick=(e)=>{
                                closing(node,0.8);
                                closing(photoCopy,1);
                            }
                        }
                    }
                }
            }
        });
    });

    observer.observe(document.body, {
    childList: true,
    subtree: true
    });