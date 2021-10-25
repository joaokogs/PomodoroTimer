var sinit = 25;

var sm = sinit;

var ss = 0;

var smin = document.getElementById('smin');

var ssec = document.getElementById('ssec');

var sintervalo

var atividade = document.querySelector('.sessao');

var pausa = document.querySelector('.intervalo');

smin.innerHTML = (sm>9) ? ('' + sm) : ('0' + sm);

ssec.innerHTML = (ss>9) ? ('' + ss) : ('0' + ss);

var iinit = 10;

var im = iinit;

var is = 0;

var imin = document.getElementById('imin');

var isec = document.getElementById('isec');

var iinterlavo;

imin.innerHTML = (im>9) ? ('' + im) : ('0' + im);

isec.innerHTML = (is>9) ? ('' + is) : ('0' + is);

document.querySelector('.btnPausar').style.display = 'none';
document.querySelector('.btnPausar2').style.display = 'none';

function iniciarPomodoro(){
    sintervalo = setInterval(pomodoro,1000)
    document.querySelector('.btnIniciar').style.display = 'none';
    document.querySelector('.btnPausar').style.display = '';
}


function pomodoro(){
    if(ss > 0){
        ss-=1;
    }else if(ss==0&&sm>0){
        ss=59;
        sm-=1;
    }else if(ss==0&&sm==0){
        pausa.style.display = 'flex';
        atividade.style.display = 'none';
    }
    smin.innerHTML = (sm>9) ? ('' + sm) : ('0' + sm);
    ssec.innerHTML = (ss>9) ? ('' + ss) : ('0' + ss);
}

function pausar(){
    clearInterval(sintervalo);
    document.querySelector('.btnIniciar').style.display = '';
    document.querySelector('.btnPausar').style.display = 'none';
}

function resetar(){
    clearInterval(sintervalo);
    pausa.style.display = 'none';
    atividade.style.display = 'flex';
    document.querySelector('.btnIniciar').style.display = '';
    document.querySelector('.btnPausar').style.display = 'none';

    sm = sinit;
    ss = 0;

    smin.innerHTML = (sm>9) ? ('' + sm) : ('0' + sm);
    ssec.innerHTML = (ss>9) ? ('' + ss) : ('0' + ss);
}
function iniciarIntervalo() {
    iinterlavo = setInterval(horaIntervalo,1000)
    document.querySelector('.btnIniciar2').style.display = 'none';
    document.querySelector('.btnPausar2').style.display = '';
}

function horaIntervalo(){
    if(is > 0){
        is-=1;
    }else if(is==0&&im>0){
        is=59;
        im-=1;
    }else if(is==0&&im==0){
        pausa.style.display = 'none';
        atividade.style.display = 'flex';
    }
    imin.innerHTML = (im>9) ? ('' + im) : ('0' + im);
    isec.innerHTML = (is>9) ? ('' + is) : ('0' + is);
}

function pauseInnterval(){
    clearInterval(iinterlavo);
    document.querySelector('.btnIniciar2').style.display = '';
    document.querySelector('.btnPausar2').style.display = 'none';
}

