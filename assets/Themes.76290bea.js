import{_ as y,d as _,C as w,a as f,o,c as a,b as c,w as s,F as h,r as d,e as n,f as t,g,h as u,i as p,t as i}from"./app.d14a3e03.js";const M=[{name:"Glorious",author:"manilarome (Gerome Matilla)",repo:"https://github.com/manilarome/lightdm-webkit2-theme-glorious",description:"A sleek, modern and glorified LightDM webkit2 theme",multiMonitor:!1,imagePrimary:"https://github.com/manilarome/lightdm-webkit2-theme-glorious/raw/master/glorious.gif",imageSecondary:""},{name:"Litarvan",author:"Litarvan (Adrien Navratil)",repo:"https://github.com/Litarvan/lightdm-webkit-theme-litarvan",description:"Litarvan's LightDM HTML theme.",multiMonitor:!1,imagePrimary:"https://camo.githubusercontent.com/22468304adc58b48a69fcd4be49dd40fbbaac73c17bdf774e9dc6c3ab892e5b0/68747470733a2f2f6c6974617276616e2e6769746875622e696f2f6c69676874646d2d7765626b69742d7468656d652d6c6974617276616e2f73706c6173685f766965772e706e67",imageSecondary:""},{name:"WelcomeXP",author:"mshernandez5 (Markus Hernandez)",repo:"https://github.com/mshernandez5/WelcomeXP",description:" A nody-greeter / web-greeter 3.0 theme to mimic the Windows XP login screen.",multiMonitor:!0,imagePrimary:"https://github.com/mshernandez5/WelcomeXP/raw/master/screenshot/login.png",imageSecondary:"https://github.com/mshernandez5/WelcomeXP/raw/7b99be71c2f9cdfb1bebeb6aa7edead2159a60c8/screenshot/shutdown_options.png"},{name:"Void theme",author:"JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/lightdm-void-theme",description:"LightDM theme inspired in Void Linux (without any reason). Also, based on Litarvan's theme.",multiMonitor:!0,imagePrimary:"https://github.com/JezerM/lightdm-void-theme/raw/master/misc/theme-show-1.png",imageSecondary:""},{name:"Luminosity",author:"rda0 (Sven M\xE4der)",repo:"https://github.com/rda0/web-greeter-theme-luminosity",description:"Customizable LightDM Web Greeter theme based on the design of luminos by (Muhammad Sayuti) which was based on the official LightDM Webkit Greeter theme of Antergos Linux.",multiMonitor:!1,imagePrimary:"https://github.com/rda0/web-greeter-theme-luminosity/raw/master/img/Screenshot1.jpg",imageSecondary:""},{name:"Gab Gradient",author:"GabrielTenma (Gab!)",repo:"https://github.com/GabrielTenma/lightdm-gab-gradient",description:"LightDM-webkit Theme with modern style! :D ~ ",multiMonitor:!1,imagePrimary:"https://raw.githubusercontent.com/GabrielTenma/lightdm-gab-gradient/master/.skrinsutan/Screen%20Shot%202021-08-24%20at%2010.28.50%20PM%20%E3%82%AC%E3%83%B4.png",imageSecondary:""},{name:"Frost",author:"ihciM (Michael Gail)",repo:"https://gitlab.com/ihciM/lightdm-frost",description:"Frost LightDM theme made for nody-greeter.",multiMonitor:!1,imagePrimary:"https://gitlab.com/ihciM/lightdm-frost/-/raw/main/readme/preview_1.jpg",imageSecondary:""},{name:"Arch theme",author:"Kenogo (Keno Goertz) && guillaumeboehm (Guillaume BOEHM)",repo:"https://github.com/guillaumeboehm/lightdm-web-greeter-theme-arch",description:"Minimal theme for lightdm's web-greeter using humorous wallpapers about Arch Linux. Adapted to web-greeter by guillaumeboehm.",multiMonitor:!1,imagePrimary:"https://raw.githubusercontent.com/guillaumeboehm/lightdm-web-greeter-theme-arch/master/example.png",imageSecondary:""},{name:"Aether",author:"NoiSek (Noi Sek) && JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/Aether",description:"A sleek ArchLinux login manager for lightdm-webkit. Adapted to web-greeter/nody-greeter by JezerM.",multiMonitor:!1,imagePrimary:"https://github.com/JezerM/Aether/raw/screenshots/screenshot.png",imageSecondary:""},{name:"Neon",author:"hertg",repo:"https://github.com/hertg/lightdm-neon",description:"A customizable theme for web-greeter in a nostalgic but modern neon look",multiMonitor:!1,imagePrimary:"https://github.com/hertg/lightdm-neon/raw/fe9e334a1e5475c07bc39406a875a06a748cdbc8/docs/password.jpg",imageSecondary:""}];var b={default:[{name:"Gruvbox",author:"JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/web-greeter/tree/master/themes/gruvbox",description:"Simple theme with gruvbox color scheme. Based on glorious-theme by manilarome.",multiMonitor:!0,imagePrimary:"images/gruvbox-screenshot.png",imageSecondary:"images/gruvbox-screenshot-second.png"},{name:"Dracula",author:"JezerM (Jezer Mej\xEDa)",repo:"https://github.com/JezerM/web-greeter/tree/master/themes/dracula",description:"Simple theme with dracula color scheme. Based on glorious-theme by manilarome.",multiMonitor:!0,imagePrimary:"images/dracula-screenshot.png",imageSecondary:"images/dracula-screenshot-second.png"}],community:M};const k=_({components:{CardContainer:w,Card:f},data(){return{Themes:b}},methods:{getImageUrl(r){return r},getRepoHost(r){return r.match(/(github\.com\/).*/)?"GitHub":r.match(/(gitlab\.com\/).*/)?"GitLab":"Repo"}},setup(){console.log(b)}}),S={id:"themesView"},v=t("h1",null,"Themes",-1),P=t("h4",null,[g(" Discover new "),t("span",{class:"greenGradient"},"LightDM"),g(" themes here! ")],-1),z={key:0,id:"defaultThemes"},L=t("h2",{class:"mt-12 mb-6"},"Default themes",-1),C={key:0},G=["href"],T={key:0,class:"grid pl-6 pt-6 grid-rows-6 grid-cols-6 box-border"},A=["src","alt"],J=["src","alt"],D={key:1},x=["src","alt"],V={key:1,id:"communityThemes"},B=t("h2",{class:"mt-12 mb-6"},"Community themes",-1),N={key:0},j=["href"],H={key:0,class:"grid pl-6 pt-6 grid-rows-6 grid-cols-6 box-border"},I=["src","alt"],U=["src","alt"],W={key:1,class:"pt-4"},R=["src","alt"];function X(r,$,E,F,K,O){const m=u("Card"),l=u("CardContainer");return o(),a("section",S,[v,P,r.Themes.default.length!=0?(o(),a("section",z,[L,c(l,null,{default:s(()=>[(o(!0),a(h,null,d(r.Themes.default,e=>(o(),p(m,{class:"col-span-12 md:col-span-6 2xl:col-span-3",key:e.name},{header:s(()=>[t("h3",null,i(e.name),1),t("h5",null,i(e.author),1),e.multiMonitor==!0?(o(),a("h5",C,"Multi monitor support")):n("",!0),t("p",null,i(e.description),1),t("a",{class:"button buttonRepo",href:e.repo,target:"_blank",title:"Visit theme's repository"},i(r.getRepoHost(e.repo)),9,G)]),default:s(()=>[e.imageSecondary?(o(),a("div",T,[t("img",{class:"col-start-1 col-end-5 row-start-1 row-end-5 drop-shadow-2xl",src:r.getImageUrl(e.imageSecondary),alt:e.name+" Secondary image"},null,8,A),t("img",{class:"col-start-2 col-end-7 row-start-2 row-end-7 drop-shadow-2xl",src:r.getImageUrl(e.imagePrimary),alt:e.name+" Primary image"},null,8,J)])):(o(),a("div",D,[t("img",{src:r.getImageUrl(e.imagePrimary),alt:e.name+" image"},null,8,x)]))]),_:2},1024))),128))]),_:1})])):n("",!0),r.Themes.community.length!=0?(o(),a("section",V,[B,c(l,null,{default:s(()=>[(o(!0),a(h,null,d(r.Themes.community,e=>(o(),p(m,{class:"col-span-12 md:col-span-6 2xl:col-span-3",key:e.name},{header:s(()=>[t("h3",null,i(e.name),1),t("h5",null,i(e.author),1),e.multiMonitor==!0?(o(),a("h5",N,"Multi monitor support")):n("",!0),t("p",null,i(e.description),1),t("a",{class:"button buttonRepo",href:e.repo,target:"_blank",title:"Visit theme's repository"},i(r.getRepoHost(e.repo)),9,j)]),default:s(()=>[e.imageSecondary?(o(),a("div",H,[t("img",{class:"col-start-1 col-end-5 row-start-1 row-end-5 drop-shadow-2xl",src:r.getImageUrl(e.imageSecondary),alt:e.name+" Secondary image"},null,8,I),t("img",{class:"col-start-2 col-end-7 row-start-2 row-end-7 drop-shadow-2xl",src:r.getImageUrl(e.imagePrimary),alt:e.name+" Primary image"},null,8,U)])):(o(),a("div",W,[t("img",{src:r.getImageUrl(e.imagePrimary),alt:e.name+" image"},null,8,R)]))]),_:2},1024))),128))]),_:1})])):n("",!0)])}var Q=y(k,[["render",X]]);export{Q as default};
