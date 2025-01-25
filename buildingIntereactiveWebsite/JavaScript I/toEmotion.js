// apply object lookup
const toEmoticon = str => {
  const emoticons = {
    'shrug': '|_{"}_|',
    'smiley face': ':)',
    'frowny face': ':(',
    'winky face': ';)',
    'heart': '<3'
  };
  return emoticons[str] || '|_(* ~ *)_|';
}