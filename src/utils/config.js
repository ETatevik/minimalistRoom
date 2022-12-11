import {onHandlerContactUs} from "./help";

export const translations = {
    HOME: "Home",
    ABOUT_US: "About Us",
    SERVICES: "Services",
    OUT_TEAMS: "Our Teams",
    CONTACT_US: "Contact Us",
    EMAIL_FOR_LATEST_NEWS: "Enter  your email to get the laterst news",
    FOLLOW_US: "Follow us On",
    EMAIL_ADDRESS: "Email Address",
    FACEBOOK: "Facebook",
    INSTAGRAM: "Instagram",
    TIKTOK: "TikTok",
    YOUTUBE: "Youtube",
    BRAND: "Dananz"
}

export const heroSectionContent = {
    title: "Minimalist Room",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    picture: "assets/images/hero.jpg",
    picture_alt: "Dananz Gallery"
}

export const informationSectionContent = [
    {
        title: "Project Overview",
        descriptions: [
            "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. "
        ],
        date: new Date(2022, 6,22),
        tag: "Interior Design - Furnitur"
    },
    {
        title: "Design Process",
        descriptions: [
            "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
            "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."
        ],
        date: null,
        tag: null
    }
]

export const gallerySectionContent = [
    {
        id: 0,
        url: "assets/images/gallery1.jpg",
        alt: "Dananz Gallery",
        isFull: false
    },
    {
        id: 1,
        url: "assets/images/gallery2.jpg",
        alt: "Dananz Gallery",
        isFull: false
    },
    {
        id: 2,
        url: "assets/images/gallery3.jpg",
        alt: "Dananz Gallery",
        isFull: true
    },
    {
        id: 3,
        url: "assets/images/gallery4.jpg",
        alt: "Dananz Gallery",
        isFull: false
    },
    {
        id: 4,
        url: "assets/images/gallery5.jpg",
        alt: "Dananz Gallery",
        isFull: false
    }
]

export const contactUsSectionContent = {
    title: "let's discuss making your interior like a dream place!",
    subTitle: "Contact us below to work together to build your amazing interior",
    button: translations.CONTACT_US,
    buttonHandler: onHandlerContactUs
}

export const footerContent = {
    title: "One of the best furniture agency.",
    sendEmail: {
        title: translations.EMAIL_FOR_LATEST_NEWS,
        inputPlaceholder: translations.EMAIL_ADDRESS
    },
    socialLinksTitle: translations.FOLLOW_US,
    socialLinks: [
        {
            id: 0,
            icon: "assets/images/icon/facebook.svg",
            title: translations.FACEBOOK
        },
        {
            id: 1,
            icon: "assets/images/icon/instagram.svg",
            title: translations.INSTAGRAM
        },
        {
            id: 2,
            icon: "assets/images/icon/tiktok.svg",
            title: translations.TIKTOK
        },
        {
            id: 3,
            icon: "assets/images/icon/youtube.svg",
            title: translations.YOUTUBE
        }
    ]
}