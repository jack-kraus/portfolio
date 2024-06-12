interface Project {
    title : string
    images? : { 
        image: string,
        caption: string
    }[],
    description: string,
    stack: string[]
}

interface ProjectList {
    [name:string] : Project
}

const out : ProjectList = {
    harbor_currents : {
        title: "Harbor Currents",
        images : [
            {
                image: "https://cdn.discordapp.com/attachments/1233811913570521221/1247593235476385812/IMG_0026.png?ex=666b233e&is=6669d1be&hm=4ebd1be9f5cf4a01d758f93f53ff8f8448ad9402d37d666f239937abb57786af&",
                caption : "Map"
            },
            {
                image: "https://cdn.discordapp.com/attachments/1151903718833397822/1241535120872046712/IMG_5083.png?ex=666ad9ef&is=6669886f&hm=5f2e24a67e70c91051be8d7dee9ae6432e683f2eb302ccac665d9a6e50c52a66&",
                caption: "Chart"
            }
        ],
        description: `Collaborated in a group to design and program a mobile app to display water current data in the Hudson River using React, React Native, and the Mapbox library.
            Accommodated the needs of our clients (harbor pilots) by implementing requested features.
            Implemented code to transmit and format data between our data source and a MongoDB database using Python and NumPy, and serve data from the database to each user using an Express server.`,
        stack: [
            "React Native",
            "Mapbox",
            "Javascript",
            "Github"
        ]
    },
};

export default out;