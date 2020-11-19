module.exports = {
  /** Site MetaData (Required all)*/
  title: `Annakky`,                           // (* Required)
  description: `Study Blog`,          // (* Required)
  author: `Nak Kyun An`,                         // (* Required)
  language: 'ko-KR',                        // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://annakky.github.io',                      // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'ray.jpg', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: ' - 혼자 공부한 내용을 정리하기 위해 만든 블로그입니다. 잘못된 정보가 있으면 댓글 남겨주시면 감사하겠습니다. - ',
  name: 'Nak Kyun An',
  company: '',
  location: 'Korea',
  email: 'rbszzang05@gmail.com',
  website: 'https://annakky.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                                          // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                                          // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/annakky',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'annakky-github-io',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'G-PSMNRMKJVV',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'google-site-verification=hUIAQ7Z6ri1pO5oZ-psLeZgkm-xWvxq1p6biFdMjF58', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'ca-pub-7584149818228209', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
