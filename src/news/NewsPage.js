import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import "./NewsPage.css";

const NewsPage = () => {
  moment.locale("ja");
  const [news, setNews] = useState([]);
  const pageSize = 5;
  let url = `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=735dccc6a61b4ea8ac03bdb82b9395ba`;

  //   const getNews = async () => {
  //     const res = await axios.get(url);
  //     console.log(`res : ${JSON.stringify(res.data.articles)}`);
  //     setNews(res.data.articles);
  //     return res;
  //   };

  //   let newsData;
  //   axios.get(url).then((res) => {
  //     console.log(`res : ${JSON.stringify(res.data.articles)}`);
  //     // setNews(res.data.articles);
  //     newsData = res.data.articles;
  //   });

  const newsData = [
    {
      source: {
        id: null,
        name: "F1-gate.com",
      },
      author: "F1-Gate.com",
      title:
        "レッドブル・ホンダF1、マックス・フェルスタッペンのナンバーワンメカニックが異動 - F1-Gate.com",
      description:
        "レッドブル・ホンダF1のマックス・フェルスタッペンは、2021年にナンバーワンメカニックのリー・スティーブンソンを失うことになった。チームは彼に異なる役割を与えた。リー・スティーブンソンは、マックス・フェルスタッペンのレースに最も共感する顔の1つだ。フェルスタッペンのナンバーワン・メカニックは、レッドブル・レーシングで何年も働いているが、2015年に初めてナンバーワンのメカニックとしての役割を与えられた。",
      url: "https://f1-gate.com/redbull/f1_60880.html",
      urlToImage:
        "https://f1-gate.com/media/img2021/20210301-f1-verstappen-redbull.jpg",
      publishedAt: "2021-03-01T13:17:32Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Nikkei.com",
      },
      author: "日本経済新聞社",
      title: "藤原頭取「みずほが全責任」 ATM障害、一問一答 - 日本経済新聞",
      description:
        "みずほ銀行の藤原弘治頭取は1日、2月28日に発生したシステム障害で一部のATMが正常に稼働しなかった問題で記者会見し「ご不便をおかけしたお客様、社会に深くおわびを申し上げる」と陳謝した。その上で「二度と起こさないという強い決意のもと、再発防止の徹底に全力を尽くす」と述べた。会見での主なやりとりは以下の通り。――システムトラブルの原因は。「28日に定期預金の取引に関連するデータ移行作業が45万",
      url: "https://www.nikkei.com/article/DGXZQODF0174X0R00C21A3000000/",
      urlToImage:
        "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO0349745001032021000000-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&q=45&fit=crop&bg=FFFFFF&w=1200&h=630&fp_x=0.54&fp_y=0.24&fp_z=1&crop=focalpoint&ixlib=js-1.4.1&s=cca5a2fc62c7d6456bd91f5b4c85f6e5",
      publishedAt: "2021-03-01T12:53:08Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Mynavi.jp",
      },
      author: "原修一郎",
      title:
        "NVIDIA、GeForce RTX 3000シリーズでResizable BARに対応 - 3月下旬から - マイナビニュース",
      description:
        "米NVIDIAは2月25日（現地時間）、Resizable BARに対応する製品をデスクトップ向けGeForce RTX 3000シリーズ全ラインナップに拡充していくと発表した。対応する環境で、VBIOSのアップデートを適用することで利用できる。提供開始は3月下旬から。",
      url: "https://news.mynavi.jp/article/20210301-1761729/",
      urlToImage:
        "https://news.mynavi.jp/article/20210301-1761729/ogp_images/ogp.jpg",
      publishedAt: "2021-03-01T12:20:52Z",
      content:
        "NVIDIA225Resizable BARGeForce RTX 30003\r\n<ul><li>\r\nResizable BAR\r\n</li></ul>Resizable BARCPUGPUVRAMPCGeForce RTX 3000PCGeForce RTX 30603VBIOSGeForce RTX 3000\r\nCPUAMD Zen 310/11Intel CoreAMD 400500Int… [+226 chars]",
    },
    {
      source: {
        id: null,
        name: "Itmedia.co.jp",
      },
      author: "樋口隆充，ITmedia",
      title:
        "Yahoo!ニュースとLINE NEWSは統合せず 川邊社長「混ぜるな危険」 - ITmedia",
      description:
        "3月1日付で経営統合したヤフーとLINEの親会社Zホールディングスの川邊健太郎社長は、2社のニュースサイト「Yahoo!ニュース」と「LINE NEWS」はサービスを統合せず、共存させる方針を明らかにした。",
      url: "https://www.itmedia.co.jp/news/articles/2103/01/news150.html",
      urlToImage:
        "https://image.itmedia.co.jp/news/articles/2103/01/l_th_yahooline_01.jpg",
      publishedAt: "2021-03-01T11:55:00Z",
      content:
        "31LINEZ2Yahoo!LINE NEWS\r\nLINE NEWSYahoo!LINE NEWS\r\nYahoo!\r\nZLINELINEZGCPOGroup Chief Product Officer\r\nCopyright © ITmedia, Inc. All Rights Reserved.",
    },
    {
      source: {
        id: null,
        name: "Footballchannel.jp",
      },
      author: null,
      title:
        "バルセロナに激震。元会長が逮捕、「バルサゲート事件」で - フットボールチャンネル",
      description:
        "海外サッカー、Jリーグ,日本代表…世界中のサッカー情報を網羅。独自の視点で注目試合を徹底分析。他では読めない重厚なサッカー記事を提供します。",
      url: "https://www.footballchannel.jp/2021/03/01/post412522/",
      urlToImage:
        "https://img-footballchannel.com/wordpress/assets/2020/10/2020-10-28_Bartomeu_getty.jpg",
      publishedAt: "2021-03-01T11:34:56Z",
      content:
        "20210301(Mon)2034\r\nphoto Getty Images\r\nTags: , , , , , , , , , , , , ,",
    },
    {
      source: {
        id: null,
        name: "Itmedia.co.jp",
      },
      author: "本田亜友子，ITmedia",
      title:
        "ポケモンGOで「ランドロス」など復刻 3月後半には“霊獣フォルム”が初登場 - ITmedia",
      description:
        "ポケモンGOで3月1日から「伝説レイドバトル」に、けしん（化身）フォルムの「ランドロス」が再登場しています。昨年の春以来1年ぶりの復刻で、色違いは初実装です。",
      url: "https://www.itmedia.co.jp/news/articles/2103/01/news148.html",
      urlToImage:
        "https://image.itmedia.co.jp/news/articles/2103/01/l_ts0153_irochi01.jpg",
      publishedAt: "2021-03-01T11:31:00Z",
      content:
        "Pokemon GOGO311\r\n3〜4\r\n611316PvP30\r\nGO202032316\r\nXP1XP12500XP311010\r\nGO\r\n3\r\n1868\r\n68118\r\n1181610\r\n16103010\r\n30102\r\nCopyright © ITmedia, Inc. All Rights Reserved.",
    },
    {
      source: {
        id: null,
        name: "Yomiuri.co.jp",
      },
      author: "読売新聞オンライン",
      title:
        "渡辺直美さん「ゼロからの挑戦ですが行ってきます！」米国挑戦へ…国内番組出演は今月限り - 読売新聞",
      description:
        "お笑いタレントの渡辺直美さん（３３）が１日、４月から米国に移住して本格的に海外で活動することを、自身のインスタグラムで発表した。日本のレギュラー番組の出演は、今月いっぱいで終えるという。 　渡辺さんは、２０１４年に米国",
      url: "https://www.yomiuri.co.jp/culture/20210301-OYT1T50196/",
      urlToImage:
        "https://www.yomiuri.co.jp/media/2021/03/20210301-OYT1I50077-T.jpg?type=ogp",
      publishedAt: "2021-03-01T11:31:00Z",
      content: "© The Yomiuri Shimbun.",
    },
    {
      source: {
        id: null,
        name: "Fashion-press.net",
      },
      author: null,
      title:
        "お台場「チームラボボーダレス」“桜色”輝くランプや菜の花＆牡丹が咲く映像作品など春限定展示 - Fashion Press",
      description:
        "お台場の森ビル デジタルアート ミュージアム：エプソン チームラボボーダレス(以下チームラボボーダレス)は、2021年3月1日(月)から4月にかけて春限定の作品を展示する。2021年春、チームラボボー...",
      url: "https://www.fashion-press.net/news/70421",
      urlToImage: "https://www.fashion-press.net/img/news/70421/top.jpg",
      publishedAt: "2021-03-01T10:15:00Z",
      content:
        "()202131()4\r\n - / Forest of Resonating Lamps - One Stroke, Cherry BlossomsteamLab, 2019, Interactive Installation, Murano Glass, LED, Endless, Sound: Hideaki Takahashi\r\n20217 5 360\r\n - / Forest of Re… [+376 chars]",
    },
    {
      source: {
        id: null,
        name: "Nhk.or.jp",
      },
      author: "日本放送協会",
      title:
        "宣言解除後初日 期待と不安の声｜NHK 関西のニュース - nhk.or.jp - nhk.or.jp",
      description:
        "関西の３府県に出されていた緊急事態宣言は、２月２８日をもって解除されました。\n解除後の初日となった３月１日、新型コロナウイルスの関西の新た…",
      url: "https://www3.nhk.or.jp/kansai-news/20210301/2000041940.html",
      urlToImage:
        "https://www3.nhk.or.jp/kansai-news/20210301/2000041940_20210301212748_m.jpg",
      publishedAt: "2021-03-01T09:52:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "最後も笑顔で！田口、LASTモノマネ！ - 読売ジャイアンツ",
      description: null,
      url:
        "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TzRuTUdFZTY0aFHSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2021-03-01T09:45:51Z",
      content: null,
    },
  ];
  console.log(`news : ${JSON.stringify(news)}`);

  const getNewsTitle = (text) => {
    return text.substr(0, text.indexOf("-"));
  };

  return (
    <div>
      <div className="container">
        <h1>News</h1>
        {newsData.map((news) => (
          <div className="card space-bottom">
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <div className="news-author">{news.author}</div>
                  <div className="news-title space-bottom">{getNewsTitle(news.title)}</div>
                  <a href={news.url} target="_blank">
                    続きを読む
                  </a>
                  <div className="news-author">
                    {moment(news.publishedAt, "YYYY/MM/DD HH:mm:S").fromNow()}
                  </div>
                </div>
                <div className="col-md-3">
                  <img className="news-image" src={news.urlToImage} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsPage;
