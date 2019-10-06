function popup() {
    $('.parent').on('mouseenter', event => {
        let parent = $(event.currentTarget);
        parent.children('h4').toggleClass('hidden');
        parent.children('h4').toggleClass('popup');
    })
}

function disappear() {
    $('.parent').on('mouseleave', event => {
        let parent = $(event.currentTarget);
        parent.children('h4').toggleClass('hidden');
        parent.children('h4').toggleClass('popup');
    })
}

function main () {
    popup();
    disappear();
}

$(main);