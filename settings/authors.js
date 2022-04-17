// create the authors for the blog
// const authors = {
//     "author-id": {
//         name: "Author Name",
//         description: "Some information about the author", **you can use markup!**", 
//         metaDescription: "This is optional, but if you used markup in your description, include a plain text description here for SEO",
//     },
// }
// if the blog doesn't need authors, empty the authors object e.g const authors = {};

const authors = {
    "system": {
        name: "System",
        description: "System"
    },
    "cerus": {
        name: "CMDR Cerus",
        description: "Full time space explorer. Always on the hunt for new discoveries. [Inara](https://inara.cz/cmdr/296211/), [EDSM](https://www.edsm.net/en/user/profile/id/125247/cmdr/Cerus_)",
        metaDescription: "Full time space explorer. Always on the hunt for new discoveries."
    }
};

export default authors;