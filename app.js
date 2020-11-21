const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers:[
            'スーパーファミコン',
            'プレイステーション',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correcrt: 'ニンテンドーDS',
    },{
        question: '任天堂の看板げーむは？',
        answers:[
            'MOTHER2',
            'スマブラ３',
            'ドンキーコング',
            'カーヴィ'
        ],
        correcrt: 'MOTHER2',

    },{
        question: 'FFの主人公の名前は？',
        answers:[
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correcrt: 'セシル',
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let bottonIndex = 0;
    let bottonLength = $button.length;
    while(bottonIndex < bottonLength){
        $button[bottonIndex].textContent = quiz[quizIndex].answers[bottonIndex];
        bottonIndex++;
    };
}
//関数呼び出し
setupQuiz();

//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
        if(quiz[quizIndex].correcrt === e.target.textContent){
            window.alert('正解！')
            score++;
        } else { 
            window.alert('不正解！')
        }

        quizIndex++;

        if(quizIndex < quizLength){
            setupQuiz()
        }else{
            window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です')
        }
};

let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });    
    handleIndex++;
}


