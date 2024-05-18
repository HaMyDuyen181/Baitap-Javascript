function removeSpace(str)
{
    str = str.replace(/<[^>]*>/g,"");
    //trim xoa kt trang 2 ban
    str = str.trim();
    //Tim kiem 2 khoang trang
    str = str.replace(/\s+/g," ");
    //chuyen chuoi ve in hoa
    str = str.toLowerCase();
    //chuyen ky tu dau ve in hoa
    const arr = str.split(" ");
    for(let i=0; i<arr.length; i++)
        {
            arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        }
        str = arr.join(" ");
    // const mang= str.split("  ");
    // const newarr= mang.map(pt=>pt.trim());
    // str = newarr.join(" ");
    return str;
}
let str="   My Name   Is   Duyen  "
console.log(str.length); //27

str = removeSpace(str);
console.log(str.length); //15