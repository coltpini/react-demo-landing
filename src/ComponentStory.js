import { storiesOf } from '@kadira/storybook';
import Component from './Component.js';

const mainTile = {
    title: "Sturgeon, a monster of awesomeness",
    teaser: "Sturgeons are long-lived, late maturing fishes. Their average lifespan is 50 to 60 years. They have a heterocercal caudal fin similar to that of sharks, and an elongated spindle-like body that is smooth-skinned, scaleless and armored with 5 lateral rows of bony plates called scutes. Several species can grow quite large, typically ranging 7–12 feet (2-3½ m) in length. The largest sturgeon on record was a Beluga female captured in the Volga estuary in 1827, weighing 1,571 kg (3,463 lb) and 7.2 m (24 ft) long.",
    img: "http://media01.bigblackbag.net/56633/portfolio_media/lwsm_new-jersey-magazine-_421.jpg"
};
const tiles = [
    {
        className: "passedInClass",
        title: "The Bonefish, an amazing fish!",
        teaser: "Fly fishing for bonefish, called bonefishing, is a popular sport in the Bahamas and southern Florida. Since bonefish live in shallow inshore water, fishing may be done by wading or from a shallow-draft boat.",
        img: "http://www.greenwichworkshop.com/catalogue/nov06/images/art/bonefish.jpg"
    },{
        title: "The anadromous Stealhead",
        teaser: "Rainbow trout / Steelhead are ray-finned fishes in the salmon family, and they are one of the top sport fish in North America. Rainbow trout and steelhead are the same species, but Steelhead are anadromous, meaning they spend part of their lives in the sea",
        img: "http://www.science.calwater.ca.gov/images/scinews_0810_steelhead_lg.jpg"
    },{
        title: "The Brookie",
        teaser: "The brook trout has a dark green to brown color, with a distinctive marbled pattern (called vermiculation) of lighter shades across the flanks and has a distinctive sprinkling of red dots. The lower fins are reddish in color white leading edges. ",
        img: "https://www.takemefishing.org/tmf/assets/images/fish/brook-trout-464x170.png"
    },{
        title: "A beautiful fish, the Arctic Grayling",
        teaser: "Arctic grayling (Thymallus arcticus) is a freshwater fish in the same family (Salmonidae) as salmon, trout, and whitefish.  A distinctive morphological characteristic of this fish is its large, sail-like dorsal fin.",
        img: "https://www.igfa.org/images/SpeciesID_Images/BWGrayling,%20Arctic.png"
    },{
        title: "Cutthroat",
        teaser: "Cutthroat trout are native to western North America. Native cutthroat trout species are found along the Pacific Northwest coast from Alaska through British Columbia into northern California, in the Cascade Range, the Great Basin and throughout the Rocky Mountains including southern Alberta",
        img: "https://www.fws.gov/fisheries/fishguide/images/originals/west_cold/Lahonton_cutthroat_trout_JosephRTomelleri_copyright.png"
    },{
        title: "Brown Trout, the vast",
        teaser: "The brown trout (Salmo trutta) is a European species of salmonid fish that has been widely introduced into suitable environments globally. It includes both purely freshwater populations as well as anadromous forms known as the sea trout. ",
        img: "https://www.igfa.org/images/SpeciesID_Images/trout_brown.png"
    }
];
const socialItems = [
    {
        handle: "Sir Bean",
        avatar: "https://twistedsifter.files.wordpress.com/2014/09/rodney-pike-photoshop-mr-bean-into-famous-paintings-6.jpg?w=658&h=800",
        message: "That is a crazy huge bug on your shoe, oh… wait… that's not a bug. #weird"
    },{
        handle: "M.Beanicus",
        avatar: "http://cdn.images.express.co.uk/img/dynamic/galleries/x701/46024.jpg",
        message: "Look at me! #IamBeautifyl"
    },{
        handle: "President George Bean",
        avatar: "http://www.cubebreaker.com/wp-content/uploads/2014/09/mr-bean-rodney-pike-02.jpg",
        message: "Freedom will last, yes, it will. #patrioticDream"
    },{
        handle: "Miss Bean",
        avatar: "http://www.cubebreaker.com/wp-content/uploads/2014/09/mr-bean-rodney-pike-08.jpg",
        message: "I was like, totally, that is a 7 it's water proof. And she spit on it! #harsh #notTalkingToHer"
    },{
        handle: "Beanie Ross",
        avatar: "http://www.cubebreaker.com/wp-content/uploads/2014/09/mr-bean-rodney-pike-14.jpg",
        message: "Sow what?!?"
    }
];

storiesOf('Component', module)

    .add('test one', () => (
        <Component
            className="testClass"
            title="What fish do you like?"
            tiles={tiles}
            mainTile={mainTile}
            socialItems={socialItems}
        />
    ))
