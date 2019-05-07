class TypolevPlain  {
    constructor(plain) {
        this.plain = plain;
    }
    start() {
        console.log(this.plain +  ' ' +'Взлетел');
    }
    seat() {
        console.log(this.plain +  ' ' +'Садится');
    }
}
class MigPlain  extends TypolevPlain {
    atack() {
        console.log(this.plain + ' ' + 'Атакует');
    }
}
let migplain = new MigPlain('Миг');
let typolevplain = new TypolevPlain('ТУ-154');
console.log(migplain.atack());
console.log(typolevplain.start());
let menu = document.getElementById('open-menu');
let navbar = document.getElementById('navbar');
let count = 0;
const showMenu = (element) => {
    element.style.display = 'flex';
    count++;
}
const hideMenu = (element) => {
    element.style.display = 'none';
}
menu.addEventListener('click',(() => {
    count++;
    if (count > 1) {
        count = 0;
    }
    if (count == 0) {
        hideMenu(navbar);
    }
    if (count > 0) {
        showMenu(navbar);
    }
}));