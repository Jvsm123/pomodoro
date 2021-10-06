var $container = document.querySelector('div.container');
var $divMim = document.querySelector('h2.mim');
var $divSeg = document.querySelector('h2.seg');
var $divButton = document.createElement("button");
var $mim = 25;
var $seg = 1;
var $loop = true;
$divButton.classList.add("btn");
$divButton.innerText = "Iniciar";
$container.appendChild($divButton);
$divButton.addEventListener('click', Start);
function Start() {
    if ($loop) {
        $divButton.removeEventListener('click', Start);
        $divButton.innerText = "Parar";
        var time_1 = Cont();
        $divButton.addEventListener('click', function () { return Stop(time_1); });
    }
    else {
        alert('O tempo acabou!!!!');
        var opt = prompt('Deseja reiniciar o relógio?');
        (opt)
            ? Reset()
            : alert('para continuar de novo reincie a página!');
    }
}
;
function Cont() {
    var time = setInterval(function () {
        if ($seg === 1) {
            $seg = 59;
            $mim--;
            $divMim.innerHTML = $mim.toString();
            $divSeg.innerHTML = $seg.toString();
        }
        else if ($mim > 0) {
            if ($seg <= 10) {
                $seg--;
                $divSeg.innerHTML = "0" + $seg.toString();
            }
            else {
                $seg--;
                $divSeg.innerHTML = $seg.toString();
            }
        }
        else {
            clearInterval(time);
            $loop = false;
            $seg = 0;
            $divSeg.innerHTML = "0" + $seg.toString();
            alert('O tempo acabou');
        }
    }, 1000);
    return time;
}
;
function Stop(id) {
    clearInterval(id);
    $divButton.removeEventListener('click', Stop);
    $divButton.innerText = "Iniciar";
    $divButton.addEventListener('click', Start);
}
;
function Reset() {
    $mim = 25;
    $seg = 1;
    $loop = true;
    $divButton.innerText = "Iniciar";
    $divButton.addEventListener('click', Start);
}
;
