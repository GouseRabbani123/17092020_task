var bound = create('div', 'first')
var ban = create('div', "banner")
var profile = createimg('img.jpg')
var dname = create('div', "name");

var h = create('h2')
h.innerHTML = "GOUSE RABBANI SHAIK"

var cnt = create('div', 'contact');
var hr = create('hr');
var details = create('div', "details");
var pcntct = create('p');
pcntct.innerHTML = "Vijayawada | +91 6303895042 | gouse.shahib@gmail.com | https://www.linkedin.com/in/shaik-gouse-rabbani-6979671ab/"

var h2 = create('h2');
h2.innerHTML = `<i style="font-size:32px" class="fas fa-bullseye"></i> Carrer Obective`

var p = create('p');
p.innerHTML = "To pursue a challenging career and work for a esteemed organization where I can contribute my skills for both my personal and the organizational growth."

var h22 = create('h2');
h22.innerHTML = `<i style='font-size:24px' class='fas fa-laptop-code'></i> Technical Skills`;

var ul = create('ul', 'skills');
var li1 = createli(ul, 6);

var labelC = createLabel('Cprog', 'C programming');
var labelcshp = createLabel('csharp', 'C #');
var labeljs = createLabel("js", "Java Script");
var labelhtml = createLabel('html', 'HTML');
var labelcss = createLabel('css', "CSS");
var labelsql = createLabel('sql', "SQL");
var progressC = createProgress(80, 'Cprog');
var progressCshp = createProgress(50, 'csharp')
var progressJs = createProgress(75, 'js');
var progressHtml = createProgress(60, 'html');
var progressCss = createProgress(50, 'css');
var progressSql = createProgress(40, 'sql');

var h23 = create('h2');
h23.innerHTML = `<i style='font-size:24px' class='fas'>&#xf0b1;</i> ACHIVEMENTS`;

var h41 = create('h4');
h41.innerHTML = `Achivements`;

var ul2 = create('ul');
var li2 = createli(ul2, 5);
li2[0].innerHTML = "I have got first prize in CHESS competition."
li2[1].innerHTML = "I have got first prize in Technical quiz."
li2[2].innerHTML = "I have got first prize in JAM."
li2[3].innerHTML = "I have got first prize in general."
li2[4].innerHTML = "I have got certificate from universityfor participating in C-ZONE(batminton) ."
var h24 = create('h2');
h24.innerHTML = `<i style='font-size:24px' class='fas'>&#xf19d;</i> Education`;

var ul5 = create('ul');
var li5 = createli(ul5, 3);
li5[0].innerHTML = `<strong>Bachelor of Technology</strong> in MECHANICAL Engineering in the year 2020 with 7.5(GPA) from PSCMR College of Engineering and Technology, Vijayawada.`
li5[1].innerHTML = `<strong>DIPLOMA</strong>in AUTOMOBILE in the year 2017 with 8.5(GPA) from GOVT-POLYTECHNIC College, Vijayawada.`;
li5[2].innerHTML = ` <strong>X</strong> SSC in the year 2014 with 9.5(GPA) from SRI SIR ARTHUR COTTON HIGH School, Vijayawada.`;

var h25 = create('h2');
h25.innerHTML = `<i style='font-size:24px' class='fas'>&#xf406;</i> Personal Strengths`;

var ul6 = create('ul');
var li6 = createli(ul6, 4);
li6[0].innerHTML = `Great team player, quick learner and self-motivated individual.`
li6[1].innerHTML = `Can communicate and interact effectively with customers.`;
li6[2].innerHTML = `Have good analytical and problem-solving skills.`;
li6[3].innerHTML = ` Love to make my surrounding environment healthy and productive by motivating members around me.`;



ban.append(profile, dname);
dname.appendChild(h);
cnt.append(pcntct);
details.append(h2, p, h22, ul, h23, h41, ul2, h24, ul5, h25, ul6);
li1[0].append(labelC, progressC);
li1[1].append(labelcshp, progressCshp);
li1[2].append(labeljs, progressJs);
li1[3].append(labelhtml, progressHtml);
li1[4].append(labelcss, progressCss);
li1[5].append(labelsql, progressSql);
bound.append(ban, cnt, hr, details);
document.body.append(bound);

function create(element, classname) {
    var t = document.createElement(element);
    if (classname)
        t.setAttribute('class', classname);

    return t;
}

function createimg(source) {
    var i = document.createElement('img');
    i.setAttribute('src', source);
    return i;
}
function createli(elem, num) {
    var arr = []
    for (let i = 0; i < num; i++) {
        arr.push(document.createElement('li'));
        elem.appendChild(arr[i]);
    }
    return arr;
}

function createLabel(forname, text) {
    var a = document.createElement('label');
    a.setAttribute('for', forname);
    a.innerHTML = text;
    return a;
}

function createProgress(val, idname) {
    var d = document.createElement('progress');
    d.id = idname;
    d.setAttribute('value', val);
    d.setAttribute('class', 'progressbar');
    d.setAttribute('max', 100);
    return d;
}