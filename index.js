function popup() {
    $('.parent').on('mouseenter', event => {
        let parent = $(event.currentTarget);
        parent.children('p').toggleClass('hidden');
        parent.children('p').toggleClass('popup');
    })
}

function disappear() {
    $('.parent').on('mouseleave', event => {
        let parent = $(event.currentTarget);
        parent.children('p').toggleClass('hidden');
        parent.children('p').toggleClass('popup');
    })
}

function main () {
    popup();
    disappear();
}

$(main);