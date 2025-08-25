$(document).ready(function(){
    $(window).scroll(function(){
        //navbar
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    //navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation 
    var typed = new Typed(".typing", {
        strings: ["Sustainable Development Advocate", "Global Environmental Health Supporter", "Ecosystem Vitality Promoter", "Climate Change Awareness Advocate", "Green Future Supporter", "Champion of Sustainable Cities"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Promoting Sustainable Development",
            "Supporting Environmental Health",
            "Advocating for Green Solutions",
            "Raising Awareness on Climate Change",
            "Building Eco-friendly Communities",
            "Championing Global Sustainability"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });    


    // owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});
$(document).ready(function () {
    $("body").animate({ opacity: 1 }, 1500);  
    $(".scroll-up-btn").fadeIn(2000); 
    $(".scroll-up-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
});
function changeCity() {
    const city = document.getElementById('citySelect').value;
    let mapUrl = '';


    switch(city) {
        case 'NewDelhi':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391632.7190138296!2d77.036871!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02f34a5e5f5d%3A0x8e5f21a6d9305c77!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1592833681792!5m2!1sen!2sin";
            break;
        case 'Amsterdam':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2045.013046588604!2d4.9041385!3d52.3675979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60bdf01de1f47%3A0xd6fd61e7053818b9!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1614531204403!5m2!1sen!2sin";
            break;
        case 'Copenhagen':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378135.6409142904!2d12.5332384!3d55.6760968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525362d3785fcb%3A0x9f4c00d08fc28904!2sCopenhagen%2C%20Denmark!5e0!3m2!1sen!2sin!4v1614531310570!5m2!1sen!2sin";
            break;
        case 'Vancouver':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235377.040402185!2d-123.1216471!3d49.2827291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717a1fbb5dd3%3A0x2342f91e07102f6f!2sVancouver%2C%20British%20Columbia%2C%20Canada!5e0!3m2!1sen!2sin!4v1614531397620!5m2!1sen!2sin";
            break;
        case 'Oslo':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504242.74058672595!2d10.734477!3d59.912168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8716ab2b79%3A0x51911c0e82ea5cf6!2sOslo%2C%20Norway!5e0!3m2!1sen!2sin!4v1614531734417!5m2!1sen!2sin";
            break;
        case 'Zurich':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.2062358257584!2d8.5410296!3d47.3768866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c6f76a55f3f4f%3A0x7a1d31521976d25b!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1614531958500!5m2!1sen!2sin";
            break;
        case 'Stockholm':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143674.7773302611!2d18.0685802!3d59.3293235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f8d9d9a575679%3A0xd9ac4e6e490f0b8b!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sin!4v1614532080611!5m2!1sen!2sin";
            break;
        case 'Helsinki':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300937.09224642157!2d24.935451!3d60.169855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681f3e74b157c67%3A0x4209fdabcb19f8b7!2sHelsinki%2C%20Finland!5e0!3m2!1sen!2sin!4v1614532247755!5m2!1sen!2sin";
            break;
        case 'Berlin':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249115.18805773488!2d13.4049542!3d52.5200066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b207fae77f6b71%3A0x8f24031bfbcd4a28!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sin!4v1614532436443!5m2!1sen!2sin";
            break;
        case 'Portland':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424703.0860538043!2d-122.676481!3d45.523451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495065ad61aef5b%3A0x1d1da9fc5595395f!2sPortland%2C%20Oregon%2C%20USA!5e0!3m2!1sen!2sin!4v1614532572744!5m2!1sen!2sin";
            break;
        case 'Tokyo':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324273.5173473601!2d139.691711!3d35.689487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b50ebbb0d1d%3A0x506fc7957e1f3d17!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1614532902275!5m2!1sen!2sin";
            break;
        case 'SanFrancisco':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7485064722777!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809d648c63b7%3A0x405cdb2fba3a1f3b!2sSan%20Francisco%2C%20California%2C%20USA!5e0!3m2!1sen!2sin!4v1614533196286!5m2!1sen!2sin";
            break;
        case 'Singapore':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14167.429019950035!2d103.819836!3d1.352083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1997358b4401%3A0x865a6d65b7793ee4!2sSingapore!5e0!3m2!1sen!2sin!4v1614533366929!5m2!1sen!2sin";
            break;
        case 'Sydney':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.30559121845!2d151.2092955!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a183aa8d13db%3A0x91f30ab502394a1f!2sSydney%2C%20New%20South%20Wales%2C%20Australia!5e0!3m2!1sen!2sin!4v1614533531838!5m2!1sen!2sin";
            break;
        case 'Paris':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.071366786983!2d2.3522219!3d48.856614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f0024b604c7%3A0x34ae3b9d1a9f1c9a!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1614533802749!5m2!1sen!2sin";
            break;
        case 'London':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426757.00856689074!2d-0.127647!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761e6ab5b0f73f%3A0x1f2fc994c8e9fdf6!2sLondon%2C%20United%20Kingdom!5e0!3m2!1sen!2sin!4v1614533962659!5m2!1sen!2sin";
            break;
        case 'Barcelona':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99638.30245856395!2d2.173403!3d41.385063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a7f7fbbd04a1%3A0xe32d3c84a49f3fa!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sin!4v1614534091631!5m2!1sen!2sin";
            break;
        case 'Reykjavik':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315586.4013382646!2d-21.8277746!3d64.1355489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d63b3cbe70be8d%3A0x202a2bc9ab3a3dbe!2sReykjavik%2C%20Iceland!5e0!3m2!1sen!2sin!4v1614534319433!5m2!1sen!2sin";
            break;
        case 'NewYork':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120981.53847990799!2d-74.0060152!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a272f67db1b%3A0x44a44c57f198ba47!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1614534536092!5m2!1sen!2sin";
            break;
        case 'Montreal':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212501.56370047043!2d-73.5672558!3d45.5016889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b3f8e276c75%3A0x50f34b8be07abda7!2sMontreal%2C%20Quebec%2C%20Canada!5e0!3m2!1sen!2sin!4v1614534683894!5m2!1sen!2sin";
            break;
        case 'Geneva':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267434.67448139593!2d6.142012!3d46.2043907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791c6e22b163c65%3A0xf351314aefc9abf2!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1614534841519!5m2!1sen!2sin";
            break;
        case 'Vienna':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d264209.74276109555!2d16.3705016!3d48.2081743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07f60b0f7363%3A0x5cc9d5022f133e39!2sVienna%2C%20Austria!5e0!3m2!1sen!2sin!4v1614535056944!5m2!1sen!2sin";
            break;
        case 'Melbourne':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396262.4039132911!2d144.963058!3d-37.813611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5e8ba8aaf9%3A0x5045675218ce4df!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1614535281304!5m2!1sen!2sin";
            break;
        case 'CapeTown':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143676.35323816734!2d18.4232193!3d-33.9248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebeeff2b3a53de7%3A0x401e3c95cfa6bb5d!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sin!4v1614535392643!5m2!1sen!2sin";
            break;
        default:
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391632.7190138296!2d77.036871!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02f34a5e5f5d%3A0x8e5f21a6d9305c77!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1592833681792!5m2!1sen!2sin";
    }
    document.getElementById('mapFrame').src = mapUrl;
}
