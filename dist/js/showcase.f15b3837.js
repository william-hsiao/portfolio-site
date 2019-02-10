(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["showcase"],{"11e9":function(t,e,i){var s=i("52a7"),a=i("4630"),n=i("6821"),o=i("6a99"),r=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=n(t),e=o(e,!0),c)try{return l(t,e)}catch(i){}if(r(t,e))return a(!s.f.call(t,e),t[e])}},"1bb3":function(t,e,i){"use strict";var s=i("e876"),a=i.n(s);a.a},"226d":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rating-container"},[t._l(t.rating,function(t){return i("div",{staticClass:"marked"})}),t._l(5-t.rating,function(t){return i("div",{staticClass:"unmarked"})})],2)},a=[],n=(i("c5f6"),{name:"RatingBar",props:{value:Number},computed:{rating:function(){return this.value<0?0:this.value>5?5:this.value}}}),o=n,r=(i("d128"),i("2877")),c=Object(r["a"])(o,s,a,!1,null,null,null);c.options.__file="RatingBar.vue";e["a"]=c.exports},2481:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Showcase"}},[i("Navbar"),i("Cover"),i("Intro"),i("DevSkills"),i("Projects"),i("AboutMe"),i("Contact")],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showNavbar,expression:"showNavbar"}],attrs:{id:"nav"}},[s("div",{staticClass:"navbar"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{staticClass:"logo",attrs:{alt:"logo",src:i("9d64")}}),s("h1",[t._v("William Hsiao")])]),s("div",{staticClass:"links"},[s("a",{staticClass:"item",attrs:{href:"https://github.com/william-hsiao",target:"_blank"}},[s("img",{attrs:{src:i("917e")}})]),s("a",{staticClass:"item",attrs:{href:"https://twitter.com/william_hsiao_",target:"_blank"}},[s("img",{attrs:{src:i("1538")}})]),s("a",{staticClass:"item",attrs:{href:"https://www.linkedin.com/in/william-hsiao/",target:"_blank"}},[s("img",{attrs:{src:i("6a55")}})]),s("div",{staticClass:"item tooltip"},[s("img",{attrs:{src:i("7711")}}),s("div",{staticClass:"tooltipContent"},[t._v("contact@william-hsiao.com")])])])],1)])])},o=[],r=(i("cadf"),i("551c"),i("097d"),{name:"Navbar",data:function(){return{showNavbar:!1}},methods:{navScroll:function(){this.showNavbar=document.getElementById("Showcase").scrollTop>=window.innerHeight}},mounted:function(){document.getElementById("Showcase").addEventListener("scroll",this.navScroll,{passive:!0})}}),c=r,l=(i("b4d4"),i("2877")),d=Object(l["a"])(c,n,o,!1,null,"6516d889",null);d.options.__file="Navbar.vue";var h=d.exports,u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"Cover"}},[s("div",{staticClass:"frame"},[s("img",{staticClass:"logo",attrs:{alt:"logo",src:i("9d64")}}),s("h1",[t._v("William Hsiao")]),s("h3",[t._v("Software Engineer")]),s("div",{staticClass:"links"},[s("a",{staticClass:"item",attrs:{href:"https://github.com/william-hsiao",target:"_blank"}},[s("img",{attrs:{src:i("917e")}})]),s("a",{staticClass:"item",attrs:{href:"https://twitter.com/william_hsiao_",target:"_blank"}},[s("img",{attrs:{src:i("1538")}})]),s("a",{staticClass:"item",attrs:{href:"https://www.linkedin.com/in/william-hsiao/",target:"_blank"}},[s("img",{attrs:{src:i("6a55")}})]),s("div",{staticClass:"item tooltip"},[s("img",{attrs:{src:i("7711")}}),s("div",{staticClass:"tooltipContent"},[t._v("contact@william-hsiao.com")])])])])])}],v={name:"Cover"},f=v,p=(i("1bb3"),Object(l["a"])(f,u,m,!1,null,"65b9e234",null));p.options.__file="Cover.vue";var g=p.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"Intro"}},[i("div",{staticClass:"frame"},[t._v("Hi! I'm William Hsiao, a software engineer currently working in Tokyo, Japan.")])])}],w={name:"Intro"},y=w,C=Object(l["a"])(y,_,b,!1,null,null,null);C.options.__file="Intro.vue";var k=C.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"DevSkills"}},[i("div",{staticClass:"frame"},[i("div",{staticClass:"summary contents active"},[i("h1",[t._v("Developer Skills")]),i("div",{staticClass:"list-container"},t._l(t.summary,function(e){return i("div",{staticClass:"list"},[i("h4",[t._v(t._s(e.name))]),i("ul",t._l(e.items,function(e){return i("li",[t._v(t._s(e))])}))])})),i("div",{staticClass:"button",on:{click:function(e){t.viewTemplate("summary","detailed","fade-up")}}},[t._v("View full list & details")])]),i("div",{staticClass:"detailed contents"},[i("h1",[t._v("Developer Skills")]),t._l(t.detailed,function(e){return i("div",{staticClass:"section"},[i("h4",[t._v(t._s(e.name))]),t._l(e.subcategories,function(e){return i("div",{staticClass:"skill-field-container"},[e.name?i("h6",[t._v(t._s(e.name))]):t._e(),t._l(e.items,function(e){return i("div",{staticClass:"skill-field"},[i("div",{staticClass:"label"},[t._v(t._s(e.name))]),i("RatingBar",{attrs:{value:e.rating}})],1)})],2)})],2)}),i("div",{staticClass:"link",on:{click:function(e){t.viewTemplate("detailed","summary","fade-down")}}},[t._v("← return")])],2)])])},T=[],I=i("be94"),E=i("2f62"),S=i("226d"),A={methods:{viewTemplate:function(t,e){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"random";return new Promise(function(a){var n,o,r=i.$el.getElementsByClassName("frame")[0],c=i.$el.getElementsByClassName(t)[0],l=i.$el.getElementsByClassName(e)[0],d=window.innerHeight-200,h=["fade-up","fade-down","fade-left","fade-right"];n="random"===s?h[Math.floor(Math.random()*Math.floor(h.length))]:s,c.style.width="".concat(c.offsetWidth,"px"),window.innerWidth<1e3?c.style.marginLeft="".concat((window.innerWidth-c.offsetWidth)/2,"px"):c.style.marginLeft="".concat((1e3-c.offsetWidth)/2,"px"),c.classList.add("standby","".concat(n,"-out")),c.classList.remove("active"),l.classList.add("active","".concat(n,"-in")),c.offsetHeight>l.offsetHeight&&(r.style.height="".concat(c.offsetHeight,"px")),c.offsetHeight>d&&l.offsetHeight<d?(o=(d-l.offsetHeight)/2,l.style.paddingTop="".concat(o,"px"),l.style.paddingBottom="".concat(o,"px")):l.offsetHeight>d&&c.offsetHeight<d?(o=(d-c.offsetHeight)/2,c.style.paddingTop="".concat(o,"px"),c.style.paddingBottom="".concat(o,"px")):c.offsetHeight<=d&&l.offsetHeight<=d&&(c.offsetHeight>l.offsetHeight?(o=(c.offsetHeight-l.offsetHeight)/2,l.style.paddingTop="".concat(o,"px"),l.style.paddingBottom="".concat(o,"px")):(o=(l.offsetHeight-c.offsetHeight)/2,c.style.paddingTop="".concat(o,"px"),c.style.paddingBottom="".concat(o,"px"))),setTimeout(function(){r.style.height="",l.style.paddingBottom="",l.style.paddingTop="",c.style.paddingBottom="",c.style.paddingTop="",c.style.width="",c.style.marginLeft="",c.classList.remove("standby","".concat(n,"-out")),l.classList.remove("".concat(n,"-in"))},2e3),i.$el.scrollIntoView({behavior:"smooth",block:"start"}),a()})}}},j={name:"DevSkills",mixins:[A],components:{RatingBar:S["a"]},data:function(){return{}},computed:Object(I["a"])({},Object(E["c"])({summary:function(t){return t.devSkills.summary},detailed:function(t){return t.devSkills.detailed}}))},N=j,B=(i("5531"),Object(l["a"])(N,x,T,!1,null,"1c37650e",null));B.options.__file="DevSkills.vue";var R=B.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"Projects"}},[i("div",{staticClass:"frame"},[i("div",{staticClass:"summary contents active"},[i("h1",[t._v("Projects")]),i("div",{staticClass:"slide-container scroll-left scroll-right"},[i("div",{staticClass:"slide-wrapper"},[i("div",{staticClass:"slide repro-web-sdk-slide",on:{click:function(e){t.viewTemplate("summary","repro-web-sdk","fade-up")}}},[t._m(0),i("h3",[t._v("Repro Web SDK")]),i("div",{staticClass:"description"},[t._v("I work as one of the core members in developing the Repro Web SDK which enables user activity on web pages to be tracked with the Repro marketing service. The Web SDK was launched in December 2018 and is continuing to be developed to form one of the pillars of Repro.")])]),i("div",{staticClass:"slide gaze-key-slide",on:{click:function(e){t.viewTemplate("summary","gaze-key","fade-up")}}},[t._m(1),i("h3",[t._v("gaze-key")]),i("div",{staticClass:"description"},[t._v(" Human-Computer Interaction research utilizing current eye tracking technology to develop an efficient typing system based only on gaze, without inputs such as blink and dwell time.")])]),i("div",{staticClass:"slide gakuhub-slide",on:{click:function(e){t.viewTemplate("summary","gakuhub","fade-up")}}},[t._m(2),i("h3",[t._v("gakuhub")]),i("div",{staticClass:"description"},[t._v("Building an online service that aims to provide a platform for internationals students within Japan to connect with each other. In addition, becoming a gateway for prospective students to obtain information and consult with current students on their experiences.")])]),i("div",{staticClass:"slide portfolio-slide",on:{click:function(e){t.viewTemplate("summary","portfolio","fade-up")}}},[t._m(3),i("h3",[t._v("Portfolio")]),i("div",{staticClass:"description"},[t._v(" I want this project to be more than just a portfolio site. I want this to be a reflection what I am capable of. This will be a project that I will constantly be working on and adding new features to in my free time so check back every so often to see what’s new!")])])])])]),i("div",{staticClass:"repro-web-sdk contents details"},[i("h1",[t._v("Repro Web SDK")]),t._m(4),i("div",{staticClass:"link",on:{click:function(e){t.viewTemplate("repro-web-sdk","summary","fade-down")}}},[t._v("← return")])]),i("div",{staticClass:"gaze-key contents details"},[i("h1",[t._v("gaze-key")]),t._m(5),i("div",{staticClass:"link",on:{click:function(e){t.viewTemplate("gaze-key","summary","fade-down")}}},[t._v("← return")])]),i("div",{staticClass:"gakuhub contents details"},[i("h1",[t._v("gakuhub")]),t._m(6),i("div",{staticClass:"link",on:{click:function(e){t.viewTemplate("gakuhub","summary","fade-down")}}},[t._v("← return")])]),i("div",{staticClass:"portfolio contents details"},[i("h1",[t._v("Portfolio Site")]),t._m(7),i("div",{staticClass:"link",on:{click:function(e){t.viewTemplate("portfolio","summary","fade-down")}}},[t._v("← return")])])])])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-border"},[s("img",{attrs:{alt:"repro",src:i("be34")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-border"},[s("img",{attrs:{alt:"gakuhub",src:i("d99a")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-border"},[s("img",{attrs:{alt:"gakuhub",src:i("2b0e6")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-border"},[s("img",{attrs:{alt:"gakuhub",src:i("9d64")}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("I work as one of the core members in developing the Repro Web SDK which enables user activity on web pages to be tracked with the Repro marketing service. The Web SDK was launched in December 2018 and is continuing to be developed to form one of the pillars of Repro. The SDK is written in a mix of JavaScript and TypeScript and uses a variety of testing frameworks such as Karma + Jasmine for unit testing and Testcafe + Browserstack for E2E and integration tests.")]),i("a",{staticClass:"button",attrs:{href:"https://repro.io/jp/products/web/",target:"_blank"}},[t._v("More about Repro Web Service (Japanese only)")]),i("h4",[t._v("About Repro")]),i("p",[t._v("Repro is a easy to use analysis and marketing service that is widely used in 50+ countries and has notable domestic customers such as KDDI, TV Tokyo and DeNA. It provides analytic tools and statistics such as user retention, access, funnelling, etc and allows targeted marketing to an audience that meet the set criteria. With Repro, you can view screen recording of actual users and send out push notifications and messages to users through the web interface.")]),i("a",{staticClass:"button",attrs:{href:"https://repro.io/en/",target:"_blank"}},[t._v("More about Repro")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("The ability to input text in an electronic device is one of the most powerful interaction methods available to a user. While traditional keyboards have asserted themselves as the primary hands-on input method on almost all commercial computer systems, there is yet to be an outstanding method for hands-free input, more specifically in the field utilizing eye tracking. There has been a lot of research within this field, most notably in assisting individuals with disabilities, and has improved with alongside the advancement of eye tracking technology. As we head more towards the world of filled with Virtual Reality (VR) or perhaps more notably, Artificial Reality (AR), an efficient hands-free system of text input becomes ever so important to further unlock potential interactions using these technologies.")]),i("p",[t._v("In this research, I aim to create an input system using pure eye tracking that is easy and efficient to use within the graphical interface provided by a head mounted displays (HMD). The main scenario this research is based upon is the use within a head-up display (HUD) from a device such as glasses, that is connected with a smartphone to provide basic notification and interactions without physically interacting with the smartphone itself. There is not expectation for such a method to rival traditional keyboards but has the goal to allow simple interactions such as text messaging or inputting keywords for a search.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("gakuhub is a personal side project that I started aimed to provide a platform for internationals students within Japan to connect with each other. When I first started looking into completing my Bachelor’s degree in Japan, I found that there was a lack of first-hand resource available for me to consult with and see if is was for me. Even after getting to university in Japan, I found that there was little infrastructure available to connect the international students of different year groups.")]),i("p",[t._v("I want this service to become a gateway for prospective students to obtain information and consult with current students on their experiences. Even after arriving in Japan, provide a platform to which anyone may seek help whether to setup everything they need, deal with the language barrier most encounter on arrival or simply to find new people and have a community to connect with.")]),i("p",[t._v("The frameworks used for this project are:")]),i("ul",[i("li",[t._v("Front-end: Node.js with Vue CLI - webpack")]),i("li",[t._v("Back-end: Loopback (Node.js) Express Server")]),i("li",[t._v("Database: MongoDB")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("I want this project to be more than just a portfolio site. I want this to be a reflection what I am capable of. Everything from the design to custom animations has been created by me on top of the Vue framework. This will be a project that I will constantly be working on and adding new features to in my free time so check back every so often to see what’s new!")]),i("p",[t._v("As of now, the site is still fairly bare-bones but I would like to keep expanding on top of it including:")]),i("ul",[i("li",[t._v("Blog")]),i("li",[t._v("Small tools")]),i("li",[t._v("Updates as I keep developing my skills so that this will be a true reflection of my work")])]),i("h5",[t._v("Planned to support more features:")]),i("p",[t._v("Vue CLI with Server-side Rendering served on a Express server"),i("ul",[i("li",[t._v("Vue.js")]),i("ul",[i("li",[t._v("Vue Router")]),i("li",[t._v("Vuex")]),i("li",[t._v("Node.js Backend with MySQL database")])])])])])}],L={name:"Projects",mixins:[A]},P=L,D=(i("6c62"),Object(l["a"])(P,M,$,!1,null,"27d5c1c2",null));D.options.__file="Projects.vue";var H=D.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"AboutMe"}},[i("div",{staticClass:"frame"},[i("div",{staticClass:"summary contents active"},[i("h1",{staticClass:"article-link",on:{click:function(e){t.changeArticle("base")}}},[t._v("About Me")]),i("div",{staticClass:"field-container"},[i("div",{staticClass:"section outline"},[i("div",{staticClass:"field article-link",on:{click:function(e){t.changeArticle("experience")}}},[i("h3",{staticClass:"label"},[t._v("Current Position:")]),t._m(0)]),i("div",{staticClass:"field article-link",on:{click:function(e){t.changeArticle("languages")}}},[i("h3",{staticClass:"label"},[t._v("Languages:")]),t._m(1)]),i("div",{staticClass:"field article-link",on:{click:function(e){t.changeArticle("education")}}},[i("h3",{staticClass:"label"},[t._v("Education: ")]),t._m(2)]),i("div",{staticClass:"field article-link",on:{click:function(e){t.changeArticle("interests")}}},[i("h3",{staticClass:"label"},[t._v("Interests:")]),t._m(3)]),t._m(4)]),i("div",{staticClass:"section article-container"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},["base"===t.showArticle?i("div",{key:"1",staticClass:"article main"},[i("p",{staticClass:"indent"},[t._v("I am an aspiring full-stack developer currently based in Tokyo. Although my work so far has mostly been around web development, I am always eager to venture into new fields and face new challenges. I believe that to create the best applications, one must have a solid understanding of all components not only on the technical aspects but also how each component contributes to the greater purpose of the project. It is with this mindset that I step into projects and aim to learn as much as I can from each experience. Even if it’s something I am already familiar with, there is always more to gain, more to discover, more to improve upon.")]),i("i",[t._v('"Jack of all trades, but master of none"')]),i("p",[t._v("is a phrase that is quite befitting of me yet one that I despise. Although I always strive to be an all-rounder in the fields I commit to in order to open the doors to as many opportunities possible, I cannot say that I am satisfied with where I am now. There is always more to learn and that is what drives me to keep improving myself everyday, constantly chasing to be the best that I can be.")]),i("p",[t._v("I want to challenge the world.")]),i("p",[t._v("I want to develop a product that changes lives.")]),i("p",[t._v("I want to meet and work with like-minded people and see how far we can go.")])]):t._e(),"experience"===t.showArticle?i("div",{key:"2",staticClass:"article"},[i("h3",[t._v("Work Experience")]),i("div",{staticClass:"item"},[i("h4",[t._v("Software Engineering Intern, Repro Inc.")]),i("h6",[t._v("March 2018 - Present")]),i("p",[t._v("Software engineering intern working as a core member in several large projects ranging from UI/UX development to SDK development. The work is mainly conducted in Japanese and involves constant communication with team members and work within a live production environment utilizing AWS.")])]),i("div",{staticClass:"item"},[i("h4",[t._v("Teaching Assistant, Waseda University")]),i("h6",[t._v("April 2017 - Present")]),i("p",[t._v("Assisting in teaching programming to students in the international program using English")]),i("p",[t._v("Courses: ")]),i("ul",[i("li",[t._v("Introduction to Programming (C)")]),i("li",[t._v("Intermediate Programming (C)")]),i("li",[t._v("Advanced Java Programming (Java)")]),i("li",[t._v("Numerical Analysis")]),i("li",[t._v("Survey of Modern Mathematical Sciences A")])])]),i("div",{staticClass:"item"},[i("h4",[t._v("Senior Managing Assistant, SIAM")]),i("h6",[t._v("March 7th - March 10th 2018")]),i("p",[t._v("Assisting with the Society for Industrial and Applied Mathematics (SIAM) 18 Conference on Parallel Processing for Scientific Computing")]),i("ul",[i("li",[t._v("Overseeing equipment ")]),i("li",[t._v("Coordinating assistants to sessions ")]),i("li",[t._v("Responding to issues during the sessions")])])]),i("div",{staticClass:"link",on:{click:function(e){t.changeArticle("base")}}},[t._v("← return")])]):"languages"===t.showArticle?i("div",{key:"3",staticClass:"article languages"},[i("h3",[t._v("Languages")]),i("div",{staticClass:"item"},[i("h4",[t._v("English")]),i("RatingBar",{staticClass:"medium",attrs:{value:5}}),i("p",[t._v("Native")])],1),i("div",{staticClass:"item"},[i("h4",[t._v("Japanese")]),i("RatingBar",{staticClass:"medium",attrs:{value:4}}),i("p",[t._v("Working Proficiency")])],1),i("div",{staticClass:"item"},[i("h4",[t._v("Chinese (Mandarin)")]),i("RatingBar",{staticClass:"medium",attrs:{value:3}}),i("p",[t._v("Conversational")])],1),i("div",{staticClass:"link",on:{click:function(e){t.changeArticle("base")}}},[t._v("← return")])]):"education"===t.showArticle?i("div",{key:"4",staticClass:"article"},[i("h3",[t._v("Education")]),i("div",{staticClass:"item"},[i("h4",[t._v("Bachelors of Engineering, Waseda University")]),i("h6",[t._v("Sepetember 2015 - September 2019")]),i("p",[t._v("Computer Science and Engineering")]),i("p",[t._v("Nakajima Lab")])]),i("div",{staticClass:"item"},[i("h4",[t._v("Bachelor of Engineering/IT, University of Queensland")]),i("h6",[t._v("February 2015 - Jun 2015")]),i("p",[t._v("Software Engineering")]),i("p",[t._v("*Incomplete - Completed one semester before leaving to attend Waseda University")])]),i("div",{staticClass:"item"},[i("h4",[t._v("Highschool Diploma, Brisbane Grammar School")]),i("h6",[t._v("January 2010 - November 2014")])]),i("div",{staticClass:"link",on:{click:function(e){t.changeArticle("base")}}},[t._v("← return")])]):"interests"===t.showArticle?i("div",{key:"5",staticClass:"article"},[i("h3",[t._v("Interests")]),i("div",{staticClass:"item"},[i("h4",[t._v("Tennis")]),i("ul",[i("li",[t._v("10+ years")]),i("li",[t._v("Brisbane Grammar School 2nds Tennis Team (2014)")]),i("li",[t._v("Tennis Brisbane Superleague Fixtures Northside Division 5 Finalists (2013)")])])]),i("div",{staticClass:"item"},[i("h4",[t._v("Archery")]),i("ul",[i("li",[t._v("2.5+ years")]),i("li",[t._v("Waseda Sagittarius Archery Circle")])])]),i("div",{staticClass:"item"},[i("h4",[t._v("Violin")]),i("ul",[i("li",[t._v("10+ years")]),i("li",[t._v("Australian Music Examination Board 8th Grade")]),i("li",[t._v(" Brisbane Grammar School Music Program"),i("ul",[i("li",[t._v("Brisbane Grammar Symphony Orchestra")]),i("li",[t._v("Chamber Strings Ensemble")])])])])]),i("div",{staticClass:"link",on:{click:function(e){t.changeArticle("base")}}},[t._v("← return")])]):t._e()])],1)])])])])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("Software Engineering Intern")]),i("span",[t._v("Repro Inc.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("English, Japanese, Chinese (Mandarin)")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("Bachelors of Engineering")]),i("span",[t._v("Computer Science and Engineering")]),i("span",[t._v("Waseda University, Tokyo, Japan")]),i("div",{staticClass:"subscript"},[t._v("Graduate September 2019")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("p",[t._v("Tennis, Archery, Violin")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field locations"},[i("div",{staticClass:"body"},[i("p",[t._v("Taiwan")]),i("span",[t._v("Taoyuan")])]),i("div",{staticClass:"arrow"},[t._v("→")]),i("div",{staticClass:"body"},[i("p",[t._v("Australia")]),i("span",[t._v("Brisbane")])]),i("div",{staticClass:"arrow"},[t._v("→")]),i("div",{staticClass:"body"},[i("p",[t._v("Japan")]),i("span",[t._v("Tokyo")])])])}],O={name:"AboutMe",components:{RatingBar:S["a"]},data:function(){return{showArticle:"base"}},methods:{changeArticle:function(t){this.showArticle=t}}},V=O,U=(i("a068"),Object(l["a"])(V,W,J,!1,null,"0112882a",null));U.options.__file="AboutMe.vue";var F=U.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"Blog"}},[i("div",{staticClass:"frame"},[i("div",{staticClass:"contents active"},[i("h1",[t._v("Blog")]),i("h3",[t._v("Latest")]),i("article-container",{attrs:{articles:t.latest,keyPrefix:"latest"}}),i("h3",[t._v("Featured")]),i("article-container",{attrs:{articles:t.featured,keyPrefix:"featured"}}),i("router-link",{staticClass:"link",attrs:{to:"/blog"}},[i("div",{staticClass:"button"},[t._v("View more →")])]),i("a",{staticClass:"medium-link",attrs:{href:"https://medium.com/@william_hsiao",target:"_blank"}},[t._v("Read on Medium.com")])],1)])])},G=[],K=i("5a22"),q={name:"Blog",components:{ArticleContainer:K["a"]},data:function(){return{latest:[{title:"University in Japan, my experience",body:"This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ",imgURL:"",url:"university-in-japan"}],featured:[{title:"University in Japan, my experience",body:"This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ",imgURL:"",url:"university-in-japan"},{title:"University in Japan, my experience",body:"This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. ",imgURL:"",url:"university-in-japan"}]}}},X=q,Q=(i("cfa7"),Object(l["a"])(X,z,G,!1,null,"50184f08",null));Q.options.__file="Blog.vue";var Y=Q.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"Contact"}},[i("div",{staticClass:"frame"},[i("h1",[t._v("Contact")]),t._v("Got a project in mind? Just have a question? Let's talk!"),i("br"),i("br"),i("b",[t._v("contact@william-hsiao.com")])])])}],et={name:"Contact"},it=et,st=(i("c28a"),Object(l["a"])(it,Z,tt,!1,null,"33cc11a6",null));st.options.__file="Contact.vue";var at=st.exports,nt={name:"showcase",components:{Navbar:h,Cover:g,Intro:k,DevSkills:R,Projects:H,AboutMe:F,Blog:Y,Contact:at},mounted:function(){for(var t=document.getElementsByClassName("container"),e=0;e<t.length;e++)e%2===0?t[e].classList.add("dark"):t[e].classList.add("light"),"Cover"===t[e].id?t[e].classList.add("theme-cover"):t[e].classList.add("theme-".concat((e-1)%4+1))}},ot=nt,rt=(i("faea"),Object(l["a"])(ot,s,a,!1,null,null,null));rt.options.__file="Showcase.vue";e["default"]=rt.exports},"2b0e6":function(t,e,i){t.exports=i.p+"img/gakuhub_transparent.fbac803a.png"},3155:function(t,e,i){},"52a7":function(t,e){e.f={}.propertyIsEnumerable},5531:function(t,e,i){"use strict";var s=i("7a90"),a=i.n(s);a.a},5835:function(t,e,i){},"5dbc":function(t,e,i){var s=i("d3f4"),a=i("8b97").set;t.exports=function(t,e,i){var n,o=e.constructor;return o!==i&&"function"==typeof o&&(n=o.prototype)!==i.prototype&&s(n)&&a&&a(t,n),t}},"6c62":function(t,e,i){"use strict";var s=i("5835"),a=i.n(s);a.a},7711:function(t,e,i){t.exports=i.p+"img/email.125e6dee.svg"},"7a90":function(t,e,i){},"8b97":function(t,e,i){var s=i("d3f4"),a=i("cb7c"),n=function(t,e){if(a(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,i){return n(t,i),e?t.__proto__=i:s(t,i),t}}({},!1):void 0),check:n}},9093:function(t,e,i){var s=i("ce10"),a=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return s(t,a)}},a068:function(t,e,i){"use strict";var s=i("cf31"),a=i.n(s);a.a},aa77:function(t,e,i){var s=i("5ca1"),a=i("be13"),n=i("79e5"),o=i("fdef"),r="["+o+"]",c="​",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),h=function(t,e,i){var a={},r=n(function(){return!!o[t]()||c[t]()!=c}),l=a[t]=r?e(u):o[t];i&&(a[i]=l),s(s.P+s.F*r,"String",a)},u=h.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=h},b4d4:function(t,e,i){"use strict";var s=i("fa84"),a=i.n(s);a.a},badf:function(t,e,i){},be34:function(t,e,i){t.exports=i.p+"img/repro.ba982ffd.png"},c28a:function(t,e,i){"use strict";var s=i("badf"),a=i.n(s);a.a},c5f6:function(t,e,i){"use strict";var s=i("7726"),a=i("69a8"),n=i("2d95"),o=i("5dbc"),r=i("6a99"),c=i("79e5"),l=i("9093").f,d=i("11e9").f,h=i("86cc").f,u=i("aa77").trim,m="Number",v=s[m],f=v,p=v.prototype,g=n(i("2aeb")(p))==m,_="trim"in String.prototype,b=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():u(e,3);var i,s,a,n=e.charCodeAt(0);if(43===n||45===n){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+e}for(var o,c=e.slice(2),l=0,d=c.length;l<d;l++)if(o=c.charCodeAt(l),o<48||o>a)return NaN;return parseInt(c,s)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof v&&(g?c(function(){p.valueOf.call(i)}):n(i)!=m)?o(new f(b(e)),i,v):b(e)};for(var w,y=i("9e1e")?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)a(f,w=y[C])&&!a(v,w)&&h(v,w,d(f,w));v.prototype=p,p.constructor=v,i("2aba")(s,m,v)}},ce98:function(t,e,i){},cf31:function(t,e,i){},cfa7:function(t,e,i){"use strict";var s=i("3155"),a=i.n(s);a.a},d128:function(t,e,i){"use strict";var s=i("ce98"),a=i.n(s);a.a},d627:function(t,e,i){},d99a:function(t,e,i){t.exports=i.p+"img/gaze_key_mock.2c9b08ac.png"},e876:function(t,e,i){},fa84:function(t,e,i){},faea:function(t,e,i){"use strict";var s=i("d627"),a=i.n(s);a.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=showcase.f15b3837.js.map