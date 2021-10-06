const $container = document.querySelector( 'div.container' );
const $divMim = document.querySelector( 'h2.mim' );
const $divSeg = document.querySelector( 'h2.seg' );
const $divButton = document.createElement( "button" );

let $mim: number = 25;
let $seg: number = 1;
let $loop: boolean = true;

$divButton.classList.add( "btn" );
$divButton.innerText = "Iniciar";
$container.appendChild( $divButton );

$divButton.addEventListener( 'click', Start );

function Start()
{
	if( $loop )
	{
		$divButton.removeEventListener( 'click', Start );

		$divButton.innerText = "Parar";

		let time = Cont();

		$divButton.addEventListener( 'click', () => Stop( time ) );
	}
	else
	{
		alert('O tempo acabou!!!!');

		const opt: string = prompt('Deseja reiniciar o relógio?');

		(opt)
		? Reset()
		: alert('para continuar de novo reincie a página!');
	}
};

function Cont()
{
	let time = setInterval( () =>
	{
		if( $seg === 1 )
		{
			$seg = 59;
			$mim--;

			$divMim.innerHTML = $mim.toString();
			$divSeg.innerHTML = $seg.toString();
		}
		else if( $mim > 0 )
		{
			if( $seg <= 10 )
			{
				$seg--;
				$divSeg.innerHTML = `0${$seg.toString()}`;
			}
			else
			{
				$seg--;
				$divSeg.innerHTML = $seg.toString();
			}
		}
		else
		{
			clearInterval( time );
			$loop = false;
			$seg = 0;
			$divSeg.innerHTML = `0${$seg.toString()}`;
			alert('O tempo acabou');
		}
	}, 1000);

	return time;
};

function Stop( id: any )
{
	clearInterval( id );

	$divButton.removeEventListener( 'click', Stop );

	$divButton.innerText = "Iniciar";

	$divButton.addEventListener( 'click', Start );
};

function Reset()
{
	$mim = 25;
	$seg = 1;
	$loop = true;

	$divButton.innerText = "Iniciar";
	$divButton.addEventListener( 'click', Start );
};
