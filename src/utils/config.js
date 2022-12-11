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
    BRAND: "Dananz",
    SUCCESS: "Email sent successfully",
    ERROR: "Please input email",

}

export const heroSectionContent = {
    title: "Minimalist Room",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    picture: "assets/images/hero.jpg",
    picture_alt: "Dananz Gallery"
}

export const informationSectionContent = [
    {
        id: 100,
        title: "Project Overview",
        descriptions: [
            "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. "
        ],
        date: new Date(2022, 6,22),
        tag: "Interior Design - Furnitur"
    },
    {
        id: 101,
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
        id: 10,
        url: "assets/images/gallery1.jpg",
        alt: "Dananz Gallery",
        isFull: false
    },
    {
        id: 11,
        url: "assets/images/gallery2.jpg",
        alt: "Dananz Gallery",
        isFull: false
    },
    {
        id: 12,
        url: "assets/images/gallery3.jpg",
        alt: "Dananz Gallery",
        isFull: true
    },
    {
        id: 13,
        url: "assets/images/gallery4.jpg",
        alt: "Dananz Gallery",
        isFull: false
    },
    {
        id: 14,
        url: "assets/images/gallery5.jpg",
        alt: "Dananz Gallery",
        isFull: false
    }
]

export const contactUsSectionContent = {
    title: "let's discuss making your interior like a dream place!",
    subTitle: "Contact us below to work together to build your amazing interior",
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
            icon: "assets/images/icons/facebook.svg",
            url: "https://www.facebook.com/",
            title: translations.FACEBOOK
        },
        {
            id: 1,
            icon: "assets/images/icons/instagram.svg",
            url: "https://www.instagram.com/",
            title: translations.INSTAGRAM
        },
        {
            id: 2,
            icon: "assets/images/icons/tiktok.svg",
            url: "https://www.tiktok.com/",
            title: translations.TIKTOK
        },
        {
            id: 3,
            icon: "assets/images/icons/youtube.svg",
            url: "https://www.youtube.com/",
            title: translations.YOUTUBE
        }
    ]
};