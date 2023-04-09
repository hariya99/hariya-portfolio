import Lego from './assets/portfolio/PoD_generates_vintage_car.gif'
import Debias from './assets/portfolio/debias.png'
// import Residual from './assets/portfolio/Residual.png'

// Skills
import html from './assets/html.png'
import css from './assets/css.png'
import cpp from './assets/cpp.png'
import java from './assets/java.png'
import javascript from './assets/javascript.png'
// import git from './assets/git-logo.png'
import reactImage from './assets/react.png'
import tail from './assets/tailwind.png'
import python from './assets/python.png'
import flask from './assets/flask.png'


export const GetHome = () => {

    const introduction = "I am a Graduate student and a software engineer with eight years of professional" + 
    " IT experience designing, developing and maintaining enterprise applications." + 
    " I'm highly skilled and well-versed in multiple tools and technologies."
    return introduction; 

}

export const GetPortfolio = () => {
    const data = {
        "brief" : "I have worked on a variety of projects in the past. Some of them are listed below.",
        "portfolios" : [
            {
                id:1,
                image:Lego,
                title: 'Lego PCGRL',
                url: 'https://github.com/hariya99/legopcg.git' 
            },
            {
                id:2,
                image:Debias,
                title: 'Quantizing the LSTM layer of Pytorch' ,
                url:'https://github.com/hariya99/quantization-hpml.git'
            },
            {
                id:3,
                image:Debias,
                title: 'Remove Biases from Word Embeddings',
                url:'https://github.com/hariya99/NLP_debias_project.git'
            },
        ]
    }
    return data;
}

export const GetSkills = () => {

    const skills = [
        {
            id:1,
            tech:python,
            title: 'Python',
            style: 'shadow-white'
        },

        {
            id:2,
            tech:cpp,
            title: 'C/C++',
            style: 'shadow-sky-500'
        },

        {
            id:3,
            tech:javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },

        {
            id:4,
            tech:reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },

        {
            id:5,
            tech:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:6,
            tech:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },

        {
            id:7,
            tech:tail,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },

        {
            id:8,
            tech:java,
            title: 'Java',
            style: 'shadow-red-800'
        },

        // {
        //     id:9,
        //     tech:git,
        //     title: 'Git',
        //     style: 'shadow-orange-500'
        // },
        {
            id:9,
            tech:flask,
            title: 'Flask',
            style: 'shadow-orange-500'
        },
    ]
    return skills;
}
