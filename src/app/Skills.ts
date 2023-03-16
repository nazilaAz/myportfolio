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
export interface ICourse {
    name:string,
    img:string
}

export const frontEndSkills=[{
    "name":"HTML5",
    "img":"html5.png",
    "percent":85

},
{
    "name":"CSS3",
    "img":"css-3.png",
    "percent":85

},
{
    "name":"SCss",
    "img":"sass.png",
    "percent":85

},
{
    "name":"JAvascript",
    "img":"java-script.png",
    "percent":85

},{
    "name":"Typescript",
    "img":"typescript.png",
    "percent":85

},{
    "name":"Bootstrap",
    "img":"bootstrap.png",
    "percent":85

},{
    "name":"Angular",
    "img":"angular.png",
    "percent":85

}]


export const backEndSkills=[{
    "name":"PHP",
    "img":"php.png",
    "percent":85

},
{
    "name":"MySql",
    "img":"mysql.png",
    "percent":85

},
{
    "name":"AJAX",
    "img":"ajax.png",
    "percent":85

},
{
    "name":"Symfony",
    "img":"symfony.png",
    "percent":85
}]


export const controlversion=[{
    "name":"GIT",
    "img":"github.png",
    "percent":85

}]
export interface ISkills {
    name:string,
    img:string,
    percent:number
}
