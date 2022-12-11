export const onHandlerContactUs = () => {
    alert('Contact Us will be create later. Sorry ;)');
}

export const customDateFormat = (date) => {
    //'July 22 - 2022'
    const year = date.getFullYear();
    const day = date.getDay();
    const month = date.toLocaleString('en', { month: 'long' });
    return `${month} ${day} - ${year}`;
}