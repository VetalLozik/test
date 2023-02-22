import photographyImage from '../../images/photography.png';
import photographyImage2 from '../../images/photography2.png';
import staging from '../../images/staging.png';
import renderings from '../../images/renderings.png';
import tours from '../../images/tours.png';
import floor from '../../images/floor.png';
import video from '../../images/video.png';


export const cards = [
    {
        title: "Photography",
        description: "Every photograph we produce finds the beauty in your property while serving as a profitable asset.",
        items: ["Drone Photography", "Interiors", "Exteriors / Architectural"],
        images: [photographyImage, photographyImage2]
    },
    {
        title: "Virtual Staging",
        description: "Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.",
        items: null,
        images: [staging]
    },
    {
        title: "Renderings",
        description: "Renderings are the gold standard in pre-construction marketing.",
        items: ["Interiors", "Exteriors"],
        images: [renderings]
    },
    {
        title: "Interactive Tours",
        description: "Give your audience the ability to explore your property without requiring in-person travel.",
        items: ["Matterport", "Video Walkthroughs"],
        images: [tours]
    },
    {
        title: "Floor Plans",
        description: "We produce laser-precise floor plans faster than any other service.",
        items: ["On-site Measure", "2D Floor Plans", "3D Floor Plans"],
        images: [floor]
    },
    {
        title: "Video",
        description: "Video content has higher engagement and will help your property stand out online.",
        items: ["Drone Photography", "Interiors", "Exteriors / Architectural"],
        images: [video]
    }
]