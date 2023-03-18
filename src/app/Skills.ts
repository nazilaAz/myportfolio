export const course=[{
    "name":"FrontEnd",
    "img":"front-end.png"
},
{
    "name":"BackEnd",
    "img":"coding.png"
},
{
    "name":"Version Control",
    "img":"web.png"
}
]


export const frontEndSkills=[{
    "name":"HTML5",
    "img":"html5.png",
    "percent":85,
    "color":"#FA7070"

},
{
    "name":"CSS3",
    "img":"css-3.png",
    "percent":85,
    "color":"#FBF2CF"

},
{
    "name":"SCss",
    "img":"sass.png",
    "percent":85,
    "color":"#C6EBC5"
},
{
    "name":"JAvascript",
    "img":"java-script.png",
    "percent":85,
    "color":"#A1C298"
},{
    "name":"Typescript",
    "img":"typescript.png",
    "percent":85,
    "color":"#7FBCD2"
},{
    "name":"Bootstrap",
    "img":"bootstrap.png",
    "percent":85,
    "color":"#A5F1E9"
},{
    "name":"Angular",
    "img":"angular.png",
    "percent":85,
    "color":"#E1FFEE"
}]


export const backEndSkills=[{
    "name":"PHP",
    "img":"php.png",
    "percent":85,
    "color":"#"

},
{
    "name":"MySql",
    "img":"mysql.png",
    "percent":85,
    "color":"#FFEEAF"

},
{
    "name":"AJAX",
    "img":"ajax.png",
    "percent":85,
    "color":"#F0E161"

},
{
    "name":"Symfony",
    "img":"symfony.png",
    "percent":85,
    "color":"#D9CB50"
}]


export const controlversion=[{
    "name":"GIT",
    "img":"github.png",
    "percent":85,
    "color":"#C0B236"

}]
export interface ISkills {
    name:string,
    img:string,
    percent:number,
    color:string
}
export interface ICourse {
    name:string,
    img:string
}