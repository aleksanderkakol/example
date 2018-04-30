$(function () {
    const $div = $('.first');
    const $ul = $( '<ul class="numbers"></ul>' );
    for ( let i = 0; i < 5; i++ ) {
        const $li = $(`<li class="sector${i+1}">Pion ${i+1}</li>`);
        const $teams = $(`<ul></ul>`);
        $ul.append($li);
        $li.append($teams);
        for (let i=0; i<10; i++){
            const $teamsName = $(`<li class="team${i+1}">Zespół ${i+1}</li>`);
            const $person = $(`<ul class="people"></ul>`);
            $teams.append($teamsName);
            $teamsName.append($person);
            for (let i=0; i<10; i++){
                const $namePeople = $(`<li class="guy">Osoba ${i+1}</li>`);
                $person.append($namePeople);
            }
        }
    }
    $div.append( $ul );
});