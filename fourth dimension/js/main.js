$(function () {

  var $container = $('.image-sequence'),
      $images = $container.find('img'),

      //이미지의 총개수, 현재 보고있는 이미지 번호
      $frameLength = $images.length,
      $currentFrame = 0,

      $counter=0,//진행상황의 카운트
      $velocity = 0, //애니메이션의 가속도

      $timer = null; // setInvterval 대상의 이름



  /*
  마우스 휠의 방향에 따라 애니메이션 효과
  지금 이미지는 안보이고 다음이미지가 보이도록 해야한다.
  마우스휠이 멈추면 서서히 속도를 낮춰서 애니메이션을 종료해야한다.
  */

  $container.on('mousewheel',function(event) {
    console.log(event.deltaY);
    //event.deltaY -1은 아래, 1은 위로 올림
    if(event.deltaY < 0){
      //$velocity = $velocity + 1.5;
      $velocity +=1.0;
    }else{
      //$velocity = $velocity - 1.5;
      $velocity -=1.0;
    }

    startAnimation();

  });

  function startAnimation(){
      //실행중인 애니메이션이 없으면 실행
      if(!$timer){//setInvertal이 작동하고 있지 않으면
        $timer = setInterval(animateSequence, 1000/30);
      }
  }//startAnimation
  function stopAnimation(){
    clearInterval($timer);
    $timer = null;

  }

  function animateSequence(){
       var nextFrame ;
       //속도를 조금씩 줄어들도록
       $velocity = $velocity * 0.6;

       if(-0.00001 < $velocity && $velocity < 0.00001){
         stopAnimation();
       }else{
         //카운터의 숫자를 이미지 수의 범위내로 제한
         $counter = ($counter+$velocity) % $frameLength;

       }
       nextFrame = Math.floor($counter);
       console.log(nextFrame);
       $images.eq($currentFrame).hide();
       $images.eq(nextFrame).show();
       $currentFrame = nextFrame;

  }//animateSequence

  $(window).resize(function(){
    var wind = $(this),
        windowWidth = wind.width(),
        windowHeight = wind.height(),
        imageRatio = 864/486,  //배경이미지의 가로세로 비율
        browserRatio = windowWidth/windowHeight;


    if(imageRatio > browserRatio) {
      $container.css({
        height: '100%',
        width: '100%',
        top:0,
        left : 0
      });
    } else {
      $container.css({
        width: '100%',
        height: '100%',
        left:0,
        top : 0
      });

    }

  });

  $(window).trigger('resize');

});
$(function () {

  var $container = $('.image-sequence-2'),
      $images = $container.find('img'),

      //이미지의 총개수, 현재 보고있는 이미지 번호
      $frameLength = $images.length,
      $currentFrame = 0,

      $counter=0,//진행상황의 카운트
      $velocity = 0, //애니메이션의 가속도

      $timer = null; // setInvterval 대상의 이름



  /*
  마우스 휠의 방향에 따라 애니메이션 효과
  지금 이미지는 안보이고 다음이미지가 보이도록 해야한다.
  마우스휠이 멈추면 서서히 속도를 낮춰서 애니메이션을 종료해야한다.
  */

  $container.on('mousewheel',function(event) {
    console.log(event.deltaY);
    //event.deltaY -1은 아래, 1은 위로 올림
    if(event.deltaY < 0){
      //$velocity = $velocity + 1.5;
      $velocity +=1.5;
    }else{
      //$velocity = $velocity - 1.5;
      $velocity -=1.5;
    }

    startAnimation();

  });

  function startAnimation(){
      //실행중인 애니메이션이 없으면 실행
      if(!$timer){//setInvertal이 작동하고 있지 않으면
        $timer = setInterval(animateSequence, 1000/30);
      }
  }//startAnimation
  function stopAnimation(){
    clearInterval($timer);
    $timer = null;

  }

  function animateSequence(){
       var nextFrame ;
       //속도를 조금씩 줄어들도록
       $velocity = $velocity * 0.7;

       if(-0.00001 < $velocity && $velocity < 0.00001){
         stopAnimation();
       }else{
         //카운터의 숫자를 이미지 수의 범위내로 제한
         $counter = ($counter+$velocity) % $frameLength;

       }
       nextFrame = Math.floor($counter);
       console.log(nextFrame);
       $images.eq($currentFrame).hide();
       $images.eq(nextFrame).show();
       $currentFrame = nextFrame;

  }//animateSequence

  $(window).resize(function(){
    var wind = $(this),
        windowWidth = wind.width(),
        windowHeight = wind.height(),
        imageRatio = 864/486,  //배경이미지의 가로세로 비율
        browserRatio = windowWidth/windowHeight;


    if(imageRatio > browserRatio) {
      $container.css({
        height: '100%',
        width: '100%',
        top:0,
        left :0
      });
    } else {
      $container.css({
        width: '100%',
        height: '100%',
        left:0,
        top :0
      });

    }

  });
  $(window).trigger('resize');

});


function play1(){
  var audio = document.getElementById("audio");
  if(document.querySelector('.musicbutton').value==='music'){
    audio.play();
    document.querySelector('.musicbutton').value = 'pause';
  }else{
    audio.pause();
    document.querySelector('.musicbutton').value = 'music'
  }

}
function modal1(){
      document.querySelector('#modal-bg1').style.display='block';
    };
    function modal2(){
      document.querySelector('#modal-bg2').style.display='block';
    };
    function modal3(){
      document.querySelector('#modal-bg3').style.display='block';
    };
    function modal4(){
      document.querySelector('#modal-bg4').style.display='block';
    };
    function modal5(){
      document.querySelector('#modal-bg5').style.display='block';
    };
    function modal6(){
      document.querySelector('#modal-bg6').style.display='block';
    };
    function modal7(){
      document.querySelector('#modal-bg7').style.display='block';
    };
    function modal8(){
      document.querySelector('#modal-bg8').style.display='block';
    };
    function modal9(){
      document.querySelector('#modal-bg9').style.display='block';
    };
    function modal10(){
      document.querySelector('#modal-bg10').style.display='block';
    };
    function modal11(){
      document.querySelector('#modal-bg11').style.display='block';
    };
    function modalClose1(){
      document.querySelector('#modal-bg1').style.display='none';
    };
    function modalClose2(){
      document.querySelector('#modal-bg2').style.display='none';
    };
    function modalClose3(){
      document.querySelector('#modal-bg3').style.display='none';
    };
    function modalClose4(){
      document.querySelector('#modal-bg4').style.display='none';
    };
    function modalClose5(){
      document.querySelector('#modal-bg5').style.display='none';
    };
    function modalClose6(){
      document.querySelector('#modal-bg6').style.display='none';
    };
    function modalClose7(){
      document.querySelector('#modal-bg7').style.display='none';
    };
    function modalClose8(){
      document.querySelector('#modal-bg8').style.display='none';
    };
    function modalClose9(){
      document.querySelector('#modal-bg9').style.display='none';
    };
    function modalClose10(){
      document.querySelector('#modal-bg10').style.display='none';
    };
    function modalClose11(){
      document.querySelector('#modal-bg11').style.display='none';
    };
