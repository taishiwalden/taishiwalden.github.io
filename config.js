// this is for the scrollytelling map

var config = {
    style: "mapbox://styles/taishiwalden/ckwqsmppt2git14o5d2rnkzgt", //TODO
    accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
    title: "JSIS 495 Task Force – Israel and the Middle East", //TODO
    subtitle: "Centering Palestinian Human Rights: Recommendation For A Coalition", //TODO
    byline: "By Taishi Walden", //TODO
    footer: "Taishi Walden, 2021, Jackson School of International Studies",
    showMarkers: false,
    theme: "light",
    alignment: "left",
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: "48d352fe5c88b29680f9ce8d7a233191",
            title: "Jerusalem",
            description:
                "Jerusalem is the capital of Israel.  It is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity, and Islam.",
            location: {
                center: [35.22273, 31.77285],
                zoom: 12.9,
                pitch: 0,
                bearing: 0,
            },
        },

        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "5c76ad75992aaac989465955479e2fb4",
            title: "Gaza Strip",
            description:
                "140 square mile strip of land controlled by Hamas since 2007 and subject to an Israeli blockade ever since, home to almost 2 million Palestinians",
            location: {
                center: [34.422, 31.39543],
                zoom: 9.92,
                pitch: 60,
                bearing: 66.4,
            },
        },

        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "7ba8dfb2d8196a463676254236476581",
            title: "The First Intifada",
            description:
                "The First Intifada, or First Palestinian Intifada, was a sustained series of Palestinian protests and violent riots in the West Bank, Gaza Strip, and within Israel. The protests were against the Israeli occupation of the West Bank and Gaza that had begun twenty years prior, in 1967.",
            location: {
                center: [34.50321, 31.52424],
                zoom: 12.15,
                pitch: 14.5,
                bearing: 67.16,
            },
        },
        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "9e34f44c4e4aa2afecbf0e85c16e72af",
            title: "Home Invasions by the Israeli Defense Forces",
            description:
                "Many of the soldiers recall the practice of home invasions during their time in the IDF, in which soldiers would intrude into Palestinian homes in the occupied Palestinian territories (OPT) by force and without permission. Israel views their actions not as invasions, but as legitimate entries into homes performed in accordance with the law as part of their sovereign right to protect their citizens",
            location: {
                center: [35.41312, 31.84679],
                zoom: 11.48,
                pitch: 60,
                bearing: -109.6,
            },
        },
    ],
};
