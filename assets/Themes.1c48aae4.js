import{_ as y,d as w,C as _,a as f,o as a,c as o,b as l,w as s,F as c,r as h,e as d,f as t,g,h as u,i as p,t as i}from"./app.3e1d6753.js";const M=[{name:"Glorious",author:"manilarome (Gerome Matilla)",repo:"https://github.com/manilarome/lightdm-webkit2-theme-glorious",description:"A sleek, modern and glorified LightDM webkit2 theme",multiMonitor:!1,imagePrimary:"https://github.com/manilarome/lightdm-webkit2-theme-glorious/raw/master/glorious.gif",imageSecondary:""},{name:"Litarvan",author:"Litarvan (Adrien Navratil)",repo:"https://github.com/Litarvan/lightdm-webkit-theme-litarvan",description:"Litarvan's LightDM HTML theme.",multiMonitor:!1,imagePrimary:"https://camo.githubusercontent.com/22468304adc58b48a69fcd4be49dd40fbbaac73c17bdf774e9dc6c3ab892e5b0/68747470733a2f2f6c6974617276616e2e6769746875622e696f2f6c69676874646d2d7765626b69742d7468656d652d6c6974617276616e2f73706c6173685f766965772e706e67",imageSecondary:""},{name:"WelcomeXP",author:"mshernandez5 (Markus Hernandez)",repo:"https://github.com/mshernandez5/WelcomeXP",description:" A nody-greeter / web-greeter 3.0 theme to mimic the Windows XP login screen.",multiMonitor:!0,imagePrimary:"https://github.com/mshernandez5/WelcomeXP/raw/master/screenshot/login.png",imageSecondary:"https://github.com/mshernandez5/WelcomeXP/raw/master/screenshot/shutdown_options.png"},{name:"Void theme",author:"JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/lightdm-void-theme",description:"LightDM theme inspired in Void Linux (without any reason). Also, based on Litarvan's theme.",multiMonitor:!0,imagePrimary:"https://github.com/JezerM/lightdm-void-theme/raw/master/misc/theme-show-1.png",imageSecondary:""},{name:"Luminosity",author:"rda0 (Sven M\xE4der)",repo:"https://github.com/rda0/web-greeter-theme-luminosity",description:"Customizable LightDM Web Greeter theme based on the design of luminos by (Muhammad Sayuti) which was based on the official LightDM Webkit Greeter theme of Antergos Linux.",multiMonitor:!1,imagePrimary:"https://github.com/rda0/web-greeter-theme-luminosity/raw/master/img/Screenshot1.jpg",imageSecondary:""},{name:"Gab Gradient",author:"GabrielTenma (Gab!)",repo:"https://github.com/GabrielTenma/lightdm-gab-gradient",description:"LightDM-webkit Theme with modern style! :D ~ ",multiMonitor:!1,imagePrimary:"https://raw.githubusercontent.com/GabrielTenma/lightdm-gab-gradient/master/.skrinsutan/Screen%20Shot%202021-08-24%20at%2010.28.50%20PM%20%E3%82%AC%E3%83%B4.png",imageSecondary:""},{name:"Frost",author:"ihciM (Michael Gail)",repo:"https://gitlab.com/ihciM/lightdm-frost",description:"Frost LightDM theme made for nody-greeter.",multiMonitor:!1,imagePrimary:"https://gitlab.com/ihciM/lightdm-frost/-/raw/main/readme/preview_1.jpg",imageSecondary:""},{name:"Arch theme",author:"Kenogo (Keno Goertz) && guillaumeboehm (Guillaume BOEHM)",repo:"https://github.com/guillaumeboehm/lightdm-web-greeter-theme-arch",description:"Minimal theme for lightdm's web-greeter using humorous wallpapers about Arch Linux. Adapted to web-greeter by guillaumeboehm.",multiMonitor:!1,imagePrimary:"https://raw.githubusercontent.com/guillaumeboehm/lightdm-web-greeter-theme-arch/master/example.png",imageSecondary:""},{name:"Aether",author:"NoiSek (Noi Sek) && JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/Aether",description:"A sleek ArchLinux login manager for lightdm-webkit. Adapted to web-greeter/nody-greeter by JezerM.",multiMonitor:!1,imagePrimary:"https://github.com/JezerM/Aether/raw/screenshots/screenshot.png",imageSecondary:""}];var b={default:[{name:"Gruvbox",author:"JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/web-greeter/tree/master/themes/gruvbox",description:"Simple theme with gruvbox color scheme. Based on glorious-theme by manilarome.",multiMonitor:!0,imagePrimary:"images/gruvbox-screenshot.png",imageSecondary:"images/gruvbox-screenshot-second.png"},{name:"Dracula",author:"JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/web-greeter/tree/master/themes/dracula",description:"Simple theme with dracula color scheme. Based on glorious-theme by manilarome.",multiMonitor:!0,imagePrimary:"images/dracula-screenshot.png",imageSecondary:"images/dracula-screenshot-second.png"}],community:M};const v=w({components:{CardContainer:_,Card:f},data(){return{Themes:b}},methods:{getImageUrl(r){return r},getRepoHost(r){return r.match(/(github\.com\/).*/)?"GitHub":r.match(/(gitlab\.com\/).*/)?"GitLab":"Repo"}},setup(){console.log(b)}}),S={id:"themesView"},k=t("h1",null,"Themes",-1),P=t("h4",null,[g(" Discover new "),t("span",{class:"greenGradient"},"LightDM"),g(" themes here! ")],-1),z={key:0,id:"defaultThemes"},L=t("h2",{class:"mt-12 mb-6"},"Default themes",-1),C=["href"],G={key:0,class:"grid pl-6 pt-6 grid-rows-6 grid-cols-6 box-border"},T=["src","alt"],A=["src","alt"],J={key:1},D=["src","alt"],x={key:1,id:"communityThemes"},V=t("h2",{class:"mt-12 mb-6"},"Community themes",-1),B=["href"],H={key:0,class:"grid pl-6 pt-6 grid-rows-6 grid-cols-6 box-border"},I=["src","alt"],N=["src","alt"],U={key:1,class:"pt-4"},W=["src","alt"];function j(r,R,X,$,E,F){const n=u("Card"),m=u("CardContainer");return a(),o("section",S,[k,P,r.Themes.default.length!=0?(a(),o("section",z,[L,l(m,null,{default:s(()=>[(a(!0),o(c,null,h(r.Themes.default,e=>(a(),p(n,{class:"col-span-12 md:col-span-6 2xl:col-span-3",key:e.name},{header:s(()=>[t("h3",null,i(e.name),1),t("h5",null,i(e.author),1),t("p",null,i(e.description),1),t("a",{class:"button buttonRepo",href:e.repo,title:"Visit theme's repository"},i(r.getRepoHost(e.repo)),9,C)]),default:s(()=>[e.imageSecondary?(a(),o("div",G,[t("img",{class:"col-start-1 col-end-5 row-start-1 row-end-5 drop-shadow-2xl",src:r.getImageUrl(e.imageSecondary),alt:e.name+" Secondary image"},null,8,T),t("img",{class:"col-start-2 col-end-7 row-start-2 row-end-7 drop-shadow-2xl",src:r.getImageUrl(e.imagePrimary),alt:e.name+" Primary image"},null,8,A)])):(a(),o("div",J,[t("img",{src:r.getImageUrl(e.imagePrimary),alt:e.name+" image"},null,8,D)]))]),_:2},1024))),128))]),_:1})])):d("",!0),r.Themes.community.length!=0?(a(),o("section",x,[V,l(m,null,{default:s(()=>[(a(!0),o(c,null,h(r.Themes.community,e=>(a(),p(n,{class:"col-span-12 md:col-span-6 2xl:col-span-3",key:e.name},{header:s(()=>[t("h3",null,i(e.name),1),t("h5",null,i(e.author),1),t("p",null,i(e.description),1),t("a",{class:"button buttonRepo",href:e.repo,title:"Visit theme's repository"},i(r.getRepoHost(e.repo)),9,B)]),default:s(()=>[e.imageSecondary?(a(),o("div",H,[t("img",{class:"col-start-1 col-end-5 row-start-1 row-end-5 drop-shadow-2xl",src:r.getImageUrl(e.imageSecondary),alt:e.name+" Secondary image"},null,8,I),t("img",{class:"col-start-2 col-end-7 row-start-2 row-end-7 drop-shadow-2xl",src:r.getImageUrl(e.imagePrimary),alt:e.name+" Primary image"},null,8,N)])):(a(),o("div",U,[t("img",{src:r.getImageUrl(e.imagePrimary),alt:e.name+" image"},null,8,W)]))]),_:2},1024))),128))]),_:1})])):d("",!0)])}var O=y(v,[["render",j]]);export{O as default};
