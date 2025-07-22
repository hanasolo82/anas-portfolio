

 const data = [
    {   id : 1, 
        name : 'airbnb-clone',
        image : ["/base-airbnb.png"],
        link : "https://anas-react-proyect-01.netlify.app/",
        date : '21.08.24',
        description : 'Basics of React components'
    },
    {   id : 2, 
        name : 'Meme-Generator',
        image : ["/meme-01.png", "/meme-02.png", "/meme-03.png"],
        link : "https://anasmemegenerator-project-2.netlify.app",
        date : '08.09.24',
        description : 'Mapping data and input control'
    },
    /*{   id : 3, 
        name : 'Digital Bussines Card',
        link : "https://bussines-card-anas.netlify.app",
        date : '29.09.24',
        description : 'Components reusability'
    },*/
    {   id : 3, 
        name : 'Note-App',
        image : ["/Notes_01.png", "Notes_02.png"],
        link : "https://note-app-24.netlify.app",
        date : '15.11.24',
        description : 'A \'complex\' app to lear how to manage and save data'
    },
    {   id : 4, 
        name : 'Travel Journal',
        image : ["/base-travel-journal.png"],
        link : "https://anas-travel-journal.netlify.app",
        date : '15.11.24',
        description : 'Components reusability, another basic exercise'
    },
    {   id : 5, 
        name : 'Tenzies',
        image : ["/Tenzies.png"],
        link : "https://anas-tenzies-2024.netlify.app",
        date : '19.11.24',
        description : 'A basic React game, but not too basic'
    },
    {   id : 6, 
        name : 'Scoreboard',
        image : ["/Scoreboard.png"],
        link : "https://anas-scoreboard.netlify.app",
        date : '12.12.24',
        description : 'JavaScript Basics'
    },
    {   id : 7, 
        name : 'jammming',
        image : ["/Jamming.png"],
        link : "https://jamming2024.netlify.app",
        date : '21.12.24',
        description : 'Api solo project, that takes spotify info and create new lists'
    },
   /* {   id : 9, 
        name : 'Van Life',
        link : "https://anas-van-life.netlify.app",
        date : '21.12.24',
        description : 'Avanced React with React Router'
    },*/
    {   id : 8, 
        name : 'Password Gen',
        image : ["/Password_Gen.png"],
        link : "https://anas-password-gen.app",
        date : '19.01.24',
        description : 'Basic Js deploiment'
    },
    /*{   id : 11, 
        name : 'Crome Extension',
        link : "",
        date : '02.02.25',
        description : 'Crome Js deploiment'
    },
    {   id : 12, 
        name : 'Unit Converter',
        link : "",
        date : '03.02.25',
        description : 'Js deploiment'
    },*/

]
const datas = data.sort((a, b) => new Date(a.date) - new Date(b.date))

export default datas