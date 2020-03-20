const isHasMajorVowelHarmony = (word) => {

  const splitWord= word.split('');
  const backVowel = ["a","ı","o","u"];
  const frontVowel = ['e', 'i', 'ö', 'ü'];

  let backVowelNumber = 0;
  let frontVowelNumber = 0;

  splitWord.forEach((item,key)=>{
    if (backVowel.indexOf(item)>-1){
      backVowelNumber ++;
    }
    else if (frontVowel.indexOf(item)>-1){
      frontVowelNumber ++;
    }
  });
  return backVowelNumber === 0 ||  frontVowelNumber === 0;

}

export default isHasMajorVowelHarmony ;


