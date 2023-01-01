console.log("welcome to spotify");
//INTIALIZING
let playb = document.getElementById('masterplay');
let audioElement = new Audio('shadow1.mp3');
let progbar = document.getElementById('pb');
let poemTime = Array.from(document.getElementsByClassName('secplay'));
let back=document.getElementById('back');
let front=document.getElementById('front');
let poems=Array.from(document.getElementsByClassName('p'));
let plyli=Array.from(document.getElementsByClassName('l'));
let lyrics=document.getElementById('lyrics');
let gif=Array.from(document.getElementsByClassName('giphy-embed'));
console.log(plyli);



var progress = 0;
let i = 0;
var k = 0;


const ppath = ["shadow1.mp3", "remaindedme2.mp3", "unexplained3.mp3", "how do u4.mp3", "agirl5.mp3"]
//EVENT LISTING
// button play pause
playb.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        poemTime[k].classList.remove('fa-play-circle');
        poemTime[k].classList.add('fa-pause-circle');
        showly();
        audioElement.play();
        playb.classList.remove('fa-play');
        playb.classList.add('fa-pause');
    }
    else {
        audioElement.pause();
        playb.classList.remove('fa-pause');
        playb.classList.add('fa-play');

    }
})
//timeupadate
audioElement.addEventListener('timeupdate', () => {
    //ye audio element main kyon timeupdate lagaya--kyonki time ka updation song ka hoti jarahhaena
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progbar.value = progress;
})
//changetime event
progbar.addEventListener('change', () => {
    //swamiiii progbar value will be in percentage
    audioElement.currentTime = progbar.value * audioElement.duration / 100;
})
//making all buttons pause
function putAllPause() {
    poemTime.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
//click on the songs
poemTime.forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log(e);
        //ismain target dekho tab samajayega
        k = element.id;
        putAllPause();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioElement.src = ppath[k];
        showly();
        audioElement.play();
        audioElement.currentTime = 0;
        playb.classList.remove('fa-play');
        playb.classList.add('fa-pause'); 
        console.log(audioElement);    
    })
})
//previous botton
back.addEventListener('click',()=>{
    putAllPause();
    if(k>0){
        audioElement.src = ppath[k-1];
        k=k-1;   
    }
    else{
        audioElement.src = ppath[0];
    }
    poemTime[k].classList.remove('fa-play-circle');
    poemTime[k].classList.add('fa-pause-circle');
    showly();
    audioElement.play();
    audioElement.currentTime = 0;
    console.log(audioElement); 
    playb.classList.remove('fa-play');
    playb.classList.add('fa-pause'); 
})
//next botton
front.addEventListener('click',()=>{
    putAllPause();
    if(k<4){
        audioElement.src = ppath[k+1];
        k=k+1;       
    }
    else{
        audioElement.src = ppath[4];
    }
    poemTime[k].classList.remove('fa-play-circle');
    poemTime[k].classList.add('fa-pause-circle');
    audioElement.play();
    showly();
    audioElement.currentTime = 0;
    console.log(audioElement);
    playb.classList.remove('fa-play');
    playb.classList.add('fa-pause');
})
//additional charm

function showly(){
    gif.forEach((element)=>{
        element.style.display='none';
    })
    gif[k].style.display='block';
    if(k==0){
        lyrics.innerHTML=` <h1> WANT TO BE YOUR SHADOW<br></h1>
           <p>
            Just want to be your shadow<br>
            Following you all the way<br>
            Without bothering you<br>
            Saving you without saying you<br>
            Seeing you smile without making you know<br>
            And<br>
            Being with you just like a shadow<br>
            Without bothering you<br>
            Being with you in bright sunlight <br>
            Being with you in moon lit night<br>
            Being with you just like your shadow<br>
            Without bothering you.<br>
            Just want to be your shadow<br>
            Who won't leave you <br>
            Till the last breathe <br>
            Despite you will not be with me I know <br>
            But will always be with you<br>
            Just like a shadow <br>
            Without bothering you</p>`
    }
    else if(k==4){
        lyrics.innerHTML=` <h1>A GIRL<br></h1>
        <p>A girl...<br> 
            Whose feet are always accompanied<br>
            By her father whenever she goes out... <br>
            Bt..it's time for her<br>
             to make her way out..<br> <br>
            
            A girl... <br>
            Who never has a need to think<br>
            How to behave whenever she goes out...<br> 
            Bt.. It's time for her<br>
            to think of her limit... <br><br>
            
            A girl... <br>
            Who had never thought of<br>
            What's going on out... <br>
            Bt.. It's time for her<br>
            To put her mind and heart...<br><br> 
            
            A girl... <br>
            Who always sees the world<br>
            With her parents... <br>
            Bt.. It's time for her<br>
            To use her eyes.... <br>
            
            A girl.. <br>
            Who has always been<br>
            Behind the shoulders of someone...<br>
            Bt.. It's time, for her<br>
            To take care on her own.... <br><br>
            
            She should be accustomed <br>
            To take her responsibilities.... <br>
            Bt.. The role of her parents<br>
            Is what she's missing in all moments.... <br><br>
            
            After all... <br>
            She has to grow happily....<br>
            With all the thoughts of her parents.. <br>
            In her very heart...</p>`    }
        else if(k==3){
            lyrics.innerHTML=`<h1>HOW DO YOU…<br></h1>
            <p>How do you know?<br>
            That I am sad<br>
            Despite the fact that I never expressed<br>
            Neither to you nor to dad<br>
            How do you see the tears?<br>
            That I never showed on my eyes<br>
            And came to wipe them up<br>
            When no one made a noise<br>
            How do you make food sweet?<br>
            Despite of adding salt<br>
            How do understand me <br>
            Without even saying a word<br>
            How do you hide?<br>
            The scars that you were given by life<br>
            How do you not let me go?<br>
            And fight for your side <br>
            How do you brook the pains?<br>
            And always give a smile?<br>
            How mom, how you do this?<br>
            To just see me smile.</p>`
        }
        else if(k==2){
            lyrics.innerHTML=`<h1>THIS UNEXPLAINED LOVE<br></h1>

            <p>The sun, the moon, the stars<br>
            Know that there’s another moon apart<br>
            My moon on the earth<br>
            How to say her that “I love you so hard”.<br>
            Is this love or what?<br>
            It feels very new or something like that….<br>
            Her presence lights up the path<br>
            Thus, she is my moon …. Yes, my moon on the earth<br>
            Her presence destroys my fear<br>
            Her absence grows my fear<br>
            Her presence makes the earth bloom<br>
            Her absence makes it gloom<br>
            She is the one for whom I care<br>
            Yes, I am not that dare<br>
            To say how much, I love her<br>
            Yes, I admit that I fear<br>
            To explain her this unexplained love.<br></p>`
        }
        else {
            lyrics.innerHTML=`<h1>REMINDED ME<br></h1>

            <p>These days remainded me<br>
            the task of home...<br>
            Which can be made by<br>
            mother alone...<br><br>
            
            These days remainded me<br>
            the face behind the phone...<br>
            To whom I am next<br>
            to none...<br><br>
            
            These days remainded me<br>
            the care,my hair get...<br>
            Bcz of which some call<br>
            me the tangled...<br><br>
            
            These days remainded me<br>
            the place I lived...<br>
            Where I can find<br>
            The beauty of nature around...<br><br>
            
            These days reminded me<br>
            that i am not a kid anymore...<br>
            But yess have that<br>
            Nature somewhere...<br><br>
            
            Two days...<br>
            Too many memories...<br>
            Although tough..<br>
            Have to move on...<br></p>`

        }
}
