import { kanjiAlgorithms } from "./data";

// #region Excerpts
export const jlpt5Excerpt =
  "わたしの町には小さいパン屋があります。毎朝、店の前を通ると、パンのいいにおいがします。学校の帰りに、母に頼まれてパンを買います。店員さんはいつも笑顔で、「また来てください」と言います。わたしはチョコレートパンが一番好きです。";

export const jlpt4Excerpt =
  "今月から、駅の前に自転車を置く場所が変わりました。前は駅の入り口の近くに置いてよかったのですが、道が狭くなり、歩く人が困っていたからです。新しい場所は駅から少し遠いので、最初は不便だと思いました。しかし、広くて明るく、自転車を置く人も多くありません。駅まで歩く時間は五分ぐらいかかりますが、健康のためにも、これからは歩くことにしました。雨の日はバスを利用するつもりです。";

export const jlpt3Excerpt = `大学の授業で、学生たちは地域の商店街について調べることになった。商店街には昔から続いている店が多いが、最近は大型店やインターネットで買い物をする人が増え、客の数が減っているという。学生たちは、店の主人に話を聞いたり、商店街を利用する人にアンケートをしたりした。

調査の結果、商店街を利用しない理由として、「店が早く閉まる」「何を売っているか分からない」という意見が多かった。一方で、商店街を利用する人からは、「店の人と話ができる」「新鮮な商品を買える」というよい点も挙げられた。

そこで学生たちは、各店の商品や営業時間を紹介する案内板を作り、商店街の入り口に置くことを提案した。店の主人たちは最初、効果があるかどうか分からないと考えていたが、若い人にも店を知ってもらえるかもしれないとして、協力することにした。`;

export const jlpt2Excerpt = `最近、市の担当者は公共交通の設備を管理する方法について調査している。専門の団体が歴史や税金、輸入の規則まで記録し、機械で印刷した材料や貨物の平均額も測った。

講演では、複数の営業所が採用した訓練の効果が紹介された。複雑に接続された領域でも、協力して防止の準備をすれば、被害を減少できるという。一般の層からは、販売の傾向や雇用の状況、年齢による治療の負担が延ばされているという声も出た。

市は法律により、装置の交換を含む計画を総額で見直し、境界を超える輸送は停止する方針だ。雑誌の著者は、この査定が将来の建設や豊かな設備につながるかどうか、本文で述べている。

一方、市民の中には、新しい計画は時間がかかると心配する人もいる。しかし、市の説明を聞いた人たちは、長い目で見れば生活がよくなると考えているようだ。`;

export const jlpt1Excerpt = `人はしばしば、選択肢が多いほど自由であり、満足もしやすいと考える。確かに、商品やサービスの種類が豊富であれば、自分の目的や好みに合うものを見つけやすい。しかし、選択肢が増えることが、常に望ましい結果をもたらすとは限らない。

例えば、同じ種類の商品が数種類しかなければ、消費者は比較的短い時間で決定できる。ところが、数十種類の商品が並んでいると、それぞれの価格や性能を比較するだけで大きな負担になる。ようやく一つを選んだとしても、「別の商品を選んだほうがよかったのではないか」という疑いが残り、購入後の満足度が下がることさえある。

この現象は、買い物に限らない。進学先や就職先を選ぶ場合にも、可能性が多すぎると、かえって決断を先延ばしにしてしまうことがある。選択しなかった道のほうがよかったかもしれないと考え続けるため、実際に選んだ道へ十分に集中できなくなるのである。

だからといって、選択肢を意図的に減らせばよいというわけではない。問題は、選択肢の数そのものよりも、選ぶ際の基準が明確であるかどうかにある。自分にとって何が重要なのかをあらかじめ整理しておけば、多くの候補の中から不要なものを除外できる。また、すべての条件を満たすものを探すのではなく、一定の基準を満たした時点で決定するという方法も有効だろう。

自由とは、無限にある可能性を一つ残らず検討できることではない。自分なりの基準によって可能性を整理し、納得できる選択をする力もまた、自由の一部なのである。`;

export const fantasyExcerpt = `王都の夜、地下室に呪と焰の匂いが満ちた。ルナの手の石の横で、黒い外套の少年が鎧と槍を立てた。腰の鍵は吊られ、喉の奥で誰かが囁く。

「俺は味方だ。崖の下の闇では、骸と妖が溺れている」

隙から狼の牙が伸び、棘の爪が籠を蹴った。枕のように落ちた蜂の死骸を見て、ルナは膝をついた。

少年が謎の刃を斬ると、凄まじい唾が飛び、冥の底から龍が昇る。

「身をかくせ。芯まで、あの獅は人を追う」

ルナは石を高くした。麓から這う闇が、部屋を包んだ。`;

