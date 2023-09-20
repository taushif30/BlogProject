import { createContext, useState } from "react"

export const Store = createContext();

const ContextStore = (props)=>{
    const [data,setData] = useState([
        { 
            id : 1,
            cat : 'Bollywood',
            name : 'GADAR-2',
            image: 'https://stat5.bollywoodhungama.in/wp-content/uploads/2021/10/Gadar-2-1.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 2,
            logic: 'logic',
            cat : 'Bollywood',
            name : 'JAWAN',
            image: 'https://wallpapercave.com/wp/wp12022728.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'       
         },
        { 
            id : 3,
            cat : 'Bollywood',
            name : '2 STATES',
            image: 'https://wallpapercave.com/wp/wp8807385.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'        
        },
        { 
            id : 4,
            cat : 'Bollywood',
            name : 'K.G.F',
            image: 'https://e1.pxfuel.com/desktop-wallpaper/436/844/desktop-wallpaper-kgf-chapter-2-kgf-2.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'        
        },
        
        { 
            id : 5,
            cat : 'Bollywood',
            name : 'JAI HO',
            image: 'https://www.hdnicewallpapers.com/Walls/Big/Salman%20Khan/Jai_Ho_Upcoming_2014_Bollywood_Movie_Poster.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'       
         },
        { 
            id : 6,
            cat : 'Bollywood',
            name : 'ADIPURUSH',
            image: 'https://www.bollywoodhungama.com/wp-content/uploads/2023/06/Adipurush-1-8.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'       
         },
        { 
            id : 7,
            latest:'latest',
            cat : 'Bollywood',
            name : 'BAJIRAO MASTANI',
            image: 'https://cdn.wallpapersafari.com/30/4/tWaCfe.jpg',
            text : 'Bajirao I, who fought over 41 major battles and several lesser ones, was reputed to have never lost any of them. Bajirao is described as "RANMARD" a man made of and for the battlefield. Bajirao told his brother "Remember that night has nothing to do with sleep. It was created by God, to raid territory held by your enemy. The night is your shield, your screen against the cannons and swords of vastly superior enemy forces." A born cavalry leader, Bajirao was unequaled for the daring and originality of his genius. Mastani, the fabled warrior princess, was the daughter of Raja Chattrasal and his Persian wife Roohani Begum. An expert dancer, singer, and warrior, Mastani is sent to battle at the head of the Bundelkhand army. A chance meeting on a battlefield where they fight on the same side puts Bajirao and Mastani on a course of passionate love that is unstoppable by their families, by war, or by death itself. ',
            textt : 'Bajirao I, who fought over 41 major battles and several lesser ones, was reputed to have never lost any of them. Bajirao is described as "RANMARD" a man made of and for the battlefield. '        
        },
        { 
            id : 8,
            bolly:1,
            logic: 'logic',
            cat : 'Bollywood',
            name : 'GUNDAY',
            image: 'https://www.hdnicewallpapers.com/Walls/Big/Other%20Actors/Ranveer_Singh_and_Arjun_Kapoor_in_Gunday_Bollywood_Movie_Poster.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'        
        },
        { 
            id : 9,
            bolly:2,
            cat : 'Bollywood',
            name : 'BROTHERS',
            image: 'https://wallpaper-house.com/data/out/6/wallpaper2you_82055.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 10,
            bolly:3,
            logic: 'logic',
            cat : 'Bollywood',
            name : 'RRR',
            image: 'https://e1.pxfuel.com/desktop-wallpaper/934/976/desktop-wallpaper-rrr-bollywood-2022-movie-poster-thumbnail.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
            },
       

        // -------------------------------------------------------------------------------------

        { 
            id : 11,
            cat : 'Hollywood',
            name : 'GAME OF THRONES',
            image: 'https://c4.wallpaperflare.com/wallpaper/47/548/988/game-of-thrones-poster-movie-wallpaper-preview.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'      
        },
        { 
            id : 12,
            cat : 'Hollywood',
            name : 'THE MEG',
            image: 'https://wallpapercg.com/download/meg-2-the-trench-4k-wallpaper-3840x2160-13614.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
            },
        { 
            id : 13,
            cat : 'Hollywood',
            name : 'MISSION IMPOSSIBLE',
            image: 'https://w0.peakpx.com/wallpaper/944/838/HD-wallpaper-mission-impossible-mission-impossible-fallout.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
            },
        { 
            id : 14,
            cat : 'Hollywood',
            name : 'JUMANGI',
            image: 'https://wallpapercave.com/wp/wp2296560.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 15,
            idd: 1,
            cat : 'Hollywood',
            name : 'PIRATES OF CARIBBEAN',
            image: 'https://wallpapercave.com/wp/MDTFW0j.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 16,
            cat : 'Hollywood',
            name : 'AVENGERS',
            image: 'https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 17,
            cat : 'Hollywood',
            name : 'SPIDERMAN',
            image: 'https://images2.alphacoders.com/280/280472.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        {
            id : 18,
            holly:1,
            cat : 'Hollywood',
            name : 'FAST AND FURIOUS',
            image: 'https://c4.wallpaperflare.com/wallpaper/599/304/0/fast-and-furious-brian-o-conner-dominic-toretto-jordana-brewster-wallpaper-preview.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 19,
            holly:2,
            cat : 'Hollywood',
            name : 'TWILIGHT',
            image: 'https://rukminim1.flixcart.com/image/850/1000/l0sgyvk0/poster/z/n/g/medium-twilight-saga-breaking-dawn-on-fine-art-paper-hd-quality-original-imagcg85tnzj55yc.jpeg?q=90',text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 20,
            holly:3,
            cat : 'Hollywood',
            name : 'ESCAPE',
            image: 'https://w0.peakpx.com/wallpaper/83/397/HD-wallpaper-escape-plan-2013.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },

        // ---------------------------------------------------------------------------------------------------------
        { 
            id : 21,
            cat : 'Technology',
            name : 'MOBILE',
            image: 'https://w0.peakpx.com/wallpaper/888/794/HD-wallpaper-iphone-12-pro-max-2020-apple-5g-mobile-phone-poster.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 22,
            cat : 'Technology',
            name : 'TABLET',
            image: 'https://w0.peakpx.com/wallpaper/329/208/HD-wallpaper-ipad-pro-2021-apple-april-new-product-poster.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 23,
            latest:'latest',
            cat : 'Technology',
            name : 'LAPTOP',
            image: 'https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            text : 'A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer (PC) smaller than a briefcase. A laptop can be easily transported and used in temporary spaces such as on airplanes, in libraries, temporary offices and at meetings.Laptops are designed to be portable computers. They are smaller and lighter than desktops. The name connotes the users ability to put the computer in their lap while they use it. ',
            textt : 'A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer (PC) smaller than a briefcase. A laptop can be easily transported and used in temporary spaces such as on airplanes.'
        },
        { 
            id : 24,
            cat : 'Technology',
            name : 'UPI',
            image: 'https://images.moneycontrol.com/static-mcnews/2017/12/UPI-payments.jpg?impolicy=website&width=1600&height=900',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 25,
            cat : 'Technology',
            name : 'AI',
            image: 'https://img.myloview.com/posters/artificial-intelligence-vector-wave-light-background-digital-wallpaper-communication-network-business-information-abstract-wallpaper-background-3d-grid-ai-tech-wire-network-futuristic-wireframe-700-224640142.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 26,
            cat : 'Technology',
            name : 'ML',
            image: 'https://e0.pxfuel.com/wallpapers/200/146/desktop-wallpaper-machine-learning-types-of-machine-learning.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 27,
            cat : 'Technology',
            name : 'ATM',
            image: 'https://images.pexels.com/photos/8554371/pexels-photo-8554371.jpeg?cs=srgb&dl=pexels-liliana-drew-8554371.jpg&fm=jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        {
            id : 28,
            tech:1,
            cat : 'Technology',
            name : 'REACT',
            image: 'https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 29,
            tech:2,
            cat : 'Technology',
            name : 'GADGET',
            image: 'https://c0.wallpaperflare.com/preview/454/428/963/airpod-iphone-nespresso-gadget.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 30,
            tech:3,
            idd: 2,
            cat : 'Technology',
            name : 'LENS',
            image: 'https://i.pinimg.com/736x/78/9e/2c/789e2c17f5e091d912e6a6ad5f10f02b.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },

        //----------------------------------------------------------------------------------------------------------------------------
          {
            id : 31,
            cat : 'Food',
            name : 'BBQ',
            image: 'https://media.istockphoto.com/id/481754150/photo/chicken-on-a-hot-flaming-barbecue.jpg?s=612x612&w=0&k=20&c=QWA3qlprrjiKzlclNHIzIqMTmKYoY9ZJlFRCieZEvhw=',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 32,
            cat : 'Food',
            name : 'PIZZA',
            image: 'https://wallpapercave.com/wp/wc1813154.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 33,
            cat : 'Food',
            name : 'DESERT',
            image: 'https://w.forfun.com/fetch/f8/f80f15859901a6fb79307766e557b19d.jpeg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 34,
            cat : 'Food',
            name : 'ICECREAM',
            image: 'https://wallpapercave.com/wp/9GjtjIj.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 35,
            cat : 'Food',
            name : 'TEA',
            image: 'https://wallpapercave.com/wp/wp4114562.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 36,
            cat : 'Food',
            name : 'DOSA',
            image: 'https://wallpaperaccess.com/full/6340448.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 37,
            cat : 'Food',
            name : 'MOMO',
            image: 'https://wallpapercave.com/wp/wp10053430.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        {
            id : 38,
            food:1,
            cat : 'Food',
            name : 'BIRYANI',
            image: 'https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 39,
            food:2,
            cat : 'Food',
            name : 'LASSI',
            image: 'https://tastedrecipes.com/wp-content/uploads/2022/07/Coconut-Lassi-3.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 40,
            food:3,
            cat : 'Food',
            name : 'KACHORI',
            image: 'https://st2.depositphotos.com/5653638/11442/i/450/depositphotos_114424778-stock-photo-kachori-or-kachauri-or-kachodi.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },

        //-----------------------------------------------------------------------------------------------------


        {
            id : 41,
            cat : 'Sports',
            name : 'VIRAT',
            image: 'https://wallpaperaccess.com/full/5497641.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 42,
            cat : 'Sports',
            name : 'IPL',
            image: 'https://e1.pxfuel.com/desktop-wallpaper/833/8/desktop-wallpaper-ipl-team-logo-ipl.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 43,
            cat : 'Sports',
            name : 'FIFA',
            image: 'https://e0.pxfuel.com/wallpapers/195/356/desktop-wallpaper-fifa-19-ronaldo-fifa.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 44,
            cat : 'Sports',
            name : 'NBA',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9956aeaf-2c66-41ac-85e8-1423f66ad703/deo92pi-8fea75ba-b837-45d9-8eb1-7a37e1f61168.jpg/v1/fill/w_800,h_1000,q_70,strp/russell_westbrook_lakers_nba_wallpaper_by_skythlee_deo92pi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzk5NTZhZWFmLTJjNjYtNDFhYy04NWU4LTE0MjNmNjZhZDcwM1wvZGVvOTJwaS04ZmVhNzViYS1iODM3LTQ1ZDktOGViMS03YTM3ZTFmNjExNjguanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6pWRl0jVRLM0zZPMWLtGTc44mhkDXMiWZ3S2A1qHIOU',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after '
        },
        { 
            id : 45,
            idd: 3,
            cat : 'Sports',
            name : 'CHESS',
            image: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlc3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after '
        },
        { 
            id : 46,
            cat : 'Sports',
            name : 'GOLF',
            image: 'https://c4.wallpaperflare.com/wallpaper/9/760/1018/5bd013ad768ca-wallpaper-preview.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 47,
            cat : 'Sports',
            name : 'SWIMMING',
            image: 'https://c4.wallpaperflare.com/wallpaper/721/93/282/michael-phelps-swimmer-olympian-wallpaper-preview.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        {
            id : 48,
            sport:1,
            cat : 'Sports',
            name : 'RACE',
            image: 'https://wallpapercave.com/wp/wp9708891.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 49,
            sport:2,
            cat : 'Sports',
            name : 'RUGBY',
            image: 'https://wallpaperaccess.com/full/1103840.jpg',
            text : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after the blockebuster.The two will be reprising their roles in the film which has flagged off its shooting schedule. ',
            textt : 'Sunny Deol and Ameesha Patel from Gadar: Ek Prem Katha have reunited for the film sequel, 20 years after'
        },
        { 
            id : 50,
            sport:3,
            latest:'latest',
            cat : 'Sports',
            name : 'HOCKEY',
            image: 'https://c4.wallpaperflare.com/wallpaper/828/921/194/hockey-ice-zing-snow-wallpaper-preview.jpg',
            text : 'Ice hockey, game between two teams, each usually having six players, who wear skates and compete on an ice rink. The object is to propel a vulcanized rubber disk, the puck, past a goal line and into a net guarded by a goaltender, or goalie ',
            textt : 'Ice hockey, game between two teams, each usually having six players, who wear skates and compete on an ice rink. The object is to propel a vulcanized rubber disk, the puck, past a goal line and into a net guarded by a goaltender, or goalie'
        },
    ])
    return(
        <>
        <Store.Provider value={[data,setData]}>
            {props.children}
        </Store.Provider>
        </>
    )

}

export default ContextStore