// #endregion

// #region Gold Label Resultss
export const goldDefaultResult = [
  {
    character: "A",
    textClass: "text-white",
  },
  {
    character: "あ",
    textClass: "text-white",
  },
  {
    character: "ア",
    textClass: "text-white",
  },
  {
    character: "们",
    textClass: "text-white",
  },
  {
    character: " ",
    textClass: "text-white",
  },
  {
    character: "木",
    textClass: kanjiAlgorithms.Default.legend[0].textClass,
  },
  {
    character: "動",
    textClass: kanjiAlgorithms.Default.legend[1].textClass,
  },
  {
    character: "険",
    textClass: kanjiAlgorithms.Default.legend[3].textClass,
  },
  {
    character: "湿",
    textClass: kanjiAlgorithms.Default.legend[7].textClass,
  },
  {
    character: "輝",
    textClass: kanjiAlgorithms.Default.legend[7].textClass,
  },
  {
    character: "蜜",
    textClass: kanjiAlgorithms.Default.legend[5].textClass,
  },
];

export const goldJoyoResult = [
  {
    character: "A",
    textClass: "text-white",
  },
  {
    character: "あ",
    textClass: "text-white",
  },
  {
    character: "ア",
    textClass: "text-white",
  },
  {
    character: "们",
    textClass: "text-white",
  },
  {
    character: " ",
    textClass: "text-white",
  },
  {
    character: "木",
    textClass: kanjiAlgorithms.Joyo.legend[0].textClass,
  },
  {
    character: "動",
    textClass: kanjiAlgorithms.Joyo.legend[2].textClass,
  },
  {
    character: "険",
    textClass: kanjiAlgorithms.Joyo.legend[4].textClass,
  },
  {
    character: "湿",
    textClass: kanjiAlgorithms.Joyo.legend[6].textClass,
  },
  {
    character: "輝",
    textClass: kanjiAlgorithms.Joyo.legend[6].textClass,
  },
  {
    character: "蜜",
    textClass: kanjiAlgorithms.Joyo.legend[6].textClass,
  },
];

export const goldJLPTResult = [
  {
    character: "A",
    textClass: "text-white",
  },
  {
    character: "あ",
    textClass: "text-white",
  },
  {
    character: "ア",
    textClass: "text-white",
  },
  {
    character: "们",
    textClass: "text-white",
  },
  {
    character: " ",
    textClass: "text-white",
  },
  {
    character: "木",
    textClass: kanjiAlgorithms.JLPT.legend[0].textClass,
  },
  {
    character: "動",
    textClass: kanjiAlgorithms.JLPT.legend[1].textClass,
  },
  {
    character: "険",
    textClass: kanjiAlgorithms.JLPT.legend[2].textClass,
  },
  {
    character: "湿",
    textClass: kanjiAlgorithms.JLPT.legend[3].textClass,
  },
  {
    character: "輝",
    textClass: kanjiAlgorithms.JLPT.legend[4].textClass,
  },
  {
    character: "蜜",
    textClass: kanjiAlgorithms.JLPT.legend[5].textClass,
  },
];

export const goldWaniKaniResult = [
  {
    character: "A",
    textClass: "text-white",
  },
  {
    character: "あ",
    textClass: "text-white",
  },
  {
    character: "ア",
    textClass: "text-white",
  },
  {
    character: "们",
    textClass: "text-white",
  },
  {
    character: " ",
    textClass: "text-white",
  },
  {
    character: "木",
    textClass: kanjiAlgorithms.WaniKani.legend[0].textClass,
  },
  {
    character: "動",
    textClass: kanjiAlgorithms.WaniKani.legend[1].textClass,
  },
  {
    character: "険",
    textClass: kanjiAlgorithms.WaniKani.legend[1].textClass,
  },
  {
    character: "湿",
    textClass: kanjiAlgorithms.WaniKani.legend[4].textClass,
  },
  {
    character: "輝",
    textClass: kanjiAlgorithms.WaniKani.legend[4].textClass,
  },
  {
    character: "蜜",
    textClass: kanjiAlgorithms.WaniKani.legend[4].textClass,
  },
];

// #endregion
